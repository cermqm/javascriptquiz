// Declare Global Variables
var highScoreList = document.querySelector("#hs");
var highScore = [];
var dhighScore = document.querySelector("#dhS")


var z = 0;
firstTime = 0;
score = 0;
timeleft = 450;
var ini = "";

init();
console.log("highScore = " + highScore);
renderHighScore();


function init(parameter) {
    var storedHighScore = JSON.parse(localStorage.getItem("highScore"));
    console.log("storedHighScore = " + storedHighScore);
    if (storedHighScore !== null) {
        highScore = storedHighScore;
    }
}

function renderHighScore() {


    $("<div>").insertAfter("#insidecard").attr({ id: "ic1" }).html("</br>");
    $("<h2>").insertAfter("#ic1").attr({ id: "ic2" }).html("Top 5 High Scores");
    $("<h4>").insertAfter("#ic2").attr({ id: "dhS" });
    $("#dhS").empty();

    var counthighScore = Object.keys(highScore).length;
    var halfofcounthighscore = (counthighScore / 2);
    console.log("counthighScore = " + counthighScore);
    console.log("halfofcounthighScore = " + halfofcounthighScore);

    for (let i = 0; i < halfofcounthighScore; i++) {
        $("<h2>").insertAfter("#dhS").attr({ id: "dhS2" }).html("Highscore - " + highScore.score + "------" + highScore.initials);
    }


    // var dhighScore = document.querySelector("#dhS")
    // var container = document.createElement("div");

    // for (let i = 0; i < highScore.length; i++) {
    //     var displayhighScore = highScore[i];
    //     console.log("highScore[i] = " + highScore[i])
    //         // var lihighScore = document.createElement("h2");
    //         // lihighScore.textContent = displayhighScore;
    //         // lihighScore.setAttribute("data-index", i);

    //     // var button = document.createElement("button");
    //     // button.textContent = "Delete";

    //     // lihighScore.appendChild(button);
    //     // container.appendChild(lihighScore);
    //     $("<h2>").insertAfter("#dhS").attr({ id: "dhS2" }).html("Highscore - " + highScore[i]);

    // }

    // dhighScore.appendChild(container);





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