"use strict";

$(document).ready(function() {
    var interval;

    $('#count-up').on('click', function() {
        interval = count(interval, 0, 1, getSeconds());
    });

    $('#count-down').on('click', function() {
        interval = count(interval, getSeconds(), -1, 0);
    });

    $('#stop-button').on('click', function() {
        clearInterval(interval);

        $('#timer').children().each(function() {
            $(this).text(0);
        });
    });
});

function getSeconds() {
    var minutes = parseInt($('#minutes').val(), 10) || 0;
    return minutes * 60  + parseInt(($('#seconds').val() || 0), 10);
}

function count(interval, current, step, end) {
    clearInterval(interval);
    setDigits(current);

    return setInterval(function() {
        if(current === end) {
            clearInterval(interval);
            return;
        }

        current = current + step;
        setDigits(current);
    }, 1000);
}

var setDigits = function(seconds) {
    $('#minute-first-digit').text(parseInt(seconds / 600, 10) % 10);
    $('#minute-second-digit').text(parseInt(seconds / 60, 10) % 10);
    $('#second-first-digit').text(parseInt(seconds % 60 / 10, 10));
    $('#second-second-digit').text(seconds % 10);
};
