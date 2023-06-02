// Define relationships here
const Sequelize = require("sequelize");
const conn = require("./conn");
const User = require("./User");
const bcrypt = require("bcrypt");

// // Import models here
// const Campus = require("./Campus");
// const Student = require("./Student");

// // Associations below show how to connect two models
// Student.belongsTo(Campus, { as: "enrolledAt", foreignKey: "campusId" });
// Campus.hasMany(Student, { as: "enrollee" });
// Student.belongsTo(User);

// Setting up syncAndSeed() to sync the db & seed it w/starting data
const syncAndSeed = async () => {
  await conn.sync({ force: true });
  console.log("Connecting to the DATABASE...");

  //   // Set up users
  const adminPassword = await bcrypt.hash("admin", 5);
  const guestPassword = await bcrypt.hash("guest", 5);

  const [admin, guest] = await Promise.all([
    User.create({ username: "admin", password: adminPassword }),
    User.create({ username: "guest", password: guestPassword }),
  ]);

  //   const campuses = await Promise.all([
  //     Campus.create({
  //       name: "Foo State",
  //       address: "123 Foo State Drive, New York, NY 10001",
  //       description: "A great SUNY school in the heart of NYC",
  //       imageUrl:
  //         "https://as1.ftcdn.net/v2/jpg/03/22/45/80/500_F_322458033_ZKzGnGY5NqbaxEhTIRqHz0UIULXdtJEJ.jpg",
  //     }),
  //     Campus.create({
  //       name: "Bazz Tech",
  //       address: "777 Bazz Tech Circle, New York, NY 10001",
  //       description: "A great CUNY Tech school in the heart of NYC",
  //       imageUrl:
  //         "https://i1.sndcdn.com/avatars-000223256678-3ic7wu-t500x500.jpg",
  //     }),
  //   ]);

  //   const students = await Promise.all([
  //     Student.create({
  //       firstName: "Lisa",
  //       lastName: "Simpson",
  //       email: "lsimpson@gmail.com",
  //       imageUrl: "https://i.redd.it/dfkignldw5151.jpg",
  //       gpa: 4.0,
  //     }),
  //     Student.create({
  //       firstName: "Moe",
  //       lastName: "Szyslak",
  //       email: "moe@gmail.com",
  //       imageUrl:
  //         "https://static.wikia.nocookie.net/simpsons/images/6/6a/Season_20_Icon.jpg",
  //       gpa: 2.8,
  //     }),
  //   ]);

  //   // Set up campuses and students
  //   const [foo, bazz] = campuses;
  //   const [lisa, moe] = students;

  //   // enroll students at campuses
  //   await moe.setEnrolledAt(foo);
  //   await lisa.setEnrolledAt(harvard);

  console.log("Database Has Been Seeded!!!!");
};

module.exports = {
  conn,
  syncAndSeed,
  User,
  // models: {
  //   Campus,
  //   Student,
  // },
};
