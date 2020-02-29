let eval = process.argv[2]
let omdb = require("./apis/omdb")
let colors = require("colors")

// The User types in node liri.js spotify-this stairway to heaven 
// Based On the 2nd index of the array perform the command


/*
1. Create a funtion that allows the spotify api and other apis
*/


colors.setTheme({
    theme: ["red", "underline"]
})


if (eval === "movie-this") {
    omdb.search(process.argv[3])
} else {
    console.log("NOPE")
}