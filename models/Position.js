const mongoose = require("mongoose");

//get access to Schema constructor
const Schema = mongoose.Schema;


const positionSchema = new Schema({
    name:{
        type: String,
        required:true
      
    }, price:{
        type: Number,
        required:true
    }, category:{
        ref:'categories',
        type: Schema.Types.ObjectId
    }, user:{
        ref:'users',
        type:Schema.Types.ObjectId
    }
});



module.exports = mongoose.model('positions',positionSchema);