require('dotenv').config();
const mongoose = require("mongoose");
const userModel = require("./models");

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // 
const app = express();
const port = 3001; // Must be different than the port of the React app

app.use(cors()); // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

mongoose.connect("mongodb+srv://mongoUser:" + process.env.MONGODB_PWD + "@firstcluster.rizeras.mongodb.net/myFirstDB?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use(express.json()); // Allows express to read a request body

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Read -> API Get
app.get('/users', async (req, res) => {
    const users = await userModel.find();
    res.send(users);
});

// Create -> API Post
app.post("/users", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = {
        username: username,
        password: password,
    };
    // Error handling:
    try {
        await userModel.create(user);
    } catch (err) {
        console.log(err)
    }
    res.send(user);
});

// Read-Single -> Query params
app.get("/user", async (req, res) => {
    const username = req.query.username;
    const user = await userModel.findOne({
        username: username
    });
    res.send(user);
});

// Read-Single -> Path params
app.get("/users/:username", async (req, res) => {
    const username = req.params.username;
    const user = await userModel.findOne({
        username: username
    });
    res.send(user);
});

// Read-Single -> Body params
app.post("/users/get", async (req, res) => {
    const username = req.body.username;
    const user = await userModel.findOne({
        username: username
    });
    res.send(user);
});

// Update Full -> Put
app.put("/users", async (req, res) => {
    const password = req.body.password;
    const username = req.body.username;
    const user = {
        username: username,
        password: password,
    };
    const results = await userModel.replaceOne({
        username: username
    }, user);
    console.log("matched: " + results.matchedCount);
    console.log("modified: " +
        results.modifiedCount);
    res.send(results);
});

// Update partial -> Patch
app.patch("/users/:username/password", async (req, res) => {
    const username = req.params.username;
    const password = req.body.password;
    const results = await userModel.updateOne({
        username: username
    }, { password: password });
    console.log("matched: " + results.matchedCount);
    console.log("modified: " + results.modifiedCount);
    res.send(results);
});

// Delete
app.delete("/users/:username", async (req, res) => {
    const username = req.params.username;
    const results = await userModel.deleteOne({
        username: username
    });
    res.send(results);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));