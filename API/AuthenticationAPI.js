const router = require("express").Router();
const models = require("../db/models");
const jwt = require("jsonwebtoken");




/*
|--------------------------------------------------------------------------
|  Signup Api - the endpoint where users signup
|--------------------------------------------------------------------------
*/
router.post("/signup", async(request, response) => {

    console.log(request.body);

    console.log("In the signup endpoint");
    try{

        if(request.body.username && request.body.password) {
            const signup = await models.User.create(request.body);

            return response.status(200).send("Successfully signed up new user");
        }
    }
    catch(error){
        return response.status(400).send("Error");
    }
   
});





router.post("/login", async(request, response) => {

    console.log(request.body);

    console.log("In the login endpoint");

    try {
        const login = await models.User.create(request.body);

        return response.status(200).send();
    }
    catch(error){
        console.log(error);
        return response.status(400).send("Error");
    }

});



module.exports = router;