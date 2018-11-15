const router = require("express").Router();



router.get("/", (request, response) => {
    return response.status(200).json({ message: "You have entered my API"});
});


module.exports = router;