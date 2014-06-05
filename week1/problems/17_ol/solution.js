"use strict";

var ol = function(items) {
    return printList('ol', items);
};

var printList = function(type, items) {
    var content = pluck('label', items).map(function(label) {
        return printTags('li', label);
    }).reduce(function(a, b) {
        return a + "\n" + b;
    });

    return printTags(type, content, 'yes');
};

var printTags = function(tag, content, newline) {
    var lineEnd = newline ? "\n" : "";
    var html =
        '<' + tag + '>' + lineEnd +
        content + lineEnd +
        '</' + tag + '>';

    return html;
};

var pluck = function(property, arr) {
    return arr.map(function(object) {
        return object[property];
    });
};

exports.ol = ol;
