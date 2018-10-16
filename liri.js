// Read & set any environment variables with dotenv package
require("dotenv").config();
var request = require("request");
var keys = require("./keys.js");
// var moment = require("moment");
// var spotify = new Spotify(keys.spotify);

// Delcaring variables for user inputs
let command = process.argv[2];
let userSearch = process.argv[3];

// Functions for requests / API calls
function bandsRequest () {
    request("https://rest.bandsintown.com/artists/" + userSearch + "/events?app_id=codingbootcamp", function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var bandGuy = JSON.parse(body);
            console.log(`Results for your search of ${userSearch}: 
            Venue Name: ${bandGuy[0].venue.name}
            Venue Location: ${bandGuy[0].venue.city}, ${bandGuy[0].venue.region}, ${bandGuy[0].venue.country}
            Date of Event: `);
        }
    })
} 

function omdbRequest () {
    request()
}



// Conditionls to call functions based on user input 
if (command === "concert-this") {
    bandsRequest();
} else if (command === "spotify-this-song") {
    // spotifyFunction()
} else if (command === "movie-this") {
    // omdb function
} else if (command === "do-what-it-says") {
    // fs pkg command
} else {
    console.log("Please enter a valid command!")
}
 

