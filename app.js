/*
 |--------------------------------------------------------------------------
 | Require Dependencies
 |--------------------------------------------------------------------------
 */
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const API = require("./API/API");
const cors = require("cors");
const port = process.env.PORT || 3000;

application = express();

/*
|--------------------------------------------------------------------------
|  Middleware
|--------------------------------------------------------------------------
*/

application.use(morgan('dev'));// to log requests, to the console
application.use(bodyParser.json()); // parse application/json
application.use(bodyParser.urlencoded({ extended: false }));// parse application/x-www-form-urlencoded
application.use(cors());
require('dotenv').config();




/*
|--------------------------------------------------------------------------
| Api
|--------------------------------------------------------------------------
*/
application.use("/api/v1/", API);





/*
|--------------------------------------------------------------------------
| Start Server
|--------------------------------------------------------------------------
*/
application.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
