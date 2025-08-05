
"use client";

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#101823] text-white px-4 py-16">
      <div className="max-w-lg text-center space-y-6">
        <h1 className="text-6xl font-bold text-blue-500 mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-300 mb-4">
          Sorry, the page you&apos;re looking for doesn&apos;t exist, was moved, or is temporarily unavailable.
        </p>
        <Link href="/" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
