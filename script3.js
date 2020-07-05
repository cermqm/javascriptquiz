// Declare Global Variables
var highScoreList = document.querySelector("#hs");
var highScore = [];
var dhighScore = document.querySelector("#dhS")


var z = 0;
firstTime = 0;
score = 0;
timeleft = 450;
var ini = "";

renderHighScore();

function renderHighScore() {

    // var lihighScore = document.createElement("h2");

    // pushhighScoreLabel = document.createElement("h2");
    // pushhighScoreLabel.innerHTML = "High Scores";
    // document.body.append(pushhighScoreLabel);

    var dhighScore = document.querySelector("#dhS")
    dhighScore.innerHTML = "";
    var container = document.createElement("div");

    for (let i = 0; i < highScore.length; i++) {
        var displayhighScore = highScore[i];
        var lihighScore = document.createElement("h2");

        lihighScore.textContent = displayhighScore;
        lihighScore.setAttribute("data-index", i);

        var button = document.createElement("button");
        button.textContent = "Delete";

        lihighScore.appendChild(button);
        container.appendChild(lihighScore);
    }

    dhighScore.appendChild(container);
}


// button.getElementById("startquiz").addEventListener("click", function(event) {
//     event.preventDefault();
//     var element = event.target;

//     if (element.matches("button") === true) {
//         var index = element.parentElement.getAttribute("data-index");
//         highScores.splice(index, 1);
//         storeHighScore();
//         renderHighScore();
//     }

// });