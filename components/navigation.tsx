"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    // { name: "Work With Us", href: "/work-with-us" },
    { name: "Contact Us", href: "/contactus" },
    { name: "About Us", href: "/aboutus" },
    { name: "Login", href: "/login" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-900 to-blue-600 flex items-center justify-center text-white font-bold">
              A
            </div>
            <div>
              <h1 className="font-bold text-slate-900 text-lg">
                Adhiraj Research
              </h1>
              <p className="text-xs text-slate-500">
                Research & Consulting
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-700 font-medium hover:text-blue-700 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contactus"
              className="px-5 py-2.5 rounded-xl bg-blue-900 text-white font-medium hover:bg-blue-800 transition-all"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-800"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="flex flex-col p-5 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-700 font-medium hover:text-blue-700"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contactus"
              className="bg-blue-900 text-white text-center py-3 rounded-xl"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}