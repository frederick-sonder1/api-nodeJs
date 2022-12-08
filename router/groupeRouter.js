let express = require('express');                                                            // appel du module 'express'
let router = express.Router()                                                                // appel de la méthode 'router'
const groupe = require('../Controllers/groupeController.js')                                 // require du groupeController
let groupes = new groupe()                                                                   // instanciation du groupe

router.get("/", groupes.listController)                                                 // route pour recuperer tout les groupes
router.get("/:id", groupes.singleController)                                            // route pour recuperer 1 groupe
router.post("/register",groupes.register)                                               // route pour enregistrer 1 groupes
router.put("/update/:id", groupes.updateController)                                     // route pour mettre à jour 1 groupe
router.delete("/delete/:id", groupes.deleteGroupeController)                            // route pour supprimer 1 groupe

module.exports = router;                                                                     // export du module router (sinon ça marche pas)