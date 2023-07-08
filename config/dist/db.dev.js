"use strict";

var mongoose = require("mongoose");

require("dotenv").config();

var connection = mongoose.connect(process.env.DBURL);
module.exports = {
  connection: connection
};
//# sourceMappingURL=db.dev.js.map
