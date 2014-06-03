"use strict";

var range = require("./solution").range;

exports.testRange = function(test) {
    test.deepEqual([1, 2, 3, 4], range(1, 4));
    test.deepEqual([3, 4], range(3, 4));
    test.deepEqual([35, 36, 37, 38, 39, 40], range(35, 40));
    test.done();
};
