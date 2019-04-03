/**
 *created by Meshileya Seun <meshileyaseun@gmail.com/> 4/12/18
 * */
import mongoose from "mongoose";
mongoose.Promise = global.Promise;

require("dotenv").config();

console.log(process.env.MONGO_URI)

export const connect = () =>
  mongoose.connect(process.env.MONGO_URI, { useMongoClient: true });
