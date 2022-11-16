const express=require("express");
const { registroUsuario, loginUser } = require("../controllers/userController");
const router=express.Router();

router.route('/usuario/registro').post(registroUsuario)
router.route('/login').get(loginUser)

module.exports=router