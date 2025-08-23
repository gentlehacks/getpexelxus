"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { CgGift } from "react-icons/cg";

const About = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 py-16 md:px-20">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About PexelXus</h1>
        <p className="text-lg text-gray-600">
          PexelXus is a Nigerian startup where you can{" "}
          <span className="font-semibold ">
            buy airtime, data, gift friends
          </span>{" "}
          and also{" "}
          <span className="font-semibold ">
            share content
          </span>
          . We are building a platform that’s simple, reliable, and made for
          Nigerians.
        </p>
      </section>

      {/* Founder Section */}
      <section className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div 
          whileHover={{skewX: '2deg', skewY: '2deg'}}
          transition={{type: 'spring', stiffness: 300}}
        className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg border-3 border-gray-400">
          <Image
            src="/aliyu-suleiman.jpg" 
            alt="Founder"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
        <motion.div 
          whileHover={{bottom: 3}}
          transition={{type: 'spring', stiffness: 300}}
        className="p-4 py-8 bg-blue-500 text-gray-100 rounded-2xl">
          <h2 className="text-2xl font-semibold bg-blue-400 rounded-xl p-1 px-2 w-fit">Meet the Founder</h2>
          <p className="text-gray-100 mt-8">
            Hi, I’m <span className="font-bold text-gray-100">Salihu Adamu</span>, the founder
            of PexelXus. I started this journey to make digital transactions
            easier for Nigerians — giving you the power to connect, gift, and
            share with simplicity and trust.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-[1rem] mt-5">
            <Link href="https://www.github.com/gentlehacks">
              <p className="text-blue-800 hover:text-blue-900">Github</p>
            </Link>
            <Link href="https://www.linkedin.com/in/salihu-adamu-3b9b97290">
              <p className="text-blue-800 hover:text-blue-900">LinkeIn</p>
            </Link>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-12">
            <Link
              href="/#waitlistform"
              className="px-6 py-3 flex items-center justify-center rounded-xl bg-gray-900 text-white font-medium shadow hover:bg-gray-800 transition"
            >
              Join Waitlist
            </Link>
            <Link
              href="/donate"
              className="px-6 py-3 flex items-center justify-center rounded-xl border-2 border-gray-900 text-gray-900 font-medium shadow hover:border-gray-800 transition"
            >
              <CgGift className="mr-2 text-xl" />
              Donate
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Vision / Mission */}
      <section className="max-w-4xl mx-auto mt-20 text-center">
        <div className="w-ful flex items-center justify-center">
          <h2 className="text-2xl font-semibold p-1 px-4 rounded-xl bg-gray-300 w-fit">Our Vision</h2>
        </div>
        
        <p className="text-gray-600 mt-4">
          At PexelXus, we believe in making technology more{" "}
          <span className="font-semibold">accessible</span> and{" "}
          <span className="font-semibold">empowering</span> for
          everyone. Our mission is to connect people through simple, secure, and
          fun digital experiences.
        </p>
      </section>
    </main>
  );
}

export default About