import mongoose, { ObjectId } from "mongoose";
import { IMealNutrition } from "types";
import MealNutrition from "./MealNutrition";
import { IMealDocument } from "./Meal";

interface IDayAttrs {
  name: string;
  date: Date;
  userId: ObjectId;
  meals: IMealDocument[];
  target: IMealNutrition;
  actual: IMealNutrition;
}

interface IDayDocument extends mongoose.Document {
  name: string;
  date: Date;
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
    date: {
      type: mongoose.Schema.Types.Date,
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

daySchema.statics.addNew = ({ name, date, userId }: IDayAttrs) => {
  return new Day({
    name,
    date,
    userId,
  });
};

const Day = mongoose.model<IDayDocument, IDayModel>("Day", daySchema);

export default Day;
