"use client";
import React, { useState } from "react";
import { authUser } from "@/lib/pocketbase";
import Link from "next/link";

const Login = () => {
  const [userScheme, setUserScheme] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserScheme({
      ...userScheme,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    authUser(userScheme);
  };

  return (
    <section className="w-full py-20 flex items-center justify-center flex-col gap-5">
      <h1>Sign Up</h1>

      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center flex-col gap-5"
      >
        <input
          type="email"
          name="email"
          value={userScheme?.email}
          placeholder="email"
          onChange={handleChange}
          className="border px-3 py-2.5 rounded"
        />
        <input
          type="password"
          name="password"
          value={userScheme?.password}
          placeholder="password"
          onChange={handleChange}
          className="border px-3 py-2.5 rounded"
        />

        <button
          onClick={() => {
            setTimeout(() => {
              location.replace("/home");
            }, 1000);
          }}
          type="submit"
          className="border rounded px-3 py-2.5 hover:shadow"
        >
          Login
        </button>

        <button
          type="submit"
          className="border rounded px-3 py-2.5 hover:shadow bg-purple-500 text-white"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default Login;
