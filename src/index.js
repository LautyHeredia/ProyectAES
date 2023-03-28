const server = require("./config/app");
const { APP_PORT, APP_ENV } = require("./config/variable.env");
require("./config/database");

server.listen(APP_PORT, () => {
  console.log(`your application runing ${APP_ENV} ,${APP_PORT}`);
});
