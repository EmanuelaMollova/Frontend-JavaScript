"use strict";

var containsAll = require("./solution").containsAll;

exports.testForArraysWithTheElement = function(test) {
    test.deepEqual(true, containsAll([1, 2, 3], [1, 2, 3, 4, 5]));
    test.deepEqual(
        true,
        containsAll(['Amidala', 'Anakin'], ['Amidala', 'Anakin'])
    );
    test.deepEqual(true, containsAll(['Anakin'], ['Amidala', 'Anakin']));
    test.done();
};

exports.testForArraysWithoutTheElement = function(test) {
    test.deepEqual(false, containsAll([5], [1, 2, 3]));
    test.deepEqual(false, containsAll([1, 2, 3], [1, 2]));
    test.done();
};
