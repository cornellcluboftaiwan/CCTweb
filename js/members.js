$(document).ready(function() {
    $.get("./csv/eboard.csv").done(function(data) {
        processData(data);
    });
});

function processData(data) {
    var data = $.csv.toObjects(csv);
    print(data);
}