import { NextResponse } from "next/server";
import connectMongoDb from "../../../../../../lib/mongodb";
import dbPosts from "../../../../../../schemas/dbPosts";

export async function PUT(req, { params }) {
  try {
    await connectMongoDb();

    const { id } = params;
    const { vote, userId } = await req.json();

    const post = await dbPosts.findById(id).select("upvotes");
    const existingVote = post.upvotes.find((upvote) =>
      upvote.user.equals(userId)
    );

    if (existingVote) {
      // Remove the existing vote
      await dbPosts.updateOne(
        { _id: id },
        { $pull: { upvotes: { user: userId } } }
      );

      // If the user pressed the same vote, return early (toggle off)
      if (existingVote.vote === Number(vote)) {
        const updatedPost = await dbPosts.findById(id).select("upvotes");
        const votesSumAfterRemove = updatedPost.upvotes.reduce(
          (sum, upvote) => sum + upvote.vote,
          0
        );
        return NextResponse.json({
          error: false,
          message: "Vote removed",
          results: votesSumAfterRemove,
        });
      }
    }

    // Add the new vote
    const updatedPost = await dbPosts
      .findByIdAndUpdate(
        id,
        {
          $push: {
            upvotes: {
              user: userId,
              vote,
            },
          },
        },
        { new: true }
      )
      .select("upvotes");
    const votesSum = updatedPost.upvotes.reduce(
      (sum, upvote) => sum + upvote.vote,
      0
    );

    return NextResponse.json({
      error: false,
      message: "Upvote added",
      results: votesSum,
    });
  } catch (error) {
    console.log("error in posts upvotes", error);
  }
}
