// Declare Global Variables
var highScoreList = document.querySelector("#hs");
var dhighScore = document.querySelector("#dhS")


var z = 0;
firstTime = 0;
score = 0;
var timeleft = 450;
var ini = "";

startpage();

function startpage() {

    $("<h2>").insertAfter("#insidecard").attr({ id: "th2" }).html("JavaScript Quiz!!");
    $("<div>").insertAfter("#th2").attr({ id: "th22" }).html("</br>");
    $("<h2>").insertAfter("#th22").attr({ id: "th3" }).html("Click Start to begin...");
    $("<div>").insertAfter("#th3").attr({ id: "th33" }).html("</br></br>");
    $("<h2>").insertAfter("#th33").attr({ id: "startquiz", type: "button", class: "btn btn-success" }).html("Start");
    $("#startquiz").on("click", function() {
        window.location.href = "question.html";
    });
}