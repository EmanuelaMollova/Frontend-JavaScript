"use strict";

var groupBy = require("./solution").groupBy;

exports.testGroupBy = function(test) {
    var
        array1  = [1, -2, 5],
        result1 = groupBy(function(x) {
            return x === 5;
        }, array1),

        array2  = ['Emi', 'Ivan', 'Petyr', 'Emil', 'Anelia', 'Anna', 'Asen'],
        result2 = groupBy(function(word) {
            return word.slice(0, 1);
        }, array2),
        object2 = {
            'E': ['Emi', 'Emil'],
            'I': ['Ivan'],
            'P': ['Petyr'],
            'A': ['Anelia', 'Anna', 'Asen']
        };

    test.deepEqual({'false': [1, -2], 'true': [5]}, result1);
    test.deepEqual(object2, result2);
    test.done();
};
