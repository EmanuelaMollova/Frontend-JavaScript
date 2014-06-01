"use strict";

var nthFibonacci = require("./solution").nthFibonacci;

exports.testFibonacciForOne = function(test) {
    test.equal(1, nthFibonacci(1));
    test.done();
};

exports.testFibonacciForTwo = function(test) {
    test.equal(1, nthFibonacci(2));
    test.done();
};

exports.testFibonacciForThree = function(test) {
    test.equal(2, nthFibonacci(3));
    test.done();
};

exports.testFibonacciForTen = function(test) {
    test.equal(55, nthFibonacci(10));
    test.done();
};
