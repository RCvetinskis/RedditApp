import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_KEY);
    console.log("MONGODB CONNECTED");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDb;
