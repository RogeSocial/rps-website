//When you click on "Play" on the home page you will get redirected to choose a game mode.
function chooseMe() {

    location.href = "choose-game.html";

    if (document.getElementById("name") !== null) {
        localStorage.setItem("playerNameItem", document.getElementById("name").value);
        if (localStorage.getItem("playerNameItem") == "") {
            localStorage.setItem("playerNameItem", "Player");
        }

    }

}

function timer(color) {
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissors = document.getElementById("scissors");
    let startTime = new Date().getTime();
    let section = document.getElementById("choosegame");
    section.setAttribute("style", color)
    let interval = setInterval(function () {
        
        if (new Date().getTime() - startTime >= 800) {
            clearInterval(interval);
            section.removeAttribute("style", color)
            rock.setAttribute("style", "pointer-events: auto;")
            paper.setAttribute("style", "pointer-events: auto;")
            scissors.setAttribute("style", "pointer-events: auto;")
            return;
        }
    }, 500);
}

function rockX() {
    let rockImg = document.createElement("img")
    rockImg.setAttribute("src", "./images/rock.png");
    rockImg.setAttribute("width", "400");
    rockImg.setAttribute("height", "300");
    rockImg.setAttribute("alt", "ROCK");
    return rockImg;
}

function paperX() {
    let paperImg = document.createElement("img")
    paperImg.setAttribute("src", "./images/paper.png");
    paperImg.setAttribute("width", "400");
    paperImg.setAttribute("height", "300");
    paperImg.setAttribute("alt", "PAPER");
    return paperImg;
}

function scissorsX() {
    let scissorsImg = document.createElement("img")
    scissorsImg.setAttribute("src", "./images/scissors.png");
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

    if (choices === 3) {
        let bo3 = document.getElementById("mode");
        bo3.innerHTML = "BEST OF 3";
        BestOf3(rock, paper, scissors);
    }

    if (choices === 5) {
        let bo5 = document.getElementById("mode");
        bo5.innerHTML = "BEST OF 5";
        BestOf5(rock, paper, scissors)
    }

    if (choices === Infinity) {
        let button = document.createElement("button");
        button.setAttribute("onclick", "chooseMe()")
        button.textContent = "NEW GAME\n";
        let infinite = document.getElementById("mode");
        infinite.textContent = "INFINITE\n";
        infinite.appendChild(button);
        
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

    if (random == 1) {
        console.log('computer: rock')
        
        if (playerChoice == 1) {
            timer("background-color: #FBB117")
            console.log('drawn')
        } else if (playerChoice == 2) {
            console.log('player wins')
            timer("background-color: #85BB65;")
            playerPoints++;
        } else if (playerChoice == 3) {
            console.log('Computer wins')
            timer("background-color: darkred");
            computerPoints++;
        }
    }

    if (random == 2) {
        console.log('computer: paper');
        if (playerChoice == 1) {
            console.log('computer wins')
            timer("background-color: darkred");
            computerPoints++;
        } else if (playerChoice == 2) {
            timer("background-color: #FBB117")
            console.log('drawn')
        } else if (playerChoice == 3) {
            console.log('player wins')
            timer("background-color: #85BB65;")
            playerPoints++;
        }
    }

    if (random == 3) {
        console.log("computer: scissors");
        if (playerChoice == 1) {
            console.log('Player wins')
            timer("background-color: #85BB65;")
            playerPoints++;

        } else if (playerChoice == 2) {
            timer("background-color: darkred");
            console.log('Computer wins')
            computerPoints++;

        } else if (playerChoice == 3) {
            timer("background-color: #FBB117")
            console.log('drawn');
        }
    }

    playerScore.innerHTML = localStorage.getItem("playerNameItem") + ': ' + parseInt(playerPoints);
    computerScore.innerHTML = 'Computer: ' + parseInt(computerPoints);
    if (playerPoints >= gameType) {
        let button = document.createElement("button");
        button.setAttribute("onclick", "chooseMe()");
        let buttonsContainer = document.getElementById("buttoncontainer");
        clearChildren(buttonsContainer)
        buttonsContainer.setAttribute("style", "flex-direction: column;")
        let player = document.createElement("p");
        player.innerHTML = localStorage.getItem("playerNameItem") + " WINS!\n";
        buttonsContainer.appendChild(player);
        buttonsContainer.appendChild(button)
        button.textContent = "PLAY AGAIN";
        return "Playa wins"
    }

    if (computerPoints >= gameType) {
        let button = document.createElement("button");
        button.setAttribute("onclick", "chooseMe()");
        let buttonsContainer = document.getElementById("buttoncontainer");
        clearChildren(buttonsContainer);
        let computer = document.createElement("p");
        buttonsContainer.setAttribute("style", "flex-direction: column;");
        computer.innerHTML = "Computer WINS!\n";
        buttonsContainer.appendChild(computer);
        buttonsContainer.appendChild(button);
        button.textContent = "PLAY AGAIN";
        return "Comput wins"
    }

    if (gameType == Infinity) {
      
        let buttonsContainer = document.getElementById("buttoncontainer");
        
        return "nonstopstopped"
    }

};


function BestOf3(rock, paper, scissors) {
        rock.addEventListener("click", function() {Computer(1, 2);rock.setAttribute("style", "pointer-events: none;")});
        paper.addEventListener("click", function() {Computer(2, 2);paper.setAttribute("style", "pointer-events: none;")});
        scissors.addEventListener("click", function() {Computer(3, 2);scissors.setAttribute("style", "pointer-events: none;")});
}


function BestOf5(rock, paper, scissors) {
    rock.onclick = () => { Computer(1, 3); rock.setAttribute("style", "pointer-events: none;") }
    paper.onclick = () => { Computer(2, 3); paper.setAttribute("style", "pointer-events: none;") }
    scissors.onclick = () => { Computer(3, 3); scissors.setAttribute("style", "pointer-events: none;")}
}

function NonStop(rock, paper, scissors) {
        rock.onclick = () => {Computer(1, Infinity); rock.setAttribute("style", "pointer-events: none;") }
        paper.onclick = () => {Computer(2, Infinity); paper.setAttribute("style", "pointer-events: none;") }
        scissors.onclick = () => {Computer(3, Infinity); scissors.setAttribute("style", "pointer-events: none;") }
}
