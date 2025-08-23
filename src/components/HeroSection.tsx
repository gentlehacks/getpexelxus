"use client"
import {motion} from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import { HiBadgeCheck } from "react-icons/hi";
import { FcSms } from "react-icons/fc";
import { FcChargeBattery } from "react-icons/fc";
import { BiDownload } from "react-icons/bi";
import { FaShieldAlt } from "react-icons/fa";




const HeroSection = () => {
  return (
    <div className="bg-blue-500 lg:h-screen w-full flex flex-col items-center sm:flex-col md:flex-col lg:flex-row justify-center p-4 pt-[3rem] pb-10 lg:pb-0 lg:pt-0">
      <div className="w-[90%] flex flex-col items-center justify-center lg:pl-[5%]">
        <motion.div 
          initial={{opacity: 0, scale: 0.8}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.4, delay: 0}}
        className="flex items-center justify-center px-2 py-1 text-[13px] text-[10px] sm:text-[10px] md:text-xs lg:text-xs rounded-full bg-[#b3dfd2] border-1 border-green-400 text-gray-800 mb-2">
          <HiBadgeCheck className="text-blue-500 text-[1.1rem] mr-1" />
          Trusted by 5,000+ users
        </motion.div>
        <h1 className="mt-3 text-gray-100 text-[1.8rem] sm:text-[2rem] md:text-[2.8] lg:text-[2.2rem] font-semibold  text-center lg:text-left">
          The Smart Way to Buy Airtime and Stay 
          <span className="text-green-400 ml-3">
            Connected
          </span> 
        </h1>
        <motion.p 
          initial={{opacity: 0, y: '50px'}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, type: 'spring', stiffness: 100, delay: 0.5}}
        className="text-md text-gray-200 sm:text-lg text-center lg:text-left mt-4">
          Save <span className="text-green-400"> ₦50 </span> on every transaction compared to bank apps + enjoy seamless social features designed for <span className="border-b-1 border-green-500"> Nigerians.</span> 
        </motion.p>

        {/* DownLoad Buttons */}
        <div className="mt-[3rem] w-full flex items-center justify-center">
          <Link href="/download">
            <motion.button className="py-3 px-4 rounded-xl bg-blue-800 hover:bg-blue-900 text-gray-100 flex items-center text-[0.9rem] justify-center text-sm transition-all duration-100 cursor-pointer">
              <BiDownload className="mr-1 text-xl" />
              Download
            </motion.button>
          </Link>
        </div>
        <p className="mt-[5rem] text-gray-100 flex items-center">
          <FaShieldAlt className="text-xl mr-2" /> 
          Secured by Paystack</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center lg:mt-[-5rem]">
        {/* Mockups */}
        <motion.div className="relative w-[100%] flex items-center justify-center mt-[2rem] "
          initial={{y: "200px", opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 1, ease: 'easeOut', delay: 1}}
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
          transition={{duration: 1, type: 'spring', stiffness: 200}}
          viewport={{ 
            margin: "0px 0px -12% 0px"
          }}
        className="px-2 py-1 bg-gray-800 text-gray-100 flex items-center justify-center rounded-xl"
        >
            <FcSms />
            <p className="ml-3">Connect</p>
          </motion.div>
          <motion.div
            initial={{opacity: 0, scale: 0.7}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 1, type: 'spring', stiffness: 200, delay: 0.5}}
            viewport={{ 
              margin: "0px 0px -12% 0px" 
            }}
          className="px-2 py-1 bg-gray-800 text-gray-100 flex items-center justify-center rounded-xl"
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