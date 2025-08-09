"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

type CardProps = {
  id: number;
  image: string;
  name: string,
  address: string,
  comment: string,
  category: string;
}

const TestimonialCard = ({
  id,
  image,
  name,
  address,
  comment,
  category,
}: CardProps) => {
  return (
    <AnimatePresence>
      <motion.div 
        key={id}
        initial={{opacity: 0, scale: 0.8}}
        whileInView={{opacity: 1, scale: 1}}
        exit={{opacity: 0, scale: 0.8}}
        transition={{duration: 0.5}}
        className="w-[20rem] sm:w-[20rem] md:w-[22rem] lg:w-[25rem] flex flex-col bg-white border-1 border-gray-200 p-4 rounded-lg shadow-md mb-[2.5rem] sm:mb-0"
      >
        <div className="flex items-center gap-[3px]">
          {[1,2,3,4,5].map((_, id) => (
            <FaStar 
              key={id}
              className="text-md text-yellow-400"
            />
          ))}
        </div>
        <div className="mt-3">
          <p className="text-[1rem]">
            {comment}
          </p>
        </div>
        <div className="flex items-center w-full justify-between mt-3">
          <div className="flex items-center">
            <div className="w-[2.5rem] h-[2.5rem] rounded-full border-2 border-gray-300 overflow-hidden flex items-center justify-center">
              <Image
                src={image} 
                alt={name}
                width={100}
                height={100}
                priority
              />
            </div>
            <div className="ml-3 flex items-center">
              <p className="text-[0.9rem] font-medium text-gray-900">
                @<span className="">{name}</span> -
                <span className="ml-2">{address}</span>
              </p>
            </div>
          </div>
          <p className="text-[0.7rem] text-gray-800">
            {category}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default TestimonialCard