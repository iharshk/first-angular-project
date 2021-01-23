const mongoose = require("mongoose");
const dbConfig = require("./dbconfig");
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name : { type: String, required: true },
    lowest_price : { type: Number },
    rating : { type: Number, "minimum" : 1, "maximum" : 5 },
    max_speed: { type: Number },
    description: { type: String },
    contact_number: { type: Number, required: true },
    email : { type: String},
    url : { type : String}
});

let APIHits = new Schema({
    hits : {type: Number}
})

module.exports.getModel = function () {
    let connection = dbConfig.connect();
    return connection.model("user", userSchema);
};

module.exports.getHits = function () {
    let connection = dbConfig.connect();
    return connection.model("Hits", APIHits);
};


