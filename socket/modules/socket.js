const socket = require("socket.io");
module.exports = (http) => {
  const io = socket(http, { cors: { origin: "http://localhost:3000" } });

  io.on("connection", (socket) => {
    socket.on("add-post", (post) => {
      io.emit("new-post", post);
    });
    socket.on("post-comment", (comment) => {
      io.emit("new-comment", comment);
    });
  });
};
