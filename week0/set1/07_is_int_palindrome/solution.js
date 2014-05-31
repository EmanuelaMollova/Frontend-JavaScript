"use strict";

var isIntPalindrome = function(n) {
    return n.toString() === n.toString().split("").reverse().join("");
};

exports.isIntPalindrome = isIntPalindrome;
