const mongoose = require("mongoose");

//get access to Schema constructor
const Schema = mongoose.Schema;




const userSchema = new Schema({
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});



module.exports = mongoose.model('users',userSchema);