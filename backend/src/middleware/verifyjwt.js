import jwt from "jsonwebtoken";


export const verifyJwt = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(400).json({ message: "unAuthorized" });
    }

    const decoded = jwt.verify(token, process.env.ACCESS_SECRET_TOKEN);

    req.user =decoded

    next()

  } catch (error) {
    console.log(error)
    res.status(500).json({message:"server error"})
  }
};
