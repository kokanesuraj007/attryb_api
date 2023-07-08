const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const userModel = require("../model/user.model");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    console.log("Bearer " + req.headers.authorization);
    token = req.headers.authorization.split(" ");
    console.log("token: " + token);
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.jwt_secret);
        console.log("decoded: " + decoded);
        const user = await userModel.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (error) {
      console.log(error + " errorsss");
      res
        .status(401)
        .json({ error: "Not authorized, token expired. Please login again" });
    }
  } else {
    res.status(401).json({ error: "No token attached to the header" });
  }
});

const isDealer = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await userModel.findOne({ email });
  if (adminUser.role !== "dealer") {
    res.status(403).json({ error: "You are not a dealer" });
  } else {
    next();
  }
});
module.exports = { authMiddleware, isDealer };
