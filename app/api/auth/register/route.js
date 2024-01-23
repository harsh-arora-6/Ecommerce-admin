import { connect } from "@/app/utils/db";
import { NextResponse } from "next/server";
import User from "@/app/models/user";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { email, password } = await request.json();

  await connect();

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new NextResponse("User with entered email already exists", {
        status: 400,
      });
    }

    // const hashedPassword = bcrypt.hash(password, 5);

    const newUser = new User({ email, password });

    await newUser.save();

    return new NextResponse("User registered", {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(error, {
      status: 500,
    });
  }
};
