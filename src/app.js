import express from "express";
import path from "path";

const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.resolve('./index.html'));
});

app.get('/style.css', (req, res) => {
    res.sendFile(path.resolve('./static/styles/style.css'));
});

app.get('/icons/ufabc.png', (req, res) => {
    res.sendFile(path.resolve('static/assets/icons/ufabc.png'));
});

app.get('/icons/git.png', (req, res) => {
    res.sendFile(path.resolve('static/assets/icons/git.png'));
});

export default app;