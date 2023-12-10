import { Server } from "socket.io";

const setupSocketIO = (http) => {
  const io = new Server(http, { cors: { origin: "http://localhost:3000" } });

  io.on("connection", (socket) => {
    socket.on("add-post", (post) => {
      io.emit("new-post", post);
    });

    socket.on("post-comment", (comment) => {
      io.emit("new-comment", comment);
    });

    socket.on("post-reply", async (reply) => {
      io.emit("new-reply", reply);
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
};

export default setupSocketIO;
