"use strict";

var concat = require("./solution").concat;

exports.testForStrings = function(test) {
    test.equal('ab', concat('ab', ''));
    test.equal('Hello, Emi!', concat('Hello, Emi', '!'));
    test.done();
};

exports.testForOthers = function(test) {
    test.throws(
        function() {
            concat('', 3);
        },
        TypeError,
        'Both arguments should be strings.'
    );
    test.throws(
        function() {
            concat(['abc'], {'a' : 0});
        },
        TypeError,
        'Both arguments should be strings.'
    );
    test.done();
};
