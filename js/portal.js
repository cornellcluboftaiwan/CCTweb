var values;
var onDataLoaded = function (data) {
    values = data.values;
}

var config = {
    apiKey: "AIzaSyD5RfGoMCuLL2G7SbDK-OBGnJo18VuS2dQ",
    authDomain: "cct-website-196921.firebaseapp.com",
    databaseURL: "https://cct-website-196921.firebaseio.com",
    projectId: "cct-website-196921",
    storageBucket: "cct-website-196921.appspot.com",
    messagingSenderId: "270090804928"
};
firebase.initializeApp(config);

var provider = new firebase
    .auth
    .GoogleAuthProvider();
    
var netid2cred = function(netid){
    for(var i = 0; i < values.length; i++){
        if(values[i][0] == netid)
            return values[i][1]
    }
    return 0;
}

$("#portal_login").click(function () {
    console.log("clicked")
    firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
            console.log("clicked2")
            console.log(user.email.split("@")[0]);
            var netid = user
                .email
                .split("@")[0];

            $("#portal").html("<div>Logged in as " + user.email + ". You have " + netid2cred(netid) + " credits.</div>")

        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
})

$
    .get("https://sheets.googleapis.com/v4/spreadsheets/17Tvy1XGvgBUVRhPPc_7qgDdrYS8Iq7uPu" +
        "Nl-Wor83J4/values/'Spring%202018'!B:C?key=AIzaSyCMs99x075GStFbTCYNIVlp_yEzvrl6Rl" +
        "0")
    .done(onDataLoaded)
