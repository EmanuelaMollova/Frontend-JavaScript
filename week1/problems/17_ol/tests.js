"use strict";

var ol = require("./solution").ol;

exports.testOl = function(test) {
    var
        items  = [{ "label" : "Item 1"}, { "label" : "Item 2"}],
        string =
            "<ol>\n" +
            "<li>Item 1</li>\n" +
            "<li>Item 2</li>\n" +
            "</ol>";

    test.equal(string, ol(items));
    test.done();
};
