const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../db");

router.post("/login", async (req, res, next) => {
  // Authentication login route handler
  // ...
});

router.post("/register", async (req, res, next) => {
  // Authentication register route handler
  // ...
});

router.get("/", async (req, res, next) => {
  // Authentication route handler
  // ...
});

module.exports = router;
