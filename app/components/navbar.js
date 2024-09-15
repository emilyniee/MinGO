"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col items-center justify-center  text-black fixed w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-green-600 focus:outline-none"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-white text-2xl font-bold px-1 rounded-lg">
              <Link href="/">MinGO</Link>
            </h1>
          </div>

          {/* Links */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <Link href="/events" className="text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-orange-600">
                Events
              </Link>
              <Link href="/mingos" className="text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-orange-600">
                My Mingos
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-green-600">
              Home
            </Link>
            <Link href="/about" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-green-600">
              About
            </Link>
            <Link href="/services" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-green-600">
              Services
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
