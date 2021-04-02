let userScore = 0;
let computerScore = 0;

let userWins = false;
let computerWins = false;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const finalMessage = document.querySelector("#action-message");
const rock_div = document.getElementById("rock-btn");
const paper_div = document.getElementById("paper-btn");
const scissors_div = document.getElementById("scissors-btn");

function getComputerChoice()
{
    const choices = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(user, computer)
{
    if (userScore > 5)
    {
        userWins = true;
        finalResult(user, computer);
    }
    else 
    {
        userScore++;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_p.textContent = `${user} beats ${computer}!`;
    }
}

function lose(userChoice, computerChoice)
{
    if (computerScore > 5)
    {
        computerWins = true;
        finalResult(user, computer);
    }
    else
    {
        computerScore++;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_p.textContent = `${computer} beats ${user}!`;
    }
}

function draw()
{
    result_p.textContent = "We call that a draw!";
}

function finalResult(user, computer)
{
    if (userWins == true)
    {
        finalMessage.textContent = `Congratulations. ${user} saves the day! You win`;
    }
    else
    {
        finalMessage.textContent = `You lose. Your ${user} was no match for ${computer}.`;
    }
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice)
    {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice, computerChoice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw();
            break;
    }
}

function main() 
{
    rock_div.addEventListener('click', function(){
        game("Rock");
    });
    
    paper_div.addEventListener('click', function(){
        game("Paper");
    });
    
    scissors_div.addEventListener('click', function(){
        game("Scissors");
    });
}

main ();
