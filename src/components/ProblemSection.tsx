"use client"
import {motion} from "framer-motion"
import Image from "next/image";
import Link from "next/link"

const ProblemSection = () => {
  return (
    <motion.div className="w-full flex flex-col items-center justify-center mt-[10rem] p-6"
      initial={{y: "150px", opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 1}}
    >
     <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
       ⏰ Save your Time with PexelXus, No More Wahala!
     </h1>
      <div className="relative mt-[3rem] w-[20rem] h-[20rem] xs:w-[18rem] xs:h-[18rem] sm:w-[25rem] sm:h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[30rem] lg:h-[30rem] flex items-center justify-center bg-blue-100 rounded-full overflow-hidden"> 
        <Image 
          src="/lady-pic.svg" 
          alt="mockup phones" 
          width={100} 
          height={100}
          priority 
          className="w-[120%] -mb-20"
        />
        <div className="absolute top-[2rem] right-[25%] md:right-[30%] scale-[1.2] px-2 bg-blue-400 flex items-center justify-center rounded-full">
          <p>ding!</p>
        </div>
      </div>

      <Link href="#waitlistform">
        <motion.button 
          whileTap={{y: [3, 0]}}
          whileHover={{y: 2}}
          transition={{duration: 0.2}}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium text-white transition-all duration-200 mt-[3rem]"
        >
          🎁 CLAIM YOUR SPOT NOW!
        </motion.button>
      </Link>
      
      <div className="mt-[3rem] text-center flex items-center justify-center w-full ">
        <p>🔒 Secured by Paystack | 📞 24/7 WhatsApp support | Made for Nigeria</p>
      </div>
    </motion.div>
  )
}

export default ProblemSection