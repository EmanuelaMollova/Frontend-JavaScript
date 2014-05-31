"use strict";

var sumOfDigits = require("./solution").sumOfDigits;

exports.testSumForLongNumber = function(test) {
    test.equal(43, sumOfDigits(1325132435356));
    test.done();
};

exports.testSumForOneTwoThree = function(test) {
    test.equal(6, sumOfDigits(123));
    test.done();
};

exports.testSumForSix = function(test) {
    test.equal(6, sumOfDigits(6));
    test.done();
};

exports.testSumForNegative = function(test) {
    test.equal(1, sumOfDigits(-10));
    test.done();
};
