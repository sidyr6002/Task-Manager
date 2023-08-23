const express = require("express");
const app = express();
const tasks = require(`./routes/tasks`);
const { connectDB } = require(`./db/connect`);

// ------------------- MIDDLEWARE ----------------------------
app.use(express.json());

// ------------------ IP and PORT ----------------------------
const hostAdd = process.env.HOST_ADDRESS;
const port = process.env.PORT;

// ----------------------- API -------------------------------
app.get("/", (req, res) => {
    res.end(`Hello Rahul`);
});

app.use(`/api/v1/tasks`, tasks);

// ---------------------- CONNECT TO DB ----------------------
const start = async () => {
  try {
    await connectDB()
      .then(() => console.log("Successfully connected to DB"))
      .catch((error) => console.log(error));
    // ---------------------- LISTEN -----------------------------
    app.listen(port, hostAdd, () => {
      console.log(`The server is listening on http://${hostAdd}:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

// app.listen(port, hostAdd, () => {
//   console.log(`The server is listening on http://${hostAdd}:${port}`);
// });


