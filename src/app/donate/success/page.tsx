"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const reference = searchParams.get("reference")
  const router = useRouter()
  const [status, setStatus] = useState("Verifying...")

  useEffect(() => {
    const verifyPayment = async () => {
      if (!reference) {
        setStatus("Invalid transaction reference")
        return
      }

      try {
        const res = await fetch("/api/paystack/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reference }),
        })

        const data = await res.json()

        if (res.ok && data.status === "success") {
          setStatus("✅ Payment Successful! Thank you for your donation.")
        } else {
          router.push("/donate/failed") // ⬅ redirect to failed page
        }
      } catch (err) {
        console.log(err)
        router.push("/donate/failed")
      }
    }

    verifyPayment()
  }, [reference, router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white shadow-lg rounded-xl p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Payment Status</h1>
        <p className="text-lg">{status}</p>
        <link href="/" className="px-6 py-3 flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-xl font-medium text-white mt-8">Go Homepage</link>
      </div>
    </div>
  )
}
