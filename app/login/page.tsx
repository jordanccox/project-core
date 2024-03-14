"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { checkLoggedIn } from "../lib/user";
import { login } from "../lib/user";
import { loginSchema } from "@/schemas/user";
import { useState } from "react";

export default function Login() {

  const { data, isPending, mutate } = useMutation({
    mutationFn: login
  });

  const onSubmit = async (data: any) => {
    // Submit data to login function
    try {
      mutate(data);
      reset();
    } catch(error) {
      console.log("Error occurred");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  return (
    <>
    <button onClick={checkLoggedIn}>Test If Logged In</button>
      <h1 className="text-center text-4xl font-medium pb-12">Login</h1>
      <div className="flex items-center justify-center min-h-full pb-12">
        <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-md text-black">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message?.toString()}</p>
            )}

            <label htmlFor="password" className="block text-sm font-medium">
              Password:
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500">
                {errors.password.message?.toString()}
              </p>
            )}

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
