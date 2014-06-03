"use strict";

var without = require("./solution").without;

exports.testWithout = function(test) {
    test.deepEqual([1, 2, 3, 4], without([5,6], [1,2,3,4,5,6]));
    test.deepEqual([1, 2, 3, 4, 5, 6], without([], [1,2,3,4,5,6]));
    test.deepEqual([], without([5,6], [5, 6]));

    test.done();
};
