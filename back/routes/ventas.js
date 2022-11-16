const express=require("express")
const router=express.Router();

const { getVentas, newVenta, getVentaById, updateVenta, deleteventa } = require("../controllers/ventasController")

router.route('/ventas').get(getVentas)
router.route('/venta/nuevo').post(newVenta);//establecemos la ruta
router.route('/venta/:id').get(getVentaById);// Ruta para consultar Id
router.route('/venta/:id').put(updateVenta);//creación de la ruta de actualizacion
router.route('/venta/:id').delete(deleteventa);//Creación de la ruta de eliminacion por id


module.exports=router;
