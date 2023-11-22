import app from "./src/app.js";
import conn from "./src/conn.js";
import fs from "fs";

const index = fs.readFileSync("index.html");

// Configuring local server
const SERVER_PORT = 3000;
app.listen(SERVER_PORT, () => {
  console.log("-- Server listening --");
});

// Listening Arduino
conn.on('open', function () {
  console.log("-- Connection opened --");
  conn.on('data', function (data) {
      console.log("Data received: " + data);
  });
});