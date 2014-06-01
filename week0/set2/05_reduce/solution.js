"use strict";

var reduce = function(f, initial, arr) {
    var accum = initial;

    arr.forEach(function(elem) {
        accum = f(accum, elem);
    });

    return accum;
};

exports.reduce = reduce;
