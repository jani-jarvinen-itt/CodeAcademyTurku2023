Console.WriteLine("Starting string generation loop.");

DateTime start = DateTime.Now;
string s = "";
for (int i = 0; i < 500_000; i++)
{
    s += "A";
}
DateTime end = DateTime.Now;

TimeSpan timeTaken = end - start;
Console.WriteLine("Loop took " + timeTaken.TotalSeconds + " seconds.");

Console.WriteLine("Length of generated string: " + s.Length);
Console.WriteLine("Completed string generation loop.");
