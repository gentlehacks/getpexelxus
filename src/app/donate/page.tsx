"use client";
// import { error } from "console";
import { useState } from "react";

export default function DonatePage() {
  const [name, setName] = useState<string>(""); 
  const [amount, setAmount] = useState<number | string>(""); 
  const [email, setEmail] = useState<string>(""); 
  const [message, setMessage] = useState<string>(""); 
  const [submitting, setSubmitting] = useState<boolean>(false); 
  

  const handleDonate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name || !email || !amount) {
      setMessage("Please fill in all fields")
      return
    };
    try {
      setSubmitting(true)
      setMessage("")

      const res = await fetch("/api/paystack/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, amount }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Payment initiation failed")
      }

      if (data.authorization_url) {
        window.location.href = data.authorization_url // redirect to Paystack checkout
      }
      setName("")
      setEmail("")
      setAmount("")
      setSubmitting(false)
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(error.message || "Something went wrong")
      } else {
        console.error("Unknown error:", error)
      }     
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-2 py-16 md:px-20">
      <section className="max-w-3xl mx-auto text-center">
        <div className="mb-10 flex items-center justify-center">
          <h1 className="text-gray-900 text-xl font-bold bg-gray-200 px-4 py-2 rounded-2xl w-fit">Support Pexelxus</h1>
        </div>
        
        <p className="text-lg text-gray-700 mt-[1.5rem]">
          Help us build <span className="border-b-1 border-blue-500 font-medium"> Nigeria’s trusted platform </span> for airtime, data, gifting,
          and content sharing. Every donation makes a difference 🙏.
        </p>
      </section>

      <form onSubmit={handleDonate} className="w-[100%] max-w-3xl mx-auto mt-12 bg-white shadow-xl rounded-2xl py-8 px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-gray-900 text-2xl font-semibold mb-6">
          Make a <span className="border-b-1 border-blue-500"> Donation</span>
        </h2>

        {/* Name */}
        <input
          type="text"
          id="name"
          placeholder="Enter your full-name"
          className="w-full border border-gray-400 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Email */}
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          className="w-full border border-gray-400 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Amount */}
        <input
          type="number"
          placeholder="Enter amount (₦)"
          className="w-full border border-gray-400 rounded-lg px-4 py-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          min={100}
        />
        <p className="mb-3">{message}</p>

        {/* Paystack Button */}
        <button
          disabled={submitting}
          type="submit"
          className={`w-full  text-white font-semibold px-6 py-4 rounded-xl shadow hover:bg-blue-600 transition
            ${submitting ? 'bg-blue-400 hover:bg-blue-400 cursor-loader hover:bg-blue-700' : 'bg-blue-600 cursor-pointer'}
         `}
        >{submitting ? 'Proccessing...' : 'Donate'}</button>

        <p className="mt-6 text-sm text-gray-600 mt-5">
          100% of your donation goes into building and maintaining Pexelxus.
        </p>
      </form>
    </main>
  );
}
