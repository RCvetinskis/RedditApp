import { NextResponse } from "next/server";
import connectMongoDb from "../../../../../lib/mongodb";
import dbComments from "../../../../../schemas/dbComments";

export async function GET(res, { params }) {
  try {
    await connectMongoDb();

    const { id } = params;

    const currentPostComments = await dbComments
      .find({ post: id })
      .populate({
        path: "user",
        select: "-password -email",
      })
      .populate("replies")
      .sort({ createdAt: -1 });

    if (!currentPostComments || currentPostComments.length === 0)
      return NextResponse.json({
        error: true,
        message: "Comments not found",
      });

    return NextResponse.json({
      error: false,
      message: "Comment found",
      comments: currentPostComments,
    });
  } catch (error) {
    console.log(error);
  }
}
