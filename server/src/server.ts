const rootApp = require("./app");
require("dotenv").config({ path: "server/src/config/config.env" });

rootApp.listen(process.env.PORT, () => {
  console.log(`Server started on port : ${process.env.PORT}`);
});
