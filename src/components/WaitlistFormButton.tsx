"use client";
import {motion} from "framer-motion";

interface Props {
  isSubmitting: boolean;
};

const WaitlistFormButton = ({
  isSubmitting,
}: Props) => {


  return (
    <motion.button 
      initial={{opacity: 0, y: 10}}
      whileInView={{y: 0, opacity: 1}}
      whileTap={{y: [2, 0]}}
      whileHover={{y: 2}}
      transition={{duration: 0.2, type: 'spring', stiffness: 200}}
    type="submit"
    disabled={isSubmitting}
    className={`w-full flex items-center justify-center px-4 py-3  text-white font-medium rounded-lg cursor-pointer overflow-hidden mt-2
      ${isSubmitting ? 'bg-blue-400 hover:bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}
    `}
    >
      {isSubmitting ? 'Submitting...' : 'Join Now'}
    </motion.button>
  )
}

export default WaitlistFormButton