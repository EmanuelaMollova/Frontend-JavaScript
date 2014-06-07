"use strict";

$(document).ready(function(){
    var paragraphs = getParagraphs();
    $('button').on('click', function() {
        paragraphs.push(paragraphs.shift().addClass('highlight'));
        paragraphs[paragraphs.length - 2].removeClass('highlight');
    });
});

var getParagraphs = function() {
    var paragraphs = [];

    $('p').each(function() {
        paragraphs.push($(this));
    });

    return paragraphs;
};
