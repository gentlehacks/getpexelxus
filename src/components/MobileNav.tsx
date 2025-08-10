"use client"
import {motion, AnimatePresence} from "framer-motion";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";
import { IoGiftOutline } from "react-icons/io5";

interface MolbileNavProps {
  setIsOpenMenu: (isOpenMenu: boolean) => void;
};

const MobileNav = ({setIsOpenMenu}: MolbileNavProps) => {


  return (
    <AnimatePresence>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        onClick={() => setIsOpenMenu(false)}
      className="fixed w-full h-screen top-0  left-0 inset-0 z-20 bg-[rgba(0,0,0,0.4)]">
        <motion.div 
          initial={{opacity: 0, y: '-100px'}}
          animate={{opacity: [0, 0.1, 1], y: 0}}
          exit={{opacity: 0, y: '-100px'}}
          transition={{duration: 0.2,}}
          onClick={(e) => e.stopPropagation()}
        className="absolute top-0 left-0 pt-10 pb-20 w-[100%] h-screen flex sm:block md:hidden lg:hiddens flex-col space-y-1 bg-white rounded-b-xl border-b-1 border-gray-100 shadow-lg">
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2, delay: 0.2}}
          >
            <Link 
              href="#features"
              onClick={() => setIsOpenMenu(false)}
              className="w-full py-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition-all duration-200 mt-[2rem]"
            >Features</Link>
          </motion.div>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2, delay: 0.3}}
          >
            <Link 
              href="#how-it-works"
              onClick={() => setIsOpenMenu(false)}
              className="w-full py-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition-all duration-200"
            >How it works</Link>
          </motion.div>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2, delay: 0.4}}
          >
            <Link 
              href="#faq"
              onClick={() => setIsOpenMenu(false)}
              className="w-full py-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition-all duration-200"
            >FAQ</Link>
          </motion.div>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2, delay: 5}}
          >
            <Link 
              href="#waitlistform"
              onClick={() => setIsOpenMenu(false)}
              className="w-full py-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition-all duration-200"
            >
              <IoGiftOutline className="mr-3 text-lg text-blue-500" />
              Join Waitlist!
            </Link>
          </motion.div>
          <motion.div
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            whileTap={{scale: [0.8, 1.1, 1]}}
            exit={{opacity: 0, scale: 0.8}}
          onClick={() => setIsOpenMenu(false)}
          className="absolute top-6 left-6 flex items-center justify-center hover:text-gray-700 cursor-pointer"
          >
            <FaXmark className="text-3xl" />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default MobileNav