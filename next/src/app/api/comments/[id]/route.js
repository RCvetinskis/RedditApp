import { NextResponse } from "next/server";
import connectMongoDb from "../../../../../lib/mongodb";
import dbComments from "../../../../../schemas/dbComments";

export async function GET(res, { params }) {
  try {
    await connectMongoDb();

    const { id } = params;

    const currentPostComments = await dbComments
      .find({ postId: id })
      .populate({
        path: "userId",
        select: "-password -email",
      })
      .populate("replies");

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
