"use strict";

var only = function(type, arr) {
    return arr.every(function(element) {
        return typeof element === type;
    });
};

exports.only = only;
