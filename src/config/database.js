const mongoose = require("mongoose");
const {
  DB_CONN,
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASS,
  DB_PORT,
  DB_URL,
} = require("./variable.env");

const url = `${DB_CONN}+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const connect = mongoose
  .connect(url || DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to the database  successfully "))
  .catch((err) => console.log(err));

const disconnectBD = () => {
  mongoose.connection.close();
};

module.exports = {
  connect,
  disconnectBD,
};
