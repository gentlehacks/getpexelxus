"use client"
import {motion, useAnimationControls} from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {

  const controls = useAnimationControls()

  const testimonials = [
    {
      id: 1,
      image: "/aliyu-suleiman.jpg",
      name: "Aliyu Suleiman",
      address: "Niger state",
      comment: "Before pexelXus, I wasted 30 mins daily switching between WhatsApp and Opay. Now i buy airtime and connect to others. Game Changer!",
      category: "Student"
    },
    {
      id: 2,
      image: "/james.jpg",
      name: "James",
      address: "Lagos",
      comment: "Bought data at 2AM for my assignment. Delivery took 10 seconds - no lies!",
      category: "Freelancer"
    },
    {
      id: 3,
      image: "/mustapha.jpg",
      name: "Mustapha",
      address: "Niger state",
      comment: "I use MTN and Glo. PexelXus works for both, and i don't need seperate apps anymore. Thank God!",
      category: "Student"
    },
    {
      id: 4,
      image: "/lanre.jpg",
      name: "Lanre Tobi",
      address: "Kano",
      comment: "Between work and kids, I forgot to recharge. Now i buy airtime while checking family updates. Lifesaver!",
      category: "Nurse"
    },
    {
      id: 5,
      image: "/desola.jpg",
      name: "Densola",
      address: "Lagos",
      comment: "Finally, a Nigerian app that get UX right, Smooth UI, instant transactions - no 'pending' wahala.",
      category: "Software Developer"
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center mt-[8rem] overflow-hidden">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-semibold">
        Social Proof
      </h1>

      {/* Social Proof */}
      <motion.div className="flex items-center justify-center space-x-[3rem] mt-[5rem]"
        initial={{x: "90%"}}
        animate={{x: ["90%", "-90%"]}}
        transition={{duration: 70, repeat: Infinity, repeatType: "loop", ease: "linear"}}
        onMouseEnter={() => controls.stop()}
        onTapStart={() => controls.stop()}
        onMouseLeave={() => controls.start({
          transition: {repeat: Infinity}
        })}
      >
        {/* Cards */}
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.id}
              id={t.id}
              image={t.image}
              name={t.name}
              address={t.address}
              comment={t.comment}
              category={t.category}
            />
          ))}
        </motion.div>


    </div>
  )
}

export default Testimonials