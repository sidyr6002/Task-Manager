require(`./db/connect`)
const express = require("express");
const app = express();
const tasks = require(`./routes/tasks`);

// ------------------- MIDDLEWARE ----------------------------
app.use(express.json());

// ------------------ IP and PORT ----------------------------
const hostAdd = "127.0.0.8";
const port = "8080";

// ----------------------- API -------------------------------
app.get("/", (req, res) => {
    res.end(`Hello Rahul`);
});

app.use(`/api/v1/tasks`, tasks);

// ---------------------- LISTEN -----------------------------
app.listen(port, hostAdd, () => {
    console.log(`The server is listening on http://${hostAdd}:${port}`);
});
