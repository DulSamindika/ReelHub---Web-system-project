const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstname: {type: String, required:true},
    secondname: {type: String, required:true},
    email:{type:String, required:true, unique: true },
    password: {type:String, required:true},
    age:{type:String},
    isAdmin:{
        type: Boolean, default:false
    }

},
{timestamps: true}
    );

//module.exports = mongoose.model("users", UserSchema);

const User = mongoose.model('users', UserSchema);
module.exports = User;