"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  // Active link: wide horizontal, less rounded corners
  const linkClasses = (path: string) =>
    pathname === path
      ? "px-8 py-2 rounded-xl font-semibold text-white bg-[#914FA8] transition-colors"
      : "px-6 py-2 font-semibold text-gray-800 hover:text-purple-600 transition-colors";

  return (
    <header className="bg-gray-100 border-b-4 border-gray-400">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/sliitwif/assets/logo.png"
            alt="SLIIT WIF Logo"
            width={100}
            height={100}
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8">
          <Link href="/" className={linkClasses("/")}>Home</Link>
          <Link href="/about" className={linkClasses("/about")}>About Us</Link>
          <Link href="/events" className={linkClasses("/events")}>Events</Link>
          <Link href="/blog" className={linkClasses("/blog")}>Blog</Link>
          <Link href="/code-of-conduct" className={linkClasses("/code-of-conduct")}>Code of Conduct</Link>
          <Link href="/contact" className={linkClasses("/contact")}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
