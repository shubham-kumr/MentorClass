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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="absolute top-20 left-10 w-40 h-40 bg-red-400 rotate-45 transform -translate-x-1/2" />
        <div className="absolute top-40 right-10 w-64 h-64 bg-blue-300 rounded-full transform translate-x-1/2" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-green-400 rounded-full transform -translate-y-1/2" />
        <div className="absolute top-10 right-20 w-56 h-56 bg-purple-300 transform rotate-12" />
      <div className="w-full max-w-md space-y-8">

        <div className="text-center">
          {/* <Link href="/" className="inline-flex items-center space-x-3">
            <span className="text-2xl font-bold">MentorClass</span>
          </Link> */}
          <h2 className="mt-6 text-3xl font-bold">Welcome back</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to continue to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
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