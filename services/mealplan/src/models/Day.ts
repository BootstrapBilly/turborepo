import mongoose, { ObjectId } from "mongoose";
import { IMealNutrition } from "types";
import MealNutrition from "./MealNutrition";
import { IMealDocument } from "./Meal";

interface IDayAttrs {
  name: string;
  userId: ObjectId;
  meals: IMealDocument[];
  target: IMealNutrition;
  actual: IMealNutrition;
}

export interface IDayDocument extends mongoose.Document {
  name: string;
  userId: ObjectId;
  meals: IMealDocument[];
  target: IMealNutrition;
  actual: IMealNutrition;
}

interface IDayModel extends mongoose.Model<IDayDocument> {
  addNew(attrs: IDayAttrs): IDayDocument;
}

const daySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    meals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meal",
      },
    ],
    target: MealNutrition,
    actual: MealNutrition,
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

daySchema.statics.addNew = ({ name, userId }: IDayAttrs) => {
  return new Day({
    name,
    userId,
  });
};

const Day = mongoose.model<IDayDocument, IDayModel>("Day", daySchema);

export default Day;
