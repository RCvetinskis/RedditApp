import { NextResponse } from "next/server";
import connectMongoDb from "../../../../../lib/mongodb";
import dbCommunity from "../../../../../schemas/dbCommunity";

// get community
export async function GET(req, { params }) {
  try {
    await connectMongoDb();
    const { title } = params;
    if (!title)
      return NextResponse.json({ error: true, message: "Title not provided" });
    const currentCommunity = await dbCommunity.findOne({ title });
    if (!currentCommunity)
      return NextResponse.json({ error: true, message: "Community not found" });

    return NextResponse.json({
      error: false,
      message: "Community found successfully",
      results: currentCommunity,
    });
  } catch (error) {
    console.log("error in get request community [tittle]", error);
  }
}
