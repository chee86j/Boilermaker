// These are all the routes for api requests
const router = require("express").Router();
const authRoutes = require("./auth");
const usersRoutes = require("./users");
const { User } = require("../db");
const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use("/dist", express.static("dist"));

// IF BREAKING UP ROUTES INTO SEPARATE FILES, UNCOMMENT THE FOLLOWING LINES
router.use("/auth", authRoutes);
router.use("/users", usersRoutes);
// router.use("/campuses", require("./campuses"));
// router.use("/students", require("./students"));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.use("/api", router);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err);
});

module.exports = router;
