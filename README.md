# Async Graph Builder

```
$ csc resources/examples/Test.cs /langversion:7.1 && mono --trace=program Test.exe | node dist/index.js
Microsoft (R) Visual C# Compiler version 2.8.2.62916 (2ad4aabc)
Copyright (C) Microsoft Corporation. All rights reserved.

  async-graph-builder event: { thread: 4371203520, mode: 'ENTER', name: 'Test:<Main> ()()' } +0ms
  async-graph-builder event: { thread: 4371203520, mode: 'ENTER', name: 'Test:Main ()()' } +3ms
  async-graph-builder event: { thread: 4371203520, mode: 'ENTER', name: 'Test/<Main>d__0:MoveNext ()(this:0x102002da0[.<Main>d__0 Test.exe], )' } +0ms
  async-graph-builder event: { thread: 4371203520, mode: 'ENTER', name: 'Test:hello ()()' } +0ms
{ source: 4328533408, target: 4328552336 }
  async-graph-builder event: { thread: 4371203520, mode: 'ENTER', name: 'Test/<hello>d__1:MoveNext ()(this:0x102007790[.<hello>d__1 Test.exe], )' } +3ms
  async-graph-builder event: { thread: 4371203520, mode: 'ENTER', name: 'Test/<hello>d__1:SetStateMachine (System.Runtime.CompilerServices.IAsyncStateMachine)(this:0x102007790[.<hello>d__1 Test.exe], [.<hello>d__1:0x102007790], )' } +0ms
  async-graph-builder event: { thread: 4371203520, mode: 'LEAVE', name: 'Test/<hello>d__1:SetStateMachine (System.Runtime.CompilerServices.IAsyncStateMachine)' } +0ms
  async-graph-builder event: { thread: 4371203520, mode: 'LEAVE', name: 'Test/<hello>d__1:MoveNext ()' } +0ms
  async-graph-builder event: { thread: 4371203520, mode: 'LEAVE', name: 'Test:hello ()[System.Threading.Tasks.Task`1:0x102008ba0]' } +1ms
  async-graph-builder event: { thread: 4371203520, mode: 'ENTER', name: 'Test:hello ()()' } +0ms
{ source: 4328533408, target: 4328557824 }
  async-graph-builder event: { thread: 4371203520, mode: 'ENTER', name: 'Test/<hello>d__1:MoveNext ()(this:0x102008d00[.<hello>d__1 Test.exe], )' } +0ms
  async-graph-builder event: { thread: 4371203520, mode: 'ENTER', name: 'Test/<hello>d__1:SetStateMachine (System.Runtime.CompilerServices.IAsyncStateMachine)(this:0x102008d00[.<hello>d__1 Test.exe], [.<hello>d__1:0x102008d00], )' } +0ms
  async-graph-builder event: { thread: 4371203520, mode: 'LEAVE', name: 'Test/<hello>d__1:SetStateMachine (System.Runtime.CompilerServices.IAsyncStateMachine)' } +0ms
  async-graph-builder event: { thread: 4371203520, mode: 'LEAVE', name: 'Test/<hello>d__1:MoveNext ()' } +0ms
  async-graph-builder event: { thread: 4371203520, mode: 'LEAVE', name: 'Test:hello ()[System.Threading.Tasks.Task`1:0x102008ef0]' } +0ms
  async-graph-builder event: { thread: 4371203520, mode: 'ENTER', name: 'Test/<Main>d__0:SetStateMachine (System.Runtime.CompilerServices.IAsyncStateMachine)(this:0x102002da0[.<Main>d__0 Test.exe], [.<Main>d__0:0x102002da0], )' } +0ms
  async-graph-builder event: { thread: 4371203520, mode: 'LEAVE', name: 'Test/<Main>d__0:SetStateMachine (System.Runtime.CompilerServices.IAsyncStateMachine)' } +0ms
  async-graph-builder event: { thread: 4371203520, mode: 'LEAVE', name: 'Test/<Main>d__0:MoveNext ()' } +0ms
  async-graph-builder event: { thread: 4371203520, mode: 'LEAVE', name: 'Test:Main ()[System.Threading.Tasks.Task`1:0x102009008]' } +1ms
  async-graph-builder event: { thread: 123145563066368, mode: 'ENTER', name: 'Test/<hello>d__1:MoveNext ()(this:0x102008d00[.<hello>d__1 Test.exe], )' } +0ms
  async-graph-builder event: { thread: 123145560956928, mode: 'ENTER', name: 'Test/<hello>d__1:MoveNext ()(this:0x102007790[.<hello>d__1 Test.exe], )' } +0ms
  async-graph-builder event: { thread: 123145563066368, mode: 'LEAVE', name: 'Test/<hello>d__1:MoveNext ()' } +0ms
{ source: 4328552336, target: 4328533408 }
  async-graph-builder event: { thread: 123145560956928, mode: 'ENTER', name: 'Test/<Main>d__0:MoveNext ()(this:0x102002da0[.<Main>d__0 Test.exe], )' } +0ms
  async-graph-builder event: { thread: 123145560956928, mode: 'LEAVE', name: 'Test/<Main>d__0:MoveNext ()' } +0ms
  async-graph-builder event: { thread: 123145560956928, mode: 'LEAVE', name: 'Test/<hello>d__1:MoveNext ()' } +0ms
  async-graph-builder event: { thread: 4371203520, mode: 'LEAVE', name: 'Test:<Main> ()' } +0ms
```
