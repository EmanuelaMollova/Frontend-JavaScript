"use strict";

var always = require("./solution").always;

exports.testAlways = function(test) {
    var
        f1 = always(5),
        f2 = always('always'),
        f3 = always([1]);

    test.equal(5, f1());
    test.equal('always', f2());
    test.deepEqual([1], f3());
    test.done();
};

