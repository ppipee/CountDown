var time = 0;
var time_present = 0;
var pause = false;
$(document).ready(function () {
    $("#settime").on("keypress", function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            setTime();
            start();
        }
    });

    $("#clear").on("click", function () {
        console.log($("#clear:checked").val());
        if ($("#clear:checked").val() == "on") { $(".switch-wrap").css({ "background": "linear-gradient(to left, #bbecff 0%, #6bc4ff 100%)" }); }
        else {
            $(".switch-wrap").css({ "background": "rgba(255, 255, 255, 0.404)" });
        }
    })

    $("#start").on("click", function () {
        setTime();
        start();
    });
    $("#stop").on("click", function () {
        time_present = 0;
        clear();
    });
    $("#pause").on("click", function () {
        pause = !pause;
        if (!pause)
            start();
        else if (pause)
            time = time_present;
    })

    $("#pause").hide();

});

function start() {
    if (isFinite(time) && time > 0) {
        console.log(time)
        $("#time").text(time);
        showStart();
        setHeight(60);
        time_present = time;
        setTimeout(countDown, 1000);
    }
}

function showStart() {
    $("#time").show();
    $("#pause").show();
    $("#start").hide();
    $(".inputs").hide();
}

function showStop() {
    $("#time").hide();
    $("#pause").hide();
    $("#start").show();
    $(".inputs").show();
}

function setHeight(height) {
    $("#start").css({ "height": height + "px" })
    $("#stop").css({ "height": height + "px" })
    $("#pause").css({ "height": height + "px" })

    // $("#" + id).css({ "height": height + "px" })
}

function clear() {
    pause = false;
    showStop();
    setHeight(80);
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
    if (time_present >= 0 && !pause) {
        setTimeout(countDown, 1000);
        $("#time").text(time_present);
        if (time_present == 0) {
            setTimeout(clear, 1000)
        }
    }

}
