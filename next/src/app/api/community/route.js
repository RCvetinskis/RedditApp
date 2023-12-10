import { NextResponse } from "next/server";
import connectMongoDb from "../../../../lib/mongodb";
import dbCommunity from "../../../../schemas/dbCommunity";
import dbUsers from "../../../../schemas/dbUsers";

// post community
export async function POST(req) {
  try {
    await connectMongoDb();
    const { title, userId } = await req.json();

    const communities = await dbCommunity.find({}, { title: 1 });
    if (communities) {
      const communitiesTitle = communities.map(({ title }) => title);
      if (communitiesTitle.includes(title))
        return NextResponse.json({
          error: true,
          message: "Title is already taken",
        });
    }
    const user = await dbUsers.findById(userId);
    if (!user)
      return NextResponse.json({ error: true, message: "user not found" });

    const newCommunity = await dbCommunity.create({
      title,
      moderator: userId,
    });

    if (!newCommunity)
      return NextResponse.json({
        error: true,
        message: "Failed to create new community",
      });

    await newCommunity.save();

    // pushes to user communty when
    user.community.push(newCommunity._id);
    await user.save();

    return NextResponse.json({
      error: false,
      message: "Succesfully created community",
      results: newCommunity,
    });
  } catch (error) {
    console.log("error in post request for community", error);
  }
}

// get communities
export async function GET(req) {
  try {
    await connectMongoDb();

    const userId = req.nextUrl.searchParams.get("userId");
    const title = req.nextUrl.searchParams.get("title");
    let query = {};
    if (userId) {
      const user = await dbUsers.findById(userId);
      if (!user)
        return NextResponse.json({ error: true, message: "user not found" });

      const { community: userCommunities } = user;
      if (userCommunities) {
        query = { _id: { $in: userCommunities } };
      }
    }
    if (title) {
      const searchRegex = new RegExp(title, "i");
      query = { title: searchRegex };
    }
    const communities = await dbCommunity
      .find(query)
      .sort({ users: -1, createdAt: -1 });

    if (!communities)
      return NextResponse.json({
        error: true,
        message: "Communities not found",
      });

    return NextResponse.json({
      error: false,
      message: "Communities sent",
      results: communities,
    });
  } catch (error) {
    console.log("error in getting communities", error);
  }
}
