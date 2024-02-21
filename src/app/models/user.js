const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema(
    {
        id: {type: String, default: () => uuidv4(), required: false},
        login: String,
        password: String,
        version: Number,
        createdAt: {type: Number, default: Date.now().valueOf()},
        updatedAt: {type: Number, default: Date.now().valueOf()}
    }
)

module.exports = mongoose.model("user", user);