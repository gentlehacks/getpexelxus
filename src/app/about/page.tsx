import Image from "next/image";
// import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 py-16 md:px-20">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About PexelXus</h1>
        <p className="text-lg text-gray-600">
          PexelXus is a Nigerian startup where you can{" "}
          <span className="font-semibold text-blue-600">
            buy airtime, data, gift friends
          </span>{" "}
          and also{" "}
          <span className="font-semibold text-blue-600">
            share content
          </span>
          . We are building a platform that’s simple, reliable, and made for
          Nigerians.
        </p>
      </section>

      {/* Founder Section */}
      <section className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/aliyu-suleiman.jpg" 
            alt="Founder"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Meet the Founder</h2>
          <p className="text-gray-700 mb-6">
            Hi, I’m <span className="font-bold">Salihu Adamu</span>, the founder
            of PexelXus. I started this journey to make digital transactions
            easier for Nigerians — giving you the power to connect, gift, and
            share with simplicity and trust.
          </p>

          {/* Actions */}
          <div className="flex gap-4">
            <Link
              href="/waitlist"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              Join Waitlist
            </Link>
            <Link
              href="/donate"
              className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-medium shadow hover:bg-blue-50 transition"
            >
              Donate
            </Link>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-600">
          At PexelXus, we believe in making technology more{" "}
          <span className="font-semibold text-blue-600">accessible</span> and{" "}
          <span className="font-semibold text-blue-600">empowering</span> for
          everyone. Our mission is to connect people through simple, secure, and
          fun digital experiences.
        </p>
      </section>
    </main>
  );
}

export default About