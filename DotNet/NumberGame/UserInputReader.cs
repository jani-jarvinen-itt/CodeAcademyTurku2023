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

                if ((guess >= 1) && (guess <= 20))
                {
                    return guess;
                }
                else
                {
                    Console.WriteLine("The range for the guess is between 1 and 20.");
                }
            }
            catch
            {
                Console.WriteLine("Invalid input! Please enter a valid number between 1 and 20.");
            }
        }
    }
}