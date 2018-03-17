// var f2p = {
// 	"Name": 0,
// 	"Year": 1,
// 	"Major": 2,
// 	"Image": 3,
// 	"Pos": 4,
// };

function block2html(data) {
	return "<div class=\"col-xs-12\"><div class=\"col-xs-6\">" + data[0] + "</div><div class=\"col-xs-6\">" + data[1] + "</div>";
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