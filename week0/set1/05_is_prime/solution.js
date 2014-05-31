"use strict";

var isPrime = function(n) {
    return n < 2 ? false : findDivisors(n).length === 2;
};

var findDivisors = function(n) {
    return Array.apply(null, new Array(n)).map(function (_, i) {
        return i + 1;
    }).filter(function(number) {
        return n % number === 0;
    });
};

exports.isPrime = isPrime;
