import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050b18] border-t border-slate-800 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">

        {/* Social Icons */}
        <div className="flex justify-center gap-5 sm:gap-6 mb-6">
          
          <a
            href="https://github.com/Ulindus"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full 
                       border border-emerald-400 text-emerald-400 
                       hover:bg-emerald-400 hover:text-black 
                       transition duration-300 shadow-lg"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/ulindu-sathsara-abeywickrama-173a41390/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full 
                       border border-emerald-400 text-emerald-400 
                       hover:bg-emerald-400 hover:text-black 
                       transition duration-300 shadow-lg"
          >
            <FaLinkedinIn size={20} />
          </a>

          <a
            href="mailto:ulindusathsara@gmail.com"
            aria-label="Email"
            className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full 
                       border border-emerald-400 text-emerald-400 
                       hover:bg-emerald-400 hover:text-black 
                       transition duration-300 shadow-lg"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
          © 2026{" "}
          <span className="text-white font-medium">
            Ulindu Sathsara
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
