public class UserInputReader
{
    public int ReadGuess()
    {
        while (true)
        {
            Console.WriteLine("Please enter your guess between 1 and 20.");

            try
            {
                string input = Console.ReadLine() ?? "0";
                int guess = int.Parse(input);

                return guess;
            }
            catch
            {
                Console.WriteLine("Invalid input! Please enter a valid number between 1 and 20.");
            }
        }
    }
}