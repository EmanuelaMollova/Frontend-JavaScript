"use strict";

var map = require("./solution").map;

exports.testForStrings = function(test) {
    var
        result1 = [1, 4, 9],
        mapped1 =  map(function(x) {
            return x * x;
        }, [1,2,3]),

        result2 = [false, true],
        mapped2 = map(function(x) {
            return x > 20;
        }, [10, 30]);

    test.deepEqual(result1, mapped1);
    test.deepEqual(result2, mapped2);
    test.done();
};
