const mongoose = require("mongoose");

//get access to Schema constructor
const Schema = mongoose.Schema;




const categorySchema = new Schema({
    name:{
        type: String,
        required:true
      
    },
    imageSrc:{
        type:String,
        default:''
    },user:{
        ref:'users',
        type:Schema.Types.ObjectId
    }
});



module.exports = mongoose.model('categories',categorySchema);