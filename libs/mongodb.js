import mongoose from "mongoose";

import React from "react";

export const ConnectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default ConnectMongoDb;
