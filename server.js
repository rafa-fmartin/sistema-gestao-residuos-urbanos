import app from "./src/app.js";
import conn from "./src/conn.js";
import fs from "fs";
import { Server } from "http";
import { Server as SocketIOServer } from "socket.io";
import { ReadlineParser } from '@serialport/parser-readline';

// Configuring local server
const SERVER_PORT = 3000;
const server = Server(app);
const io = new SocketIOServer(server);
const parser = conn.pipe(new ReadlineParser({ delimiter: '\r\n' }));

conn.on('open', () => {
    console.log("-- Connection opened --");
    parser.on('data', (data) => {
        io.emit('data', data);

        const stateArduino = data.trim();
        //io.emit('stateArduino', stateArduino);
        io.emit('stateArduino', 'full');

        // fs.readFile('./static/assets/images/mapa-cheio.svg', 'utf-8', (err, newSVG) => {
        //   if (err) {
        //     console.error("erro ao ler o novo svg: ", err);
        //   } else {
        //     io.emit('updateMap', newSVG);
        //   }
        // });
    });
});
    
io.on('connection', (socket) => {
  console.log("-- IO is on --");
});

io.on('error', (error) => {
  console.log("-- IO error --", error);
});

server.listen(SERVER_PORT, () => {
  console.log("-- Server listening --");
});