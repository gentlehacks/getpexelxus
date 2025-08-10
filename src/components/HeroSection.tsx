"use client"
import {motion} from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import { HiBadgeCheck } from "react-icons/hi";
import { FcSms } from "react-icons/fc";
import { FcChargeBattery } from "react-icons/fc";
import { FaApple, FaGooglePlay } from "react-icons/fa6";




const HeroSection = () => {
  return (
    <div className="w-full mt-[4rem] flex flex-col items-center sm:flex-col md:flex-col lg:flex-row justify-center p-4">
      <div className="w-[90%] flex flex-col items-center justify-center lg:pl-[5%]">
        <motion.div 
          initial={{opacity: 0, scale: 0.8}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.4, delay: 0.5}}
        className="flex items-center justify-center px-2 py-1 text-[13px] text-[10px] sm:text-[10px] md:text-xs lg:text-xs rounded-full bg-gray-300 border-1 border-blue-300 text-gray-800 mb-2">
          <HiBadgeCheck className="text-blue-500 text-[1.1rem] mr-1" />
          Trusted by 5,000+ users
        </motion.div>
        <h1 className="text-[1.8rem] sm:text-[2rem] md:text-[2.8] lg:text-[2.2rem] font-semibold  text-center lg:text-left">
          The Smart Way to Buy Airtime and Stay 
          <span className="text-green-500 ml-3">
            Connected
          </span> 
        </h1>
        <motion.p 
          initial={{opacity: 0, y: '50px'}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, type: 'spring', stiffness: 100, delay: 1}}
        className="text-md text-gray-800 sm:text-lg text-center lg:text-left mt-4">
          Save ₦100 on every transaction compared to bank apps + enjoy seamless social features designed for <span className="border-b-1 border-green-500"> Nigerians.</span> 
        </motion.p>

        {/* DownLoad Buttons */}
        <div className="mt-[3rem] w-full flex items-center justify-between px-[0.2rem] xs:px-[2rem] sm:px-[4.5rem] md:px-[10rem] lg:px-[4rem] xl:px-[6rem] lg:text-left lg:justify-left gap-[0.2rem]">
          <Link href="/download">
            <motion.button className="py-3 px-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-100 flex items-center text-[0.9rem] justify-center text-sm transition-all duration-100 cursor-pointer">
              <FaApple className="mr-1 text-xl" /> 
              Get on iPhone
            </motion.button>
          </Link>
          <Link href="/download">
            <motion.button className="py-[10px] px-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-100 flex items-center text-[0.9rem] justify-center font-light transition-all duration-100 cursor-pointer">
              <FaGooglePlay className="mr-1 text-2xl" /> 
              Get on Android
            </motion.button>
          </Link>
        </div>
        <p className="mt-[5rem]">🔒 Secured by Paystack</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center lg:mt-[-5rem]">
        {/* Mockups */}
        <motion.div className="relative w-[100%] flex items-center justify-center mt-[2rem] "
          initial={{y: "200px", opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 1, ease: 'easeOut', delay: 1.5}}
        >
          <Image 
            src="/phone-mockups.svg" 
            alt="Phone Mockups" 
            width={100} 
            height={100} 
            priority
            className="w-[105%] sm:w-[130%] md:w-[100%] lg:w-[80%] max-w-[40rem] max-h-[40rem]" 
          />
        </motion.div>
        <div className="w-full flex items-center justify-between px-[1.5rem] sm:px-[4rem] md:px-[7rem] lg:px-[3rem] ">
        <motion.div
          initial={{opacity: 0, scale: 0.7}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 1, type: 'spring', stiffness: 200, delay: 2}}
          viewport={{ 
            margin: "0px 0px -10% 0px"
          }}
        className="px-2 py-1 bg-gray-200 flex items-center justify-center rounded-xl"
        >
            <FcSms />
            <p className="ml-3">Connect</p>
          </motion.div>
          <motion.div
            initial={{opacity: 0, scale: 0.7}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 1, type: 'spring', stiffness: 200, delay: 2.5}}
            viewport={{ 
              margin: "0px 0px -10% 0px" 
            }}
          className="px-2 py-1 bg-gray-200 flex items-center justify-center rounded-xl"
          >
            <FcChargeBattery />
            <p className="ml-3 text-">Recharge</p>
          </motion.div>
        </div>
      </div>
      

      

    </div>
  )
}

export default HeroSection