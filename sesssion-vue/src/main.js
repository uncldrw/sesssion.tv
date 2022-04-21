const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config({ path: "./config/config.env" });
//Body parser
app.use(express.json());
app.use(cors());
const PORT = 8080;

const server = require("http").createServer();
const WebSocket = require("ws").Server;
const wss = new WebSocket({ server: server });

server.on("request", app);

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}!`);
});

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log(message);
  });
});
