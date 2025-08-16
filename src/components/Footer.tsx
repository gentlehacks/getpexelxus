"use client"
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center p-4 bg-gray-900 text-gray-100 bg-opacity-[90] border-t-1 border-gray-300 mt-[12rem]">
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
      <p className="text-center text-[0.9rem] sm: sm:text-md md:text-md lg:text-1xl sm:text-[0.9rem] md:text-[1rem] lg:text-[1rem] text-gray-100 mt-[3rem]">
        Join 5,000+ Nigerians Waitlist and Enjoy seamless VTU + Social App in one place, with unlimited engagement!
      </p>
      <div className="flex -tems-center justify-center mt-15 mb-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[0.9rem]">Follow Us:</p>
          <div className="flex items-center justify-center gap-3 mt-3">
            <Link href="https://www.x.com/salihuadamu4678">
              <FaSquareXTwitter className="relative text-[1.5rem] hover:text-pink-500 hover:mb-1 transition-all duration-200 cursor-pointer" />
            </Link>
            <Link href="https://www.instagram.com/gent.lemanxus">
              <FaSquareInstagram className="relative text-[1.5rem] hover:text-pink-500 hover:mb-1 transition-all duration-200 cursor-pointer" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61575434355333">
              <FaFacebookSquare className="relative text-[1.5rem] hover:text-pink-500 hover:mb-1 transition-all duration-200 cursor-pointer" />
            </Link>
            <Link href="https://www.linkedin.com/in/salihu-adamu-3b9b97290">
              <FaLinkedin className="relative text-[1.5rem] hover:text-pink-500 hover:mb-1 transition-all duration-200 cursor-pointer" />
            </Link>
            
            
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ml-[5rem]">
          <p className="text-[0.9rem]">Contact:</p>
          <Link href="support@pexelxus.com">
            <p className="text-[0.9rem] text-gray-200 mt-3">
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