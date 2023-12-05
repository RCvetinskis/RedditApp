import mongoose, { Schema } from "mongoose";

const PostsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    community: {
      type: Schema.Types.ObjectId,
      ref: "Community",
      required: false,
    },
    overview: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    video: {
      type: String,
      required: false,
    },

    user: {
      userId: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
        required: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

const dbPosts = mongoose.models.Posts || mongoose.model("Posts", PostsSchema);

export default dbPosts;
