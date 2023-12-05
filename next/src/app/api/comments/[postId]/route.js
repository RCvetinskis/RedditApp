import { NextResponse } from "next/server";
import connectMongoDb from "../../../../../lib/mongodb";
import dbComments from "../../../../../schemas/dbComments";

// get comments
export async function GET(req, { params }) {
  try {
    await connectMongoDb();

    const { postId } = params;

    const limit = Number(req.nextUrl.searchParams.get("limit")) || 5;
    const page = Number(req.nextUrl.searchParams.get("page")) || 0;
    const skip = Math.max(0, Number(page - 1)) * limit;

    const currentPostComments = await dbComments
      .find({
        post: postId,
        parentCommentId: { $exists: false },
      })
      .populate({
        path: "user",
        select: "-password -email",
      })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    if (!currentPostComments || currentPostComments.length === 0)
      return NextResponse.json({
        error: true,
        message: "Comments not found",
      });

    return NextResponse.json({
      error: false,
      message: "Comment found",
      results: currentPostComments,
    });
  } catch (error) {
    console.log(error);
  }
}
