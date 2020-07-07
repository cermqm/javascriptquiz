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

// write questions function to write questions into placeholders - input z - z in incremented to move to next question...
writequestions();

function writeqandmc(z) {

    $('#q').html(questions[z].qu);
    $('#c1').html(questions[z].mc1);
    $('#c2').html(questions[z].mc2);
    $('#c3').html(questions[z].mc3);
    $('#c4').html(questions[z].mc4);

}

// submit function to pull slection from radio buttons and compare to answer
// It also increment score if correct - take 30 seconds off of the clock if wrong...
// The function also checks the timer and if <= 0 - stops quiz...
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

// function write score - calls storeHighScore to write scores to local Storage...
function writescore(ini) {
    storeHighScore(score, ini);
}


// function cleanuphtml() {

//     var lista = document.body.childNodes;
//     for (var i = lista.length - 1; i >= 0; i--) {
//         document.body.removeChild(lista[i])
//     }
// }

// Start quit function -sets firsttime variable and calls qph, starttimer and writeqandmc...
function startq() {
    // var z = 0;
    var firstTime = 1;
    qph(firstTime); //write question place holders
    starttimer();
    writeqandmc(z);

}

init();

// init function to pull highscores if there are any and put into highScorearray...
function init(parameter) {
    var storedHighScore = JSON.parse(localStorage.getItem("highScore"));
    if (storedHighScore !== null) {
        highScorearray = storedHighScore;

    }
}

// function to store the high scores in local Storage...
function storeHighScore(score, initials) {
    var highScorestring = { score: score, initials: initials };
    highScorehold = highScorestring;
    highScorearray.push(highScorehold);
    localStorage.setItem("highScore", JSON.stringify(highScorearray));
    window.location.href = "highscores.html";
}