"use client";

// import { useEffect } from "react";
import Link from "next/link";

export default function SuccessPage() {
  // useEffect(() => {
  //   confetti({
  //     particleCount: 150,
  //     spread: 80,
  //     origin: { y: 0.6 },
  //   });
  // }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-lg text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          🎉 Thank You!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Your donation helps us grow Pexelxus and bring value to more people
          across Nigeria. We appreciate your support ❤️
        </p>
        <Link
          href="/"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
