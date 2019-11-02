const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require("path")
const app = express();
const PORT = process.env.PORT || 3666;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('client/build'));


app.use(routes);


app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
  

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pullbox');

app.listen(PORT, function () {
    console.log(`App is now listening on PORT: ${PORT}`);
})