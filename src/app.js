import express from "express";

const app = express();

app.get('/', function (req, res) {
    res.sendFile('../i.html');
});

export default app;