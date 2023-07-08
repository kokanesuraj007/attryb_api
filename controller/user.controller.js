const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");
const userModel = require("../model/user.model");

const allUserInfo = asyncHandler(async (req, res) => {
  const findUser = await userModel.find();
  res.send(findUser);
});

const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await userModel.findOne({ email });
  if (!findUser) {
    const newUser = await userModel.create(req.body);
    res.send("User Created Successfully " + newUser.email);
  } else {
    res.send("User already Exist");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await userModel.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    res.json({
      _id: findUser?._id,
      role: findUser?.role,
      token: generateToken(findUser?._id),
    });
  } else {
    res.send("Invalid Credentials");
  }
});

module.exports = { createUser, allUserInfo, loginUser };
