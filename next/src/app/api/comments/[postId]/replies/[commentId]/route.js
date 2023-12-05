import { NextResponse } from "next/server";

import connectMongoDb from "../../../../../../../lib/mongodb";
import dbComments from "../../../../../../../schemas/dbComments";

// get comment replies
export async function GET(req, { params }) {
  try {
    await connectMongoDb();

    const { commentId } = params;

    const limit = Number(req.nextUrl.searchParams.get("limit")) || 5;
    const page = Number(req.nextUrl.searchParams.get("page")) || 0;
    const skip = Math.max(0, Number(page - 1)) * limit;
    const parentComment = await dbComments.findById(commentId);

    if (!parentComment)
      return NextResponse.json({
        error: true,
        message: "parent comment not found",
      });

    const currentReplies = await dbComments
      .find({
        _id: { $in: parentComment.replies },
      })
      .populate({
        path: "user",
        select: "-password -email",
      })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    if (!currentReplies || currentReplies.length === 0)
      return NextResponse.json({
        error: true,
        message: "Comments not found",
      });

    return NextResponse.json({
      error: false,
      message: "Comment found",
      results: currentReplies,
    });
  } catch (error) {
    console.log(error);
  }
}
