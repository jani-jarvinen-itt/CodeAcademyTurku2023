Console.WriteLine("Welcome to the Number Guessing game.");
int correct = Random.Shared.Next(1, 21);
// Console.WriteLine(correct);
UserInputReader reader = new();

for (int numberOfGuesses = 0; numberOfGuesses < 3; numberOfGuesses++)
{
    int guess = reader.ReadGuess();

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
