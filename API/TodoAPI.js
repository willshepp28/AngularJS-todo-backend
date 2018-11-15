/*
 |--------------------------------------------------------------------------
 | Require Dependencies
 |--------------------------------------------------------------------------
 */
const router = require("express").Router();
const models = require("../db/models");




// Gets all todos
router.get("/", async(request, response) => {

  
    try {
        const todos = await models.Todo.findAll();
        return response.status(200).json(todos);
    }catch(error) {
        console.log(error);
        response.status(400).send("error");
    }
});



// Get all todos by userId
router.get("/:id", async(request, response) => {

    try {
        const todos = await models.Todo.findAll({
            where: { userId: parseInt(request.params.id)}
        })
        return response.status(200).json(todos);
    }
    catch(error) {
        console.log(error);
        return response.status(400).send("error");
    }
})


module.exports = router;