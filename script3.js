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

    console.log("sortedarray.length = " + sortedarray.length);
    console.log("highScorearray.length = " + highScorearray.length);


    for (let x = 0; x < sortedarray.length; x++) {
        console.log("x = " + x);
        for (let i = 0; i < highScorearray.length; i++) {
            console.log("i = " + i);
            console.log("sortedarray[x] = " + sortedarray[x]);
            console.log("highScorearray[i] = " + highScorearray[i]);
            // if (sortedarray[x] === highScorearray[i].score) {
            //     console.log("inside if statement - sorting...");
            //     var score = highScorearray[i].score;
            //     var initials = highScorearray[i].initials;
            //     var highScorestring = { score: score, initials: initials };
            //     highScorehold = highScorestring;
            //     console.log("highScorehold = " + highScorehold);
            //     highScorearray.push(highScorehold);
            // }
        }
    }
    // localStorage.setItem("highScore", JSON.stringify(highScorearray));
    // window.location.href = "highscores.html";

}