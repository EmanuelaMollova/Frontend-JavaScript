"use strict";

$(document).ready(function() {
    var interval;

    $('#count-up').on('click', function() {
        interval = count({
            interval: interval,
            currentSeconds: 0,
            step: 1,
            endWhenSecondsReached: getSeconds()
        });
    });

    $('#count-down').on('click', function() {
        interval = count({
            interval: interval,
            currentSeconds: getSeconds(),
            step: -1,
            endWhenSecondsReached: 0
        });
    });

    $('#stop-button').on('click', function() {
        clearInterval(interval);
        setDigits(0);
    });
});

function getInputValue(selector) {
    return parseInt($(selector).val(), 10) || 0;
}

function getSeconds() {
    return getInputValue('#minutes') * 60 + getInputValue('#seconds');
}

function count(config) {
    clearInterval(config.interval);
    setDigits(config.currentSeconds);

    return setInterval(function() {
        if(config.currentSeconds === config.endWhenSecondsReached) {
            clearInterval(config.interval);
            return;
        }

        config.currentSeconds = config.currentSeconds + config.step;
        setDigits(config.currentSeconds);
    }, 1000);
}

var setDigits = function(seconds) {
    $('#minute-first-digit').text(parseInt(seconds / 600, 10) % 10);
    $('#minute-second-digit').text(parseInt(seconds / 60, 10) % 10);
    $('#second-first-digit').text(parseInt(seconds % 60 / 10, 10));
    $('#second-second-digit').text(seconds % 10);
};
