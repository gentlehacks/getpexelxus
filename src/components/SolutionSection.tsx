"use client"
import {motion} from "framer-motion"

const ProblemSection = () => {
  return (
      <motion.section className="py-20 px-6 max-w-6xl mx-auto mt-[8rem]">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center px- mb-[5rem]">Why Nigerians Choose <span className="text-blue-500 border-b-1 border-green-600"> PexelXus </span></h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-[1.1rem] font-semibold mb-3">Built for Nigerians 🆖</h3>
            <p className="text-gray-600 mb-6">
              We understand how Nigerians use fintech - no hidden subscriptions, just simple transactions where
              you always get value.
            </p>
            <h3 className="text-[1.1rem] font-semibold mb-3">Earn While You Spend</h3>
            <p className="text-gray-600">
              Every airtime or data purchase earns tiny cashback, so using PexelXus feels rewarding.
            </p>
          </div>
          <div className="bg-blue-200 rounded-2xl p-7 flex flex-col justify-center shadow-md text-gray-900">
            <p className="text-xl text-blue-700 font-semibold mb-4">💡 Imagine this:</p>
            <p className="text-gray-700">
              You buy <span className="border-b-1 border-green-600 text-blue-600"> ₦100 </span> airtime • It`&apos;s instant • You also earn <span className="border-b-1 border-green-600 text-blue-600"> ₦2 cashback </span> without even noticing •
              That&apos;s the PexelXus difference.
            </p>
          </div>
        </div>
      </motion.section>
  )
}

export default ProblemSection