import { Schema, model, Document } from "mongoose";

interface UserDoc extends Document {
  id: string,
  name: string;
  email: string;
  password: string;
}

const UserSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
  }
);

export default model<UserDoc>("User", UserSchema);
