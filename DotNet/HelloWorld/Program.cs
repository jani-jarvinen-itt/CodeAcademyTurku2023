// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

DateTime now = DateTime.Today;
DateTime endOfYear = new(now.Year, 12, 31);
var diff = endOfYear - now;
Console.WriteLine(diff.TotalDays);
