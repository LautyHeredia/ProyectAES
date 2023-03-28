const User = require("../../database/User.model");
const createUser = (name, email, password) => {
  const newuser = User({
    name: name,
    email: email,
    password: password,
  })
    .then((result) => {
      return result;
    })
    .catch((error) => error);
};

module.exports = createUser;
