import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
  Sparkles,
  Code2,
  Layers3,
} from "lucide-react";

import { FaReact, FaPython, FaLaravel } from "react-icons/fa";

const technologies = [
  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-400",
    hover: "hover:border-cyan-400/30",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "text-yellow-400",
    hover: "hover:border-yellow-400/30",
  },
  {
    name: "Laravel",
    icon: FaLaravel,
    color: "text-red-400",
    hover: "hover:border-red-400/30",
  },
];

const stats = [
  { value: "4+", label: "Projects" },
  { value: "2", label: "Internships" },
  { value: "Full-Stack", label: "Development" },
  { value: "AI & ML", label: "Project Focus" },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen scroll-mt-20 items-center overflow-hidden bg-[#07070b] pt-24 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.15, 0.28, 0.15],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[110px] sm:h-96 sm:w-96"
        />

        <div className="absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-indigo-600/15 blur-[120px] sm:h-[28rem] sm:w-[28rem]" />

        <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Main content */}
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-10 lg:py-20">
        {/* Left content */}
        <div className="relative z-10 min-w-0">
          {/* Availability badge */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex max-w-full items-center gap-2.5 rounded-full border border-violet-400/20 bg-violet-500/[0.07] px-3.5 py-2 text-xs font-medium text-violet-200 backdrop-blur-xl sm:px-4 sm:text-sm"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>
            MCA Student
            <span className="text-violet-500">•</span>
            Full-Stack Developer
          </motion.div>

          {/* Introduction */}
          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-violet-300 sm:text-sm"
          >
            <Sparkles size={16} />
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.3rem]"
          >
            Reema
            <span className="mt-1 block bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-400 bg-clip-text pb-2 text-transparent">
              Safreen.
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-semibold text-zinc-200 sm:text-2xl"
          >
            <span>Full-Stack Developer</span>
            <span className="hidden h-5 w-px bg-violet-400/50 sm:block" />
            <span className="text-violet-300">React Developer</span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8"
          >
            MCA student with hands-on internship and project experience in
            React.js, JavaScript, Laravel, Node.js, MySQL, and REST APIs. I
            enjoy building responsive web applications and practical software
            solutions, including an AI-assisted Voice2Sign communication
            platform.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-col gap-3 min-[480px]:flex-row"
          >
            <motion.button
              type="button"
              onClick={() => scrollToSection("projects")}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition-shadow hover:shadow-violet-500/20"
            >
              View Projects
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>

            <motion.a
              href="/Resume1.pdf"
              download="Reema-Safreen-Resume.pdf"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-semibold text-zinc-100 backdrop-blur-xl transition-colors hover:border-violet-400/30 hover:bg-violet-500/[0.08]"
            >
              <Download
                size={17}
                className="text-violet-300 transition-transform group-hover:translate-y-0.5"
              />
              Download Resume
              <ArrowUpRight
                size={15}
                className="text-zinc-500 transition-colors group-hover:text-violet-300"
              />
            </motion.a>
          </motion.div>

          {/* Technologies */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10"
          >
            <div className="mb-3 flex items-center gap-2">
              <Code2 size={14} className="text-violet-400" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
                Technologies I Work With
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {technologies.map((tech) => {
                const Icon = tech.icon;

                return (
                  <motion.div
                    key={tech.name}
                    whileHover={{ y: -3 }}
                    className={`inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3.5 py-2.5 text-xs font-medium text-zinc-300 transition-colors hover:bg-white/[0.05] sm:text-sm ${tech.hover}`}
                  >
                    <Icon className={`text-base ${tech.color}`} />
                    {tech.name}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 grid grid-cols-2 gap-4 border-t border-white/[0.08] pt-6 sm:grid-cols-4 sm:gap-5"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <p className="break-words text-lg font-bold text-white sm:text-xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs leading-5 text-zinc-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right profile section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[440px] lg:max-w-[500px]"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/25 blur-[100px] sm:h-80 sm:w-80" />

          {/* Decorative orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute -inset-3 rounded-[2.5rem] border border-dashed border-violet-400/15"
          />

          {/* Profile card */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative rounded-[2rem] border border-white/[0.12] bg-white/[0.035] p-2.5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-3"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-zinc-900">
              <img
                src="/ree.jpeg"
                alt="Reema Safreen"
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.035]"
              />

              {/* Image gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07070b] via-transparent to-black/10" />

              {/* Image label */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Building Ideas.
                  <span className="block text-violet-200">
                    Creating Solutions.
                  </span>
                </h2>
              </div>

              {/* Corner decoration */}
              <div className="pointer-events-none absolute right-4 top-4 h-12 w-12 rounded-tr-2xl border-r border-t border-white/40" />
              <div className="pointer-events-none absolute bottom-4 left-4 h-12 w-12 rounded-bl-2xl border-b border-l border-white/30" />
            </div>
          </motion.div>

          {/* Specialization badge */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-2 top-[16%] rounded-2xl border border-white/10 bg-[#101016]/95 p-3.5 shadow-xl shadow-black/30 backdrop-blur-xl sm:-left-5 sm:p-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                <Layers3 size={18} />
              </span>

              <div>
                <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-500 sm:text-[10px]">
                  Specialization
                </p>
                <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
                  Full-Stack
                </p>
              </div>
            </div>
          </motion.div>

          {/* AI project badge */}
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-2 bottom-[35%] rounded-2xl border border-white/10 bg-[#101016]/95 p-3.5 shadow-xl shadow-black/30 backdrop-blur-xl sm:-left-5 sm:p-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
                <Sparkles size={18} />
              </span>

              <div>
                <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-500 sm:text-[10px]">
                  Project Focus
                </p>
                <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
                  AI & Machine Learning
                </p>
              </div>
            </div>
          </motion.div>

          {/* Decorative particles */}
          <motion.span
            animate={{ y: [-10, 10, -10], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-[10%] top-[12%] h-2 w-2 rounded-full bg-violet-300 shadow-lg shadow-violet-500/50"
          />

          <motion.span
            animate={{ y: [10, -10, 10], opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute bottom-[10%] right-[12%] h-1.5 w-1.5 rounded-full bg-indigo-300"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to About section"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-violet-200 md:flex"
      >
        <span className="text-[9px] font-medium uppercase tracking-[0.25em]">
          Explore
        </span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  );
}

export default Hero;
