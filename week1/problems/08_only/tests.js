"use strict";

var only = require("./solution").only;

exports.testWhenValueIsContained = function(test) {
    test.equal(true, only('number', [1, 2, 3]));
    test.equal(true, only('string', ['a', '']));
    test.equal(true, only('object', [[1, 2], {'a': 3}]));
    test.equal(true, only('function', [function(){}]));
    test.equal(true, only('boolean', [true, false, false]));
    test.done();
};

exports.testWhenValueIsNotContained = function(test) {
    test.equal(false, only('number', [1, '', 3]));
    test.equal(false, only('string', ['a', 0]));
    test.equal(false, only('object', [1, {'a': 3}]));
    test.equal(false, only('function', [1, function(){}]));
    test.equal(false, only('boolean', [true, false, false, 0]));
    test.done();
};
