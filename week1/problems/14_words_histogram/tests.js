"use strict";

var wordsHistogram = require("./solution").wordsHistogram;

exports.testWordsHistogram = function(test) {
    var
        str1    = "A function is a function with a very functional function!",
        result1 = {
            "a" : 3,
            "function" : 3,
            "is" : 1,
            "with" : 1,
            "very" : 1,
            "functional" : 1
        },
        str2    = "! a ! a;! a";

    test.deepEqual(result1, wordsHistogram(str1));
    test.deepEqual({'a': 3}, wordsHistogram(str2));
    test.deepEqual({}, wordsHistogram(''));
    test.done();
};
