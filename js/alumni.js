var f2p = {
    "Name": 0,
    "Year": 1,
    "Major": 2,
    "Image": 3,
    "Pos": 4,
}

function block2html(data) {
    var imgNamePos = "<img src = \"./img/" + (data[3] ? data[3] : "justT") + ".jpg\" >" +
        data[0];

    return "<div class=\"col-xs-6 col-sm-4 col-md-3 eboard_box \">" +
        imgNamePos + "<div class = \"col-xs-6 col-sm-4 col-md-3 eboard_box_pop\">" +
        imgNamePos + "<div class = \"descr\">" + data[1] + "<br>" + (data[2] ? data[2] : "") +
        "<br><br></div> </div > </div>"
}


$(document).ready(function() {
    $.get("https://sheets.googleapis.com/v4/spreadsheets/1i1bcmeKGIjHaWqP57CoD1lj8b2eHLQPIx0MSmUvvhbc/values/alumni!A2:D?key=AIzaSyCMs99x075GStFbTCYNIVlp_yEzvrl6Rl0").done(function(data) {
        processData(data, "#alum", block2html);
    });
});

function processData(data, id, b2h) {
    data = data.values;
    for (var i = 0; i < data.length; i++) {
        $(id).append(b2h(data[i]));
    }
}