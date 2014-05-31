"use strict";

var primeNumberOfDivisors = require("./solution").primeNumberOfDivisors;

exports.testForEigth = function(test) {
    test.equal(false, primeNumberOfDivisors(8));
    test.done();
};

exports.testForSeven = function(test) {
    test.equal(true, primeNumberOfDivisors(7));
    test.done();
};

exports.testForNine = function(test) {
    test.equal(true, primeNumberOfDivisors(9));
    test.done();
};
