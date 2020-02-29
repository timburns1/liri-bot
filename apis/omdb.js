let axios = require("axios");
let colors = require("colors")

function search(term) {
  if (!term) {
    search("Mr Nobody")
    //term = "Mr Nobody"
  }
  axios.get(`http://www.omdbapi.com/?t=${term}&apikey=trilogy`).then(res => {
      console.log("Title: ", res.data.Title);
      console.log("Plot: ", res.data.Plot);
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports.search = search