const express = require('express');
const engines = require('consolidate')
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

// npm i handlebars consolidatae --save
app.engine('hbs',engines.handlebars);
app.set('views','./views');
app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/jquery',(req,res)=>{
    res.render('jquerydemo');
})
app.get('/product',(req,res)=>{
    res.render('productATN');
})
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('Server is running...');