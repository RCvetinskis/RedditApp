import { NextResponse } from "next/server";
import dbPosts from "../../../../schemas/dbPosts";
import dbUsers from "../../../../schemas/dbUsers";
import connectMongoDb from "../../../../lib/mongodb";
import { uploadFile, getFileUrl } from "../../../../lib/s3";
import dbCommunity from "../../../../schemas/dbCommunity";

// helpers
function formDataToObject(formData) {
  const object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  return object;
}
async function handleMediaUpload(file, propertyName, postObjects) {
  if (file) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const result = await uploadFile(buffer, file.name);

    if (result) {
      const mediaUrl = getFileUrl(result.Key);
      postObjects = {
        ...postObjects,
        [propertyName]: mediaUrl,
      };
    }
  }
  return postObjects;
}

// requests
export async function POST(req) {
  try {
    await connectMongoDb();

    const formData = await req.formData();

    const { image, video, title, overview, userId, link, communityTitle } =
      formDataToObject(formData);

    const { _id, username, avatar } = await dbUsers.findById(userId);

    if (!_id)
      return NextResponse.json({ error: true, message: "user not found" });

    const user = {
      userId: _id,
      username,
      avatar,
    };

    const community = await dbCommunity.findOne({ title: communityTitle });
    if (!community)
      return NextResponse.json({ error: true, message: "community not found" });

    let postObjects = {
      user,
      title,
      overview,
      link,
      community: community._id,
    };

    if (image) {
      postObjects = await handleMediaUpload(image, "image", postObjects);
    }
    if (video) {
      postObjects = await handleMediaUpload(video, "video", postObjects);
    }
    const post = await dbPosts.create(postObjects);
    community.posts.push(post._id);
    community.save();

    return NextResponse.json({ error: false, message: "Posted", post });
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function GET(req) {
  try {
    await connectMongoDb();

    const limit = Number(req.nextUrl.searchParams.get("limit")) || 10;
    const page = Number(req.nextUrl.searchParams.get("page")) || 0;
    const skip = Math.max(0, Number(page - 1)) * limit;

    const posts = await dbPosts
      .find()
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
      message: "Posts sent",
      results: posts,
    });
  } catch (error) {
    console.error("error", error);
  }
}
