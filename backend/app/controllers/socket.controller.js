const socket = require('../../server').socket;

exports.socket_create = (msg) => {
    socket.emit('create', msg);
}