import { connect } from "@/app/utils/db";
import { NextResponse } from "next/server";
import User from "@/app/models/user";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { email, password } = await request.json();

  await connect();

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return new NextResponse("Invalid credentials", {
        status: 400,
      });
    }

    if (existingUser.password !== password) {
      return new NextResponse("Invalid credentials", {
        status: 400,
      });
    }

    return new NextResponse("User logged in", {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(error, {
      status: 500,
    });
  }
};
