const User = require("../models/userModel");
const errorHandler = require('../Middelewares/500')
const jwt= require('jsonwebtoken');
const bcrypt= require('bcrypt');



// Login 
const login = async (req, res) => {
    const {  email, password } = req.body;

    if(!email || !password){
        return res.json("please enter email and password")
    }
    try {
        const user = await User.findOne({email}).select("+password")
        if(!user){
        return res.json("invalid email") 

        }

        const isMatch = await user.matchPasswords(password)
        if(!isMatch){
            return res.json("invalid password")

        }
        const accessToken = jwt.sign(
            {
              email: email,
              
              password: password,
            },
            process.env.ACCESS_TOKEN_SECRET
          );
          res.json(accessToken)
      } catch (error) {
       console.log(error.message);
      }


   
  };


//signup
const signup = async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      const users = await User.find();
      const isEmailTaken = users.some((user) => user.email === email);
  
      if (isEmailTaken) {
        return res.json("Email already taken.");
      }
  
      const accessToken = jwt.sign(
        {
          email: email,
          
          password: password,
        },
        process.env.ACCESS_TOKEN_SECRET
      );
  
      const hashedPwd = await bcrypt.hash(password, 10);
      const newUser = new User({
        username: username,
        email: email,
        password: hashedPwd,
        token: accessToken,
      });
      const addUser = await newUser.save();
  
      res.json(addUser);
    } catch (error) {
      errorHandler(error, req, res);
    }
  };


module.exports = {
    login,
    signup
};