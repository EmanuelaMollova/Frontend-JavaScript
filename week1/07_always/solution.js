"use strict";

var always = function(value) {
    return function() {
        return value;
    };
};

exports.always = always;
