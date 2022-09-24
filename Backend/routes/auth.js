const router= require("express").Router();
const user=require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//register
router.post("/register", async (req,res)=>{
    
    
    const newUser = new user({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
          ).toString(),

});

try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }

});

    
    //Login
    router.post("/login", async (req, res) => {
        
        // const Newuser = await user.findOne(
        //             {
        //                 username: req.body.username
        //             });

        //         res.json(Newuser);
        try{
            const User = await user.findOne(
                {
                    username: req.body.username
                }
            );
    

            if(!User){
                res.status(401).json("Wrong User Name");
            } 
         else{
            //Decription
            const hashedPassword = CryptoJS.AES.decrypt(
                User.password,
                process.env.PASS_SEC
            );
    
    
            const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    
            const inputPassword = req.body.password;
            
            if(originalPassword != inputPassword) {
                res.status(401).json("Wrong Password");
            }
            else{
                const accessToken = jwt.sign(
                    {
                        id: User._id,
                        isAdmin: User.isAdmin,
                    },
                    process.env.JWT_SEC,
                        {expiresIn:"3d"}
                    );

                //For hiding password
                 const { password, ...others } = User._doc;  
                res.status(200).json({...others, accessToken});
            }
         }
            }catch(err){
                res.status(500).json(err);
            }
        });    

module.exports=router;