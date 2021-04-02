let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock-btn");
const paper_div = document.getElementById("paper-btn");
const scissors_div = document.getElementById("scissors-btn");

function getComputerChoice()
{
    const choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(user, computer)
{
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.textContent = user + " beats " + computer + " !";
}

function lose(userChoice, computerChoice)
{
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.textContent = computer + " beats " + user + " !";
}

function draw()
{
    result_p.textContent = "We call that a draw!";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice)
    {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw();
            break;
    }
}

function main() 
{
    rock_div.addEventListener('click', function(){
        game("rock");
    });
    
    paper_div.addEventListener('click', function(){
        game("paper");
    });
    
    scissors_div.addEventListener('click', function(){
        game("scissors");
    });
}

main ();
