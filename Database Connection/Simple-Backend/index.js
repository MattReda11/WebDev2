require('dotenv').config();
const mongoose = require("mongoose");
const userModel = require("./models");

// Hash Password
const validator = require('validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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

//-------------------- Register and Login -------------------- 
app.post("/users/register", async (request, response) => {
    const id = request.body.id;
    const username = request.body.username;
    const password = request.body.password;
    try {
        if (
            username && validator.isAlphanumeric(username) &&
            password && validator.isStrongPassword(password)) {
            // Check to see if the user already exists. If not, then create it.
            const user = await userModel.findOne({ username: username });
            if (user) {
                console.log("Invalid registration - username " + username + " already exists.");
                response.send({ success: false });
                return;
            } else {
                hashedPassword = await bcrypt.hash(password, saltRounds);
                console.log("Registering username " + username);
                const userToSave = {
                    username: username,
                    password: hashedPassword
                };
                await userModel.create(userToSave);
                response.send({ success: true });
                return;
            }
        }
    } catch (error) { console.log(error.message); }
    response.send({ success: false });
});

app.post("/users/login", async (request, response) => {
    const username = request.body.username;
    const password = request.body.password;
    try {
        if (username && password) {
            // Check to see if the user already exists. If not, then create it.
            const user = await userModel.findOne({ username: username });
            if (!user) {
                console.log("Invalid login - username " + username + " doesn't exist.");
                response.send({ success: false });
                return;
            } else {
                const isSame = await bcrypt.compare(password, user.password);
                if (isSame) {
                    console.log("Successful login");
                    response.send({ success: true });
                    return;
                }
            }
        }
    } catch (error) {
        console.log(error.message);
    }
    response.send({ success: false });
});

// -------------------------------------------------------------------------------------

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