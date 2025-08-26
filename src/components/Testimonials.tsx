"use client"
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {

  const testimonials = [
    {
      id: 1,
      image: "/aliyu-suleiman.jpg",
      name: "Aliyu Suleiman",
      address: "Niger state",
      comment: "I sent airtime to my babe, she smiled like I bought her ice cream 😂",
      category: "Graphic designer"
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
      comment: "The cashback is small-small, but e dey show!",
      category: "Student"
    },
    {
      id: 4,
      image: "/lanre.jpg",
      name: "Lanre Tobi",
      address: "Kano",
      comment: "I just got free 200MB because my guy gifted me airtime 😂🔥",
      category: "Nurse"
    },
    {
      id: 5,
      image: "/desola.jpg",
      name: "Densola",
      address: "Lagos",
      comment: "Paying my NEPA bill never felt this easy.",
      category: "Software Developer"
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center mt-[10rem]">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-semibold">
        What Early Users <span className="border-b-2 border-blue-600"> Say </span>
      </h1>

      {/* Social Proofs */}
      <div className="w-full flex flex-col items-center justify-center gap-12 md:gap-15  mt-[4rem] "
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
        </div>


    </div>
  )
}

export default Testimonials