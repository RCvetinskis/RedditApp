import { NextResponse } from "next/server";
import dbUsers from "../../../../schemas/dbUsers";
import bcrypt from "bcrypt";
import connectMongoDb from "../../../../lib/mongodb";
import { validateUser } from "../../../../middleware/usersValidator";

export async function POST(req) {
  try {
    await connectMongoDb();
    const { username, email, password } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    const validationError = await validateUser(email, username, password);
    if (validationError) {
      return NextResponse.json(validationError);
    }

    await dbUsers.create({ username, email, password: hashedPassword });

    return NextResponse.json({
      message: "User Registered",
      status: 201,
      error: false,
    });
  } catch (error) {
    return NextResponse.json({
      message: "An error occured while registering the user.",
      status: 500,
      error: true,
    });
  }
}
