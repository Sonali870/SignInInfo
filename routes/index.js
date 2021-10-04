var express = require('express');
const Register = require('../src/models/registers');
// const Register = require("./models/registers");
var router = express.Router();
const RegUser = Register.find({});

router.get('/', function(req, res, next) {
    res.render('index', {title: 'name', condition: false});
});

router.get('/users', (req, res) => {

    let params = [
        {name:'Dr IQsdefrgrg',email:'Dr ad@gmail.com',password: 12345},
        {name:'verma',email:'verma_kashyap@dooleyfahey.net',password: 2345},
        {name:'Sonali',email: 'admin@gmail.com',password: '7860'},
        {name: 'Sonali2',email: 'admin2@yopmail.com', password:'78600'},
        {name:'vermak',email:'verma_kashyap123@dooleyfahey.net',password:'45767887'},
        {name:'suga', email:'suga@gmail.com',password:'567890'}

        // {name: 'ad@gmail.com'},
        // {name: 12345},
        // {email:'Dr IQsdefrgrg'},
        // {email: 'ad@gmail.com'},
        // {email: 12345}
    ]
    res.render('users', {params: params});
});


module.exports = router;