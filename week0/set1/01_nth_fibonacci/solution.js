"use strict";

var nthFibonacci = function(n) {
    return n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
};

exports.nthFibonacci = nthFibonacci;
