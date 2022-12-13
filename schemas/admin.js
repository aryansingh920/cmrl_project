const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    email :{
        type:String,
        max:20,
        requied:true,
    },
   password :{
        type:String,
        required:true,
   }
},
);

module.exports = mongoose.model("adminSchema", adminSchema);