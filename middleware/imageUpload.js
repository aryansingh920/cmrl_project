const path = require("path");
const sharp = require("sharp");

module.exports.imageUpload = async (req, res) => {
  const inputBuffer = path.resolve(`images/${req.file.filename}`);
  console.log(req.file.filename);
  const response = sharp(inputBuffer)
    .resize(320, 240)
    .toFile(`images/${req.file.filename}-compressed.jpeg`, (err, info) => {
      console.log(err);
    });
  res.send(response);
};
