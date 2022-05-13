const mongoose = require("mongoose");

//get access to Schema constructor
const Schema = mongoose.Schema;


const orderSchema = new Schema({
    date:{
        type: Date,
        default:Date.now
      
    }, order: {
        type: Number,
        required:true
    }, 
    
    list:[
        {
       name: {
           type: String
       },
        quantity:{
            type:Number
        },
            price: {
        type:Number
        }
    }
        ], 
       
        user:{
        ref:'users',
        type:Schema.Types.ObjectId
    }
});



module.exports = mongoose.model('orders',orderSchema);