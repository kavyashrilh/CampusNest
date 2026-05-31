const {Schema}=require("mongoose");

const PGSchema=new Schema({

    name:String,
    
    location:String,
    rent:Number,
    facilities:[String],
    rating:Number,
   available: Boolean
});

module.exports={PGSchema};