let express = require('express');                                                            // appel du module 'express'
let router = express.Router()                                                                // appel de la méthode 'router'
const groupe = require('../Controllers/groupeController.js')                                 // require du groupeController
let groupes = new groupe()                                                                   // instanciation du groupe

router.get("/", groupes.listGroupe)                                                 // route pour recuperer tout les groupes
router.get("/name", groupes.listGroupeByName)                                       // route pour récupérer tout les nom des groupes
router.get("/:id", groupes.singleGroupe)                                            // route pour recuperer 1 groupe
router.post("/register",groupes.registerGroupe)                                               // route pour enregistrer 1 groupes
router.put("/update/:id", groupes.updateGroupe)                                     // route pour mettre à jour 1 groupe
router.delete("/delete/:id", groupes.deleteGroupe)                            // route pour supprimer 1 groupe

module.exports = router;                                                                     // export du module router (sinon ça marche pas)