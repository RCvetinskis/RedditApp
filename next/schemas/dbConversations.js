import mongoose, { Schema } from "mongoose";
import dbMessage from "./dbMessage";

const ConversationsSchema = new Schema(
  {
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true,
      },
    ],
    messages: [dbMessage],
  },
  {
    timestamps: true,
  }
);
const dbConversations =
  mongoose.models.Conversations ||
  mongoose.model("Conversations", ConversationsSchema);
export default dbConversations;
