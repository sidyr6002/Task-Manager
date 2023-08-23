const express = require("express");
const app = express();
const connectDB = require(`./db/connect`);
const tasks = require(`./routes/tasks`);
const notFound = require(`./middleware/not-found`);

// ------------------- MIDDLEWARE ----------------------------
app.use(express.static(`./public`));
app.use(express.json());

// ------------------ IP and PORT ----------------------------
const hostAdd = process.env.HOST_ADDRESS;
const port = process.env.PORT;

// ----------------------- API -------------------------------
app.use(`/api/v1/tasks/`, tasks);
app.use(notFound)

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
