let validatorData = require("express-validator");

let jwt = require("jsonwebtoken")
const fs = require("fs");

let privateKey = fs.readFileSync('private.key');
let token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256'});


