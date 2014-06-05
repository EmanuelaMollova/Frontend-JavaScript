"use strict";

var countBy = require("./solution").countBy;

exports.testCountBy = function(test) {
    var
        array1  = [1, -2, 5],
        result1 = countBy(function(x) {
            return x === 5;
        }, array1),

        array2  = ['Emi', 'Ivan', 'Petyr', 'Emil', 'Anelia', 'Anna', 'Asen'],
        result2 = countBy(function(word) {
            return word.slice(0, 1);
        }, array2),
        object2 = {'E': 2, 'I': 1, 'P': 1, 'A': 3};

    test.deepEqual({'false': 2, 'true': 1}, result1);
    test.deepEqual(object2, result2);
    test.done();
};

