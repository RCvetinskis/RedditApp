import mongoose, { Schema } from "mongoose";

const UsersSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const dbUsers = mongoose.models.Users || mongoose.model("Users", UsersSchema);

export default dbUsers;
