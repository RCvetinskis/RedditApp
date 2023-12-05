import { NextResponse } from "next/server";
import connectMongoDb from "../../../../lib/mongodb";
import dbCommunity from "../../../../schemas/dbCommunity";

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

    return NextResponse.json({
      error: false,
      message: "Succesfully created community",
      results: newCommunity,
    });
  } catch (error) {
    console.log("error in post request for community", error);
  }
}
