const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const asyncHandler = require('express-async-hadler');
const bcrypt = require('bcrypt.js');


const registerUser = asyncHandler ( async(req , res) => {

    const {name , email , password , role} = req.body;
    if(!name || !email || !password) {
        res.status(400);
        throw new Error("Please provide all required fields");
        
    }

    //Check if user exists

    const userExists = await User.findOne({email});
    if(userExists) {
        res,status(400);
        throw new Error("User already exists");
    }

    // Hash Password 

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role : role || 'user'
    });

    if(user) {
        res.status(201).json ({
            _id : user.id,
            name : user.name,
            email: user.email,
            role: user.role,
            token : generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error("Invalid User Data");
    }
   
});

// Login User

const loginUser = asyncHandler(async(req , res) => {
    const {email , password} = req.body;

    const user = await User.findOne({email});
    if(!user) {
        res.status(401);
        throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(password , user.password);
    if(!isMatch) {
        res.status(401);
        throw new Error ("Invalid email or password");
    }

    res.json({

        _id : user.id,
        name : user.name,
        email : user.email,
        role : user.role,
        token : generateToken(user._id)
    });
});

// Get user Profile

const getUserProfile = asyncHandler(async(req, res) => {
    const user = await User.findById(req, user.id).select('-password');
    if(!user) {
        res.status(404);
        throw new Error('User not found');
    }
    res.json(user);
});

module.exports = {registerUser , loginUser , getUserProfile};