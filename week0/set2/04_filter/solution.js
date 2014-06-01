"use strict";

var filter = function(f, arr) {
    var result = [];

    arr.forEach(function(value, index, arr) {
        if(f(value, index, arr)) {
            result.push(value);
        }
    });

    return result;
};

exports.filter = filter;
