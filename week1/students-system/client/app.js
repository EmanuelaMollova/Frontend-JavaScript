"use strict";

$(document).ready(function() {
    $.getJSON('http://localhost:3000/students', function(students, textStatus) {
        $('.col-xs-12').append(createTable(createTableRows(students)));

        $("#group-btn").on("click", function() {
            var grouped = groupStudents(students);
            Object.keys(grouped).forEach(function(group) {
                $('.col-xs-12')
                    .append(createTable(createTableRows(grouped[group])));
            });
        });
    });

    $("#search-btn").on("click", function() {
        var searched = $("#search-box").val();

        $('tr').each(function() {
            var tr = $(this);
            $(this).children().each(function() {
                if ($(this).text().match(new RegExp(searched))) {
                    tr.addClass('success');
                }
            });
        });
    });
});

var groupStudents = function(students) {
    return groupBy(function(student) {
        return student.course;
    }, students);
};

var createTable = function(content) {
    return [
        '<table class="table">',
        '<thead>',
        '<tr>',
        '<th>Id</th>',
        '<th>Name</th>',
        '<th>Course</th>',
        '</tr>',
        '</thead>',
        '<tbody>',
        content,
        '</tbody>',
        '</table>'
    ].join("\n");
};

var createTableRows = function (students) {
    return students.map(function(student) {
        var tds = Object.keys(student).map(function(key) {
            return createTag('td', student[key]);
        }).join("\n");

        return createTag('tr', tds);
    }).join("\n");
};

var createTag = function(tag, content) {
    return ['<' + tag + '>', content, '</' + tag + '>'].join('\n');
};

var groupBy = function(groupingFunction, arr) {
    var
        grouped = {},
        functionResult;

    console.log(arr);

    arr.forEach(function(element) {
        functionResult = groupingFunction(element);

        if (grouped[functionResult]) {
            grouped[functionResult].push(element);
        } else {
            grouped[functionResult] = [element];
        }
    });

    return grouped;
};
