"use strict";

var beerAndFries = function(items) {
    var groupedScores = groupBy(function(item) {
        return item.type;
    }, items);

    var sortedScores = ['beer', 'fries'].map(function(key) {
        return pluck('score', groupedScores[key]).sort(function(a, b) {
            return a - b;
        });
    });

    return zip(sortedScores[0], sortedScores[1])
        .map(function(arr) {
            return arr[0] * arr[1];
        })
        .reduce(function(a, b) {
            return a + b;
        }, 0);
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

var pluck = function(property, arr) {
    if(!arr) {
        return [];
    }

    return arr.map(function(object) {
        return object[property];
    });
};

var zip = function() {
    var arrays = arguments;

    return arrays['0'].map(function(_, i) {
        return Object.keys(arrays).map(function(key) {
            return arrays[key][i];
        });
    });
};

exports.beerAndFries = beerAndFries;
