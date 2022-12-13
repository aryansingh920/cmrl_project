const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middleware");
var path = require('path');

router
    .get("/", middleware.home)
    .post("/send",middleware.verify)
    .post("/verify",middleware.verify)
    .post("/feedback",middleware.feedback)
    .get("/getfeedback",middleware.getfeedback)
    .get("/getfeedback/download",(req,res)=>{res.download(path.join(__dirname,"../all_feedbacks.csv"))})
    .post("/admin",middleware.adminAuth);

module.exports = router;