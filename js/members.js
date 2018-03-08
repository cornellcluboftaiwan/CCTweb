var f2p = {
    "Name": 0,
    "Year": 1,
    "Major": 2,
    "Image": 3,
    "Pos": 4,
}

function block2html_e(data) {
    var imgNamePos = "<img src = \"./img/" + (data[3] ? data[3] : "justT") + ".jpg\" >" +
        data[0] + "<br><div class=\"mem_pos\">" + data[4] + "</div>";

    return "<div class=\"col-xs-6 col-sm-4 col-md-3 eboard_box \">" +
        imgNamePos + "<div class = \"col-xs-6 col-sm-4 col-md-3 eboard_box_pop\">" +
        imgNamePos + "<div class = \"descr\">" + data[1] + "<br>" + data[2] +
        "<br><br></div> </div > </div>"
}

function block2html(data) {
    var imgNamePos = "<img src = \"./img/" + (data[3] ? data[3] : "justT") + ".jpg\" >" +
        data[0];

    return "<div class=\"col-xs-6 col-sm-4 col-md-3 eboard_box \">" +
        imgNamePos + "<div class = \"col-xs-6 col-sm-4 col-md-3 eboard_box_pop\">" +
        imgNamePos + "<div class = \"descr\">" + data[1] + "<br>" + data[2] +
        "<br><br></div> </div > </div>"
}

$(document).ready(function() {
    $.get("https://sheets.googleapis.com/v4/spreadsheets/1i1bcmeKGIjHaWqP57CoD1lj8b2eHLQPIx0MSmUvvhbc/values/eboard!A2:E?key=AIzaSyCMs99x075GStFbTCYNIVlp_yEzvrl6Rl0").done(function(data) {
        processData(data, "#eb1", block2html_e);
    });
    $.get("https://sheets.googleapis.com/v4/spreadsheets/1i1bcmeKGIjHaWqP57CoD1lj8b2eHLQPIx0MSmUvvhbc/values/members!A2:D?key=AIzaSyCMs99x075GStFbTCYNIVlp_yEzvrl6Rl0").done(function(data) {
        processData(data, "#mem", block2html);
    });
});

function processData(data, id, b2h) {
    data = data.values;
    for (var i = 0; i < data.length; i++) {
        $(id).append(b2h(data[i]));
    }
}