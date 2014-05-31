"use strict";

var isPrime = require("./solution").isPrime;

exports.testOne = function(test) {
  test.equal(false, isPrime(1));
  test.done();
};

exports.testForPrimeNumber = function(test) {
  test.equal(true, isPrime(2));
  test.done();
};

exports.testForNotPrimeNumber = function(test) {
  test.equal(false, isPrime(8));
  test.done();
};

exports.testForNegativeNumber = function(test) {
  test.equal(false, isPrime(-10));
  test.done();
};
