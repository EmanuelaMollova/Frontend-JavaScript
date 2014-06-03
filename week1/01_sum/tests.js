"use strict";

var concat = require("./solution").concat;

exports.testForNumbers = function(test) {
    test.equal(1, concat(1, 0));
    test.equal(10, concat(4, 6));
    test.equal(10.45, concat(5.45, 5));
    test.equal(3, concat(7, -4));
    test.done();
};

exports.testForOthers = function(test) {
    test.throws(
        function() {
            concat('', 3);
        },
        TypeError,
        'Both arguments should be numbers.'
    );
    test.throws(
        function() {
            concat('ab', 'bc');
        },
        TypeError,
        'Both arguments should be numbers.'
    );
    test.throws(
        function() {
            concat([1], {'a' : 0});
        },
        TypeError,
        'Both arguments should be numbers.'
    );
    test.done();
};
