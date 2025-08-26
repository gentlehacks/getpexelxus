"use client"
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-[#0f172a] via-[#1e293b] to-black w-full flex flex-col items-center justify-center p-4 px-6 pt-15  text-gray-100 mt-[12rem] bg-gradient-hero">
      <div className="flex items-center mt-3">
        {/* Pexelxus - Logo */}
          <div className="w-[2.2rem] h-[2.2rem] flex items-center justify-center rounded-full object-cover overflow-hidden border-1 border-gray-400">
            <Image
              src="/favicon.png"
              width={100}
              height={100}
              alt="PexelXus: Social meets VTU"
              priority
              className="w-[110%] "
            />
          </div>
          <h2 className="ml-2 text-lg font-semibold">PexelXus</h2>
      </div>
      <motion.p 
        initial={{width: "0%", padding: "0px"}}
        whileInView={{width: "100%"}}
        viewport={{ 
            margin: "0px 0px -25% 0px"
          }}
        transition={{duration: 1, ease: 'easeInOut'}}
      className="text-center text-[0.9rem] sm: sm:text-md md:text-md lg:text-1xl sm:text-[0.9rem] md:text-[1rem] lg:text-[1rem] text-gray-100 border-l-3 border-r-3 border-green-500 px-3 mt-[3rem] mx-4 sm:mx-8 md:mx-15 lg:mx-25 w-fit">
        Gift Airtime • Pay Bills • Flex with Friends.
      </motion.p>
      <div className="flex items-center justify-center px-4 md:px-8 mt-15 mb-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[0.9rem]">Follow Us:</p>
          <div className="flex items-center justify-center gap-3 mt-3">
            <Link href="https://www.x.com/salihuadamu4678">
              <FaSquareXTwitter className="relative text-[1.5rem] hover:text-blue-500 hover:mb-1 transition-all duration-200 cursor-pointer" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61575434355333">
              <FaFacebookSquare className="relative text-[1.5rem] hover:text-blue-500 hover:mb-1 transition-all duration-200 cursor-pointer" />
            </Link>
            <Link href="https://www.linkedin.com/in/salihu-adamu-3b9b97290">
              <FaLinkedin className="relative text-[1.5rem] hover:text-blue-500 hover:mb-1 transition-all duration-200 cursor-pointer" />
            </Link>
            
            
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ml-[3rem] xs:ml-[4rem] sm:ml-[5rem] md:ml-[7rem] lg:ml-[10rem]">
          <p className="text-[0.9rem]">Contact:</p>
          <Link href="mailto:support@pexelxus.com">
            <p className="text-[0.9rem] text-gray-200 mt-3 hover:border-b-1 hover:border-blue-500">
              support@pexelxus.com
            </p>
          </Link>
        </div>
      </div>
      <div className="w-[97%] flex items-center justify-center pt-3 border-t-1 border-gray-500 mb-5">
        <p className="text-sm text-gray-300 mt-4">
          &copy; <span> {currentYear} </span> PexelXUS .  All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer