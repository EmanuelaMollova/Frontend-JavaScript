"use strict";

var find = function(predicate, arr) {
    var foundValue = arr.filter(predicate).slice(0, 1);
    return foundValue.length ? foundValue : undefined;
};

exports.find = find;
