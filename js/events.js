function block2html(data) {
    return "<div class=\"col-xs-4\">" + data.Date + "</div><div class=\"col-xs-8\">" +
        "<a href=\"" + data.FB + "\">" + data.Name + "</a></div>"
}

$(document).ready(function() {
    $.get("./csv/events.csv").done(function(data) {
        processData(data, "#evt", block2html);
    });
});

function processData(data, id, b2h) {
    var data = $.csv.toObjects(data);
    for (var i = 0; i < data.length; i++) {
        $(id).append(b2h(data[i]));
    }
}