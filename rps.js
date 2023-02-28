const gameBtns = document.querySelectorAll('.gameBtns');
const resetBtn = document.querySelector("#resetBtn");
const result = document.querySelector("#result");
const result2 = document.querySelector("#result2");

let playerScore = 0;
let computerScore = 0;
let playerScore_span = document.getElementById('playerScore');
let computerScore_span = document.getElementById('computerScore');

const options = ["✊🏽", "✊🏽", "✌🏽"];
let playerSelection;
let computerSelection;

function getComputerChoice() {
    let randomOption = options[Math.floor(Math.random() * options.length)];
    computerSelection = randomOption;
    return computerSelection;
};

gameBtns.forEach(button => button.addEventListener("click", () => {
    playerSelection = button.textContent;
    getComputerChoice();

    function playRound(playerSelection, computerSelection) {
        computerSelection = getComputerChoice();
       
        let rules = {
            '✊🏽': '✌🏽',
            '✋🏽': '✊🏽',
            '✌🏽': '✋🏽'
        };

        if (computerSelection == rules[playerSelection]){
            result.textContent = `You Win!`;
            result2.textContent = `${playerSelection} beats ${computerSelection}`;
            playerScore++;
            playerScore_span.textContent = playerScore;
        } else if (playerSelection == computerSelection) {
            result.textContent = "Draw!";
            result2.textContent = `${playerSelection} --- ${computerSelection}`
        } else {
            result.textContent =`Computer Wins!`;
            result2.textContent = `${computerSelection} beats ${playerSelection}`
            computerScore++;
            computerScore_span.textContent = computerScore;
        }

        if (computerScore == 5) {
            computerWins();
        } else if (playerScore == 5) {
            playerWins();
        } else {
            result.textContent = "Draw!";
        }

        };
        playRound(playerSelection, computerSelection);
}));


const section = document.querySelector('body');

function reset() {
    section.style.background = 'linear-gradient(109.2deg, rgb(249, 174, 240) 6.5%,rgb(139, 144, 250) 97.1%)';
    result.textContent = 'Choose Your Element';
    result2.textContent = '';
    playerScore_span.textContent = 0;
    computerScore_span.textContent = 0;
    playerScore = 0;
    computerScore = 0; 

    document.getElementById('✌🏽').disabled = false;
    document.getElementById('✋🏽').disabled = false;
    document.getElementById('✊🏽').disabled = false;
};

function computerWins() {
    section.style.background = 'linear-gradient(110.6deg, rgb(156, 116, 129) -18.3%, rgb(67, 54, 74) 16.4%, rgb(47, 48, 67) 68.2%, rgb(27, 23, 36) 99.1%)';
    document.getElementById('✌🏽').disabled = true;
    document.getElementById('✋🏽').disabled = true;
    document.getElementById('✊🏽').disabled = true;
};

function playerWins() {
    section.style.background = 'linear-gradient(179.1deg, rgb(43, 170, 96) 2.3%, rgb(129, 204, 104) 98.3%)';
    document.getElementById('✌🏽').disabled = true;
    document.getElementById('✋🏽').disabled = true;
    document.getElementById('✊🏽').disabled = true;
};