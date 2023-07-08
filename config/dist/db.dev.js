"use strict";

var mongoose = require("mongoose");

require("dotenv").config();

var DBURL = "mongodb+srv://sk:sk@cluster0.pwxhqpd.mongodb.net/?retryWrites=true&w=majority";
var connection = mongoose.connect(DBURL);
module.exports = {
  connection: connection
};
//# sourceMappingURL=db.dev.js.map
