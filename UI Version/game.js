let computerChoice;
let roundResult;

let playerScore = 0;
let computerScore = 0;



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

function playRound (playerChoice, computerChoice)
{
    if (playerChoice.toLowerCase() == "rock")
    {
        playedRock();
    }

    if (playerChoice.toLowerCase() == "paper")
    {
        playedPaper();
    }

    if (playerChoice.toLowerCase() == "scissors")
    {
        playedScissors();
    }
}

function playedScissors() 
{
    if (computerPlay() == "scissors") 
    {
        roundResult = "tie";
    }
    if (computerPlay() == "rock") 
    {
        console.log("You lose! Rock beats scissors!");
        roundResult = "computer";
    }
    if (computerPlay() == "paper") 
    {
        console.log("You win!");
        roundResult = "player";
    }
}

function playedPaper() 
{
    if (computerPlay() == "paper") 
    {
        roundResult = "tie";
    }
    if (computerPlay() == "scissors") 
    {
        roundResult = "computer";
    }
    if (computerPlay() == "rock") 
    {
        roundResult = "player";
    }
}

function playedRock() {
    if (computerPlay() == "rock") 
    {
        roundResult = "tie";
    }
    if (computerPlay() == "paper") 
    {
        roundResult = "computer";
    }
    if (computerPlay() == "scissors") 
    {
        roundResult = "player";
    }
}

function game()
{
    for (i = 1; i <= 5; i++)
    {
        let playerChoice = prompt("Rock Paper Scissors, Shoot!");
        playRound(playerChoice, computerPlay());
        if (roundResult == "player")
        {
            console.log("You win! " + playerChoice + " beats " + computerChoice + "!");
            playerScore++;
        }
        if(roundResult == "computer")
        {
            console.log("You lose! " + computerChoice + " beats " + playerChoice + "!");
            computerScore++;
        }
        else 
        {
            console.log("It's a tie!");
        }
    }
    if (playerScore > computerScore)
    {
        console.log("You win the game with " + playerScore + " points");
    }
    else if (playerScore < computerScore)
    {
        console.log("You lost the game. The computer scored " + computerScore + " points");
    }
    else
    {
        console.log("It's a tie. You both got " + playerScore + "!");
    }
}