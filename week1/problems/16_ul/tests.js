"use strict";

var ul = require("./solution").ul;

exports.testUl = function(test) {
    var
        items  = [{ "label" : "Item 1"}, { "label" : "Item 2"}],
        string =
            "<ul>\n" +
            "<li>Item 1</li>\n" +
            "<li>Item 2</li>\n" +
            "</ul>";

    test.equal(string, ul(items));
    test.done();
};
