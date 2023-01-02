let express = require('express');                                                           // appel du module 'express'
let router = express.Router()                                                               // appel de la méthode 'router'
const user = require('../Controllers/userController.js')
const {middleConn} = require("../middleWare/MiddleConn.js");                                // require de l'userController
let users = new user()                                                                      // instanciation de l'user

router.get("/", /*middleConn.checkToken,*/ users.listUser)                                      // route pour recuperer tout les utilisateurs
router.get("/:id",/* middleConn,*/ users.singleUser)                                   // route pour recuperer 1 utilisateur
router.post("/login", users.loginUser)                                                 // route pour se connecter
router.post("/register",/*middleConn ,*/users.registerUser)                            // route pour s'enregistrer
router.put("/update/:id",/* middleConn,*/ users.updateUser)                            // route pour mettre à jour 1 utilisateur
router.delete("/delete/:id",/* middleConn,*/ users.deleteUser)                         // route pour supprimer 1 utilisateur

module.exports = router;