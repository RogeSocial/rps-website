//When you click on "Play" on the home page you will get redirected to choose a game mode.
function chooseMe() {
    
    location.href="choose-game.html";
    // let playerName = document.getElementById("name").value;

    // if (playerName == "") {
    //     playerName = "Player";
    // }
 
    // console.log(playerName);
}

function rockX() {
    let rockImg = document.createElement("img")
    rockImg.setAttribute("src", "/images/rock.png");
    rockImg.setAttribute("width", "400");
    rockImg.setAttribute("height", "300");
    rockImg.setAttribute("alt", "ROCK");
    return rockImg;
}

function paperX() {
    let paperImg = document.createElement("img")
    paperImg.setAttribute("src", "/images/paper.png");
    paperImg.setAttribute("width", "400");
    paperImg.setAttribute("height", "300");
    paperImg.setAttribute("alt", "PAPER");
    return paperImg;
}

function scissorsX() {
    let scissorsImg = document.createElement("img")
    scissorsImg.setAttribute("src", "/images/scissors.png");
    scissorsImg.setAttribute("width", "400");
    scissorsImg.setAttribute("height", "300");
    scissorsImg.setAttribute("alt", "SCISSORS");
    return scissorsImg;
}

let playerPoints = 0;
let computerPoints = 0;

let bestOf3 = 3;
let bestOf5 = 5;
let nonStop = Infinity;

let button = document.createElement("button");

function removeAll(choices) {
    
    let buttonsContainer = document.getElementById("buttoncontainer");
    let buttons = document.getElementsByClassName("buttons");
    clearChildren(buttonsContainer)
    
    let rock = document.createElement("div");
    rock.setAttribute("id", "rock")
    // rock.innerHTML = "ROCK";
    rock.classList.add("buttons");
    buttonsContainer.appendChild(rock);
    rock.appendChild(rockX());
    
    let paper = document.createElement("div");
    paper.setAttribute("id", "paper")
    paper.classList.add("buttons");
    buttonsContainer.appendChild(paper);
    paper.appendChild(paperX())

    let scissors = document.createElement("div");
    scissors.setAttribute("id", "scissors")
    scissors.classList.add("buttons");
    buttonsContainer.appendChild(scissors);
    scissors.appendChild(scissorsX())
    
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
    
    if (random == 1){
        console.log('computer: rock')
        if(playerChoice == 1) {
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
   // chooseMe(playerName)
    playerScore.innerHTML = 'Player: '+ parseInt(playerPoints);
    computerScore.innerHTML ='Computer: '+ parseInt(computerPoints);
    if(playerPoints >= gameType){
        let button = document.createElement("button");
        button.setAttribute("onclick", "chooseMe()");
        let buttonsContainer = document.getElementById("buttoncontainer");
        clearChildren(buttonsContainer)
        let player = document.createElement("p");
        player.innerHTML = "Player wins!!\n";
        buttonsContainer.appendChild(player);
        buttonsContainer.appendChild(button)
        button.textContent = "Play again";
        return "Playa wins"}
    
    if(computerPoints >= gameType){
        let button = document.createElement("button");
        button.setAttribute("onclick", "chooseMe()");
        let buttonsContainer = document.getElementById("buttoncontainer");
        clearChildren(buttonsContainer);
        let computer = document.createElement("p");
        computer.innerHTML = "Computer wins!!\n";
        buttonsContainer.appendChild(computer);
        buttonsContainer.appendChild(button);
        button.textContent = "Play again";
        return "Comput wins"
    }
        
    if(gameType == 4){
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
    rock.onclick = () => {Computer(1, 4)}
    paper.onclick = () => {Computer(2, 4)}
    scissors.onclick =() => {Computer(3, 4)}
}