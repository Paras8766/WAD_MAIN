const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const Task = require("./models/Task");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://127.0.0.1:27017/todoDB")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

/* ROUTES */

app.get("/tasks", async (req, res) => {
    res.json(await Task.find());
});

app.post("/addTask", async (req, res) => {

    await Task.create({
        text: req.body.task
    });

    res.json({ message: "Task Added" });
});

app.put("/updateTask/:id", async (req, res) => {

    await Task.findByIdAndUpdate(req.params.id, {
        text: req.body.task
    });

    res.json({ message: "Task Updated" });
});

app.delete("/deleteTask/:id", async (req, res) => {

    await Task.findByIdAndDelete(req.params.id);

    res.json({ message: "Task Deleted" });
});

app.listen(3000, () =>
    console.log("Server running on http://localhost:3000")
);