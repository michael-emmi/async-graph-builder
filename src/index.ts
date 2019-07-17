import * as readline from 'readline';
import stream from 'stream';
import Debug from 'debug';

const debug = Debug(`async-graph-builder`);

type ThreadId = number;
type TaskId = number;
type Mode = 'ENTER' | 'LEAVE';

interface Event {
    thread: ThreadId;
    mode: Mode;
    name: string;
}

interface MoveEvent extends Event {
    task: TaskId;
}

interface Edge {
    source: TaskId;
    target: TaskId;
}

async function main() {
    const lines = getLines(process.stdin);
    const events = getEvents(lines);
    for await (const edge of getEdges(events)) {
        console.log(edge);
    }
}

async function * getEdges(events: AsyncIterable<Event>): AsyncIterable<Edge> {
    const stacks = new Map<ThreadId,Event[]>();

    for await (const event of events) {
        const { thread, mode } = event;

        if (!stacks.has(thread))
            stacks.set(thread, []);
        const stack = stacks.get(thread)!;

        if (mode === 'ENTER') {
            const move = getMove(event);
            if (move !== undefined) {
                const parent = stack.find(e => getMove(e) !== undefined);
                if (parent !== undefined) {
                    const { task: source } = getMove(parent)!;
                    const { task: target } = move;
                    yield { source, target };
                }
            }
            stack.unshift(event);

        } else {
            const enter = stack.shift();
            if (enter === undefined || enter.thread !== thread) {
                throw Error(`unmatched event ${enter} for ${event}`);
            }
        }

        debug(`event: %o`, event);
        // debug(`stacks: %o`, stacks);
    }
}

function getMove(event: Event): MoveEvent | undefined {
    const expr = /\w+\/<\w+>d__\d+:MoveNext \(\)\(this:(0x\w+)\[.<\w+>d__\d+ \w+.exe\], \)/;
    const match = event.name.match(expr);
    if (match === null)
        return undefined;
    const [ _, task ] = match;
    const move = { ...event, task: +task };
    return move;
}

async function * getEvents(lines: AsyncIterable<string>): AsyncIterable<Event> {
    for await (const line of lines) {
        const event = getEvent(line);
        if (event !== undefined)
            yield event;
    }
}

function getEvent(line: string): Event | undefined {
    const expr = /^\[(0x\w+): [\d.]+ \d+\] (ENTER|LEAVE): (.*)$/;
    const match = line.match(expr);

    if (match === null)
        return undefined;

    const [ _, id, mode, name ] = match;

    if (!isMode(mode))
        return undefined;

    const event = { thread: +id, mode, name };
    return event;
}

function isMode(mode: string): mode is Mode {
    return mode === 'ENTER' || mode === 'LEAVE';
}

function getLines(input: stream.Readable): AsyncIterable<string> {
    const output = new stream.PassThrough({ objectMode: true });
    const rl = readline.createInterface({ input });
    rl.on("line", line => { output.write(line); });
    rl.on("close", () => { output.push(null); });
    return output;
}

try {
    main();

} catch (e) {
    console.error(e);
}
