import mongoose, { ObjectId } from "mongoose";
import { IDayDocument } from "./Day";

interface IDateAttrs {
  name: string;
  date: Date;
  userId: ObjectId;
  day: IDayDocument;
}

interface IDateDocument extends mongoose.Document {
  name: string;
  date: Date;
  userId: ObjectId;
  day: IDateDocument;
}

interface IDateModel extends mongoose.Model<IDateDocument> {
  addNew(attrs: IDateAttrs): IDateDocument;
}

const dateSchema = new mongoose.Schema(
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
    day: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Day",
    },
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

dateSchema.statics.addNew = ({ name, date, userId }: IDateAttrs) => {
  return new Day({
    name,
    date,
    userId,
  });
};

const Day = mongoose.model<IDateDocument, IDateModel>("Date", dateSchema);

export default Day;
