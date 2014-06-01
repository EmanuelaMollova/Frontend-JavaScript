"use strict";

var forEach = function(f, item) {
    if(Array.isArray(item)) {
       var i = 0,
           n = item.length;

        for(i; i < n; i++) {
            f(item[i], i, item);
        }
    } else {
        for(var key in item) {
            f(item[key], key);
        }
    }
};

exports.forEach = forEach;
