namespace Calculations.Tests;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestSumCalculation()
    {
        int a = 10;
        int b = 20;
        int expected = a + b;

        SumCalculator calc = new();
        int sum = calc.Sum(a, b);

        Assert.AreEqual(expected, sum);
    }
}