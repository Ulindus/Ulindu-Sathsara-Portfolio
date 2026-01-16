import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function WebDevelopment() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen pt-28 bg-gradient-to-b from-[#0b1220] to-[#0a0f1c]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 w-full">

        {/* TITLE */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-sky-400 mb-6 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Web Development
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          className="text-gray-400 mb-12 max-w-2xl mx-auto md:mx-0 text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I develop modern, scalable, and high-performance web applications
          using industry-standard technologies with a strong focus on clean
          architecture, security, and user experience.
        </motion.p>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* TECH STACK */}
          <motion.div
            className="bg-slate-800/90 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-xl font-semibold text-white mb-4">
              Tech Stack
            </h2>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• React</li>
              <li>• Node.js</li>
              <li>• ASP.NET</li>
              <li>• MongoDB</li>
              <li>• RESTful APIs</li>
              <li>• JWT Authentication</li>
            </ul>
          </motion.div>

          {/* FEATURES */}
          <motion.div
            className="bg-slate-800/90 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-xl font-semibold text-white mb-4">
              Key Features
            </h2>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Fully responsive design</li>
              <li>• Secure authentication & authorization</li>
              <li>• SEO-friendly architecture</li>
              <li>• High performance & scalability</li>
              <li>• Clean and maintainable code</li>
            </ul>
          </motion.div>

        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={() => navigate("/contact")}
            className="w-full sm:w-auto px-6 py-3 bg-sky-500 text-black font-medium rounded-lg hover:bg-sky-400 transition"
          >
            Contact Me
          </button>

          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto px-6 py-3 border border-sky-400 text-sky-400 rounded-lg hover:bg-sky-400 hover:text-black transition"
          >
            ← Back
          </button>
        </div>

      </div>
    </section>
  );
}
