const rootApp = require("./app");
require("dotenv").config({ path: "server/src/config/config.env" });
const { connectedDB } = require("./config/db");

connectedDB();

rootApp.listen(process.env.PORT, (): void => {
  console.log(`Server started on port : ${process.env.PORT}`);
});
