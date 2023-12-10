import { NextResponse } from "next/server";
import connectMongoDb from "../../../../../lib/mongodb";
import dbPosts from "../../../../../schemas/dbPosts";

// get post
export async function GET(req, { params }) {
  try {
    await connectMongoDb();

    const { id } = params;
    const post = await dbPosts.findById(id).populate({
      path: "community",
      select: "avatar title",
    });
    if (!post)
      return NextResponse.json({ error: true, message: "Post not found" });

    return NextResponse.json({ error: false, message: "Post sent", post });
  } catch (error) {
    console.error(error);
  }
}
