"use strict";

var pluck = function(property, arr) {
    return arr.map(function(object) {
        return object[property];
    });
};

exports.pluck = pluck;
