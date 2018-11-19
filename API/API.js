const router = require("express").Router();
const models = require("../db/models");


router.get("/", async(request, response) => {
    return response.status(200).json({ message: "You have entered my API"});
});

// router.get("/users", async(request, response) => {
//     try {
//         const users = await models.User.findAll();

//         return response.status(200).json(users);
//     }
//     catch(error){
//         console.log(error);
//         return response.status(400).send(error);
//     }
// })




module.exports = router;