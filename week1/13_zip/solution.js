"use strict";

var zip = function() {
    var arrays = arguments;

    return arrays['0'].map(function(_, i) {
        return Object.keys(arrays).map(function(key) {
            return arrays[key][i];
        });
    });
};

exports.zip = zip;
