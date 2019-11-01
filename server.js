const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
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

app.listen(PORT, function () {
    console.log(`App is now listening on PORT: ${PORT}`);
})