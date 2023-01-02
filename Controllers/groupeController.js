const db = require('../DbConnection/DbConnection.js') ;                           // require de la connection a l db
let express = require('express');                                                 // appel du module 'express'


class Groupes {

    listGroupe(req,res){
        db.query('SELECT * FROM groupe', [],function (err,data){
            if (err) {
                throw err;
            }
            console.log(data)
            res.send(data)                      // message renvoyé si la requete renvoyée
        })
    }

    listGroupeByName(req,res){
        db.query('SELECT `name` FROM groupe', [],function (err,data){
            if (err) {
                throw err;
            }
            console.log(data)
            res.send(data)
        })
    }

    singleGroupe(req,res){
        db.query('SELECT * FROM groupe WHERE id = ?',[req.params.id], function (err,data){
            if (err) {
                console.log(err)
                throw err;
            }
            console.log(data)
            res.send(data);                       // message renvoyé si la requete renvoyée
        })
    }

    updateGroupe(req,res){
        db.query('UPDATE groupe SET ? WHERE id = ? ',[req.body, req.params.id] , function (err,data){
            if (err){
                console.log(err)
                throw err;
            }
            console.log(req.body)
            res.send(req.body) ;
        })
    }
    deleteGroupe(req){
        db.query('DELETE FROM groupe WHERE id = ?', [req.params.id], function (err,data){
            if (err){
                console.log(err)
                throw err;
            }
            console.log(data, "le groupe à bien été supprimé")
            return "le groupe à bien été supprimé";
        })
    }

    registerGroupe(req,res){
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        db.query("INSERT INTO groupe SET ? ", [req.body], function(err,data){
            console.log( req.body)
            res.send(req.body)
        })
    }

}
module.exports = Groupes;
