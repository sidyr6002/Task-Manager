const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const username = process.env.USER_NAME;
const password = process.env.PASSWORD;
const cluster = process.env.CLUSTER;
const dbName = process.env.DB_NAME;

const connectionURL = `mongodb+srv://${username}:${password}@${cluster}.gqlxpoh.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const connectDB = () => {
  return mongoose.connect(connectionURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
};

module.exports = connectDB;

// mongoose
//   .connect(connectURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Conneted to DB");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
