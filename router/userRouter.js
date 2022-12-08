let express = require('express');                                                       // appel du module 'express'
let router = express.Router()                                                           // appel de la méthode 'router'
const user = require('../Controllers/userController.js')                                // require de l'userController
let users = new user()                                                               // instanciation de l'user

router.get("/", users.listController)                                              // route pour recuperer tout les utilisateurs
router.get("/:id", users.singleController)                                         // route pour recuperer 1 utilisateur
router.post("/login", users.loginController)                                       // route pour se connecter
router.post("/register",users.register)                                            // route pour s'enregistrer
router.put("/update/:id", users.updateController)                                  // route pour mettre à jour 1 utilisateur
router.delete("/delete/:id", users.deleteUserController)                           // route pour supprimer 1 utilisateur

module.exports = router;