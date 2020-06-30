writequestions();

var val = "";
var z = 0;
firstTime = 0;
score = 0;

function writeqandmc(z) {

    console.log("z = " + z);
    var pushquestion = document.getElementById("q");
    var pushmc1 = document.getElementById("c1");
    var pushmc2 = document.getElementById("c2");
    var pushmc3 = document.getElementById("c3");
    var pushmc4 = document.getElementById("c4");

    // console.log("z = " + z);

    // console.log(questions[z].qu);
    // Display current question and choices
    pushquestion.innerHTML = questions[z].qu;
    pushmc1.innerHTML = questions[z].mc1;
    pushmc2.innerHTML = questions[z].mc2;
    pushmc3.innerHTML = questions[z].mc3;
    pushmc4.innerHTML = questions[z].mc4;
}

function submit() {

    var pushscore = document.getElementById("s");
    var pushrorw = document.getElementById("rorw");

    event.preventDefault();
    var radios = document.getElementsByName('choice');
    for (var x = 0, length = radios.length; x < length; x++) {
        // console.log("x = " + x);
        // console.log("length = " + length);
        // console.log("radios[x].checked = " + radios[x].checked);
        if (radios[x].checked) {
            val = radios[x].value;
            // console.log("**val** = " + val);
            break;
        }
    }
    // console.log("z = " + z);
    // console.log("val = " + val);
    // console.log("questions[z].a = " + questions[z].a);
    if (questions[z].a === val) {
        // alert('Correct Answer');
        pushrorw.innerHTML = ("Your Answer is Correct...")
        score++
        pushscore.innerHTML = ("Score = " + score);
    } else {
        // alert('Answer is not Correct');
        pushrorw.innerHTML = ("Your Answer is Not Correct...")

    }

    z++;

    if (z < questions.length) {
        var radiochoose = document.getElementsByName("choice");
        for (var i = 0; i < radiochoose.length; i++)
            radiochoose[i].checked = false;

        writeqandmc(z);
    } else {
        // storescore();
    }

}

function cleanuphtml() {

    var lista = document.body.childNodes;
    for (var i = lista.length - 1; i >= 0; i--) {
        document.body.removeChild(lista[i])
    }
}

startquiz.addEventListener("click", function(event) {
    event.preventDefault();
    cleanuphtml(); //clear the page
    firstTime = 1;
    qph(); //write question place holders
    writeqandmc(z);
})