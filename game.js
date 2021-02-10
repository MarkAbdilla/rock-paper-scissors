let computerChoice;
let roundResult;

function computerPlay()
{
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1)
    {
        computerChoice = "rock";
    }

    if (randomNumber === 2)
    {
        computerChoice = "paper";
    }

    if (randomNumber === 3)
    {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function game()
{
    for (i = 0; i < 5; i++)
    {
        let playerChoice = prompt("Rock Paper Scissors, Shoot!");
        playRound(playerChoice, computerPlay());
    }
}

function playRound (playerChoice, computerChoice)
{
    if (playerChoice.toLowerCase() == "rock")
    {
        if (computerChoice() == "rock")
        {
            console.log("It's a tie!");
            roundResult = "tie";
        }
        else if (computerChoice() == "paper")
        {
            console.log("You lose! Paper beats rock!");
            roundResult = "computer";
        }
        else if (computerChoice() == "scissors")
        {
            console.log("You win!");
            roundResult = "player";
        }
    }

    else if (playerChoice.toLowerCase() == "paper")
    {
        if (computerChoice() == "paper")
        {
            console.log("It's a tie!");
            roundResult = "tie";
        }
        else if (computerChoice() == "scissors")
        {
            console.log("You lose! Scissors beats paper!");
            roundResult = "computer";
        }
        else if (computerChoice() == "rock")
        {
            console.log("You win!");
            roundResult = "player";
        }
    }

    else if (playerChoice.toLowerCase() == "scissors")
    {
        if (computerChoice() == "scissors")
        {
            console.log("It's a tie!");
            roundResult = "tie";
        }
        else if (computerChoice() == "rock")
        {
            console.log("You lose! Rock beats scissors!");
            roundResult = "computer";
        }
        else if (computerChoice() == "paper")
        {
            console.log("You win!");
            roundResult = "player";
        }
    }

    else 
    {
        console.error("Your input is not valid!");
    }
}