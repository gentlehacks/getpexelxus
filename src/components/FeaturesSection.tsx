"use client"
import {motion} from "framer-motion"
import Image from "next/image";

const FeaturesVariants = {
  initial: {opacity: 0, y: "70px"},
  animate: {opacity: 1, y: 0},
}

const FeaturesSection = () => {
  return (
    <div 
      id="features"
    className="mt-[8rem] w-full overflow-x-hidden">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-[5rem]">
          Features
        </h1>
        <motion.div className="w-[90%] flex flex-col items-center justify-center pb-5"
        >
          {/* Feature 01 */}
          <motion.div 
            variants={FeaturesVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ 
             margin: "0px 0px -25% 0px" // Only check bottom 25%
            }}
            transition={{duration: 0.6, ease: "easeOut"}}
          className="flex flex-col items-center p-6 py-10 w-[93%] sm:w-[80%] md:w-[30rem] lg:w-[35rem] bg-blue-400 rounded-xl shadow-sm items-center justify-center hover:rounded-b-none hover:border-b-4 hover:border-blue-600 transition-all duration-200 mb-[6rem]">
            <Image
              src={"/all-network.svg"}
              alt="all-network"
              width={100}
              height={100}
              priority
              className="w-[80%]"
            />
            <h1 className="text-lg text-gray-900 font-semibold mt-[4rem]">
              Lightning Fast Airtime and Data
            </h1>
            <p className="text-md text-gray-700 mt-2 text-center">
              Purchase MTN/Airtel/Glo airtime in 10 seconds.
            </p>
          </motion.div>
          {/* Feature 02 */}
          <motion.div 
            variants={FeaturesVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ 
             margin: "0px 0px -25% 0px" // Only check bottom 25%
            }}
            transition={{duration: 0.5, ease: "easeOut"}}
          className="flex flex-col items-center p-6 py-10 w-[93%] sm:w-[80%] md:w-[30rem] lg:w-[35rem] bg-blue-400 rounded-xl shadow-sm items-center justify-center hover:rounded-b-none hover:border-b-4 hover:border-blue-600 transition-all duration-200 mb-[6rem]">
            <Image
              src={"/social.svg"}
              alt="social-illustrate"
              width={100}
              height={100}
              priority
              className="w-[60%]"
            />
            <h1 className="text-lg text-gray-900 font-semibold mt-[4rem]">
              Social Features
            </h1>
            <p className="text-md text-gray-700 mt-2 text-center">
              Post updates, share gifts with friends and family
            </p>
          </motion.div>
          {/* Feature 03 */}
          <motion.div 
            variants={FeaturesVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ 
             margin: "0px 0px -25% 0px" // Only check bottom 25%
            }}
            transition={{duration: 0.6, ease: "easeOut"}}
          className="flex flex-col items-center p-6 py-10 w-[93%] sm:w-[80%] md:w-[30rem] lg:w-[35rem] bg-blue-400 rounded-xl shadow-sm items-center justify-center hover:rounded-b-none hover:border-b-4 hover:border-blue-600 transition-all duration-200 mb-[6rem]">
            <Image
              src={"/security.svg"}
              alt="security-illustrate"
              width={100}
              height={100}
              priority
              className="w-[60%]"
            />
            <h1 className="text-lg text-gray-900 font-semibold mt-[4rem]">
              Secure & Fast
            </h1>
            <p className="text-md text-gray-700 mt-2 text-center">
             Sucure by Paystack, Complaint with PCI - DSS standards
            </p>
          </motion.div>
          
        </motion.div>
      </div>
    </div>
  )
}

export default FeaturesSection