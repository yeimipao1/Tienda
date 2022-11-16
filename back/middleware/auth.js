const User = require ("../models/user")
const jwt=require("jsonwebtoken")
const ErrorHandler=require("../utils/erroHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors")

//verificamos si estamos autenticados, (existencia Token)
exports.isAuthenticatedUser= catchAsyncErrors(async(req, res, next)=>{
    const{token}=req.cookies

    if(!token){
        return next (new ErrorHandler("Debe iniciar sesion para acceder a este recurso", 401))
    }
    
    const decodificada = jwt.decode(token, process.env.JWT_SECRET)
    req.user=await User.findById(decodificada.id);

    next()
})