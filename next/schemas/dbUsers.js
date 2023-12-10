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
    avatar: {
      type: String,
      required: false,
      default:
        "https://banner2.cleanpng.com/20180402/ojw/kisspng-united-states-avatar-organization-information-user-avatar-5ac20804a62b58.8673620215226654766806.jpg",
    },
    community: [
      {
        type: Schema.Types.ObjectId,
        ref: "Communities",
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const dbUsers = mongoose.models.Users || mongoose.model("Users", UsersSchema);

export default dbUsers;
