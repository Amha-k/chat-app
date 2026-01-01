import User from"../model/user.js"
import {SignUpValidator} from"../validator/auth/signup.js"
import  {genjwt} from"../lib/jwtgen.js"

export const signUP =async(req,res)=>{
    try {

const {value,error} = await SignUpValidator.validate(req.body)
if(error){
    return res.status(400).json({error:error.details[0].message})
}
const existingUser = await User.findOne({ email: req.body.email });
if (existingUser) {
  return res.status(400).json({ message: "Email already registered." });
}

const newUser= await User.create(value)

generateToken(newUser._id,res)

res.status(201).json({
    _id: newUser._id,
    name:newUser.name,
    email:newUser.email,
    profile:newUser.profile

})
 } 
 catch (error) {
    console.log(error)
        res.status(500).json({message:"server error"})
    }

}