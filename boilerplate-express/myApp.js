require('dotenv').config()
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
// let __dirname="/Users/suryashukla/Documents/Web Dev/freeCodeCampBackend"

// app.get('/now',function(req,res,next){
//     req.time=new Date().toString();
//     next();
// },function(req,res){
//     res.send({time:req.time});
   
// });
// app.use(logger);
// app.get('/:word/echo',(req,res)=>{
//     const word=req.params.word;
//     res.send({echo:word});
// });
//     next();
// },function(req,res){
//     // res.send({echo:${req.params.word}});
// });
// app.get('/name',(req,res)=>{
//     var firstName = req.query.first;
//     var lastName = req.query.last;
//     const fullName = `${firstName} ${lastName}`;
//     res.send({name:fullName});
// });
// function middleware(req,res,next){
//     bodyParser.urlencoded({extended:false});
//     next();
// }
app.use(
    bodyParser.urlencoded({ extended: false })
);
app.post('/name',(req,res)=>{
    console.log(req.body);
    const {first,last}=req.body;
    res.send({name:first+" "+last});
});
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

// function logger(req,res,next){
//     const method=req.method;
//     const path = req.path;
//     const ip = req.ip;

//     console.log(`${method} ${path} - ${ip}`);
//     next();
// }





























 module.exports = app;
