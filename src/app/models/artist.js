const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artist = new Schema(
    {
        id: {type: String, default: () => uuidv4(), required: false},
        name: String,
        grammy: Boolean
    }
);

module.exports = mongoose.model("artist", artist);