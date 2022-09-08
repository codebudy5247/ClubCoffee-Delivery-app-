const mongoose = require("mongoose");

const connectDB = async () => {
    try {
      const conn = await mongoose.connect("mongodb+srv://codebuddy:codebuddy@cluster0.sakovcw.mongodb.net/?retryWrites=true&w=majority", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      console.log(`Database connected! ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports=connectDB;