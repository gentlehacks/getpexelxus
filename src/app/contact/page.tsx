import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 py-16 md:px-20">
      {/* Header */}
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Have questions or want to partner with us? We’d love to hear from you.
          Fill out the form below or connect with us on social media.
        </p>
      </section>

      {/* Contact Form */}
      <section className="w-[100%] max-w-3xl mx-auto mt-12 bg-white shadow-lg rounded-2xl py-8 px-5">
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Type your message..."
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Social Media */}
      <section className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Connect With Us</h2>
        <div className="flex justify-center gap-6">
          <Link
            href="https://www.x.com/salihuadamu4678"
            target="_blank"
            className="text-gray-600 hover:text-blue-500 text-2xl transition"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://www.instagram.com/gent.lemanxus"
            target="_blank"
            className="text-gray-600 hover:text-pink-500 text-2xl transition"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.linkedin.com/in/salihu-adamu-3b9b97290"
            target="_blank"
            className="text-gray-600 hover:text-blue-700 text-2xl transition"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61575434355333"
            target="_blank"
            className="text-gray-600 hover:text-blue-600 text-2xl transition"
          >
            <FaFacebook />
          </Link>
        </div>
      </section>
    </main>
  );
}
