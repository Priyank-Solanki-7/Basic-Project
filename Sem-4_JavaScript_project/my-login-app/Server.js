const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// use middlewear

app.use(cors());
app.use(bodyParser.json());

// connect to mongodb

mongoose
  .connect("mongodb://localhost:27017/login", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.warn("connected to mongoDB");
  })
  .catch(err => {
    console.error("not connected db", err);
  });

// define schema

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const user = mongoose.model('user',userSchema);

//route to handle login

app.post("/login",async(req,res)=>{
    const {username,password}=req.body;

    // validation
    if(!username || !password){
        return res.status(400).json({
            massage:'username and password are require'
        })
    }

    //new user create

    const newUser = new user({username,password});

    try{
        await newUser.save();
        res.status(201).json({massage:'new user created sucessfully'})
    } catch(err){
        res.status(500).json({massage:'error saveing user',error:err})
    }
});
app.listen(PORT,()=>{
    console.log(`servar listen on ${PORT}`);
})