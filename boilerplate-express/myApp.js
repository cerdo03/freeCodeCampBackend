let express = require('express');
let app = express();
// let __dirname="/Users/suryashukla/Documents/Web Dev/freeCodeCampBackend"

app.get('/',function(req,res){
    res.sendFile(__dirname+"/views/index.html");
});































 module.exports = app;
