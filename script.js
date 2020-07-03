// Declare Global Variables
var highScoreList = document.querySelector("#hs");
// var highScore = ["0 ------ default"];
var highScore = [];
var dhighScore = document.querySelector("#dhS")

var val = "";
var z = 0;
firstTime = 0;
score = 0;
var timeleft = 450;
var ini = "";

writequestions();
startpage();

function writeqandmc(z) {

    var pushquestion = document.getElementById("q");
    var pushmc1 = document.getElementById("c1");
    var pushmc2 = document.getElementById("c2");
    var pushmc3 = document.getElementById("c3");
    var pushmc4 = document.getElementById("c4");

    // Display current question and choices
    pushquestion.innerHTML = questions[z].qu;
    pushmc1.innerHTML = questions[z].mc1;
    pushmc2.innerHTML = questions[z].mc2;
    pushmc3.innerHTML = questions[z].mc3;
    pushmc4.innerHTML = questions[z].mc4;

    renderHighScore();

}

function submit() {

    var pushscore = document.getElementById("s");
    var pushrorw = document.getElementById("rorw");
    var pushtimerplace = document.getElementById("t");

    event.preventDefault();
    var radios = document.getElementsByName('choice');
    for (var x = 0, length = radios.length; x < length; x++) {
        if (radios[x].checked) {
            val = radios[x].value;
            break;
        }
    }

    if (questions[z].a === val) {
        pushrorw.innerHTML = ("Your Answer is Correct...")
        score++
        pushscore.innerHTML = ("Score = " + score);
    } else {
        pushrorw.innerHTML = ("Your Answer is Not Correct...")
        timeleft = timeleft - 30;
        pushtimerplace.innerHTML = "Time remaining = " + (timeleft) + " seconds";

    }


    z++;

    if ((z < questions.length) && (timeleft !== 0)) {
        var radiochoose = document.getElementsByName("choice");
        for (var i = 0; i < radiochoose.length; i++)
            radiochoose[i].checked = false;

        writeqandmc(z);
    } else {
        // cleanuphtml();
        //------------------------------------------------------------------------------------

        initialsplace = document.createElement("input");
        initialsplace.setAttribute("id", "ini");
        initialsplace.innerHTML = "Enter your initials and click to save high score";
        initialsplace.autofocus = true;
        document.body.append(initialsplace);

        var blankline = document.createElement("br");
        document.body.appendChild(blankline);

        var blankline = document.createElement("br");
        document.body.appendChild(blankline);

        // ------------------------------------------------------------------------------------

        var saveb = document.createElement("button");
        saveb.setAttribute("id", "savehs");
        saveb.innerHTML = "Save";
        document.body.appendChild(saveb);

        var blankline = document.createElement("br");
        document.body.appendChild(blankline);

        document.getElementById("savehs").addEventListener("click", function(event) {
            // var initials = document.getElementById("ini").innerHTML;
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
    renderHighScore();

}


function cleanuphtml() {

    var lista = document.body.childNodes;
    for (var i = lista.length - 1; i >= 0; i--) {
        document.body.removeChild(lista[i])
    }
}

function startpage() {

    // ------------------------------------------------------------------------------------

    titleplace = document.createElement("h2");
    titleplace.setAttribute("id", "th2");
    titleplace.innerHTML = "Javascript quiz!!";
    document.body.append(titleplace);

    // ------------------------------------------------------------------------------------

    titleplace = document.createElement("h2");
    titleplace.setAttribute("id", "th2");
    titleplace.innerHTML = "Click Start to begin...";
    document.body.append(titleplace);

    var startb = document.createElement("button");
    startb.setAttribute("id", "startquiz");
    startb.innerHTML = "Start";
    document.body.appendChild(startb);

    var blankline = document.createElement("br");
    document.body.appendChild(blankline);


    document.getElementById("startquiz").addEventListener("click", function(event) {
        startq();
    });

    // });

    // ------------------------------------------------------------------------------------

}

function startq() {
    event.preventDefault();
    cleanuphtml(); //clear the page
    firstTime = 1;
    qph(); //write question place holders
    // var iniinput = document.getElementById("ini");
    // console.log(ini);

    var pushtimerplace = document.getElementById("t");
    pushtimerplace.innerHTML = "Time remaining = " + (timeleft) + " seconds";
    writeqandmc(z);

}

init();
console.log("highScore" + highScore);

function init(parameter) {
    var storedHighScore = JSON.parse(localStorage.getItem("highScore"));
    console.log("storedHighScore = " + storedHighScore);
    if (storedHighScore !== null) {
        highScore = storedHighScore;
    }
}

function storeHighScore(score, ini) {
    console.log("Score = " + score);
    console.log("initials = " + ini);
    writeHighScore = score + " ------ " + ini;
    console.log("writeHighScore = " + writeHighScore);
    console.log("highScore = " + highScore);
    highScore.push(writeHighScore);
    localStorage.setItem("highScore", JSON.stringify(highScore));
    console.log("highScore = " + highScore);
}

function renderHighScore() {

    // var lihighScore = document.createElement("h2");
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
    // dhighScore.innerHTML = lihighScore.textContent;
    dhighScore.appendChild(container);
}


button.getElementById("startquiz").addEventListener("click", function(event) {
    event.preventDefault();
    var element = event.target;

    if (element.matches("button") === true) {
        var index = element.parentElement.getAttribute("data-index");
        highScores.splice(index, 1);
        storeHighScore();
        renderHighScore();
    }

});