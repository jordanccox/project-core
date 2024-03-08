"use client";

import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(160, { message: "Password must be less than 160 characters" }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	const [formErrors, setFormErrors] = useState<z.ZodIssue[] | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Your login logic here, e.g., making a request to your API route
		try {
      const formData = { email, password };
      const validatedData = loginSchema.parse(formData); // Validate
      setFormErrors(null);

      // Send validated data to your API route
      console.log("Validated Data:", validatedData);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setFormErrors(err.issues);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-md text-black">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
					{formErrors?.email && (
  				<div className="text-red-500 text-sm">{formErrors.email}</div>
					)}

          <label htmlFor="password" className="block text-sm font-medium">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
					{formErrors?.email && (
  				<div className="text-red-500 text-sm">{formErrors.password}</div>
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
  );
}
