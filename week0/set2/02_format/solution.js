"use strict";

var format = function(str, dict) {
    return str.replace(/{(.*?)}/g, function(placeholder) {
        return dict[getKeyFromPlaceholder(placeholder)];
    });
};

var getKeyFromPlaceholder = function(placeholder) {
    return placeholder.substring(1, placeholder.length - 1);
};

exports.format = format;
