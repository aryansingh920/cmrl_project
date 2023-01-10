const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middleware");
var path = require("path");
var random = require("randomize");
const multer = require("multer");
// const uuidv4 = require("uuid/v4");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../", "images"));
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, "file" + "-" + fileName);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

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
  .post("/admin", middleware.adminAuth)
  .post("/image/upload", upload.single("file"), middleware.imageUpload)
  .get("/image/compress", middleware.imageCompress);

module.exports = router;
