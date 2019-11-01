const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const axios = require("axios");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3666;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pullbox');

// Getting stuff to the database.

const db = require("./models");

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/pullBoxComics';
mongoose.connect(MONGODB_URI);

require('dotenv').config();

app.get("/insert-to-db", (res, req) => {

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
                    cover: e.image.original_url || "https://comicvine1.cbsistatic.com/uploads/scale_large/11112/111121983/6922977-8209511339-Dooms.jpg",
                    title: e.volume.name,
                    aboutBook: {
                        releaseDate: e.cover_date
                    }
                };

                const data2 = {
                    storeName: "Alakazam Comics",
                    phoneNumber: "1.949.854.3744",
                    address: "17777 Main St ste e, Irvine, CA 92614",
                    storeHours: "Friday	11:30AM–9:30PM\nSaturday 11:30AM–6:30PM\nSunday	11:30AM–6:30PM\nMonday 11:30AM–6:30PM\nTuesday	11:30AM–6:30PM\nWednesday 11:30AM–8PM\nThursday	11:30AM–9:30PM",
                    email: "irvine@alakazamcomics.com",
                    password: "password",
                    profilePic: "https://www.comicshoplocator.com/Image/CslsLogo/1869"
                };

                const data3 = {
                    name: "Brandon Unzueta",
                    email: "brandonu123@gmail.com",
                    password: "password",
                    img: "https://i.pinimg.com/236x/f9/ce/82/f9ce8229c220cc94508845cd7e3a3012--spider-man-peter-otoole.jpg?nii=t"
                };

                db.Comics.create(data)
                    .then(dbComic => {
                        console.log(dbComic)
                    })
                    .catch(err => {
                        if (err) throw err;
                    });

                db.Store.create(data2)
                    .then(dbStore => {
                        console.log(dbStore);
                    })
                    .catch(err => {
                        if (err) throw err;
                    })

                db.Customer.create(data3)
                    .then(dbCustomer => {
                        console.log(dbCustomer);
                    })
                    .catch(err => {
                        if (err) throw err;
                    })
            });

        })
        .catch(err => {
            if (err) throw err;
        });

    res.send("inserted comics to the database");
});

app.listen(PORT, function () {
    console.log(`App is now listening on PORT: ${PORT}`);
});