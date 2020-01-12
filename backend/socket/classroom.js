const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const classroomSocket = () => {
    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });

        socket.on('connectToClass', (room) => {
            
        });
    });

    http.listen(3001, function() {
        console.log('listening on *:3001');
    });
}

module.exports = classroomSocket;