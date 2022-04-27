import { Password } from "./../util";
import mongoose from "mongoose";

interface IUserAttrs {
  email: string;
  password: string;
}

interface IUserDocument extends mongoose.Document {
  email: string;
  password: string;
}

interface IUserModel extends mongoose.Model<IUserDocument> {
  addNew(attrs: IUserAttrs): IUserDocument;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
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

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashedPassword = await Password.toHash(this.get("password"));
    this.set("password", hashedPassword);
  }
  done();
});

userSchema.statics.addNew = ({ email, password }: IUserAttrs) => {
  return new User({
    email,
    password,
  });
};

const User = mongoose.model<IUserDocument, IUserModel>("User", userSchema);

export default User;
