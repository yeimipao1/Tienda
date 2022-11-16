//Crear y enviar un token guardado en una cookie
const tokenEnviado = (user, statusCode, res) =>{

    //creamos el token
    const token = user.getJwtToken();

    //Opcione del token
    const Opciones={
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME*24*60*60*1000
        ),
        httpOnly:true
    }

    res.status(statusCode).cookie("token", token, Opciones).json({
        succes:true,
        token,
        user
    })
}

module.exports= tokenEnviado;