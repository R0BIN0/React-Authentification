const mongoose = require("mongoose");

exports.connectedDB = (): void => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`MongoDB connected with SUCCESS`));
};
