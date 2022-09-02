const express = require('express');
const morgan = require('morgan');
const app = express();
const { restart } = require('nodemon');
const { generateGamertags } = require('./scripts/words');
const PORT = 8080;

app.set('view engine', 'ejs');

// Middleware

app.use(morgan("common"));

// Routes

app.get("/", (req, res) => {
  res.render("home.ejs")
})

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`)
})