import mongoose from 'mongoose';

const userSchema =new mongoose.Schema({
    id:{
        type:Number,
    },
    name: {
        type: String,
        
    },
    email: {
        type: String,
    
    },
    message: {
        type: String,
   
    },
    // password: {
    //     type: String,
      
    // }, otp: {
    //     type: Number,
      
    // },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
