"use strict";

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

exports.groupBy = groupBy;
