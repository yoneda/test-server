const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const asyncHandler = require("express-async-handler");
const lodash = require("lodash");

// .envファイルを使用
env.config();

const server = express();
server.use(cors());
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/api/helth", function (req, res) {
  res.send({ helth: "great" });
});

const port = process.env.PORT;
server.listen(port || 3000, function (err) {
  if (err) throw err;
  console.log(`ready on localhost: ${port || 3000}`);
});
