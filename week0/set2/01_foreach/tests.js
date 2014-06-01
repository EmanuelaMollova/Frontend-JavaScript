"use strict";

var forEach = require("./solution").forEach;

exports.testWithArray = function(test) {
    var array = [1];

    forEach(function(value, index, arr) {
        arr[index] = 2;
    }, array);

    test.deepEqual([2], array);

    test.done();
};

exports.testWithObject = function(test) {
    var
        info = {
            "name" : "Emi",
            "age" : 21
        },
        result = [];

    forEach(function(value, key) {
        result.push(value);
    }, info);

    test.deepEqual(["Emi", 21], result);

    test.done();
};
