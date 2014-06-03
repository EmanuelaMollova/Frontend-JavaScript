"use strict";

var zip = require("./solution").zip;

exports.testZipForArraysWithEqualLength = function(test) {
    test.deepEqual([[1, 'a'], [2, 'b']], zip([1, 2], ['a', 'b']));
    test.deepEqual([[1, 'a', 3]], zip([1], ['a'], ['3']));
    test.done();
};

exports.testZipForArraysWhenSecondIsLonger = function(test) {
    test.deepEqual([[1, 'a']], zip([1], ['a', 'b']));
    test.deepEqual([[1, 'a', undefined]], zip([1], ['a', 'b'], []));
    test.done();
};

exports.testZipForArraysWhenFirstIsLonger = function(test) {
    test.deepEqual(
        [[1, 'a'], [2, 'b'], [3, undefined], [4, undefined]],
        zip([1, 2, 3, 4], ['a', 'b'])
    );
    test.done();
};
