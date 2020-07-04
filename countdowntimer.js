function starttimer() {
    var countDown = function() {
        var $elem = $(this);
        var display = function() {
            $elem.text(timeleft--);
        }
        var iv = setInterval(function() {
            display();
            if (timeleft < 0) {
                clearInterval(iv);
                timeleft = 0;
                $("#t").each(countDown);
                return;
            }
        }, 1000);
        display();
    };
    $("#t").each(countDown);
}