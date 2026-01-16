import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_khcn91o",      // Service ID
        "template_r8bo4y8",     // Template ID
        form.current,
        "x5hTtyOIh8XmI_BSf"     // Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0b1220] to-[#0a0f1c] pt-28 flex items-start">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-sky-400 mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Get in Touch
            </h3>

            <p className="mb-6 text-gray-400 leading-relaxed">
              Feel free to contact me for internships, projects, or collaboration.
              I’m always open to discussing new opportunities.
            </p>

            <ul className="space-y-4 text-sm text-gray-300">
              <li>📧 ulindusathsara@gmail.com</li>
              <li>📞 +94 71 190 8004</li>
              <li>📍 Sri Lanka</li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="bg-slate-800/90 p-6 rounded-xl space-y-4 shadow-lg backdrop-blur-sm"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded bg-slate-900 border border-slate-700 
              focus:outline-none focus:border-sky-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded bg-slate-900 border border-slate-700 
              focus:outline-none focus:border-sky-400"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 rounded bg-slate-900 border border-slate-700 
              focus:outline-none focus:border-sky-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-sky-400 hover:bg-sky-300 text-black font-semibold 
              py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
