"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-gray-50 overflow-hidden">
      {/* Shapes */}
      <div className="absolute top-10 left-5 w-20 h-20 bg-teal-400 rotate-45 transform -translate-x-1/2 z-0 sm:w-32 sm:h-32" />
      <div className="absolute top-32 right-5 w-32 h-32 bg-red-300 rounded-full transform -translate-x-1/2 z-0 sm:w-48 sm:h-48" />
      <div className="absolute bottom-16 left-10 w-24 h-24 bg-purple-400 rounded-full transform -translate-y-1/2 z-0 sm:w-40 sm:h-40" />
      <div className="absolute top-16 right-10 w-28 h-28 bg-blue-300 transform rotate-12 z-0 sm:w-44 sm:h-44" />

      {/* Content */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-8 z-10 relative">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Join the mentorship community
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">University Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@university.edu"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
            Create Account
          </Button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
