import mongoose from "mongoose";

const config = useRuntimeConfig();

export default async () => {
  try {
    await mongoose.connect(config.mongoUrl);
    console.log("DB connected");
  } catch (e) {
    console.error(e);
  }
};
