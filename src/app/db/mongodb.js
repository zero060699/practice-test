const mongoose = require("mongoose");
// const config = require("../config/config.json");
require("dotenv").config();

async function connect(){
    try {
        mongoose.connect(
            `mongodb://${process.env.MONGODBHOST}:${process.env.PORTMONGO}/dataSharing`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("Connect MongoDB successfully");
    } catch (error) {
        console.log("Connect failure!!!");
    }
}

module.exports = {connect}