const router = require("express").Router();
const models = require("../db/models");



router.get("/", async(request, response) => {

    try {
        const todos = await models.Todo.findAll();
        return response.status(200).json(todos);
    }catch(error) {
        console.log(error);
        response.status(400).send("error");
    }
})


module.exports = router;