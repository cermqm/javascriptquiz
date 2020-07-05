// Declare Global Variables
var highScoreList = document.querySelector("#hs");
// var highScore = [];
var highScore = {};
var highScorehold = {};
var highScorearray = [];
var dhighScore = document.querySelector("#dhS")


var z = 0;
firstTime = 0;
score = 0;
timeleft = 450;
var ini = "";

writequestions();

function writeqandmc(z) {

    $('#q').html(questions[z].qu);
    $('#c1').html(questions[z].mc1);
    $('#c2').html(questions[z].mc2);
    $('#c3').html(questions[z].mc3);
    $('#c4').html(questions[z].mc4);

    // renderHighScore();

}

function submit() {

    var val = "";

    event.preventDefault();
    var radios = document.getElementsByName('choice');
    for (var x = 0, length = radios.length; x < length; x++) {
        if (radios[x].checked) {
            val = radios[x].value;
            break;
        }
    }

    if (questions[z].a === val) {
        $("#rorw").html("Your Answer is Correct...")
        score++
        $("#s").html("Score = " + score);
    } else {
        $("#rorw").html("Your Answer is Not Correct...")
        timeleft = timeleft - 30;
    }

    z++;
    // console.log("z = " + z);
    // console.log("questions.length = " + questions.length);
    // console.log("timeleft = " + timeleft);
    if ((z < questions.length) && (timeleft >= 0)) {
        var radiochoose = document.getElementsByName("choice");
        for (var i = 0; i < radiochoose.length; i++)
            radiochoose[i].checked = false;
        writeqandmc(z);
    } else {
        $("#submitmca").remove();
        $("<div>").insertAfter("#t2").attr({ id: "ini1" }).html("</br>");
        $("<input>").insertAfter("#ini1").attr({ type: "text", id: "ini" });
        $("<div>").insertAfter("#ini").attr({ id: "ini2" }).html("</br></br></br>");

        $("<h2>").insertAfter("#ini2").attr({ id: "ini3", type: "button", class: "btn btn-success" }).html("Enter your initials and click to save high score...");

        $("#ini3").on("click", function() {
            var initials = document.querySelector("#ini");
            console.log("initials in save button = " + initials.value);
            writescore(initials.value);
        });

        // ------------------------------------------------------------------------------------

    }
    val = "";

}

function writescore(ini) {
    storeHighScore(score, ini);
}

function cleanuphtml() {

    var lista = document.body.childNodes;
    for (var i = lista.length - 1; i >= 0; i--) {
        document.body.removeChild(lista[i])
    }
}

function startq() {
    firstTime = 1;
    qph(); //write question place holders
    starttimer();
    writeqandmc(z);

}

init();
console.log("highScore = " + highScore);

function init(parameter) {
    console.log("in init...")
    var storedHighScore = JSON.parse(localStorage.getItem("highScore"));
    console.log("storedHighScore = " + storedHighScore);
    if (storedHighScore !== null) {
        highScore = storedHighScore;
        console.log("highScore = " + highScore);
        console.log("highScore.score = " + highScore.score);
        console.log("highScore.initials = " + highScore.initials);

    }
}

function storeHighScore(score, initials) {
    console.log("Score = " + score);
    console.log("initials = " + initials);
    var highScorestring = '{ score: ' + score + ', initials: ' + initials + ' }';
    highScorehold = highScorestring;
    highScorearray.push(highScorehold);
    console.log("highScorearray = " + highScorearray);
    // writeHighScore = score + " ------ " + ini;
    // console.log("writeHighScore = " + writeHighScore);
    // console.log("highScore = " + highScore);
    // highScore.push(writeHighScore);
    localStorage.setItem("highScore", JSON.stringify(highScorearray));
    console.log("highScorearray = " + highScorearray);
    // console.log("highScore = " + highScore);
    window.location.href = "highscores.html";
}