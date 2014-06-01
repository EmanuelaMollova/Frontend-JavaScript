"use strict";

var format = require("./solution").format;

exports.testForStrings = function(test) {
    var
        result1 = "JavaScript is a very weird language!",

        formatted1 = format("{lang} is a very weird {thing}!", {
            "lang" : "JavaScript",
            "thing" : "language"
        }),

        result2 = "Ruby is fun!",

        formatted2 = format("{something} is fun!", {
            "something": "Ruby"
        });

    test.equal(result1, formatted1);
    test.equal(result2, formatted2);
    test.done();
};
