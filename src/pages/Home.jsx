import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profile from "../Assets/profile.jpg";


export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0b1220] to-[#0a0f1c] pt-24 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Hi, I’m <span className="text-sky-400">Ulindu Sathsara</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-gray-300">
              Software Engineering Undergraduate <br className="hidden sm:block" />
              Passionate about building modern web applications
            </p>

            <p className="mt-4 text-sm text-gray-400">
              React • Java • JavaScript • Tailwind • Git
            </p>

            {/* Buttons responsive */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/projects"
                className="px-6 py-3 bg-sky-500 text-black font-semibold rounded-lg hover:bg-sky-400 transition text-center"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 border border-sky-400 text-sky-400 rounded-lg hover:bg-sky-400 hover:text-black transition text-center"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-sky-400 blur-3xl opacity-20 rounded-full"></div>

              <img
                src={profile}
                alt="Ulindu Sathsara"
                className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full object-cover border-4 border-sky-400 shadow-xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
