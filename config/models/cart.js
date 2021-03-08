const mongoose = require('mongoose');
const schema = mongoose.Schema;
const CartSchema = new mongoose.Schema({
    userId:{
        type:String,
     },
     items:[{
         productId:{
             type:String,
         },
         name:String,
         quantity:{
             type:Number,
             required:true,
             min:[1,'Quantity can not be less then 1'],
             default:1
         },
         price:Number
     }],
     bill:{
         type:Number,
         required:true,
         default:0
     }
});
module.exports= Cart = mongoose.model('cart',CartSchema);