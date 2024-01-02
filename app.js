var express = require('express');
var app = express();
var PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', async (req, res)=>{
    res.render('index')
})

app.listen(PORT, ()=>{console.log('working now');})