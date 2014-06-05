"use strict";

var find = require("./solution").find;

exports.testFindWhenElementIsThere = function(test) {
    test.deepEqual([1], find(function(x) {
        return x === 1;
    }, [1,2,3,4,5,6]));

    test.deepEqual(['Emi'], find(function(x) {
        return x.slice(0, 1) === 'E';
    }, ['emi', 'Emi', 'Emil']));

    test.done();
};

exports.testFindWhenElementIsNotThere = function(test) {
    test.deepEqual(undefined, find(function(x) {
        return x === 1;
    }, [2,3,4,5,6]));

    test.deepEqual(undefined, find(function(x) {
        return x.slice(0, 1) === 'E';
    }, ['emi', 'Mila', 'Ivan']));

    test.done();
};
