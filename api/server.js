const path = require("path");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const cotRouter = require("./routers/cot-router");

const server = express();
server.use(express.static(path.join(__dirname, "../client")));
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/cot", cotRouter);


// server.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client", "index.html"));
// });

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
