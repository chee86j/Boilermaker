const express = require("express");
const path = require("path");
const cors = require("cors");
const volleyball = require("volleyball"); // alternative to morgan or express-logger for logging HTTP requests and responses
const app = express();
const db = require("./db");

// export app to be used in server/index.js
module.exports = app;

// body parsing middleware
// const bodyParser = require("body-parser"); // if you want to use bodyParser instead of express.json() and express.urlencoded()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware to server static files from public folder
app.use(express.static(path.join(__dirname, "..", "public")));

// logging middleware for HTTP requests and responses
app.use(cors()); // cors middleware for cross-origin resource sharing
app.use(volleyball); // volleyball middleware for logging HTTP requests and responses

// static middleware to server static files from dist folder
app.use("/dist", express.static(path.join(__dirname, "..", "dist")));

// routes that will be accessed by '/api' path
app.use("/api", require("./api"));

// routes that will be accessed by '/' path
app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// page not found error handling middleware
app.use((req, res, next) => {
  const error = Error("Page Not Found");
  error.status = 404;
  next(error);
});

// error handling middleware for all other erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal Server Error");
});
