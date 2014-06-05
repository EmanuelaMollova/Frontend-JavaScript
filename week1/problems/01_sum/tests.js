"use strict";

var sum = require("./solution").sum;

exports.testForNumbers = function(test) {
    test.equal(1, sum(1, 0));
    test.equal(10, sum(4, 6));
    test.equal(10.45, sum(5.45, 5));
    test.equal(3, sum(7, -4));
    test.done();
};

exports.testForOthers = function(test) {
    test.throws(
        function() {
            sum('', 3);
        },
        TypeError,
        'Both arguments should be numbers.'
    );
    test.throws(
        function() {
            sum('ab', 'bc');
        },
        TypeError,
        'Both arguments should be numbers.'
    );
    test.throws(
        function() {
            sum([1], {'a' : 0});
        },
        TypeError,
        'Both arguments should be numbers.'
    );
    test.done();
};
