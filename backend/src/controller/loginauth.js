import User from "../model/user.js";
import { loginvalidate } from "../validator/auth/login.js";
import bcrypt from "bcrypt";
import { genjwt } from "../lib/jwtgen.js";

export const login = async (req, res) => {
  try {
    const { error, value } = await loginvalidate.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const user=await User.findOne({emial:value.emial})
    const isPassword = await bcrypt.compare( value.password,user.password);

 if (!isPassword) {
      return res.status(400).json({ message: "incorrect password or email" });
    }
    genjwt(user._id, res);
  res.status(201).json({
    _id: user._id,
    name:user.name,
    email:user.email,
    profile:user.profile

})

  } catch (error) {

    res.status(500).json({message:error})
  }
};
