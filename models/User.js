import mongoose from 'mongoose'

const {Schema} = mongoose; 

const UserShema = new Schema({
    name:{
        type:Schema.Types.String,
        required:true
    },
    email:{
        type:Schema.Types.String,
        required:true,
        unique:true
    },
    phone:{
        type:Schema.Types.Number,
        required:true
    },
    address:{
        type:Schema.Types.String,
        required:true
    }
})

const User = mongoose.model("User",UserShema);

export default User;