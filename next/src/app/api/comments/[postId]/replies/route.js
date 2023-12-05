import { NextResponse } from "next/server";
import connectMongoDb from "../../../../../../lib/mongodb";
import dbComments from "../../../../../../schemas/dbComments";

// post reply
export async function POST(req) {
  try {
    await connectMongoDb();

    const { replyComment, parentCommentId, userId, postId } = await req.json();

    if (!replyComment || !parentCommentId || !userId)
      return NextResponse.json({
        error: true,
        message: "No reply, parentCommentId, or userId provided",
      });

    const newReplyComment = await dbComments.create({
      comment: replyComment,
      user: userId,
      post: postId,
      parentCommentId,
    });
    await newReplyComment.save();

    const parentComment = await dbComments.findById(parentCommentId);
    parentComment.replies.push(newReplyComment._id);
    await parentComment.save();

    const populatedComment = await dbComments
      .findById(newReplyComment._id)
      .populate({
        path: "user",
        select: "-password -email",
      })
      .populate({
        path: "replies",
      })
      .exec();

    return NextResponse.json({
      error: false,
      message: "reply posted succesfully",
      replyComment: populatedComment,
    });
  } catch (error) {
    console.error("Failed to post reply", error);
    return NextResponse.json({ error: true, message: "Failed to post reply" });
  }
}
