const express = require("express");
const {
  createUser,
  allUserInfo,
  loginUser,
} = require("../controller/user.controller");
const userRouter = express.Router();

userRouter.get("/getalluser", allUserInfo);
userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
