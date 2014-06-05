"use strict";

var ul = require("./solution").ul;

exports.testWithNoNesting = function(test) {
    var
        items1  = [{ "label" : "Item 1"}, { "label" : "Item 2"}],
        string1 =
            "<ul>\n" +
            "  <li>Item 1</li>\n" +
            "  <li>Item 2</li>\n" +
            "</ul>";

    test.equal(string1, ul(items1));
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
            "<ul>\n" +
            "  <li>Item 1</li>\n" +
            "  <li>Item 2\n" +
            "    <ul>\n" +
            "      <li>Level 2 of Item 2</li>\n" +
            "      <li>Another level 2</li>\n" +
            "    </ul>\n" +
            "  </li>\n" +
            "</ul>";

    test.equal(string2, ul(items2));
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
            "<ul>\n" +
            "  <li>Item 2\n" +
            "    <ul>\n" +
            "      <li>Level 2 of Item 2\n" +
            "        <ul>\n" +
            "          <li>Level 3</li>\n" +
            "        </ul>\n" +
            "      </li>\n" +
            "      <li>Another level 2</li>\n" +
            "    </ul>\n" +
            "  </li>\n" +
            "  <li>Item 1</li>\n" +
            "</ul>";

    test.equal(string3, ul(items3));
    test.done();
};
