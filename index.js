//nodemon = plugin servant à stopper et relancer le server automatiquement
//          pour afficher les modification
//pour lancer le server aver nodemon: "nodemon index.js" (ou nom du fichier index)

let express = require('express');                               // appel du module 'express'
let app = express();

var userRouter = require('./router/userRouter');                //appel des Routeur
var groupeRouter = require('./router/groupeRouter');            //appel des Routeur

app.use(express.json())
app.use('/users', userRouter);
app.use('/groupes', groupeRouter);

app.listen(3000)                                           //écoute du port 3000