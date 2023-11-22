import app from "./src/app.js";
import conn from "./src/conn.js";
import fs from "fs";
import http from "http";
import { ReadlineParser } from '@serialport/parser-readline';
import { Server } from "socket.io";

const index = fs.readFileSync("index.html");
const parsers = app.parsers;
const parser = conn.pipe(new ReadlineParser({ delimiter: '\r\n' }));
const io = new Server(http.createServer(app));

conn.on("open", function() {
  console.log("-- Connection opened --");
  parser.on("data", function (data) {
    console.log("Received data from port: " + data);
    Server.emit
  });
});

parser.on("data", function (data) {
  console.log("Received data from port " + data);
  io.emit("data", data);
});

// Configuring local server
const SERVER_PORT = 3000;
app.listen(SERVER_PORT, () => {
  console.log("-- Server listening --");
});

// Listening Arduino
// conn.on('open', function () {
//   console.log("-- Connection opened --");
//   conn.on('data', function (data) {
//       console.log("Data received: " + data);
//   });
// });