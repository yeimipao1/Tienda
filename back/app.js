const express=require("express");
const app = express();
const errorMiddleware= require("./middleware/errors")
const cookieParser= require("cookie-parser")

//uso de constantes importadas
app.use(express.json());
app.use(cookieParser());

//importar rutas
const productos=require("./routes/products")
const usuarios=require("./routes/users")
const ventas = require("./routes/ventas")

app.use('/api',productos) // sujeto cambios

app.use('/api',usuarios)

app.use('/api', ventas)

//Middlewares para manejar errores
app.use(errorMiddleware)


module.exports=app
/**aqui se registra lo que ya esta listo*/


//modelo-controlador-apps 
/**ruta de navegador app.use('/api',index) home */
