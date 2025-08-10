"use client"
import {motion} from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const Download = () => {
  return (
    <div className="w-full h-screen p-6 bg-gray-50 text-gray-900 flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <div className="w-[3.8rem] h-[3.8rem] border-2 border-gray-300 rounded-full overflow-hidden mr-[2rem]">
          <Image 
            src={"/favicon.png"}
            alt="comming-soon"
            width={100}
            height={100}
            priority
            className="w-full rounded-full"
          />
        </div>
        <Image 
          src={"/coming-soon.svg"}
          alt="comming-soon"
          width={100}
          height={100}
          priority
          className="w-[5rem] sm:w-[6rem] md:w-[6rem] lg:w-[6rem]"
        />
      </div>
      
      <h1 className="mt-[4rem] text-[1.5rem] animate-gradient text-gradient-to-r from-green-500 via-pink-600 to-green-500">
        Comming Soon...
      </h1>
      <p className="text-center mt-3 text-gray-800">
        We&apos;re building the easiest way to buy airtime and connect with friends in Nigerian.
      </p>
      <Link href="/#waitlistform"
        className="mt-[4rem]"
      >
        <motion.button 
          initial={{y: 0}}
          whileTap={{y: [0, 3, 0]}}
          whileHover={{y: 3}}
          transition={{duration: 0.2}}
        className="flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-center text-white transition-all duration-200 cursor-pointer"
        >
          🎁 Join Waitlist for Early Access!
        </motion.button>
      </Link>
    </div>
  )
}

export default Download