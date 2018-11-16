const router = require("express").Router();


// This is the signup endpoint
router.post("/signup", async(request, response) => {
    return response.status(200).send("You are in the signup endpoint");
});



module.exports = router;