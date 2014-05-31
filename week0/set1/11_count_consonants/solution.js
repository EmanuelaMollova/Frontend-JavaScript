"use strict";

var countConsonants = function(str) {
    var consonants = 'bcdfghjklmnpqrstvwxz';
    return countCharsFromGroup(generateGroupOfLetters(consonants), str);
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

exports.countConsonants = countConsonants;
