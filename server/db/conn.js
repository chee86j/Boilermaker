// connecting to the database by using Sequelize and
// exporting the connection to be used in the models

const Sequelize = require("sequelize");
const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/abc_db",
  {
    logging: false,
  }
);

module.exports = conn;
