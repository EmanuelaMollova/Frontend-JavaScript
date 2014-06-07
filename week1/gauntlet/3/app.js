"use strict";

$(document).ready(function() {
    $('#search-button').on('click', function() {
        var img = $('<img src="' + $('#search-input').val() + '">');

        img.load(function () {
            $('.container').append(img);
        });

        img.error(function() {
            alert('An error occured while loading the image');
        });

        img.on('click', function () {
            $(this).remove();
        });
    });
});
