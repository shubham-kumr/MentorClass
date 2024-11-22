"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedShinyText from "../ui/animated-shiny-text";

export function Hero() {
  return (
    <div className="min-h-screen bg-background font-text">
      <section className="pt-32 pb-16 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute top-16 left-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-green-400 rotate-45 transform -translate-x-1/2" />
        <div className="absolute top-28 right-4 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-blue-300 rounded-full transform translate-x-1/2" />
        <div className="absolute bottom-16 left-[-40px] w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-red-400 rounded-full transform -translate-y-1/2" />
        <div className="absolute top-8 right-12 w-28 h-28 sm:w-56 sm:h-56 md:w-56 md:h-56 bg-yellow-300 transform rotate-12" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 inline-block">
              <AnimatedShinyText className="inline-flex text-sm sm:text-lg md:text-xl border-2 rounded-full items-center justify-center px-4 py-1 transition ease-out hover:text-blue-700 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Introducing MentorClass</span>
              </AnimatedShinyText>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 leading-wide font-disp text-blue-500">
              Accelerate your career and learning with MentorClass
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-zinc-700 mb-8">
              Join MentorClass and gain valuable skills through our mentors and
              community - Anytime, Anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button className="group text-3xl px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-700">
                  Get started
                    <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4.166 10h11.667M11.666 4.167L17.5 10l-5.834 5.833"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    </svg>
                </Button>
              </Link>
              <Link href="/login">
                <Button className="text-3xl px-6 py-3 rounded-full">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
