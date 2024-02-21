const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favorite = new Schema(
    {
        artists: [String],
        albums: [String],
        tracks: [String]
    }
);

module.exports = mongoose.model("favorite", favorite);