const mongoose =require("mongoose");

const ratingSchema = mongoose.Schema({
    userId:{
        type:String,
        require:true,
    },
    rating:{
        type:Number,
        required:true,
    },
});

module.exports=ratingSchema;