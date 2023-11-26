import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Posts",
      required: true,
    },
    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comments",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const dbComments =
  mongoose.models.Comments || mongoose.model("Comments", CommentSchema);
export default dbComments;
