using System;
using System.Threading.Tasks;

class Test {
	public static async Task Main() {
		Console.WriteLine($"M0");
		Task t1 = hello();
		Task t2 = hello();
		Console.WriteLine($"M1");
		await t1;
		await t2;
		Console.WriteLine($"M2");
	}
	
	public static async Task hello() {
		Console.WriteLine($"H0");
		Task t = Task.Delay(1);
		Console.WriteLine($"H1");
		await t;
		Console.WriteLine($"H2");
	}
}