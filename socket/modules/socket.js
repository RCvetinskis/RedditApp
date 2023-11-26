const socket = require("socket.io");
module.exports = (http) => {
  const io = socket(http, { cors: { origin: "http://localhost:3000" } });

  io.on("connection", (socket) => {
    socket.on("post-comment", (comment) => {
      console.log(comment);
      io.emit("new-comment", comment);
    });
  });
};
