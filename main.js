function chooseMe() {
    location.href="choose-game.html";
}

let playerName = document.getElementById("player");

let bestOf3 = document.getElementById("bestof3");
let bestOf5 = document.getElementById("bestof5");
let nonStop = document.getElementById("nonstop");
let buttons = document.getElementsByClassName("buttons").innerHTML;

function endof3() {
    buttons.classlist.remove();
    bestOf3.remove();
}


