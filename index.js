var time = 0;
var time_present = 0;
$(document).ready(function () {
    $("#settime").on("keypress", function () {
        setTime();
        start();
    });

    $("#start").on("click", function () {
        setTime();
        start();
    });
    $("#stop").on("click", function () {
        time_present = 0;
        clear();
    });
});

function start() {
    if (isFinite(time) && time > 0) {
        console.log(time)
        $("#time").text(time);
        $("#time").show();
        $(".inputs").hide();
        $("#start").css({ "height": "60px" })
        $("#stop").css({ "height": "60px" })
        time_present = time;
        setTimeout(countDown, 1000);
    }
}
function clear() {
    $("#time").hide();
    $(".inputs").show();
    $("#start").css({ "height": "80px" })
    $("#stop").css({ "height": "80px" })
    if ($("#clear:checked").val() == "on") {
        $("#settime").val(0);
        time = 0;
    }
}

function setTime() {
    time = $("#settime").val()
    time = time > 0 && time < 10000 ? time : 0;
    console.log(time);
}

function countDown() {
    time_present -= 1;
    console.log(time_present)
    if (time_present >= 0) {
        setTimeout(countDown, 1000);
        $("#time").text(time_present);
        if (time_present == 0) {
            setTimeout(clear, 1000)
        }
    }

}
