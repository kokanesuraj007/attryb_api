const mongoose=require("mongoose");
require("dotenv").config();
const DBURL = "mongodb+srv://sk:sk@cluster0.pwxhqpd.mongodb.net/?retryWrites=true&w=majority";
const connection=mongoose.connect(DBURL);
module.exports={connection}; 