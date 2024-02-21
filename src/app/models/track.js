const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const track = new Schema(
    {
        id: {type: String, default: () => uuidv4(), required: false},
        name: String,
        artistId: String,
        albumId: String, 
        duration: Number
    }
);

module.exports = mongoose.model("track", track);