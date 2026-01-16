import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Web Development",
      desc: "Building modern, responsive, and scalable web applications using React and modern web technologies.",
      path: "/services/web-development",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      desc: "Developing cross-platform mobile applications with smooth UI and real-world functionality.",
      path: "/services/mobile-app-development",
      icon: "📱",
    },
    {
      title: "UI / UX Design",
      desc: "Designing clean, user-friendly interfaces focused on usability and great user experience.",
      path: "/services/ui-ux-design",
      icon: "🎨",
    },
  ];

  return (
    <section className="min-h-screen pt-28 bg-gradient-to-b from-[#0b1220] to-[#0a0f1c] flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-sky-400 mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What I Can Do
        </motion.h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14 px-2">
          I focus on building high-quality digital solutions with modern
          technologies, clean code, and great user experience.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-slate-800/90 rounded-xl p-7 sm:p-8 shadow-lg text-center"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {service.desc}
              </p>

              <button
                onClick={() => navigate(service.path)}
                className="w-full sm:w-auto px-5 py-2 bg-sky-500 text-black font-medium rounded-lg hover:bg-sky-400 transition"
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
