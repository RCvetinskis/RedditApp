import { NextResponse } from "next/server";
import connectMongoDb from "../../../../../lib/mongodb";
import dbPosts from "../../../../../schemas/dbPosts";

export async function GET(req, { params }) {
  try {
    await connectMongoDb();

    const { id } = params;
    const post = await dbPosts.findOne({ _id: id });
    if (!post)
      return NextResponse.json({ error: true, message: "Post not found" });

    return NextResponse.json({ error: false, message: "Post sent", post });
  } catch (error) {
    console.error(error);
  }
}
