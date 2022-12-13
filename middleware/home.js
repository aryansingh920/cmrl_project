const sendMail = require('./sendMail');
module.exports.home = async (req, res, next) => {
    // console.log(sendMail);
    
    res.send("hi")
}