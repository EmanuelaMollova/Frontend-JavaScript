"use strict";

var map = function(f, arr) {
    var result = [];

    arr.forEach(function(value, index, arr) {
        result.push(f(value, index, arr));
    });

    return result;
};

exports.map = map;
