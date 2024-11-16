"use client";

import React from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { usePathname } from "next/navigation";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboardOrSettings =
    pathname.startsWith("/dashboard") || pathname.startsWith("/profile/settings");
  const isLoginOrSignup =
    pathname.startsWith("/login") || pathname.startsWith("/signup");

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
          <div className="min-h-screen flex flex-col">
            {!isDashboardOrSettings && <Navbar />}
            <main className="flex-1">{children}</main>
            {!isDashboardOrSettings && !isLoginOrSignup && <Footer />}
          </div>
          <Toaster />
      </body>
    </html>
  );
}
