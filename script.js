var questions = [{
    qu: "Which of the following is correct about JavaScript?",
    mc1: "A - JavaScript is a lightweight, interpreted programming language.",
    mc2: "B - JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
    mc3: "C - The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.",
    mc4: "D - All of the above.",
    a: "D"
}, {
    qu: "How can you get the total number of arguments passed to a function",
    mc1: "A - Using args.length property",
    mc2: "B - Using arguments.length property",
    mc3: "C - Both of the above",
    mc4: "D - None of the above",
    a: "B"
}];
console.log(questions);

var val = "";
var z = 0;

function writeqandmc(z) {

    document.body.append(Object.assign(document.createElement("h2"), { id: "q" }));

    var blankline = document.createElement("br");
    document.body.appendChild(blankline);

    // ------------------------------------------------------------------------------------

    var radiob1 = document.createElement("input");
    radiob1.setAttribute("type", "radio");
    radiob1.setAttribute("name", "choice");
    radiob1.setAttribute("value", "A");
    radiob1.setAttribute("id", "radioc1");
    document.body.appendChild(radiob1);

    var radio1text = document.createElement("label");
    radio1text.setAttribute("for", "radio1");
    radio1text.setAttribute("id", "c1");
    document.body.appendChild(radio1text);

    var blankline = document.createElement("br");
    document.body.appendChild(blankline);

    // ------------------------------------------------------------------------------------

    var radiob2 = document.createElement("input");
    radiob2.setAttribute("type", "radio");
    radiob2.setAttribute("name", "choice");
    radiob2.setAttribute("value", "B");
    radiob2.setAttribute("id", "radioc1");
    document.body.appendChild(radiob2);

    var radio2text = document.createElement("label");
    radio2text.setAttribute("for", "radio1");
    radio2text.setAttribute("id", "c2");
    document.body.appendChild(radio2text);

    var blankline = document.createElement("br");
    document.body.appendChild(blankline);

    // ------------------------------------------------------------------------------------

    var radiob3 = document.createElement("input");
    radiob3.setAttribute("type", "radio");
    radiob3.setAttribute("name", "choice");
    radiob3.setAttribute("value", "C");
    radiob3.setAttribute("id", "radioc1");
    document.body.appendChild(radiob3);

    var radio3text = document.createElement("label");
    radio3text.setAttribute("for", "radio1");
    radio3text.setAttribute("id", "c3");
    document.body.appendChild(radio3text);

    var blankline = document.createElement("br");
    document.body.appendChild(blankline);

    // ------------------------------------------------------------------------------------

    var radiob4 = document.createElement("input");
    radiob4.setAttribute("type", "radio");
    radiob4.setAttribute("name", "choice");
    radiob4.setAttribute("value", "D");
    radiob4.setAttribute("id", "radioc1");
    document.body.appendChild(radiob4);

    var radio4text = document.createElement("label");
    radio4text.setAttribute("for", "radio1");
    radio4text.setAttribute("id", "c4");
    document.body.appendChild(radio4text);

    var blankline = document.createElement("br");
    document.body.appendChild(blankline);

    var blankline = document.createElement("br");
    document.body.appendChild(blankline);

    // ------------------------------------------------------------------------------------

    var submitb = document.createElement("button");
    submitb.setAttribute("id", "submitmca");
    submitb.innerHTML = "Submit Answer and goto next question";
    document.body.appendChild(submitb);


    var blankline = document.createElement("br");
    document.body.appendChild(blankline);

    // ------------------------------------------------------------------------------------


    // document.body.append(Object.assign(document.createElement("div"), { class: "wrapper-class" }));

    console.log("z = " + z);
    var pushquestion = document.getElementById("q");
    var pushmc1 = document.getElementById("c1");
    var pushmc2 = document.getElementById("c2");
    var pushmc3 = document.getElementById("c3");
    var pushmc4 = document.getElementById("c4");
    console.log("z = " + z);

    console.log(questions[z].qu);
    // Display current question and choices
    pushquestion.innerHTML = questions[z].qu;
    pushmc1.innerHTML = questions[z].mc1;
    pushmc2.innerHTML = questions[z].mc2;
    pushmc3.innerHTML = questions[z].mc3;
    pushmc4.innerHTML = questions[z].mc4;
}

submitmca.addEventListener("click", function(event) {
    event.preventDefault();
    var radios = document.getElementsByName('choice');
    for (var x = 0, length = radios.length; x < length; x++) {
        console.log("x = " + x);
        console.log("length = " + length);
        console.log("radios[x].checked = " + radios[x].checked);
        if (radios[x].checked) {
            val = radios[x].value;
            console.log("**val** = " + val);
            break;
        }
    }
    console.log("z = " + z);
    console.log("val = " + val);
    console.log("questions[z].a = " + questions[z].a);
    if (questions[z].a === val) {
        alert('Correct Answer');
    } else {
        alert('Answer is not Correct');
    }

    z++;

    if (z < questions.length) {
        var radiochoose = document.getElementsByName("choice");
        for (var i = 0; i < radiochoose.length; i++)
            radiochoose[i].checked = false;
        writeqandmc(z);
    }

})

startquiz.addEventListener("click", function(event) {
    event.preventDefault();
    writeqandmc(z);
})