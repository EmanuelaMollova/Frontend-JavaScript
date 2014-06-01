"use strict";

var reduce = require("./solution").reduce;

exports.tests = function(test) {
    var reduced1 = reduce(function(acc, next) {
        return acc + next;
    }, 0, [1, 2, 3]);

    var reduced2 = reduce(function(acc, next) {
        return acc && next;
    }, false, [true]);

    var reduced3 = reduce(function(acc, next) {
        return acc * next;
    }, 2, [3, 4, 5]);

    test.equal(6, reduced1);
    test.equal(false, reduced2);
    test.equal(120, reduced3);
    test.done();
};
