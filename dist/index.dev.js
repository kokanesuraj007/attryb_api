"use strict";

var express = require("express");

var app = express();

require("dotenv").config();

var _require = require("./config/db"),
    connection = _require.connection;

var port = 8000 || process.env.PORT;

var cors = require("cors");

var userRouter = require("./routes/user.routes");

var inventoryRouter = require("./routes/inventory.routes");

app.use(cors());
app.use(express.json());
app.get("/", function (req, res) {
  res.send("home");
});
app.use("/user", userRouter);
app.use("/inventory", inventoryRouter);
app.listen(port, function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(connection);

        case 3:
          console.log("Connected to db");
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 9:
          console.log("listening to the port " + port);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
});
//# sourceMappingURL=index.dev.js.map
