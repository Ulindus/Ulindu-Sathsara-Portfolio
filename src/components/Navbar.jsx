import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b1220]/90 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

        {/* LOGO */}
        <Link to="/" className="text-sky-400 text-xl font-semibold">
          Ulindu Sathsara
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 text-gray-300 font-medium">
          <Link to="/" className="hover:text-sky-400 transition">Home</Link>
          <Link to="/about" className="hover:text-sky-400 transition">About</Link>
          <Link to="/skills" className="hover:text-sky-400 transition">Skills</Link>
          <Link to="/projects" className="hover:text-sky-400 transition">Projects</Link>
          <Link to="/services" className="hover:text-sky-400 transition">Services</Link>
          <Link to="/contact" className="hover:text-sky-400 transition">Contact</Link>
        </div>

        {/* HAMBURGER BUTTON (Mobile) */}
        <button 
          className="md:hidden text-gray-300 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0b1220] px-6 py-4 space-y-4 text-gray-300 font-medium">
          <Link onClick={() => setOpen(false)} to="/" className="block hover:text-sky-400">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about" className="block hover:text-sky-400">About</Link>
          <Link onClick={() => setOpen(false)} to="/skills" className="block hover:text-sky-400">Skills</Link>
          <Link onClick={() => setOpen(false)} to="/projects" className="block hover:text-sky-400">Projects</Link>
          <Link onClick={() => setOpen(false)} to="/services" className="block hover:text-sky-400">Services</Link>
          <Link onClick={() => setOpen(false)} to="/contact" className="block hover:text-sky-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}
