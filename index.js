const express = require("express");
const app = express();
require("dotenv").config();
const { connection } = require("./config/db");
const port = process.env.PORT || 8000;
var cors = require("cors");
const userRouter = require("./routes/user.routes");
const inventoryRouter = require("./routes/inventory.routes");

app.use(cors());
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"]
}));
app.options("*", cors());


app.get("/", (req, res) => {
  res.send("home");
});

app.use("/user", userRouter);
app.use("/inventory", inventoryRouter);

app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
  }

  console.log("listening to the port " + port);
});