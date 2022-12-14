const express = require('express');
const morgan = require('morgan');
const app = express();
const { restart } = require('nodemon');
const PORT = 8080;

app.set('view engine', 'ejs');

// Middleware

app.use(morgan("common"));
app.use(express.static("public"));

// Routes

app.get("/", (req, res) => {
  res.render("index.ejs")
})

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`)
})