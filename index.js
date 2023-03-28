const server = require("./src/config/app");
const { APP_PORT, APP_ENV } = require("./src/config/variable.env");
require("./src/config/database");

server.listen(APP_PORT, () => {
  console.log(`your application runing ${APP_ENV} ,${APP_PORT}`);
});
