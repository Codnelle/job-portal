import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/fruitsDB");
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MongoDB Erorr ${error}`.bgRed.white);
  }
};

export default connectDB;
