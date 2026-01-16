import { motion } from "framer-motion";
import {
  FaJava,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
} from "react-icons/si";

export default function About() {
  return (
    <section className="min-h-screen pt-28 bg-gradient-to-b from-[#0b1220] to-[#0a0f1c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* TITLE */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-sky-400 mb-10 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Me
        </motion.h1>

        {/* ABOUT TEXT */}
        <motion.div
          className="max-w-3xl mb-16 space-y-4 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p>
            I am an ICT undergraduate specializing in software development and
            web application development. I am passionate about building modern,
            responsive, and user-friendly applications using current web
            technologies.
          </p>

          <p>
            I have hands-on experience in JavaScript, React, React Native, HTML,
            CSS, Tailwind CSS, and Git. I have worked on web and mobile
            applications implementing authentication, protected routes, and
            RESTful APIs.
          </p>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            Education
          </h2>

          <div className="bg-slate-800/90 rounded-xl p-6 shadow-lg w-full max-w-3xl">
            <p className="font-medium text-white">
              Bachelor of Information and Communication Technology (Hons)
            </p>
            <p className="text-gray-400">
              Uva Wellassa University of Sri Lanka
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Nov 2023 – Present
            </p>

            <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
              <li>Programming Fundamentals</li>
              <li>Web Technologies</li>
              <li>Database Systems</li>
            </ul>
          </div>
        </motion.div>

        {/* TECHNICAL SKILLS */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-6">
            Technical Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <Skill icon={<FaJava />} name="Java" />
            <Skill icon={<FaJs />} name="JavaScript" />
            <Skill icon={<FaReact />} name="React" />
            <Skill icon={<FaReact />} name="React Native" />
            <Skill icon={<FaHtml5 />} name="HTML5" />
            <Skill icon={<FaCss3Alt />} name="CSS3" />
            <Skill icon={<SiTailwindcss />} name="Tailwind CSS" />
            <Skill icon={<SiNodedotjs />} name="Node.js" />
            <Skill icon={<SiExpress />} name="Express.js" />
            <Skill icon={<SiMongodb />} name="MongoDB" />
            <Skill icon={<SiFirebase />} name="Firebase" />
            <Skill icon={<SiJsonwebtokens />} name="JWT Auth" />
            <Skill icon={<FaGitAlt />} name="Git & GitHub" />
            <Skill icon={<FaReact />} name="REST APIs" />
          </div>
        </motion.div>

        {/* CAREER OBJECTIVE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            Career Objective
          </h2>

          <p className="text-gray-400 max-w-3xl">
            I am seeking a Software Engineering or Web Development internship
            where I can apply my technical skills, gain real-world industry
            experience, and contribute to meaningful projects in a production
            environment.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

/* SKILL CARD COMPONENT */
function Skill({ icon, name }) {
  return (
    <div className="bg-slate-800/90 rounded-xl p-4 flex flex-col items-center gap-2 shadow-lg hover:scale-105 transition">
      <div className="text-3xl text-sky-400">{icon}</div>
      <p className="text-sm text-gray-300">{name}</p>
    </div>
  );
}

