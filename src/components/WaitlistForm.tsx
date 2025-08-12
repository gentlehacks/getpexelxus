"use client"
import { motion } from "framer-motion";
import React, { useState } from 'react';
import { FaUsers } from 'react-icons/fa6';
import { HiBadgeCheck } from "react-icons/hi";
import WaitlistInput from "./WaitlistInput";
import WaitlistFormButton from "./WaitlistFormButton";
import { useRouter } from "next/navigation";



const WaitlistForm = () => {

  const route = useRouter();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const errorName = "";
  const errorEmail = "";
  const [message, setMessage] = useState('')


  const [isFocusedName, setIsFocusedName] = useState<boolean>(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const shouldNameFloat = isFocusedName || name.length > 0;
  const shouldEmailFloat = isFocusedEmail || email.length > 0;
  

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
  setIsSubmitting(true)
  setMessage("")
  try {
    const res = await fetch('/api/join-waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email })
    })

    const data = await res.json()
    setIsSubmitting(false)
    if (!res.ok) {
      throw new Error(data.message || 'Something went wrong')
    }
    if (res.status === 409) {
      setMessage("⚠ You already joined the waitlist.")
    }

    setMessage('🎉 Successfully joined the waitlist, check your email now!')
    setName('')
    setEmail('')
    setTimeout(() => route.push("/#faq"), 8000);
  } catch (error) {
    if (error instanceof Error) {
      setMessage(`❌ ${error.message}`)
    }
    setIsSubmitting(false)
  }
};


  return (
    <div 
      id="waitlistform"
    className='w-full flex flex-col items-center justify-center mt-[8rem]'>
      <motion.div 
        initial={{opacity: 0, scale: 0.8}}
        whileInView={{opacity: 1, scale: [0.8, 1]}}
        transition={{duration: 1, type: 'spring', stiffness: 200}}
        viewport={{ 
        margin: "0px 0px -25% 0px" // Only check bottom 25%
        }}
      className="flex flex-col items-center justify-center">
        <div className="flex items-center">
          <motion.h1 
            initial={{opacity: 0, scale: 0.8}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
            viewport={{ 
            margin: "0px 0px -25% 0px" // Only check bottom 25%
            }}
          className="text-2xl sm:text-3xl font-semibold inline-block">
            7,310
          </motion.h1>
          <FaUsers className="ml-2 text-xl text-purple-400" />
        </div>
        <p className="text-md text-gray-900">Nigerians already Joined</p>
      </motion.div>

      <motion.form  onSubmit={handleSubmit}
        initial={{opacity: 0, y: '150px'}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1, ease: 'easeOut'}}
      className="w-[100%] sm:w-[95%] md:w-[40rem] lg:w-[40rem] flex flex-col items-center justify-center p-4 pt-6 bg-gray-100 rounded-xl shadow-lg mt-[7rem]">
        <h1 className="text-lg sm:text-lg md:text-xl lg:text-xl font-semibold">
          Be the First to 
          <span className="border-b-1 border-yellow-300"> Experience </span> PexelXUS!
        </h1>

        <div className="w-full flex flex-col mt-[4rem]">
          {/* name */}
          <WaitlistInput 
            id='name'
            type="text"
            label="full name"
            icon={"user"}
            value={name}
            setValue={setName}
            setIsFocused={setIsFocusedName}
            shouldFloat={shouldNameFloat}
            error={errorName}
          />
          {/* Email */}
          <WaitlistInput 
            id='email'
            type="email"
            label="email address"
            icon={"email"}
            value={email}
            setValue={setEmail}
            setIsFocused={setIsFocusedEmail}
            shouldFloat={shouldEmailFloat}
            error={errorEmail}
          />
          
          {/* onChange={e => setForm({ ...form, name: e.target.value })} */}
          {/*  */}

          {/* Whatsapp number */}
          {/* <WaitlistInput 
            id='whatsapp'
            type="tel"
            label="whatsapp number"
            icon={"phone"}
            value={phone}
            setValue={setPhone}
            setIsFocused={setIsFocusedWhatsapp}
            shouldFloat={shouldWhatsappFloat}
            error={errorWhatsapp}
          /> */}
          <p className="mb-3 mt-[-3px]">{message}</p>
          <WaitlistFormButton 
            isSubmitting={isSubmitting}
          />

          {/* Trust badge */}
          <div className="flex items-center justify-center w-full mt-6 mb-4">
            <div className="w-fit px-2 py-1 flex items-center justify-center mt-8">
              <HiBadgeCheck className="text-blue-500 text-[1.2rem] mr-1" />
              <p className="text-sm">
                Joined by 5,000+ users in Nigeria
              </p>
            </div>
          </div>
          

        </div>
      </motion.form>
    </div>
  )
}

export default WaitlistForm