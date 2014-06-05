"use strict";

var contains = require("./solution").contains;

exports.testForArraysWithTheElement = function(test) {
    test.equal(true, contains(1, [1, 2, 3]));
    test.equal(true, contains('Anakin', ['Amidala', 'Anakin']));
    test.done();
};

exports.testForArraysWithoutTheElement = function(test) {
    test.equal(false, contains(5, [1, 2, 3]));
    test.equal(false, contains('Anakin Skywalker', ['Amidala', 'Anakin']));
    test.equal(
        false,
        contains({'a': 7}, ['Amidala', 'Anakin', 1, [1, 2], {'a': 0}, 3])
    );
    test.done();
};
