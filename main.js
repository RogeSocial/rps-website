//When you click on "Play" on the home page you will get redirected to choose a game mode.
function chooseMe() {
    location.href="choose-game.html";
}

function rockX() {
    let x = document.createElement("rockImg")
    x.setAttribute("src", "/images/rock.png");
    x.setAttribute("max-width", "300");
    x.setAttribute("max-height", "500");
    x.setAttribute("alt", "ROCK");
    
}

let playerName = document.getElementById("player");

let playerPoints = 0;
let computerPoints = 0;

let bestOf3 = 3;
let bestOf5 = 5;
let nonStop = Infinity;

function removeAll(choices) {
    
    let buttonsContainer = document.getElementById("buttoncontainer");
    let buttons = document.getElementsByClassName("buttons");
    clearChildren(buttonsContainer)
    
    let rock = document.createElement("rock");
    rock.innerHTML = "ROCK";
    rock.classList.add('buttons');
    buttonsContainer.appendChild(rock);
    
    let paper = document.createElement("paper");
    paper.innerHTML = "PAPER";
    paper.classList.add('buttons');
    buttonsContainer.appendChild(paper);

    let scissors = document.createElement("scissors");
    scissors.innerHTML = "SCISSORS";
    scissors.classList.add('buttons');
    buttonsContainer.appendChild(scissors);
    
    let gamemode = document.getElementById("gamemode");
    gamemode.innerHTML = "MAKE A MOVE";

    if(choices === 3){
        let bo3 = document.getElementById("mode");
        bo3.innerHTML = "BEST OF 3";
        BestOf3(rock, paper, scissors);
    }

    if(choices === 5){
        let bo5 = document.getElementById("mode");
        bo5.innerHTML = "BEST OF 5";
        BestOf5(rock,paper, scissors)
    }

    if(choices === Infinity){
        let infinite = document.getElementById("mode");
        infinite.innerHTML = "INFINITE"; 
        NonStop(rock, paper, scissors);
    }
}

function clearChildren(node) {
    
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

function Computer(playerChoice, gameType) {
    let random = Math.floor(Math.random() * 3 + 1)
    console.log(random);
    let playerScore = document.getElementById("playerScore");
    let computerScore = document.getElementById("computerScore");
    if (random == 1 ){
        console.log('computer: rock')
        if(playerChoice ==1) {
            console.log('draw')
        } else if(playerChoice == 2) {
            console.log('player wins')
            playerPoints++;
        } else if (playerChoice == 3) {
            console.log('Computer wins')
            computerPoints++;
        }
    }

    if (random == 2){
        console.log('computer: paper');
        if(playerChoice == 1){
            console.log('computer wins')
            computerPoints++;
        } else if (playerChoice == 2) {
            console.log('draw')
        } else if(playerChoice == 3) {
            console.log('player wins')
            playerPoints++;
        }
    }
    
    if (random == 3){
        console.log("computer: scissors");
        if (playerChoice == 1){
            console.log('Player wins')
            playerPoints++;
        } else if (playerChoice == 2){
            console.log('Computer wins')
            computerPoints++;
        } else if (playerChoice == 3){
            console.log('draw');
        }
    }

    playerScore.innerHTML ='Player: '+ parseInt(playerPoints);
    computerScore.innerHTML ='Computer: '+ parseInt(computerPoints);
    if(playerPoints >= gameType){
        let buttonsContainer = document.getElementById("buttoncontainer");
        clearChildren(buttonsContainer)
        let player = document.createElement("Player");
        player.innerHTML = "Player wins!!";
        buttonsContainer.appendChild(player);
        return "Playa wins"}
    if(computerPoints >= gameType){
        let buttonsContainer = document.getElementById("buttoncontainer");
        clearChildren(buttonsContainer);
        let computer = document.createElement("Computer");
        computer.innerHTML = "Computer wins!!";
        buttonsContainer.appendChild(computer);
        let 
        return "Comput wins"
    }
        
    if(gameType == 10){
        let player = document.createElement("Player");
        player.innerHTML = 'Total score' + parseInt(playerPoints);
        buttonsContainer.appendChild(player);
        return "nonstopstopped"
    }
        
};

function BestOf3(rock, paper, scissors){
    
    rock.onclick = () => {Computer(1, 2)}
    paper.onclick = () => {Computer(2, 2)}
    scissors.onclick =() => {Computer(3, 2)}
}

function BestOf5(rock, paper, scissors){
    rock.onclick = () => {Computer(1, 3)}
    paper.onclick = () => {Computer(2, 3)}
    scissors.onclick =() => {Computer(3, 3)}
}

function NonStop(rock, paper, scissors){
    rock.onclick = () => {Computer(1, 10)}
    paper.onclick = () => {Computer(2, 10)}
    scissors.onclick =() => {Computer(3, 10)}
}