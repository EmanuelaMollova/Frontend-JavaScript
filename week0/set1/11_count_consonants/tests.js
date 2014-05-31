"use strict";

var countConsonants = require("./solution").countConsonants;

exports.testWithStringsWithConsonants = function(test) {
  test.equal(7, countConsonants("JavaScript"));
  test.equal(11, countConsonants("Theistareykjarbunga"));
  test.equal(6, countConsonants("A nice day to code!"));
  test.equal(7, countConsonants("grrrrgh!"));

  var str = "Github is the second best thing that happend to programmers," +
      "after the keyboard!";

  test.equal(44, countConsonants(str));
  test.done();
};
