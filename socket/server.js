import express from "express";
import http from "http";
import setupSocketIO from "./modules/socket.js";

const app = express();
const server = http.createServer(app);
const port = 4000;

setupSocketIO(server);

server.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`serve at http://localhost:${port}`);
});
