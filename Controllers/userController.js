const db = require('../DbConnection/DbConnection.js') ;                             // require de la connection a l db
const bcrypt = require('bcrypt');                                                   // require de la méthode de cryptage

const hashage = async (password) => {                                               // définition de quel param on hash
    return await bcrypt.hash(password, 10)
}

const hashVerify = async (password) => {
    return await bcrypt.compare(password)
    // compareSync(data, encrypted)
    // data - [REQUIRED] - data to compare.
    //     encrypted - [REQUIRED] - data to be compared to.
    // if(match) {
    //     //login
    // }
}


class User {
    listUser(req, res){
        db.query('SELECT * FROM users',[], (err,data)=>{
            if (err) {
                throw err;
            }
            console.log(data)
            res.send(data)                      // message renvoyé si la requete renvoyée
        })
    }

    singleUser(req,res){
        db.query('SELECT * FROM users WHERE id = ?',[req.params.id], (err,data)=>{
            if (err) {
                console.log(err)
                throw err;
            }
            // console.log(req.params.id)
            console.log(data);
            res.send(data);                       // message renvoyé si la requete renvoyée
        })
    }

    updateUser(req,res){
        req.body.updated_at = new Date();
        db.query('UPDATE users SET ? WHERE id = ? ',[req.body, req.params.id] , function (err){
            if (err){ throw err;}
            console.log(req.body)
            res.send(req.body) ;
        })
    }

    deleteUser(req,res){
        db.query('DELETE FROM users WHERE id = ?', [req.params.id], function (err,data){
            if (err){
                console.log(err)
                throw err;
            }
            console.log(data, "l\'utilisateur à bien été supprimé")
            res.send("l\'utilisateur à bien été supprimé");
        })
    }

    async loginUser(req,res){
        let password = await hashage(req.body.password);
        let result = db.query('SELECT * FROM users WHERE email = ? AND password = ?', [req.body.email, req.body.password])
            console.log(req.body.password, password)

            // const match = await bcrypt.compare(password, user.passwordHash);

            // if ('email' !== req.body.email && 'password'!== req.body.password ){
            //     console.log("l\'utilisateur n\'est pas connecté")
            //     // return res.status(200).json({message:"l\'utilisateur n\'est pas connecté"})
            // }else{
            //     if (db.email = [req.body.email] , db.password = [req.body.password]) {
            //         console.log( "l\'utilisateur est bien connecté")
            //         res.send( "l\'utilisateur est bien connecté")
            //     }
            // }
            // console.log("l\'utilisateur est bien connecté")
            // return res.status(200).json({message:"l\'utilisateur est bien connecté"})
    }

     async registerUser(req,res,next) {
        let password = await hashage(req.body.password);
        let {email, firstname, lastname, groupe_id} = req.body

        if(!email || !password || !firstname || !lastname || !groupe_id){
            res.status(400).json({message: 'Erreur, l\'utilisateur n\'a pu être enregistré'})
            next()
        }else{
            db.query("INSERT INTO users SET ? ", {email, password , firstname, lastname, groupe_id})
            return res.status(200).json({message: 'l\'utilisateur à bien été enregistré'})
        }
     }
}
module.exports = User;