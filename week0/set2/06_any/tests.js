"use strict";

var any = require("./solution").any;

exports.test = function(test) {
    var
        result1 = any(function(x) {
            return x > 20;
        }, [10, 25, 49]),

        result2 = any(function(x) {
            return x > 20;
        }, [2, 4]);

    test.equal(true, result1);
    test.equal(false, result2);
    test.done();
};
