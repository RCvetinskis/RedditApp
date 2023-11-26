import { NextResponse } from "next/server";
import connectMongoDb from "../../../../lib/mongodb";
import dbComments from "../../../../schemas/dbComments";

export async function POST(res) {
  try {
    await connectMongoDb();
    const { comment, userId, postId } = await res.json();

    if (!comment || !userId || !postId)
      return {
        message: "Provide comment, userId or postId",
      };

    const newComment = await dbComments.create({
      comment,
      userId,
      postId,
    });

    if (!newComment)
      return NextResponse.json({
        error: true,
        message: "failed to create comment",
      });

    return NextResponse.json({
      error: false,
      message: "Comment posted",
      comment: newComment,
    });
  } catch (error) {
    console.log(error);
  }
}
