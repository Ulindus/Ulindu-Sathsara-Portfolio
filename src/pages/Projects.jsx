import { useEffect, useState } from "react";

// Demo videos
import travelDemo from "../assets/videos/travel-demo.mp4";
import quickQuizDemo from "../assets/videos/quick-quiz.mp4";
import hospitalDemo from "../assets/videos/hospital-video.mp4";

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState(null);

  // prevent background scroll when modal open
  useEffect(() => {
    if (activeVideo) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => (document.body.style.overflow = "auto");
  }, [activeVideo]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0b1220] to-[#0a0f1c] pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-sky-400 mb-12 text-center">
          Projects
        </h2>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* TRAVEL PROJECT */}
          <div className="bg-slate-800/90 rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-3">
              Travel Web Application
            </h3>

            <p className="text-gray-400 mb-6">
              A responsive web application for browsing destinations and managing
              bookings with authentication and protected routes.
            </p>

            {/* Buttons responsive */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setActiveVideo(travelDemo)}
                className="bg-sky-500 hover:bg-sky-600 text-black px-5 py-2 rounded-lg font-medium transition text-center"
              >
                Demo Video
              </button>

              <a
                href="https://github.com/Ulindus/travel-web-application.git"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black px-5 py-2 rounded-lg font-medium transition text-center"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* QUICK QUIZ PROJECT */}
          <div className="bg-slate-800/90 rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-3">
              Quick-Quiz Application
            </h3>

            <p className="text-gray-400 mb-6">
              A fast and interactive quiz application designed for quick
              assessments with real-time scoring and a clean user interface.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setActiveVideo(quickQuizDemo)}
                className="bg-sky-500 hover:bg-sky-600 text-black px-5 py-2 rounded-lg font-medium transition text-center"
              >
                Demo Video
              </button>

              <a
                href="https://github.com/Nisal-Kawshalya/Quick-Quiz.git"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black px-5 py-2 rounded-lg font-medium transition text-center"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* HOSPITAL PROJECT */}
          <div className="bg-slate-800/90 rounded-xl p-8 shadow-lg md:col-span-2">
            <h3 className="text-xl font-semibold mb-3">
              Hospital Appointment & Patient Management System
            </h3>

            <p className="text-gray-400 mb-6">
              A comprehensive hospital management system that handles patient
              records, doctor schedules, and appointment bookings with secure
              data management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setActiveVideo(hospitalDemo)}
                className="bg-sky-500 hover:bg-sky-600 text-black px-5 py-2 rounded-lg font-medium transition text-center"
              >
                Demo Video
              </button>

              <a
                href="https://github.com/Ulindus/Hospital-Appointment-and-Patient-Management-System.git"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black px-5 py-2 rounded-lg font-medium transition text-center"
              >
                GitHub
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveVideo(null)} // click outside closes
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking video
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-lg"
            >
              ✕ Close
            </button>

            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
