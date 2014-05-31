"use strict";

var sumOfDigits = function(n) {
    return sumChars(numberToChars(Math.abs(n)));
};

var numberToChars = function(number) {
    return number.toString().split("");
};

var sumChars = function (arr) {
    return arr.map(function(char) {
        return parseInt(char, 10);
    }).reduce(function(a, b) {
        return a + b;
    });
};

exports.sumOfDigits = sumOfDigits;
