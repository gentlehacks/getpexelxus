"use client";
import Link from "next/link";
import { GoMoveToTop } from "react-icons/go";


const ScrollTopIcon = () => {
  return (
    <Link href="#header" className="fixed bottom-6 right-5 sm:right-10 w-[2.5rem] h-[2.5rem] sm:w-[3rem] sm:h-[3rem] bg-purple-500 flex items-center justify-center rounded-full shadow-lg transition-all duration-200 hover:bg-purple-600">
      <GoMoveToTop />
    </Link>
  )
}

export default ScrollTopIcon