import { NextResponse } from "next/server";
import dbPosts from "../../../../schemas/dbPosts";
import dbUsers from "../../../../schemas/dbUsers";
import connectMongoDb from "../../../../lib/mongodb";

export async function POST(req) {
  try {
    await connectMongoDb();
    const { userId, title, overview } = await req.json();

    const { _id, username, avatar } = await dbUsers.findOne({ _id: userId });

    const user = {
      userId: _id,
      username,
      avatar,
    };
    await dbPosts.create({ user, title, overview });
    return NextResponse.json({ error: false, message: "Posted" });
  } catch (error) {
    throw new Error("post failed", error);
  }
}
export async function GET() {
  try {
    await connectMongoDb();
    const posts = await dbPosts.find();

    if (!posts)
      return NextResponse.json({ error: true, message: "Posts not found" });

    return NextResponse.json({ error: false, message: "Posts sent", posts });
  } catch (error) {
    throw new Error("post failed", error);
  }
}
