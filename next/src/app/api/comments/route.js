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
      user: userId,
      post: postId,
    });

    if (!newComment)
      return NextResponse.json({
        error: true,
        message: "failed to create comment",
      });

    const populatedComment = await dbComments
      .findById(newComment._id)
      .populate({
        path: "user",
        select: "-password -email",
      })
      .exec();

    return NextResponse.json({
      error: false,
      message: "Comment posted",
      comment: populatedComment,
    });
  } catch (error) {
    console.log(error);
  }
}
