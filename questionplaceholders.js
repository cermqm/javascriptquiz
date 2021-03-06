// Create place holders
// for questions, multiple choices, write or wrong Text, score and countdown TimeRanges...

function qph(firstTime) {

    console.log(firstTime);

    // Check for first call - if so - run...
    if (firstTime === 1) {

        // placeholder for question...
        $("h2").insertAfter("#insidecard").attr({ id: "q" });

        // ------------------------------------------------------------------------------------
        // placeholder for multiple choice A...
        $("<input>").insertAfter("#q").attr({ type: "radio", name: "choice", value: "A", id: "radioc1" });
        $("<label>").insertAfter("#radioc1").attr({ for: "radio1", id: "c1" });

        // ------------------------------------------------------------------------------------
        // placeholder for multiple choice B...
        $("<div>").insertAfter("#c1").attr({ id: "c11" });
        $("<input>").insertAfter("#c11").attr({ type: "radio", name: "choice", value: "B", id: "radioc2" });
        $("<label>").insertAfter("#radioc2").attr({ for: "radio2", id: "c2" });

        // ------------------------------------------------------------------------------------
        // placeholder for multiple choice C...
        $("<div>").insertAfter("#c2").attr({ id: "c22" });
        $("<input>").insertAfter("#c22").attr({ type: "radio", name: "choice", value: "C", id: "radioc3" });
        $("<label>").insertAfter("#radioc3").attr({ for: "radio3", id: "c3" });

        // ------------------------------------------------------------------------------------
        // placeholder for multiple choice D...
        $("<div>").insertAfter("#c3").attr({ id: "c33" });
        $("<input>").insertAfter("#c33").attr({ type: "radio", name: "choice", value: "D", id: "radioc4" });
        $("<label>").insertAfter("#radioc4").attr({ for: "radio4", id: "c4" });

        // ------------------------------------------------------------------------------------
        //paceholder for submit button...
        $("<div>").insertAfter("#c4").attr({ id: "c44" }).html("</br>");
        $("<h2>").insertAfter("#c44").attr({ id: "submitmca", type: "button", class: "btn btn-success" }).html("Submit Answer and goto next question");
        $("#submitmca").on("click", function() {
            submit();
        });

        // ------------------------------------------------------------------------------------
        //placeholder for write or wrong statement...
        $("<h4>").insertAfter("#submitmca").attr({ id: "rightorwrong" });
        $("<h4>").insertAfter("#rightorwrong").attr({ id: "rorw" });

        // ------------------------------------------------------------------------------------
        //placeholder for countdown timer...
        $("<h4>").insertAfter("#rorw").attr({ id: "rorw2" }).html("</br>");
        $("<h4>").insertAfter("#rorw2").attr({ id: "s" });

        // ------------------------------------------------------------------------------------

        $("<div>").insertAfter("#s").attr({ id: "s2" }).html("</br></br>");
        $("<h4>").insertAfter("#s2").attr({ id: "t" });
        $("<h4>").insertAfter("#t").attr({ id: "t2" }).html("Seconds Left ");

        //------------------------------------------------------------------------------------
        //Set variable to 0 to indicate we have already written the paceholders...
        firstTime = 0;

    }
}