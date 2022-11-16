const User = require("../models/user")
const ErrorHandler= require("../utils/erroHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");

//Registrar nuevo usuario/api/usuario/registro

exports.registroUsuario= catchAsyncErrors(async(req, res, next)=>{
    const{nombre, email, password}= req.body;

    const user = await User.create({
        nombre,
        email,
        password,
        avatar:{
            public_id: "rererhhthjty9jtyutyuiiky",
            url:"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG.png"
        }
        
    })
   
    tokenEnviado(user, 201, res)

    })


// iniciar Sesion-Login
exports.loginUser = catchAsyncErrors(async(req, res, next)=>{
    const {email, password} = req.body;

    //Revisar si los campos estan completos
    if(!email || !password){
        return next(new ErrorHandler("Por favor ingrese email & Contraseña", 400))
    }

    //Buscar al usuario en la base de datos
    const user = await User.findOne({email}).select("+password")
    if(!user){
        return next(new ErrorHandler("Email o contraseña invalidos", 401))
    }

    //comparar contraseña, verificar si esta bien
    const contraseñaOk= await user.comparePassword(password);

    if (!contraseñaOk){
        return next(new ErrorHandler("Contraseña invalidad", 401))
    }
    tokenEnviado(user, 200, res)
})
