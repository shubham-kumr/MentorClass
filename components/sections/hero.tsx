'use client'

import Link from "next/link";
import { Navbar } from '@/components/layout/navbar'
import { Button } from "@/components/ui/button"
import AnimatedShinyText from "../ui/animated-shiny-text";

export function Hero() {
  return (
    <div className="min-h-screen bg-background font-text">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden min-h-screen flex items-center">
        {/* Decorative Shapes */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-green-400 rotate-45 transform -translate-x-1/2" />
        <div className="absolute top-40 right-10 w-64 h-64 bg-blue-300 rounded-full transform translate-x-1/2" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-red-400 rounded-full transform -translate-y-1/2" />
        <div className="absolute bottom-32 left-20 w-56 h-56 bg-purple-300 transform rotate-12 translate-y-1/2" />
        <div className="absolute top-10 right-20 w-56 h-56 bg-yellow-300 transform rotate-12" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 inline-block">
            <AnimatedShinyText className="inline-flex text-xl border-2 rounded-full items-center justify-center px-4 py-1 transition ease-out hover:text-blue-700 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Introducing MentorClass</span>
        </AnimatedShinyText>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-wide font-disp">
              Accelerate your career and learning with MentorClass
            </h1>
            <p className="text-xl md:text-2xl text-zinc-700 mb-8">
              Join MentorClass and gain valuable skills through our mentors and community - Anytime, Anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button className="text-2xl px-8 font-disp rounded-full bg-blue-600 hover:bg-blue-700">
                  Get started
                  <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="none">
                    <path d="M4.166 10h11.667M11.666 4.167L17.5 10l-5.834 5.833" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              </Link>
              <Link href="/login">
                <Button className="text-2xl px-8 font-disp rounded-full">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}