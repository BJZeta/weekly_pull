const axios = require("axios");
const mongoose = require("mongoose");

const db = require("./models");

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/pullBoxComics';
mongoose.connect(MONGODB_URI);

require('dotenv').config();

const SECRET = {
    comicVineAPI: process.env.SECRET_KEY
}

const cover_start_date = "2019-10-2";
const cover_end_date = "2019-10-9";

axios.get(`http://www.comicvine.com/api/issues/?format=json&api_key=${SECRET.comicVineAPI}&filter=cover_date:${cover_start_date}|${cover_end_date}`)
    .then(res => {
        let results = res.data.results;
        console.log("=============================");
        results.forEach(e => {
            console.log(e);

            const data = {
                cover: e.image.original_url || "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2019/05/155731495515-Access-Token-Generated.png",
                title: e.volume.name,
                aboutBook: {
                    releaseDate: e.cover_date
                }
            };

            db.Comics.create(data)
            .then(dbComic => {
                console.log(dbComic)
            })
            .catch(err => {
                if(err) throw err;
            });
        });

    })
    .catch(err => {
        if (err) throw err;
    });