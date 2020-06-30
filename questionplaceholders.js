function qph(z) {

    if (firstTime === 1) {

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

        // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

        var submitb = document.createElement("button");
        submitb.setAttribute("id", "submitmca");
        submitb.innerHTML = "Submit Answer and goto next question";
        document.body.appendChild(submitb);


        var blankline = document.createElement("br");
        document.body.appendChild(blankline);

        document.getElementById("submitmca").addEventListener("click", function(event) {
            submit()
        });

        // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

        var blankline = document.createElement("br");
        document.body.appendChild(blankline);

        rightorwrong = document.createElement("div");
        rightorwrong.setAttribute("id", "rorw");
        document.body.append(rightorwrong);

        var blankline = document.createElement("br");
        document.body.appendChild(blankline);

        // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

        scoreplace = document.createElement("div");
        scoreplace.setAttribute("id", "s");
        document.body.append(scoreplace);

        var blankline = document.createElement("br");
        document.body.appendChild(blankline);

        // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        firstTime = 0;

    }
}