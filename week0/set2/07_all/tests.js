"use strict";

var all = require("./solution").all;

exports.test = function(test) {
    var
        result1 = all(function(x) {
            return x > 20;
        }, [30, 35, 49]),

        result2 = all(function(x) {
            return x > 20;
        }, [2, 4]);

    test.equal(true, result1);
    test.equal(false, result2);
    test.done();
};
