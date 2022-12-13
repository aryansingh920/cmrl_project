const admin = require("../schemas/admin");

module.exports.adminAuth = async  (req,res)=>{
    // console.log(req.body)
    const email = req.body.email;
    const password = req.body.password;
    const result = await admin.findOne({email:email})    
    if(result){
        if(password === result.password){
            res.send("Authenticated");
        }else{
            res.send("Wrong Password");
        }
    }else{
        res.send("Email not there in DB");
    }
    // try{
    //     const user = await User.findOne({email:req.body.email});
    //     !user && res.status(404).json("user not found");

    //     const validPassword = await User.findOne({password:req.body.password});
    //     !validPassword && res.status(400).json("wrong password");
        
    //     res.status(200).json(user);
    // }
    // catch(err){
    //     res.status(500).json(err);
    // }                            
}