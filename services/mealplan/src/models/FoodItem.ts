import mongoose, { ObjectId } from "mongoose";
import { IMealNutrition } from "types";
import MealNutritionSchema from "./MealNutrition";

interface IFoodItemAttrs {
  name: string;
  userId: ObjectId;
  nutrition: IMealNutrition;
}

export interface IFoodItemDocument extends mongoose.Document {
  name: string;
  userId: ObjectId;
  nutrition: IMealNutrition;
}

interface IFoodItemModel extends mongoose.Model<IFoodItemDocument> {
  addNew(attrs: IFoodItemAttrs): IFoodItemDocument;
}

const foodItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    nutrition: MealNutritionSchema,
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

foodItemSchema.statics.addNew = ({
  name,
  userId,
  nutrition,
}: IFoodItemAttrs) => {
  return new Day({
    name,
    userId,
    nutrition,
  });
};

const Day = mongoose.model<IFoodItemDocument, IFoodItemModel>(
  "FoodItem",
  foodItemSchema,
);

export default Day;
