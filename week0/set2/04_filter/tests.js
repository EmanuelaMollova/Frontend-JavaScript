"use strict";

var filter = require("./solution").filter;

exports.testForStrings = function(test) {
    var
        users = [{
            "name" : "Emi",
            "score" : 100
        }, {
            "name" : "Ivan",
            "score" : 67
        }, {
            "name" : "Vlado",
            "score" : 30
        }],

        result = [{
             "name" : "Emi",
             "score" : 100
        }],

        filtered = filter(function(user) {
            return user.score > 70;
        }, users);

    test.deepEqual(result, filtered);
    test.done();
};
