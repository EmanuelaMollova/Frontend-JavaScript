"use strict";

var concat = function(a, b) {
    return sumForType(a, b, 'string');
};

var sumForType = function(a, b, type) {
    if (typeof a === type && typeof b === type) {
        return a + b;
    } else {
        throw new TypeError('Both arguments should be ' + type + 's.');
    }
};

exports.concat = concat;
