const { Router } = require("express");

const userRoute = Router();
const User = require("../database/User.model");

userRoute.get("/", async (req, res) => {
  const allUser = await User.find();
  res.status(200).json(allUser);
});

userRoute.post("/", (req, res, next) => {
  const { username, email, password } = req.body;
  const newuser = new User({
    username: username,
    email: email,
    password: password,
  });

  const result = newuser.save();

  res.json(result);
});
module.exports = userRoute;
