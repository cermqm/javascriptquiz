// Declare Global Variables
var highScoreList = document.querySelector("#hs");
var highScore = {};
var highScorehold = {};
var highScorearray = [];
var dhighScore = document.querySelector("#dhS")


var z = 0;
firstTime = 0;
score = 0;
timeleft = 450;
var ini = "";

init();
// console.log("highScore = " + highScore);
renderHighScore();


function init(parameter) {
    console.log("in init...")
    var storedHighScore = JSON.parse(localStorage.getItem("highScore"));
    // console.log("storedHighScore = " + storedHighScore);
    if (storedHighScore !== null) {
        highScorearray = storedHighScore;
        console.log("highScorearray = " + highScorearray);
        // console.log("highScore.score = " + highScore.score);
        // console.log("highScore.initials = " + highScore.initials);

    }
}

function renderHighScore() {


    $("<div>").insertAfter("#insidecard").attr({ id: "ic1" }).html("</br>");
    $("<h2>").insertAfter("#ic1").attr({ id: "ic2" }).html("Top 5 High Scores");
    $("<h4>").insertAfter("#ic2").attr({ id: "dhS" });
    $("#dhS").empty();

    console.log("highScorearray = " + highScorearray);

    for (let i = 0; i < highScorearray.length; i++) {
        console.log("in for loop....");
        console.log("highScorearray[i] = " + highScorearray[i]);
        highScore = highScorearray[i];
        console.log("highScore = " + highScore);
        console.log("highScore.score = " + highScore.score);
        console.log("highScore.initials = " + highScore.initials);

        $("<h2>").insertAfter("#dhS").attr({ id: "dhS2" }).html(highScore.score + "  ------  " + highScore.initials);
        if (i === 5) {
            i = highScorearray.length;
        }
    }

}