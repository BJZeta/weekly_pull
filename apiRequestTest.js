const axios = require("axios");

require('dotenv').config();

const SECRET = {
    comicVineAPI: process.env.SECRET_KEY
}

const cover_start_date = "2019-10-23";
const cover_end_date = "2019-10-31";

axios.get("http://www.comicvine.com/api/issues/?format=json&api_key=" + SECRET.comicVineAPI + "&filter=cover_date:" + cover_start_date + "|" + cover_end_date)
    .then(res => {
        console.log("================================");
        console.log(res);
        console.log("================================");
    })
    .catch(err => {
        if (err) throw err;
    });