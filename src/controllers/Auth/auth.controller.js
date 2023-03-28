const User = require("../../database/User.model");

const validateLogin = (username, email, password, roles) => {
  const user = new User({
    username: username,
    email: email,
    password: password,
    roles: roles,
  });
};

const registerLogin = () => {
  return "here register";
};

module.exports = {
  validateLogin,
  registerLogin,
};
