"use strict";

// It doesn't work for objects and I refuse to inmplement it!
var contains = function(element, arr) {
    return arr.some(function(item) {
        return item === element;
    });
};

exports.contains = contains;
