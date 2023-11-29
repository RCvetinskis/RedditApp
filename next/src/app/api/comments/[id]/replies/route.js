import { NextResponse } from "next/server";
import connectMongoDb from "../../../../../../lib/mongodb";
import dbComments from "../../../../../../schemas/dbComments";

// post reply
export async function POST(req) {
  try {
    await connectMongoDb();

    const { replyComment, parentCommentId, userId } = await req.json();

    if (!replyComment || !parentCommentId || !userId)
      return NextResponse.json({
        error: true,
        message: "No reply, parentCommentId, or userId provided",
      });

    const parentComment = await dbComments.findById(parentCommentId);

    if (!parentComment)
      return NextResponse.json({
        error: true,
        message: "Parent comment not found",
      });

    const newReply = await dbComments.create({
      comment: replyComment,
      user: userId,
      post: parentComment.post,
      isReply: true,
    });

    if (!newReply)
      return NextResponse.json({
        error: true,
        message: "Reply was not created",
      });

    parentComment.replies.push(newReply._id);
    await parentComment.save();

    return NextResponse.json({
      error: false,
      message: "reply posted succesfully",
      replyComment: newReply,
    });
  } catch (error) {
    console.error("Failed to post reply", error);
    return NextResponse.json({ error: true, message: "Failed to post reply" });
  }
}
