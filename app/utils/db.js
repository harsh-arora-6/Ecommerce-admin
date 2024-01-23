import mongoose from "mongoose";

export const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("Connected to db");
  } catch (error) {
    throw new Error("Error connecting to db");
  }
};
