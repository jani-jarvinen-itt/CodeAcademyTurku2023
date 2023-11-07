Console.WriteLine("Welcome to the Number Guessing game.");
int correct = Random.Shared.Next(1, 21);
// Console.WriteLine(correct);

for (int numberOfGuesses = 0; numberOfGuesses < 3; numberOfGuesses++)
{
    Console.WriteLine("Please enter your guess between 1 and 20.");
    string input = Console.ReadLine() ?? "0";
    int guess = int.Parse(input);

    if (guess == correct)
    {
        Console.WriteLine("Correct! You win!");
        break;
    }
    else if (guess < correct)
    {
        Console.WriteLine("Not quite! The correct number is larger.");
    }
    else
    {
        Console.WriteLine("Not quite! The correct number is smaller.");
    }
}

Console.WriteLine("Game ends.");
