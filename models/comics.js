const mongoose = require('mongoose');
const Schema = mongoose.Schema

const comicSchema = new mongoose.Schema({
    cover: { type: String, required: true },
    title: { type: String, required: true },
    issue: { type: String },
    price: { type: String },
    description: { type: String },
    credits: {
        publisher: { type: String },
        writtenBy: { type: String },
        penciledBy: { type: String },
        inkedBy: { type: String },
        coloredBy: { type: String },
        coverBy: { type: String },
    },
    genres: { type: Array },
    aboutBook: {
        pageCount: { type: String },
        releaseDate: { type: String, required: true },
        digitalRelease: { type: String },
        ageRating: { type: String },
        soldBy: { type: String },
    }
});

const Comics = mongoose.model("Comics", comicSchema);

module.exports = Comics;