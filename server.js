const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const asyncHandler = require("express-async-handler");
const lodash = require("lodash");
const path = require("path");

// .envファイルを使用
env.config();

const server = express();
server.use(cors());
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "dist")));

let users = [
  {
    id: 0,
    email: "test@test.com",
    password: "test",
  },
  {
    id: 1,
    email: "test2@test2.com",
    password: "test2",
  },
];

// handlers for request
const helth = function (req, res) {
  res.send({ helth: "great" });
};

const getUser = function (req, res) {
  res.send({ users });
};

const addUser = function (req, res) {
  const user = req.body.user;
  users.push(user);
  res.send({ users });
};

const removeUser = function (req, res) {
  const id = parseInt(req.query.id);
  users = users.filter((user) => user.id !== id);
  res.send({ users });
};

// http method and paths for handlers
const router = express.Router();
router.get("/helth", helth);
router.get("/users", getUser);
router.post("/users", addUser);
router.delete("/users", removeUser);
server.use("/api", router);

// transfer all other request to static files
server.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const port = process.env.PORT;
server.listen(port || 3000, function (err) {
  if (err) throw err;
  console.log(`ready on localhost: ${port || 3000}`);
});
