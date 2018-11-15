const crypto = require("crypto");
// const dotenv = require("dotenv");
require('dotenv').config();



/**
 * 
 *  
 *      * We use the encrypt function to encrypt the users passowrd
 * 
 * 
 */




let encrypt = (password => {
       
    if(typeof password !== '') {
        return crypto.pbkdf2Sync(password.toString(), "salt", 10, 512, process.env.ENCRYPT_SECRET)
        .toString("hex");
    } else {
        return crypto.pbkdf2Sync(password, "salt", 10, 512, process.env.ENCRYPT_SECRET)
        .toString("hex");
    }

});


module.exports = {encrypt};