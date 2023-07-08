const mongoose=require("mongoose");
require("dotenv").config();
// const DBURL = "mongodb+srv://sk:sk@cluster0.pwxhqpd.mongodb.net/?retryWrites=true&w=majority";
const connection = async () =>{
    try {
        await mongoose.connect(process.env.DBURL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
}
module.exports= {connection} ;