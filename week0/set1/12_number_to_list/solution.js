"use strict";

var numberToList = function(n) {
    return numberToChars(n).map(function(char) {
        return parseInt(char, 10);
    });
};


var numberToChars = function(number) {
    return number.toString().split("");
};

exports.numberToList = numberToList;
