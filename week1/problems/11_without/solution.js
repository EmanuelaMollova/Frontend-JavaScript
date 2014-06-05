"use strict";

var without = function(exclude, arr) {
    return arr.filter(function(element) {
        return !contains(element, exclude);
    });
};

var contains = function(element, arr) {
    return arr.some(function(item) {
        return item === element;
    });
};

exports.without = without;
