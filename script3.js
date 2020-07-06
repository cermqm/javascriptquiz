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
renderHighScore();
sorthighscores();


function init(parameter) {
    var storedHighScore = JSON.parse(localStorage.getItem("highScore"));
    if (storedHighScore !== null) {
        highScorearray = storedHighScore;
    }
}

function renderHighScore() {


    $("<div>").insertAfter("#insidecard").attr({ id: "ic1" }).html("</br>");
    $("<h2>").insertAfter("#ic1").attr({ id: "ic2" }).html("Top 5 High Scores");
    $("<h4>").insertAfter("#ic2").attr({ id: "dhS" });
    $("#dhS").empty();

    for (let i = 0; i < highScorearray.length; i++) {

        highScore = highScorearray[i];
        $("<h2>").insertAfter("#dhS").attr({ id: "dhS2" }).html(highScore.score + "  ------  " + highScore.initials);
        if (i >= 4) {
            i = highScorearray.length;
        }
    }

}

function sorthighscores() {
    init();
    var shs = [];
    var sortedarray = [];
    for (let i = 0; i < highScorearray.length; i++) {
        console.log("shs = " + shs);
        shs.push(highScorearray[i].score);
        sortedarray = shs.sort((a, b) => a - b);
        console.log("sortedarray = " + sortedarray);

    }

}