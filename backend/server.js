const cors = require("cors");
const db = require("./app/models");

var express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

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
    res.send({ message: toilet });
});

require("./app/routes/toilet.routes")(app);

// set port, listen for requests
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


io.on('connection', (socket) => {
    exports.socket;
    exports.socket_create = (msg) => {
        socket.emit('create', msg);
    }

    exports.socket_findAll = (msg) => {
        socket.emit('findAll', msg)
    }

    exports.socket_findOne = (msg) => {
        socket.emit('findOne', msg);
    }

    exports.socket_update = (msg) => {
        socket.emit('update', msg);
    }

    exports.socket_delete = (msg) => {
        socket.emit('delete', msg);
    }

    exports.socket_findAllPublished = (msg) => {
        socket.emit('findAllPublished', msg);
    }
});

// module.exports = {
//     server
// }