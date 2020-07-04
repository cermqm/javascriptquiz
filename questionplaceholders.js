function qph(z) {

    if (firstTime === 1) {

        $("h2").insertAfter("#insidecard").attr({ id: "q" });

        // ------------------------------------------------------------------------------------

        $("<input>").insertAfter("#q").attr({ type: "radio", name: "choice", value: "A", id: "radioc1" });
        $("<label>").insertAfter("#radioc1").attr({ for: "radio1", id: "c1" });

        // ------------------------------------------------------------------------------------

        $("<div>").insertAfter("#c1").attr({ id: "c11" });
        $("<input>").insertAfter("#c11").attr({ type: "radio", name: "choice", value: "B", id: "radioc2" });
        $("<label>").insertAfter("#radioc2").attr({ for: "radio2", id: "c2" });

        // ------------------------------------------------------------------------------------

        $("<div>").insertAfter("#c2").attr({ id: "c22" });
        $("<input>").insertAfter("#c22").attr({ type: "radio", name: "choice", value: "C", id: "radioc3" });
        $("<label>").insertAfter("#radioc3").attr({ for: "radio3", id: "c3" });

        // ------------------------------------------------------------------------------------

        $("<div>").insertAfter("#c3").attr({ id: "c33" });
        $("<input>").insertAfter("#c33").attr({ type: "radio", name: "choice", value: "D", id: "radioc4" });
        $("<label>").insertAfter("#radioc4").attr({ for: "radio4", id: "c4" });

        // ------------------------------------------------------------------------------------

        $("<div>").insertAfter("#c4").attr({ id: "c44" }).html("</br>");
        $("<h2>").insertAfter("#c44").attr({ id: "submitmca", type: "button", class: "btn btn-success" }).html("Submit Answer and goto next question");
        $("#submitmca").on("click", function() {
            submit();
        });

        // ------------------------------------------------------------------------------------

        $("<div>").insertAfter("#submitmca").attr({ id: "rightorwrong" });
        $("<div>").insertAfter("#rightorwrong").attr({ id: "rorw" });

        // ------------------------------------------------------------------------------------

        $("<div>").insertAfter("#rorw").attr({ id: "rorw2" }).html("</br>");
        $("<div>").insertAfter("#rorw2").attr({ id: "s" });

        // ------------------------------------------------------------------------------------

        $("<div>").insertAfter("#s").attr({ id: "s2" }).html("</br>");
        $("<div>").insertAfter("#s2").attr({ id: "t" }).html(" Seconds Left...");

        //------------------------------------------------------------------------------------

        pushhighScore = document.createElement("h2");
        pushhighScore.setAttribute("id", "dhS");
        document.body.append(pushhighScore);

        $("body").append("</br>");

        firstTime = 0;

    }
}