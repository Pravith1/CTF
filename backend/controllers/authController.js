const asyncHandler = require('../utils/asyncHandler')
const User = require('../models/User')
const ApiError = require('../utils/ApiError')
const ApiResponse = require('../utils/ApiResponse')

const signup = asyncHandler(async(req,res)=>{
    const user = await User.create(req.body)
    req.session.user = {
        id: user._id,
        email: user.email,
        username: user.username,
        role: user.role 
    }
    res.status(201).json(new ApiResponse(201,user,"Registration successful"))
})


const login = asyncHandler(async(req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
        throw new ApiError(404, "User not found")
    }
    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
        throw new ApiError(404, "Invalid credentials")
    }
    req.session.user = {
        id: user._id,
        email: user.email,
        username: user.username,
        role: user.role
    }
    await user.save();
    res.status(200).json(new ApiResponse(200, user,"User logged in"))
})

const logout = asyncHandler(async(req, res) => {
    req.session.destroy(err => {
        if (err) {
            throw new ApiError(500, "Error logging out")
        }
        res.status(200).json(new ApiResponse(200,null,"Logged out successfully"));
    })
})

const sessionUser = asyncHandler(async(req,res)=>{
    if(req.session.user){
        res.send(200).json(new ApiResponse(200,req.session,"Session initialized"))
    }
    else
        throw new ApiError(403,"Session uninitized")
})  


module.exports = {signup,login,logout,sessionUser}