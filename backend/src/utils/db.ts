import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config({ path: "./src/.env" });

const MONGODB_COMPASS = process.env.MONGODB_URI;
export const ConnectDB = async () => {
  try {
    if (!MONGODB_COMPASS) {
      throw new Error("MONGODB_URI not found in.env file");
    }
    await mongoose.connect(MONGODB_COMPASS);
    console.log("Database Connected Successfully!");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
