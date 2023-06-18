require('dotenv').config()
let express = require('express');
let app = express();
// let __dirname="/Users/suryashukla/Documents/Web Dev/freeCodeCampBackend"

app.get('/',function(req,res){
    res.sendFile(__dirname+"/views/index.html");
});

// app.use("/public", express.static(__dirname + "/public"));

// app.get('/json',function(req,res){
//     let data = {
//         message:"Hello json"
//     }
//     if(process.env.MESSAGE_STYLE=="uppercase"){
//         data.message=data.message.toUpperCase();
//     }
//     res.json(data);
// });

function logger(req,res,next){
    const method=req.method;
    const path = req.path;
    const ip = req.ip;

    console.log(`${method} ${path} - ${ip}`);
    next();
}

app.use(logger);





























 module.exports = app;
