const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    date:{
        type:String
    },
    station:{
        type:String,
    },
    username:{
        type:String,
    },
    gender:{
        type:String,
    },
    mobile:{
        type:Number,
    },
    empStatus:{
        type:String,
    },
    age:{
        type:String,
    },
    duration:{
        type:String,
    },
    distance:{
        type:String,
    },
    commute:{
        type:String,
    },
    service:{
        type:String,
        
    },
    cleanliness:{
        type:String,
       
    },
    support:{
        type:String,
    },
    safety:{
        type:String,
    },
    otherSuggestion:{
        type:String
    }
},
);

module.exports = mongoose.model("Pfeedback", feedbackSchema);