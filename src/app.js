const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const bcrypt = require("bcryptjs");
require("./db/conn");
const Register = require("./models/registers");
const {json} = require("express");
const async = require("hbs/lib/async");

const users = []

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get('/' , (req, res) => {
    res.render("index")
});

app.get("/register", (req, res) => {
    res.render("register.hbs");
})

app.get("/login", (req, res) => {
    res.render("login.hbs");
})

app.post("/register", async (req, res) => {    
    
    try{ 
        
            // const hashedPassword = await bcrypt.hash(req.body.password, 10)
            // users.push({
            //     id: Date.now().toString(),
            //     name: req.body.name,
            //     email: req.body.email,
            //     password: hashedPassword
            // })
    
           // res.redirect('/login')
          
        const password = req.body.password;   
        const registerEmployee = new Register({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        })

       const registered = await registerEmployee.save();
       res.status(201).render("index");
   
    
    } catch {
        res.redirect('/register')
       }

        //  console.log(users)
    });

     /*console.log(req.body);
       const registerUser = new Register(req.body);
         registerUser.save().then(() => {  
       res.status(201).render("index");
    }).catch((error) => {
        res.status(400).render(error);
    })
})*/
app.post("/login", async (req, res) => {
   
try{

         const email = req.body.uname;
        const password = req.body.psw
        
    const useremail = await Register.findOne({email : email});

    const isMatch = await bcrypt.compare(password, useremail.hashedPassword);
    if(isMatch){
        res.status(201).render("index");
    }
    else{
        res.send("not fount");
    }

 } catch (error) {
     res.status(400).send("invalid");
 }
})



app.listen(7000, () => {
    console.log('server is running at 7000');
})