"use strict";

var SPACES_FOR_TAB = 2;

var ul = function(items) {
    return printList(0, 'ul', items);
};

var printList = function(tab, type, items) {
    var content = items.map(function(object) {
        var childrenList = object.children ?
            "\n" + printList(tab + 2, type, object.children) + "\n" : '';

        return printTag(tab + 1, 'li', object.label, childrenList, '');
    }).join("\n");

    return printTag(tab, type, content, '', "\n");
};

var printTag = function(tab, tag, content, childrenList, lineEnd) {
    var tab1 = new Array(tab * SPACES_FOR_TAB + 1).join(' ');
    var tab2 = lineEnd === "\n" || childrenList ? tab1 : '';

    return [
        tab1 + '<' + tag + '>',
        content + childrenList,
        tab2 + '</' + tag + '>'
    ].join(lineEnd);
};

exports.ul = ul;
