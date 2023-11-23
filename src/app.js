import express from "express";
import path from "path";

const app = express();

app.get('/', (req, res) => {
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

app.get('/mapa.svg', (req, res) => {
    res.sendFile(path.resolve('static/assets/images/mapa.svg'));
});

export default app;