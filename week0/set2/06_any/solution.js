"use strict";

var any = function(pred, arr) {
    return arr.map(pred).reduce(function(a, b) {
        return a || b;
    });
};

exports.any = any;
