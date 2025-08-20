"use client"
import Link from "next/link"

export default function FailedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
      <div className="bg-white w-[95%] sm:w-[70%] md:w-[30rem] lg:w-[35rem] shadow-lg rounded-xl p-8 text-center">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Payment Failed</h1>
        <p className="text-lg mb-8">
          Unfortunately, your payment could not be completed.  
          Please try again or contact support if the issue persists. <Link href="" className="text-blue-500 hover:bg-blue-600 ml-2">support@pexelxus.com</Link>
        </p>
        <Link
          href="/donate"
          className="bg-red-600 text-white px-6 py-3 flex items-center justify-center rounded-lg hover:bg-red-700"
        >
          {/* Retry Icon */}
          Try Again
        </Link>
      </div>
    </div>
  )
}
