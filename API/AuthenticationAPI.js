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

    const signup = await models.User.findAll(request.body)
        .then( user => {

            if( user < 1) {
                return response.status(404).send("no user found")
            }

            let token = jwt.sign({ user: [{ id: user[0].id }] }, process.env.JWT_SECRET);
            response.status(200).json({ token })
        })
        .catch(error => { 
            console.log(error);
            return response.status(400).send("Username or password not found");
        })

});



module.exports = router;