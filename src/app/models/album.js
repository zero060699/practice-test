const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const album = new Schema(
    {
        id: {type: String, default: () => uuidv4(), required: false},
        name: String,
        year: Number,
        artistId: String
    }
);

module.exports = mongoose.model("album", album);