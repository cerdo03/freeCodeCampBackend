let express = require('express');
let app = express();
// let __dirname="/Users/suryashukla/Documents/Web Dev/freeCodeCampBackend"

app.get('/',function(req,res){
    res.sendFile(__dirname+"/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get('/json',function(req,res){
    const data = {
        message:"Hello json"
    }
    res.json(data);
});






























 module.exports = app;
