let mysql = require('mysql');

let db = mysql.createConnection({   //création connection database
    host: "localhost",
    user: "root",
    password: "",
    database: "api-symfony",
})

db.connect((err)=>{                             //conection a la db
    if (db.state === 'connected'){
        console.log('DataBase connected')
    }else{
        throw err;
        console.log('impossible to connect')
    }
})

module.exports = db                                 // exportation connection bdd