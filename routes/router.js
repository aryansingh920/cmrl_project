const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middleware");
var path = require("path");

router
  .get("/", middleware.home)
  .post("/send", middleware.verify)
  .post("/verify", middleware.verify)
  .post("/feedback", middleware.feedback)
  .get("/getfeedback", middleware.getfeedback)
  .get("/getfeedback/download/csv", (req, res) => {
    res.download(path.join(__dirname, "../all_feedbacks.csv"));
  })
  .get("/getfeedback/download/pdf", middleware.pdfConverter)
  .get("/getfeedback/download/xlsx", middleware.pdfConverter)
  .post("/admin", middleware.adminAuth);

module.exports = router;
