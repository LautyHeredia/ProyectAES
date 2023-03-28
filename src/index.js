const server = require("./config/app");
const { APP_PORT } = require("./config/variable.env");
require("./config/database");
const port = APP_PORT || process.env.PORT;
server.listen(port, () => {
  console.log(`your application runing ,${port}`);
});
