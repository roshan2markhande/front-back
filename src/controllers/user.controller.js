const User = require('../models/user.model');

exports.createUser = async (req, res) => {
  const req_body = req.body;
  const userObj={
    username:req_body.username,
    email:req_body.email,
    password:req_body.password
}
try{
    //insert into mongo
    const InsertUser=await User.create(userObj)
    return res.status(200).send(InsertUser)
    //return respornc
    }catch(err){
        console.log("Error while creating category",err)
        res.status(500).send({
            message:"Error while creating category"
        })
    }
};