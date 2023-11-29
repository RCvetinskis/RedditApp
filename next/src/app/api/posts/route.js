import { NextResponse } from "next/server";
import dbPosts from "../../../../schemas/dbPosts";
import dbUsers from "../../../../schemas/dbUsers";
import connectMongoDb from "../../../../lib/mongodb";
import { uploadFile, getFileUrl } from "../../../../lib/s3";

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

    const { image, video, title, overview, userId, link } =
      formDataToObject(formData);

    const { _id, username, avatar } = await dbUsers.findOne({ _id: userId });
    const user = {
      userId: _id,
      username,
      avatar,
    };

    if (!user)
      return NextResponse.json({ error: true, message: "user not found" });

    let postObjects = {
      user,
      title,
      overview,
      link,
    };

    if (image) {
      postObjects = await handleMediaUpload(image, "image", postObjects);
    }
    if (video) {
      postObjects = await handleMediaUpload(video, "video", postObjects);
    }
    const post = await dbPosts.create(postObjects);

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
      .limit(limit);

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
