"use strict";

var sum = function(a, b) {
    return sumForType(a, b, 'number');
};

var sumForType = function(a, b, type) {
    if (typeof a === type && typeof b === type) {
        return a + b;
    } else {
        throw new TypeError('Both arguments should be ' + type + 's.');
    }
};

exports.sum = sum;
