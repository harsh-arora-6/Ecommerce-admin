"use client";

import Link from "next/link";
import { useUserContext } from "./hooks/useUserContext";

export default function Home() {
  const { user } = useUserContext();
  console.log(user);
  return (
    <div className="bg-gray-500 w-screen h-screen flex flex-col justify-center items-center gap-4">
      {user ? (
        <div>Hello, {user.email}</div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-lg bg-gray-300 p-2">
            Welcome to admin workspace
          </h1>
          <div className="flex gap-2">
            <Link
              href={"/login"}
              className="bg-blue-500 text-white p-2 rounded-lg"
            >
              Login
            </Link>
            <Link
              href={"/register"}
              className="bg-white text-blue rounded-lg p-2"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
