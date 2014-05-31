"use strict";

var countSubstrings = function(haystack, needle) {
    var occurencies = haystack.match(new RegExp(needle, "g"));
    return occurencies ? occurencies.length : 0;
};

exports.countSubstrings = countSubstrings;
