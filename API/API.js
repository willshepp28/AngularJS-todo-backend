const router = require("express").Router();
const models = require("../db/models");


router.get("/", (request, response) => {
    return response.status(200).json({ message: "You have entered my API"});
});






module.exports = router;