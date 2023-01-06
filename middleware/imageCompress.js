const sharp = require("sharp");
const path = require("path");

module.exports.imageCompress = async (req, res) => {
  const inputBuffer = path.resolve("./tree.jpg");
  const response = sharp(inputBuffer)
    .resize(320, 240)
    .toFile("compressed.webp", (err, info) => {
      console.log(err);
    });
  res.send(response);
};
