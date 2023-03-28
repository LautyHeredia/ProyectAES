const { Router } = require("express");
const authRoute = require("./Auth.routes");
const userRoute = require("./users.routes");

const routes = Router();

routes.use("/users", userRoute);
routes.use("/auth", authRoute);

routes.get("/", (req, res) => {
  res.status(200).json("this root page");
});

module.exports = routes;
