"use strict";

var isIntPalindrome = require("./solution").isIntPalindrome;

exports.testPalindromes = function(test) {
    test.equal(true, isIntPalindrome(1));
    test.equal(true, isIntPalindrome(100001));
    test.equal(true, isIntPalindrome(999));
    test.done();
};

exports.testNotPalindromes = function(test) {
    test.equal(false, isIntPalindrome(42));
    test.equal(false, isIntPalindrome(123));
    test.done();
};
