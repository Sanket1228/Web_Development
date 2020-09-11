const express = require("express");
const path = require('path');
const app = express();
const port = 80;

app.use('/static', express.static('static'));

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));

app.get('/demo', function (req, res) {
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there! Its Sanket Patil' })
});

app.get("/", (req, res) => {
    res.send("This is homepage of my first express app");
});
app.get("/about", (req, res) => {
    res.send("This is aboutpage of my first express app");
});
app.post("/about", (req, res) => {
    res.send("This is post request for my aboutpage of my first express app");
});
app.get("/this", (req, res) => {
    res.status(404).send("This page is not found");
});

app.listen(port, () => {
    console.log(`This application started succesfully on port ${port}`);
});