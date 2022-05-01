import mongoose from "mongoose";

const mealNutritionSchema = new mongoose.Schema({
  fat: {
    type: Number,
  },
  carbohydrates: {
    type: Number,
  },
  protein: {
    type: Number,
  },
  calories: {
    type: Number,
    required: true,
  },
});

export default mealNutritionSchema;
