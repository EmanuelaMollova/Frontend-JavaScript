"use strict";

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

exports.countBy = countBy;
