const sendMail = require('./sendMail')

module.exports.verify = async (req,res)=>{
    // console.log(req.body);

    var otp = ""
    for(i=0;i<6;i++){
        otp+=parseInt(Math.random()*10)
    }
    await sendMail(`${req.body.email}`,"OTP is ",`OTP is ${otp}`,"aryansingh");

    // console.log(`${otp}`);
    res.send(`Otp is ${otp}`)
}