//import app from "./src/app.cjs";
// const app = require("./src/app.cjs").default;

// const SERVER_PORT = 3000;

// app.listen(SERVER_PORT, () => {
//     console.log("Server listening...");
// });

var http = require("http");
var fs = require("fs");
var { ReadlineParser } = require('@serialport/parser-readline')
var index = fs.readFileSync("index.html");

var SerialPort = require("serialport");
const parsers = SerialPort.parsers;

const parser = new ReadlineParser();

var port = new SerialPort("COM3", {
  baudRate: 9600,
  dataBits: 8,
  parity: "none",
  stopBits: 1,
  flowControl: false,
});

port.pipe(parser);

var app = http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(index);
});

var io = require("socket.io").listen(app);

io.on("connection", function (socket) {
  console.log("Node is listening to port");
});

parser.on("data", function (data) {
  console.log("Received data from port: " + data);
  io.emit("data", data);
});

app.listen(3000);