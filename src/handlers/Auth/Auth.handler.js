const AuthController = require("../../controllers/Auth/auth.controller");

const LoginUser = async (req, res) => {
  const { username, email, password, roles } = req.body;
  try {
    const result = await AuthController.validateLogin(
      username,
      email,
      password,
      roles
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const RegisterUser = async (req, res) => {
  const result = await AuthController.registerLogin();
  res.status(200).json(result);
};

module.exports = {
  LoginUser,
  RegisterUser,
};
