const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController");
const { isAuthenticatedUser } = require("../middleware/auth");

//probemos auenticación

router.route('/productos').get(isAuthenticatedUser, getProducts);
router.route('/producto/nuevo').post(newProduct);//establecemos la ruta
router.route('/producto/:id').get(getProductById);// Ruta para consultar Id
router.route('/producto/:id').put(updateProduct);//creación de la ruta de actualizacion
router.route('/producto/:id').delete(deleteProduct);//Creación de la ruta de eliminacion por id

fetch

module.exports=router;