"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? "w-[90%] md:w-[600px]" : "w-[95%] md:w-[800px]"
        }`}
      >
        <div className="bg-black text-white rounded-full h-14 flex items-center justify-between px-6 shadow-lg">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-semibold text-xl">MentorClass</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/about"
              className="text-white/80 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link href="/login" className="text-white hover:text-gray-300">
              Sign in
            </Link>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-blue-400 text-white md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link
              href="/about"
              className="text-6xl font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/login"
              className="text-4xl font-bold bg-black text-white px-10 py-4 rounded-full hover:bg-zinc-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
