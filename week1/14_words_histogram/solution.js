"use strict";

var wordsHistogram = function (string) {
    var punctuation = ['!', '.', ',', ';', ':', '?'];

    return countBy(function(value) {
        return value;
    }, createListOfWords(string, punctuation));
};

var createListOfWords = function(string, exclude) {
    return without(exclude, string.toLowerCase().split(""))
    .join("").split(" ").filter(function(word) {
        return word !== '';
    });
};

var without = function(exclude, arr) {
    return arr.filter(function(element) {
        return !contains(element, exclude);
    });
};

var contains = function(element, arr) {
    return arr.some(function(item) {
        return item === element;
    });
};

var countBy = function(countingFunction, arr) {
    var counted = groupBy(countingFunction, arr);

    Object.keys(counted).forEach(function(key) {
        counted[key] = counted[key].length;
    });

    return counted;
};

var groupBy = function(groupingFunction, arr) {
    var
        grouped = {},
        functionResult;

    arr.forEach(function(element) {
        functionResult = groupingFunction(element);

        if (grouped[functionResult]) {
            grouped[functionResult].push(element);
        } else {
            grouped[functionResult] = [element];
        }
    });

    return grouped;
};

exports.wordsHistogram = wordsHistogram;
