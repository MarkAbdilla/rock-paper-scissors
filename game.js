let computerChoice;

function computerPlay()
{
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1)
    {
        computerChoice = "Rock";
    }

    if (randomNumber === 2)
    {
        computerChoice = "Paper";
    }

    if (randomNumber === 3)
    {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

function gameRound (playerChoice, computerChoice)
{
    if (playerChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "rock")
    {
        console.log("It's a tie!");
    }
    else if (playerChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "scissors")
    {
        console.log("It's a tie!");
    }
    else if (playerChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "paper")
    {
        console.log("It's a tie!");
    }
    else if (playerChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper")
    {
        console.log("You lose! Paper beats Rock!");
    }
    else if (playerChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock")
    {
        console.log("You lose! Rock beats Scissors!");
    }
    else if (playerChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors")
    {
        console.log("You lose! Scissors beats Paper!");
    }
    else if (playerChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors")
    {
        console.log("You win!");
    }
    else if (playerChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper")
    {
        console.log("You win!");
    }
    else if (playerChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock")
    {
        console.log("You win!");
    }
    else
    {
        console.error("Your input was not recognised!")
    }
}