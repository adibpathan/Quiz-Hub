const mongoose = require("mongoose")
const dotenv = require("dotenv")
mongoose.set("strictQuery", false);



const connectDb = async () => {
  mongoose.connect(process.env.mongoURI).then(()=>{
    console.log("connect to mongodb")
  }).catch(()=>{
    console.log("not connected")
  })
};

module.exports = connectDb;
