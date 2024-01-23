import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

let UserModel;

try {
  // Try to retrieve an existing model
  UserModel = mongoose.model("User");
} catch (e) {
  // If the model doesn't exist, define it
  UserModel = mongoose.model("User", UserSchema);
}

export default UserModel;
