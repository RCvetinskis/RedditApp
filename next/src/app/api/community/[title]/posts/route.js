import { NextResponse } from "next/server";
import connectMongoDb from "../../../../../../lib/mongodb";
import dbPosts from "../../../../../../schemas/dbPosts";
import dbCommunity from "../../../../../../schemas/dbCommunity";

export async function GET(req, { params }) {
  try {
    await connectMongoDb();

    const { title } = params;
    const limit = Number(req.nextUrl.searchParams.get("limit")) || 10;
    const page = Number(req.nextUrl.searchParams.get("page")) || 0;
    const skip = Math.max(0, Number(page - 1)) * limit;
    const community = await dbCommunity.findOne({ title }).select("_id").lean();
    if (!community)
      return NextResponse.json({ error: true, message: "community not found" });
    const communityId = community._id;
    const posts = await dbPosts
      .find({ community: communityId })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate({
        path: "community",
        select: "avatar title",
      });

    if (!posts || posts.length === 0) {
      return NextResponse.json({ error: true, message: "Posts not found" });
    }

    return NextResponse.json({
      error: false,
      message: "community posts has been sent",
      results: posts,
    });
  } catch (error) {
    console.log("error in getting community posts", error);
  }
}
