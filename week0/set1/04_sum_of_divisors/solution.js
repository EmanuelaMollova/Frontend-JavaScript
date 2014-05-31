"use strict";

var sumOfDivisors = function(n) {
    return findDivisors(n).reduce(function(a, b) {
        return a + b;
    });
};

var findDivisors = function(n) {
    return Array.apply(null, new Array(n)).map(function (_, i) {
        return i + 1;
    }).filter(function(number) {
        return n % number === 0;
    });
};

exports.sumOfDivisors = sumOfDivisors;
