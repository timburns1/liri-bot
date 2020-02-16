let axios = require("axios");
let colors = require("colors")

function search(term) {
  if (!term) {
    search("Mr Nobody")
    //term = "Mr Nobody"
  }
  axios.get(`http://www.omdbapi.com/?t=${term}&apikey=trilogy`).then(res => {
      console.log(res.data.data);
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports.search = search