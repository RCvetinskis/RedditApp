import mongoose, { Schema } from "mongoose";
const MessageSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reply: {
      type: Schema.Types.ObjectId,
      required: false,
      ref: "Message",
    },
    seen: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
const dbMessage =
  mongoose.models.Message || mongoose.model("Message", MessageSchema);
export default dbMessage;
