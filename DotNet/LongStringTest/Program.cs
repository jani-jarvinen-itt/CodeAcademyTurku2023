using System.Text;

Console.WriteLine("Starting string generation loop.");

DateTime start = DateTime.Now;
StringBuilder sb = new();
for (int i = 0; i < 500_000; i++)
{
    sb.Append("A");
}
DateTime end = DateTime.Now;

TimeSpan timeTaken = end - start;
Console.WriteLine("Loop took " + timeTaken.TotalSeconds + " seconds.");

Console.WriteLine("Length of generated string: " + sb.Length);
Console.WriteLine("Completed string generation loop.");
