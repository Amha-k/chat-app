import jwt from "jsonwebtoken";

export const genjwt = async (userID, res) => {
  const token = jwt.sign({ userID }, process.env.ACCESS_SECRET_TOKEN, {
    expiresIn: "1d",
  });
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure:process.env.NODE_ENV !== "development"
  });
  return token;
};
