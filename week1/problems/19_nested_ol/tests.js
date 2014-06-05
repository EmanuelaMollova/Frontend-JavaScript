"use strict";

var ol = require("./solution").ol;

exports.testWithNoNesting = function(test) {
    var
        items1  = [{ "label" : "Item 1"}, { "label" : "Item 2"}],
        string1 =
            "<ol>\n" +
            "  <li>Item 1</li>\n" +
            "  <li>Item 2</li>\n" +
            "</ol>";

    test.equal(string1, ol(items1));
    test.done();
};

exports.testWithOneLevelOfNesting = function(test) {
    var
        items2 = [{ "label" : "Item 1"},
                { "label" : "Item 2", "children" : [
                    {
                        "label" : "Level 2 of Item 2"
                    },
                    {
                        "label" : "Another level 2"
                    }
                ]}],
        string2 =
            "<ol>\n" +
            "  <li>Item 1</li>\n" +
            "  <li>Item 2\n" +
            "    <ol>\n" +
            "      <li>Level 2 of Item 2</li>\n" +
            "      <li>Another level 2</li>\n" +
            "    </ol>\n" +
            "  </li>\n" +
            "</ol>";

    test.equal(string2, ol(items2));
    test.done();
};

exports.testWithTwoLevelsOfNesting = function(test) {
    var
        items3 = [
            { "label" : "Item 2", "children" :
                [
                    { "label" : "Level 2 of Item 2", "children" :
                        [
                            {
                                "label" : "Level 3"
                            }
                        ]
                    },
                    {
                        "label" : "Another level 2"
                    }
                ]
            },
            { "label" : "Item 1"}
        ],
        string3 =
            "<ol>\n" +
            "  <li>Item 2\n" +
            "    <ol>\n" +
            "      <li>Level 2 of Item 2\n" +
            "        <ol>\n" +
            "          <li>Level 3</li>\n" +
            "        </ol>\n" +
            "      </li>\n" +
            "      <li>Another level 2</li>\n" +
            "    </ol>\n" +
            "  </li>\n" +
            "  <li>Item 1</li>\n" +
            "</ol>";

    test.equal(string3, ol(items3));
    test.done();
};
