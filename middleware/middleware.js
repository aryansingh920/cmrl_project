const home = require("./home.js");
const verify = require("./verify.js");
const send = require("./send.js");
const feedback = require("./feedback.js");
const getfeedback = require("./getfeedback.js");
const adminAuth = require("./adminAuth.js");
const pdfConverter = require("./pdfConverter.js");

const middleware = {
  home: home.home,
  verify: verify.verify,
  feedback: feedback.feedback,
  getfeedback: getfeedback.getfeedback,
  adminAuth: adminAuth.adminAuth,
  pdfConverter: pdfConverter.pdfConverter,
};

module.exports = middleware;
