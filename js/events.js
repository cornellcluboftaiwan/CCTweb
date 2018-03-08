function block2html(data) {
    return "<div class=\"col-xs-offset-1 col-xs-3 col-md-offset-3 col-md-2\">" + data[1] + "</div><div class=\"col-xs-8 col-md-7\">" +
        "<a href=\"" + data[2] + "\" target=\"_blank\">" + data[0] + "</a></div>"
}

$(document).ready(function() {
    $.get("https://sheets.googleapis.com/v4/spreadsheets/1i1bcmeKGIjHaWqP57CoD1lj8b2eHLQPIx0MSmUvvhbc/values/events!A2:C?key=AIzaSyCMs99x075GStFbTCYNIVlp_yEzvrl6Rl0").done(function(data) {
        processData(data, "#evt", block2html);
    });
});

function processData(data, id, b2h) {
    var data = data.values;
    for (var i = 0; i < data.length; i++) {
        $(id).append(b2h(data[i]));
    }
}