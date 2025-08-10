"use client"
import {motion} from "framer-motion"
import { LuUserRound } from "react-icons/lu";
import { LuKeyRound } from "react-icons/lu";
import { MdOutlineCelebration } from "react-icons/md";

const StepsVariants = {
  initial: {opacity: 0, y: "100px"},
  animate: {opacity: 1, y: "0px"},
}

const HowItWorkSection = () => {
  return (
    <div 
      id="how-it-works"
    className="w-full flex items-center justify-center flex-col mt-[10rem] overflow-hidden">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
        How to get started
      </h1>
      <div className="w-full flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-center lg:gap-2 mt-[5rem]">
        {/* Step 01 */}
        <motion.div className="w-[70%] flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-center"
          variants={StepsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ 
            margin: "0px 0px -15% 0px" // Only check bottom 25%
            }}
            transition={{duration: 0.5, ease: "easeOut"}}
        > 
          <div className="flex flex-col items-center justify-center">
            <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-blue-500 flex items-center justify-center"> 
              <LuUserRound className="text-white" />
            </div>
            <h1 className="text-lg font-semibold mt-4">
              Join Waitlist
            </h1>
            <p className="text-md text-center text-gray-800 mt-2">
              Join the Waitlist Now for early access!
            </p>
          </div>
          
          <div className="flex flex-col items-center mt-[1.5rem] mb-[1.5rem]">
            <div className="w-[3px] h-[6rem] bg-gray-400 rounded-xl lg:rotate-[90deg]" />
          </div>
        </motion.div>
        {/* Step 02 */}
        <motion.div className="w-[70%] flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-center"
          variants={StepsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ 
            margin: "0px 0px -15% 0px" // Only check bottom 25%
            }}
            transition={{duration: 0.5, ease: "easeOut"}}
        > 
          <div className="flex flex-col items-center justify-center">
            <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-blue-500 flex items-center justify-center"> 
               <LuKeyRound className="text-white" />
            </div>
            <h1 className="text-lg font-semibold mt-4">
              Get VIP Access
            </h1>
            <p className="text-md text-center text-gray-800 mt-2">
              Received app download link via your Email address
            </p>
          </div>
          
          <div className="flex flex-col items-center mt-[1.5rem] mb-[1.5rem]">
            <div className="w-[3px] h-[6rem] bg-gray-400 rounded-xl lg:rotate-[90deg]" />
          </div>
        </motion.div>
        {/* Step 03 */}
        <motion.div className="w-[70%] flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-center"
          variants={StepsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ 
            margin: "0px 0px -15% 0px" // Only check bottom 25%
            }}
            transition={{duration: 0.5, ease: "easeOut"}}
        > 
          <div className="flex flex-col items-center justify-center">
            <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-blue-500 flex items-center justify-center"> 
               <MdOutlineCelebration className="text-white" />
            </div>
            <h1 className="text-lg font-semibold mt-4">
              Recharge & Connect
            </h1>
            <p className="text-md text-center text-gray-800 mt-2">
              Buy airtime or data in one tap and connect with friends easily
            </p>
          </div>
        </motion.div>
        
      </div>
    </div>
  )
}

export default HowItWorkSection