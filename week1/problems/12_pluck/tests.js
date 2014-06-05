"use strict";

var pluck = require("./solution").pluck;

exports.testPluck = function(test) {
    var
        students = [{
            "name" : "Daniel Taskoff",
            "course" : "Frontend JavaScript"
        }, {
            "name" : "Elena Jeleva",
            "course" : "Programming 101"
        }, {
            "name" : "Luboslava Dimitrova",
            "course" : "Frontend JavaScript"
        }],
        names = [
            "Daniel Taskoff",
            "Elena Jeleva",
            "Luboslava Dimitrova"
        ],
        objects = [{
            'a': 1,
            'b': 3
        }, {
             'a': 5,
             'b': 'r'
        }];

    test.deepEqual(names, pluck("name", students));
    test.deepEqual([1, 5], pluck('a', objects));
    test.deepEqual([3, 'r'], pluck('b', objects));

    test.done();
};
