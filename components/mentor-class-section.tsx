"use client";

import React from "react";
import { DotPattern } from "@/components/dot-pattern";
import { cn } from "@/lib/utils";

export default function MentorClassSection() {
  return (
    <section className="py-3 sm:py-20 text-center px-4 mx-auto w-full text-black rounded-[3rem] relative overflow-hidden bg-white">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,white,transparent)]"
        )}
      />
      <div className="min-h-[80vh] text-zinc-800 rounded-3xl flex flex-col items-center justify-center p-8 relative z-10">
        <div className="relative w-full max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-blue-500">
            Why Choose MentorClass?
          </h1>

          {/* Responsive Positioned Cards */}
          {/* Card 1 */}
          <div className="absolute bottom-0 left-0 transform translate-x-4 sm:translate-x-16 -translate-y-20 sm:-translate-y-32 md:-translate-y-40 lg:-translate-y-52 shadow-lg">
            <div className="bg-violet-300 p-2 sm:p-4 rounded-lg text-base sm:text-lg md:text-xl">
              Accelerate your learning with personalized learning paths! 🚀
            </div>
          </div>

          {/* Card 2 */}
          <div className="absolute top-0 left-0 transform -translate-x-4 sm:-translate-x-12 -translate-y-8 sm:-translate-y-12 md:-translate-y-32 lg:-translate-y-72 shadow-lg">
            <div className="bg-violet-300 p-2 sm:p-4 rounded-lg text-base sm:text-lg md:text-xl">
              Join 1:1 or group sessions 🤝
            </div>
          </div>

          {/* Card 3 */}
          <div className="absolute top-0 right-0 transform translate-x-8 sm:translate-x-16 md:translate-x-24 lg:translate-x-36 -translate-y-16 sm:-translate-y-24 md:-translate-y-32 lg:-translate-y-44 shadow-lg">
            <div className="bg-violet-300 p-2 sm:p-4 rounded-lg text-base sm:text-lg md:text-xl">
              Get in-depth guidance from experienced mentors! 📝
            </div>
          </div>

          {/* Card 4 */}
          <div className="absolute bottom-0 left-0 transform -translate-x-16 sm:-translate-x-32 md:-translate-x-48 lg:-translate-x-64 translate-y-20 sm:translate-y-32 md:translate-y-40 lg:translate-y-52 shadow-lg">
            <div className="bg-violet-300 p-2 sm:p-4 rounded-lg text-base sm:text-lg md:text-xl">
              Engage with interactive mentor sessions and real-time feedback! 📚
            </div>
          </div>

          {/* Card 5 */}
          <div className="absolute bottom-0 right-0 transform translate-x-16 sm:translate-x-32 md:translate-x-48 lg:translate-x-56 translate-y-8 sm:translate-y-12 md:translate-y-16 lg:translate-y-20 shadow-lg">
            <div className="bg-violet-300 p-2 sm:p-4 rounded-lg text-base sm:text-lg md:text-xl">
              Collaborate with peers and mentors seamlessly, anytime, anywhere! 🌐
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
