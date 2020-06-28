var questions = [{
        qu: "Which of the following is correct about JavaScript?",
        mc1: "A - JavaScript is a lightweight, interpreted programming language.",
        mc2: "B - JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
        mc3: "C - The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.",
        mc4: "D - All of the above.",
        a: "D"
    }]
    // }, {
    //     q: "",
    //     mc1: "",
    //     mc2: "",
    //     mc3: "",
    //     mc4: "",
    //     a: ""
    // }];

var pushquestion = document.getElementById("q");
var pushmc1 = document.getElementById("c1");
var pushmc2 = document.getElementById("c2");
var pushmc3 = document.getElementById("c3");
var pushmc4 = document.getElementById("c4");

// Loop over every question object
for (var i = 0; i < questions.length; i++) {
    // Display current question and choices
    pushquestion.innerHTML = questions[i].qu;
    pushmc1.innerHTML = questions[i].mc1;
    pushmc2.innerHTML = questions[i].mc2;
    pushmc3.innerHTML = questions[i].mc3;
    pushmc4.innerHTML = questions[i].mc4;

};