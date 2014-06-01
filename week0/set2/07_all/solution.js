"use strict";

var all = function(pred, arr) {
    return arr.map(pred).reduce(function(a, b) {
        return a && b;
    });
};

exports.all = all;
