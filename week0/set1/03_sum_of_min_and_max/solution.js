"use strict";

var sumOfMinAndMax = function(arr) {
    return Math.max.apply(null, arr) + Math.min.apply(null, arr);
};

exports.sumOfMinAndMax = sumOfMinAndMax;
