"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 relative">
      {/* Background Shapes */}
      <div className="absolute top-10 left-5 w-20 h-20 bg-red-400 rotate-45 transform -translate-x-1/2 z-0 sm:w-32 sm:h-32" />
      <div className="absolute top-32 right-5 w-32 h-32 bg-blue-300 rounded-full transform -translate-x-1/2 z-0 sm:w-48 sm:h-48" />
      <div className="absolute bottom-[100px] left-10 w-24 h-24 bg-green-400 rounded-full transform -translate-y-1/2 z-0 sm:w-40 sm:h-40" />
      <div className="absolute top-16 right-10 w-28 h-28 bg-purple-300 transform rotate-12 z-0 sm:w-44 sm:h-44" />

      {/* Login Content */}
      <div className="relative w-full max-w-md space-y-8 z-10 bg-white p-6 rounded-lg shadow-md sm:p-8">
        <div className="text-center">
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-500">
            Sign in to continue to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@university.edu"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          >
            Sign in
          </Button>

          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
