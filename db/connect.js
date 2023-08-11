const mongoose = require("mongoose");

const connectString = `mongodb+srv://luffy:zxcvlkj@cluster0.gqlxpoh.mongodb.net/Task-Manager?retryWrites=true&w=majority`;

mongoose
    .connect(connectString)
    .then(() => console.log("Successfully connected to the DB"))
    .catch((error) => console.log(error));
