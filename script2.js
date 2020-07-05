// Declare Global Variables
var highScoreList = document.querySelector("#hs");
var highScore = [];
var dhighScore = document.querySelector("#dhS")


var z = 0;
firstTime = 0;
score = 0;
timeleft = 450;
var ini = "";

writequestions();


// changing to jquery methods...

function writeqandmc(z) {
    // console.log("questions[z].qu = " + questions[z].qu);

    $('#q').html(questions[z].qu);
    $('#c1').html(questions[z].mc1);
    $('#c2').html(questions[z].mc2);
    $('#c3').html(questions[z].mc3);
    $('#c4').html(questions[z].mc4);

    renderHighScore();

}

function submit() {

    var val = "";

    event.preventDefault();
    var radios = document.getElementsByName('choice');
    for (var x = 0, length = radios.length; x < length; x++) {
        if (radios[x].checked) {
            val = radios[x].value;
            // console.log("val = " + val);
            break;
        }
    }
    // console.log("z = " + z);
    // console.log("val = " + val);
    // console.log("questions[z] = " + questions[z].a);
    if (questions[z].a === val) {
        // console.log("questions[z].a = " + questions[z].a);
        $("#rorw").html("Your Answer is Correct...")
        score++
        $("#s").html("Score = " + score);
    } else {
        $("#rorw").html("Your Answer is Not Correct...")
        timeleft = timeleft - 30;
    }

    z++;
    console.log("z = " + z);
    console.log("questions.length = " + questions.length);
    console.log("timeleft = " + timeleft);
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

        // var saveb = document.createElement("button");
        // saveb.setAttribute("id", "savehs");
        // saveb.innerHTML = "Save";
        // document.body.appendChild(saveb);

        // $("body").append("</br>");


        // document.getElementById("savehs").addEventListener("click", function(event) {
        //     // var initials = document.getElementById("ini").innerHTML;
        //     var initials = document.querySelector("#ini");
        //     console.log("initials in save button = " + initials.value);
        //     writescore(initials.value);
        // });

        // ------------------------------------------------------------------------------------


    }
    val = "";

}

function writescore(ini) {
    storeHighScore(score, ini);
    // renderHighScore();
}

function cleanuphtml() {

    var lista = document.body.childNodes;
    for (var i = lista.length - 1; i >= 0; i--) {
        document.body.removeChild(lista[i])
    }
}

function startq() {
    // event.preventDefault();
    // cleanuphtml(); //clear the page
    firstTime = 1;
    qph(); //write question place holders
    starttimer();
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

    // pushhighScoreLabel = document.createElement("h2");
    // pushhighScoreLabel.innerHTML = "High Scores";
    // document.body.append(pushhighScoreLabel);

    // var dhighScore = document.querySelector("#dhS")
    // dhighScore.innerHTML = "";
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