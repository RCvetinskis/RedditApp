import mongoose, { Schema } from "mongoose";

const CommunitySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    avatar: {
      type: String,
      default: "https://twofacesofms.files.wordpress.com/2020/06/community.jpg",
      required: false,
    },
    moderator: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: false,
      },
    ],
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Posts",
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);
CommunitySchema.pre("save", function (next) {
  if (this.users.length === 0) {
    this.users.push(this.moderator);
  }
  next();
});

const dbCommunity =
  mongoose.models.Community || mongoose.model("Community", CommunitySchema);
export default dbCommunity;
