"use strict";

var isNumberBalanced = function(n) {
    var numberToChars = n.toString().split(""),
        half = parseInt(numberToChars.length / 2, 10);

    if (numberToChars.length === 1) {
        return true;
    } else {
        var left  = numberToChars.slice(0, half),
            rigth = numberToChars.slice(-half);

        return sumOfChars(left) === sumOfChars(rigth);
    }
};

var sumOfChars = function (arr) {
    return arr.map(function(char) {
        return parseInt(char, 10);
    }).reduce(function(a, b) {
        return a + b;
    });
};

exports.isNumberBalanced = isNumberBalanced;
