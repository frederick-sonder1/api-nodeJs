const {body} = require("express-validator");                                                       // integre le bundle validator de "express" dans la variable body (req.body)
const {verify} = require("jsonwebtoken")
const fs = require("fs");
//
// // let privateKey = fs.readFileSync('private.key');
// // let token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256'});
// // const middleConn = () =>{
// //     return [body('email').isEmail().withMessage('Email invalide'),                            // verifie si l'email est au format email
// //             body('password').isStrongPassword({minLength: 8, minLowercase:1, minSymbols: 1, minUppercase: 1, minNumbers: 1,
// //                 returnScore: false, pointsPerUnique: 2, pointsPerRepeat:1 }).withMessage("Votre mot de passe doit être d'au minimum 8 " +
// //                 "caractere et contenir au minimum une majuscule, une minuscule et un symbole ")]    // verifie si le mot de passe contient les charactetre définis
// // }
// // module.exports = {middleConn}

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        if(token){
            token = token.slice(7);
            verify(token, privateKey, (err, decoded)=>{
                if(err){
                    res.json({
                        succes:0,
                        message:"Token Invalide"
                    });
                }else{
                    next();
                }
            });
        }else{
            res.json({
                succes:0,
                message: "Accès refusé! Utilisateur non authorisé"
            });
        }
    }
}