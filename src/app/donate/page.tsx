"use client";
import { useState } from "react";
// import { useRouter } from "next/navigation";

export default function DonatePage() {
  // const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";
  const [name, setName] = useState<string>(""); 
  const [amount, setAmount] = useState<number | string>(""); 
  const [email, setEmail] = useState<string>(""); 
  // const router = useRouter();

  // const componentProps = {
  //   email,
  //   amount: amount * 100, // Paystack uses kobo (₦1000 = 100000)
  //   publicKey,
  //   text: "Donate Now",
  //   metadata: {
  //     custom_fields: [
  //       {
  //         display_name: "Donor",
  //         variable_name: "donor",
  //         value: email,
  //       },
  //     ],
  //   },
  //   onSuccess: () => router.push("/donate/success"),
  //   onClose: () => alert("You closed the payment window."),
  // };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-2 py-16 md:px-20">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-gray-900 text-4xl md:text-5xl font-bold mb-4">Support Pexelxus</h1>
        <p className="text-lg text-gray-600 mt-[1.5rem]">
          Help us build Nigeria’s trusted platform for airtime, data, gifting,
          and content sharing. Every donation makes a difference 🙏.
        </p>
      </section>

      <section className="w-[100%] max-w-3xl mx-auto mt-12 bg-white shadow-lg rounded-2xl py-8 px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-gray-900 text-2xl font-semibold mb-6">Make a Donation</h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Enter your full-name"
          className="w-full border border-gray-400 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Email */}
        <input
          type="email"
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
          className="w-full border border-gray-400 rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          min={100}
        />

        {/* Paystack Button */}
        <button
          className="w-full bg-blue-600 text-white font-medium px-6 py-4 rounded-lg shadow hover:bg-blue-700 transition"
        >Donate</button>

        <p className="mt-6 text-sm text-gray-500">
          100% of your donation goes into building and maintaining Pexelxus.
        </p>
      </section>
    </main>
  );
}
