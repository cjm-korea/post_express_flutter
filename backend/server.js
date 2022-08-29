const cors = require("cors");
const db = require("./app/models");

const express = require('express');
const app = express();
const server = require('http').createServer(app);
module.exports.io = io = require('socket.io')(server);

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
db.sequelize.sync()
    .then(() => {
        console.log("Synced db");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    })

// simple route
app.get("/", (req, res) => {
    res.send({message: toilet});
});

require("./app/routes/toilet.routes")(app);

// set port, listen for requests
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});