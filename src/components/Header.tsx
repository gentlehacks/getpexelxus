"use client"
import {motion} from "framer-motion";
import Image from "next/image";
import {useState} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { IoGiftOutline } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";

const Header = () => {

  const route = useRouter()
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <motion.header id="header"
      initial={{y: "-70px"}}
      animate={{y: 0}}
      transition={{duration: 0.7, ease: "easeInOut"}}
    className="sticky top-0 z-50 w-full flex items-center justify-center py-3 px-2 sm:px-[2rem] bg-white shadow-sm">
        <ul className="w-full flex items-center justify-between">
          <div className="flex items-center">
            {/* Pexelxus - Logo */}
            <div className="w-[2rem] h-[2rem] flex items-center justify-center rounded-full object-cover overflow-hidden border-1 border-gray-400">
              <Image
                src="/favicon.png"
                width={100}
                height={100}
                alt="PexelXus: Social meets VTU"
                priority
                className="w-[120%] "
              />
            </div>
            <h3 className="text-[1rem] font-semibold ml-2">
              Pexelxus
            </h3>
            {/* Desktop Nav */}
            <div className="space-x-4 hidden sm:flex md:flex items-center text-sm ml-12">
              <Link href="#features" >
                <motion.p
                  whileHover={{y: 2}}
                  whileTap={{y: [3, 0]}}
                  transition={{duration: 0.1}}
                className=" text-[15px]"
                >
                  Features
                </motion.p>
              </Link>
              <Link href="#how-it-works">
                <motion.p
                  whileHover={{y: 2}}
                  whileTap={{y: [3, 0]}}
                  transition={{duration: 0.1}}
                className=" text-[15px]"
                >
                  how-it-work
                </motion.p>
              </Link>
              <Link href="#faq">
                <motion.p
                  whileHover={{y: 2}}
                  whileTap={{y: [3, 0]}}
                  transition={{duration: 0.1}}
                className="font-md"
                >
                  FAQ
                </motion.p>
              </Link>
            </div> 
            {/* Mobile  */}
            {isOpenMenu && (
              <MobileNav 
                setIsOpenMenu={setIsOpenMenu}
              />
            )}
          </div>
          <div className='flex items-center space-x-4'>
            {/* Moile Nav Icon */}
            <motion.div 
              initial={{scale: 1}}
              whileTap={{scale: [1, 1.1, 1]}}
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="block sm:hidden ml-5 bg-gray-100 hover:bg-gray-200 transition-all duration-200 rounded-lg p-1 mr-4">
              <BiMenu className="text-2xl" />
            </motion.div>
            <Link href="#waitlistform">
              <motion.button 
                initial={{scale: 1}}
                whileTap={{scale: [0.9, 1.1, 1], backgroundColor: 'gray'}}
                transition={{duration: 0.5}}
              onClick={() => route.push("#waitlistform")}
              className="sticky top-4 right-3 px-4 py-3 flex items-center justify-center text-xs rounded-xl bg-gray-900 cursor-pointer hover:bg-gray-800 text-white font-medium transition-bg duration-200">
                <IoGiftOutline className="mr-2" />
                Join Waitlist
              </motion.button>
            </Link>
          </div>
        </ul>
      </motion.header>

  )
}

export default Header