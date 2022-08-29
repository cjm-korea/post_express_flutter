module.exports = function(io, msg) {
    io.on('connection',(socket) => {
        socket.emit('create', msg);
    });
}