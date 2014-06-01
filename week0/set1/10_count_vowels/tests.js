"use strict";

var countVowels = require("./solution").countVowels;

exports.testWithStringsWithVowels = function(test) {
    test.equal(3, countVowels("JavaScript"));
    test.equal(8, countVowels("Theistareykjarbunga"));
    test.equal(8, countVowels("A nice day to code!"));

    var str = "Github is the second best thing that happend to programmers," +
        "after the keyboard!";

    test.equal(22, countVowels(str));
    test.done();
};

exports.testWithStringsWithoutVowels = function(test) {
    test.equal(0, countVowels("grrrrgh!"));
    test.done();
};
