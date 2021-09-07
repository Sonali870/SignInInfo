const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/UserSignin",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection set");
}).catch((e) =>{
        console.log("no connection");
})