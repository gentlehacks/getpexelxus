"use client";
import {motion} from 'framer-motion';
import { FaEnvelope, FaUser } from 'react-icons/fa6';

interface WaitlistInputProps {
  id: string;
  type: string;
  label: string;
  icon: string;
  value: string;
  setValue: (value: string) => void;
  setIsFocused: (isFocused: boolean) => void;
  shouldFloat: boolean;
  error: string;
}

const WaitlistInput = ({
  id,
  type,
  label,
  icon,
  value,
  setValue,
  setIsFocused,
  shouldFloat,
  error,
}: WaitlistInputProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => 
  {
    setValue(e.target.value)
  }

  return (
    <div className="w-full flex flex-col mb-5">
      <div className="relative flex items-center justify-center ">
        <input 
          type={type}
          id={id} 
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder=" "
          required
          className="w-full px-4 pl-10 py-3 rounded-lg border-1 border-purple-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "
        />
        <motion.label 
          htmlFor={id}
        className='absolute flex items-center px-[3px] justify-center left-10 text-md text-left text-gray-800 bg-gray-100 w-fit-content pointer-events-none'
          initial={{y: 0, scale: 1}}
          animate={{
            y: shouldFloat 
            ? -26 : 0, 
            scale: shouldFloat 
            ? 0.85 : 1 
          }}
          transition={{duration: 1, type: "spring", damping: 15, stiffness: 300}}
        >
          {label}
        </motion.label>
        <div className="absolute left-4">
          
          {icon === "user" ? (
            <FaUser />
          ) : icon === "email" && (
            <FaEnvelope />
          )}
        </div>
      </div>
      {error && (
        <div className="w-full flex items-center mt-2">
          <p className="text-sm text-red-300">{error}</p>
        </div>
      )}
    </div>
  )
}

export default WaitlistInput