"use client"
import {motion} from "framer-motion";
import Image from "next/image";
import {useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { CgGift } from "react-icons/cg";
import { BiMenu } from "react-icons/bi";

const Header = () => {

  const route = useRouter()
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/contact" }
  ]

  return (
    <motion.header id="header"
      initial={{y: "-70px"}}
      animate={{y: 0}}
      transition={{duration: 0.7, ease: "easeInOut"}}
    className="sticky top-0 z-50 w-full flex items-center justify-center py-3 px-3 sm:px-[2rem] bg-[#b3dfd2] shadow-sm">
        <ul className="w-full flex items-center justify-between">
          <div className="flex items-center">
            {/* Pexelxus - Logo */}
            <Link href="#" className="flex items-center">
              <div className="w-[2.2rem] h-[2.2rem] flex items-center justify-center rounded-full object-cover overflow-hidden border-1 border-gray-400">
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
            </Link>
            
            

            {/* Mobile  */}
            {isOpenMenu && (
              <MobileNav 
                setIsOpenMenu={setIsOpenMenu}
              />
            )}
          </div>
          {/* Desktop Nav */}
          <nav className="hidden gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group"
                >
                  {/* Text */}
                  <span
                    className={`transition-colors duration-300 ${
                      isActive ? "text-blue-500" : "group-hover:text-blue-500"
                    }`}
                  >
                    {link.name}
                  </span>

                  {/* Underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              )
            })}
          </nav>
          <div className='flex items-center space-x-4'>
            {/* Moile Nav Icon */}
            <motion.div 
              initial={{scale: 1}}
              whileTap={{scale: [1, 1.1, 1]}}
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="block sm:hidden ml-5 bg-gray-100 hover:bg-gray-200 transition-all duration-200 rounded-lg p-1 mr-4">
              <BiMenu className="text-[1.7rem]" />
            </motion.div>
            <div className="hidden md:flex">
              <Link href="/donate">
                <motion.button 
                  initial={{scale: 1}}
                  whileTap={{scale: [0.9, 1.1, 1], backgroundColor: 'gray'}}
                  transition={{duration: 0.5}}
                onClick={() => route.push("#waitlistform")}
                className="sticky top-4 right-3 px-6 py-3 hidden lg:flex items-center justify-center text-md rounded-full  border-2 border-gray-900 text-gray-900 cursor-pointer  font-medium transition-bg duration-200">
                  <CgGift className="mr-2 text-xl" />
                  Donate
                </motion.button>
              </Link>
              <Link href="#waitlistform">
                <motion.button 
                  initial={{scale: 1}}
                  whileTap={{scale: [0.9, 1.1, 1], backgroundColor: 'gray'}}
                  transition={{duration: 0.5}}
                onClick={() => route.push("#waitlistform")}
                className="sticky top-4 right-3 px-6 py-4 flex items-center justify-center text-md rounded-full bg-gray-900 cursor-pointer hover:bg-gray-800 text-white font-medium transition-bg duration-200 ml-3">
                  Join Waitlist
                </motion.button>
              </Link>
            </div>
          </div>
        </ul>
      </motion.header>

  )
}

export default Header