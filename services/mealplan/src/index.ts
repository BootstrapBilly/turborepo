import mongoose from "mongoose";
import app from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("Kube secret JWT_KEY must be defined");
  }

  if (!process.env.MONGO_URI) {
    throw new Error("Kube variable MONGO_URI must be defined");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(3000, () => {
      console.log("Mealplan running on 3000");
    });
  } catch (err) {
    console.log(err);
  }
};

start();
