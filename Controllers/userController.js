const db = require('../DbConnection/DbConnection.js') ;                           // require de la connection a l db
let express = require('express');                                                 // appel du module 'express'


class User {

    listController(req, res){
        db.query('SELECT * FROM users',[], function (err,data){
            if (err) {
                throw err;
            }
            console.log(data)
            res.send(data)                      // message renvoyé si la requete renvoyée
        })
    }

    singleController(req,res){
        db.query('SELECT * FROM users WHERE id = ?',[req.params.id], function (err,data){
            if (err) {
                console.log(err)
                throw err;
            }
            // console.log(req.params.id)
            console.log(data)
            res.send(data);                       // message renvoyé si la requete renvoyée
        })
    }

    updateController(req,res){
        db.query('UPDATE users SET ? WHERE id = ? ',[req.body, req.params.id] , function (err,data){
            if (err){
                console.log(err)
                throw err;
            }
            console.log(req.body)
            res.send(req.body) ;
        })
    }

    deleteUserController(req,res){
        db.query('DELETE FROM users WHERE id = ?', [req.params.id], function (err,data){
            if (err){
                console.log(err)
                throw err;
            }
            console.log(data, "l\'utilisateur à bien été supprimé")
            res.send("l\'utilisateur à bien été supprimé");
        })
    }

    loginController(req,res){
       db.query('SELECT * FROM users WHERE email = ? AND password = ?', [req.body.email, req.body.password], function (err,data){
            if (err){
                console.log(err)
                throw err;
            }
            console.log(data, "l\'utilisateur est bien connecté")
           res.send(data,"l\'utilisateur est bien connecté")
       })
    }

    register(req,res){
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        db.query("INSERT INTO users SET ? ", [req.body], function(err,data){
            console.log( req.body)
            res.send(req.body)
        })
    }
}
module.exports = User;