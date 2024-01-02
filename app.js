var express = require('express');
var app = express();
var PORT = 3000;

app.set('view engine', 'ejs');
app.use(
    cors({
        origin: ['https://webb-service-app.onrender.com', 'http://localhost:3000/'],
    })
)

app.get('/', async (req, res)=>{
    res.render('index')
})

app.listen(PORT, ()=>{console.log('working now');})