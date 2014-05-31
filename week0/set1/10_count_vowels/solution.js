"use strict";

var countVowels = function(str) {
    return countCharsFromGroup(generateGroupOfLetters('aeiouy'), str);
};

var generateGroupOfLetters = function(letters) {
    return letters.toUpperCase().split("").concat(letters.split(""));
};

var countCharsFromGroup = function(group, str) {
    return group.map(function(char) {
        return countSubstrings(str, char);
    }).reduce(function(a, b) {
        return a + b;
    });
};

var countSubstrings = function(haystack, needle) {
    var occurencies = haystack.match(new RegExp(needle, "g"));
    return occurencies ? occurencies.length : 0;
};

exports.countVowels = countVowels;
