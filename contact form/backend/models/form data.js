const mongoose =require("mongoose");

const formData = new mongoose.Schema({
    sender:{
        type:String,
        required:true,
        ref:"contact"
    },
    receiver:{
        type:String,
        required:true,
        ref:"contact",
    },
    subject:{
        type:String,
        required:true,

    },
    message:{
        type:String,
        required:true,
    },
},
{
    timestamps:true,
})
module.exports = mongoose.model("contact-Form-Data",formData)