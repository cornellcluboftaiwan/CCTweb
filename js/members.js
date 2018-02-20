$(document).ready(function() {
    $.get("./csv/eboard.csv").done(function(data) {
        processData(data);
    });
});

function processData(data) {
    var data = $.csv.toObjects(data);
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        $("#eb1").append(block2html(data[i]));
    }
}

function block2html(data) {
    var imgNamePos = "<img src = \"./img/" + (data.Image ? data.Image : "justT") + ".jpg\" >" +
        data.Name + "<br>" + data["Eboard position"];

    return "<div class=\"col-xs-6 col-sm-4 col-md-3 eboard_box \">" +
        imgNamePos + "<div class = \"col-xs-6 col-sm-4 col-md-3 eboard_box_pop\">" +
        imgNamePos + "<div class = \"descr\">To be added\
        </div> </div > </div>"
}