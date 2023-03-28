const userController = require("../../controllers/users/users.controller");
const createUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const result = await userController.createUser(name, email, password);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: "error dont create" });
  }
};

module.exports = createUser;
