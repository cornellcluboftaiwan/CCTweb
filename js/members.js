function block2html_e(data) {
    var imgNamePos = "<img src = \"./img/" + (data.Image ? data.Image : "justT") + ".jpg\" >" +
        data.Name + "<br><div class=\"mem_pos\">" + data["Eboard position"] + "</div>";

    return "<div class=\"col-xs-6 col-sm-4 col-md-3 eboard_box \">" +
        imgNamePos + "<div class = \"col-xs-6 col-sm-4 col-md-3 eboard_box_pop\">" +
        imgNamePos + "<div class = \"descr\">" + data.Year + "<br>" + data.Major +
        "</div> </div > </div>"
}

function block2html(data) {
    var imgNamePos = "<img src = \"./img/" + (data.Image ? data.Image : "justT") + ".jpg\" >" +
        data.Name + "<br><div class=\"mem_pos\">" + data["Eboard position"] + "</div>";

    return "<div class=\"col-xs-6 col-sm-4 col-md-3 eboard_box \">" +
        imgNamePos + "<div class = \"col-xs-6 col-sm-4 col-md-3 eboard_box_pop\">" +
        imgNamePos + "<div class = \"descr\">" + data.Year + "<br>" + data.Major +
        "</div> </div > </div>"
}

$(document).ready(function() {
    $.get("./csv/eboard.csv").done(function(data) {
        processData(data, "eb1", block2html_e);
    });
    $.get("./csv/members.csv").done(function(data) {
        processData(data, "mem", block2html);
    });
});

function processData(data, id, b2h) {
    var data = $.csv.toObjects(data);
    for (var i = 0; i < data.length; i++) {
        $(id).append(b2h(data[i]));
    }
}