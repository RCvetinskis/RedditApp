const express = require("express");
const app = express();
const http = require("http").createServer(app);
const port = 4000;

require("./modules/socket")(http);
http.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`serve at http://localhost:${port}`);
});
