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

console.log(computerPlay());