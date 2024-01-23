"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const isValidEmail = (email) => {
  const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
};
const isValidPassword = (password) => {
  return password && password.length > 4;
};

export default function RegisterPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email) || !isValidPassword(password)) {
      setError("Invalid Email or Password");
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.status === 200) {
        setError("");
        router.push("/login");
      } else if (response.status === 400) {
        setError("Email already Exists");
      } else {
        setError("Internal Server Error");
      }
    } catch (error) {
      setError("Error, Try again!");
    }
  };
  return (
    <div className="bg-blue-900 w-screen h-screen flex items-center justify-center">
      <form
        className="bg-gray-700 p-2 rounded-lg flex flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <input
          className="rounded-lg p-2"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="rounded-lg p-2"
          type="password"
          placeholder="Password"
          required
        />
        <p className="text-red-500 text-sm">{error && error}</p>
        <button className="rounded-lg bg-blue-500 p-2 text-white" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
