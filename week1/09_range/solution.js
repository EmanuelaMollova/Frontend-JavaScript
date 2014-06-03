"use strict";

// Solution 1
var range = function(from, to) {
    return from > to ? [] : [from].concat(range(from + 1, to));
};

// Solution 2
// var range = function(from, to) {
//     return Array.apply(null, new Array(to - from + 1)).map(function (_, i) {
//         return i + from;
//     });
// };

exports.range = range;
