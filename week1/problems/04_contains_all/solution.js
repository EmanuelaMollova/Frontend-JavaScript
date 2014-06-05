"use strict";

// It doesn't work for objects and I refuse to implement it!
var containsAll = function(elements, arr) {
    return elements.every(function(element) {
        return contains(element, arr);
    });
};

var contains = function(element, arr) {
    return arr.some(function(item) {
        return item === element;
    });
};

exports.containsAll = containsAll;
