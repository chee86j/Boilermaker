const port = process.env.PORT || 3000;
const app = require("./app");
const { syncAndSeed } = require("./db");
const conn = require("./db/conn");
const ws = require("ws");

const server = app.listen(port, async () => {
  try {
    await conn.sync({ force: true });
    console.log("You Are Connected");
    await syncAndSeed();
    console.log("Everything has Seeded");

    let sockets = [];
    const socketServer = new ws.WebSocketServer({ server });

    socketServer.on("connection", (socket) => {
      socket.send(JSON.stringify({ message: "hello world" }));
      sockets.push(socket);
      console.log(sockets.length);

      socket.on("close", () => {
        sockets = sockets.filter((s) => s !== socket);
      });
    });

    console.log(`Listening On PORT ${port}`);
  } catch (error) {
    console.log(error);
  }
});
