const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
 //call for express app
const app = express();
app.use(express.json());
//setting up our server file to serve static content

if(process.env.NODE_ENV ==='production')
{
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build',index.html'));
    });
}

//connecting to the MongoDB
const dbURI = config.get('dbURI');
const port = process.env.PORT  || 4000;
mongoose.connect(dbURI,{useCreateIndex:true})
.then((result)=>app.listen(port))
.catch((err)=>console.log(err));
