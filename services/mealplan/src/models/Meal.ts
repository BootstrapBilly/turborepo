import mongoose, { ObjectId } from "mongoose";
import { IMealNutrition } from "types";
import MealNutrition from "./MealNutrition";
import { IFoodItemDocument } from "./FoodItem";

interface IMealAttrs {
  name: String;
  time: Date;
  userId: ObjectId;
  items: IFoodItemDocument[];
  nutrition: IMealNutrition;
  substitute?: IMealNutrition;
}

export interface IMealDocument extends mongoose.Document {
  name: String;
  time: Date;
  userId: ObjectId;
  items: IFoodItemDocument[];
  nutrition: IMealNutrition;
  substitute?: IMealNutrition;
}

interface IMealModel extends mongoose.Model<IMealDocument> {
  addNew(attrs: IMealAttrs): IMealDocument;
}

const mealSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    time: {
      type: mongoose.Schema.Types.Date,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FoodItem",
      },
    ],
    nutrition: MealNutrition,
    substitute: MealNutrition,
  },
  {
    toJSON: {
      versionKey: false,
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
      },
    },
  },
);

mealSchema.statics.addNew = ({
  name,
  time,
  nutrition,
  substitute,
}: IMealAttrs) => {
  return new Meal({
    name,
    time,
    nutrition,
    substitute,
  });
};

const Meal = mongoose.model<IMealDocument, IMealModel>("Meal", mealSchema);

export default Meal;
