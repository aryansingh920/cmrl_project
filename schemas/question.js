const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
    station:{
        type:String,
    },
    question:{
        type:String,  
    },
    qtype:{
        type:String,
    },
    option:{
        type:Array,
    }
},

);

module.exports = mongoose.model("stationSchema", stationSchema);