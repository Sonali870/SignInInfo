const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const employeeSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true,
        unique : true
    },
    email : {
    type : String,
    required : true,
    unique : true
    },
    password : {
        type : String,
        required : true
    }


    // phone : {
    //     type : String,
    //     required : true,
    //     unique : true
    // },
    // status : {
    //     type : String,
    //     required : true
    // }

})

// userSchema.pre("save", async function(next) {
   
//         console.log(this.password);
//         this.password = await bcrypt.hash(password, 10);
//     next();
// })

const Register = new mongoose.model("Register", employeeSchema);
module.exports = Register;


