"use strict";

var mongoose = require("mongoose");

require("dotenv").config(); // const DBURL = "mongodb+srv://sk:sk@cluster0.pwxhqpd.mongodb.net/?retryWrites=true&w=majority";


var connection = function connection() {
  return regeneratorRuntime.async(function connection$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect(process.env.DBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }));

        case 3:
          console.log('Connected to MongoDB');
          _context.next = 10;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error('Error connecting to MongoDB:', _context.t0.message);
          process.exit(1);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

module.exports = {
  connection: connection
};
//# sourceMappingURL=db.dev.js.map
