import mongoose from "mongoose";
const connectMongo = async () =>
  mongoose.connect("mongodb://localhost:27017/bootcamp");
export default connectMongo;
