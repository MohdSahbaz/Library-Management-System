const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        default:null, // A url of default pfp should be added
    },
    gmail:{
        type:String,
    },
    // Will Hash Later
    password:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
    },
    dateOfJoin:{
        type : Date,
        default : Date.now,
    }
});

const User = mongoose.model('User',userSchema);



module.exports = User;