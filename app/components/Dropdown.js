'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Dropdown({ companyName, companyLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex items-center gap-2 hover:underline"
      >
        {companyName}
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {companyLinks.map((link) => (
              <Link key={link.name} href={link.url} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
