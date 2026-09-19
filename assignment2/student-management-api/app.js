const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const logger = require("./middleware/logger");

const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
    res.send("Student Management API is running");
});

app.use("/students", studentRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});