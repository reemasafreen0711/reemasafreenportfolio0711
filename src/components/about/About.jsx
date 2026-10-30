import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  BrainCircuit,
  Layers3,
  ArrowUpRight,
  Sparkles,
  BookOpen,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { fadeUp, staggerContainer } from "../../utils/animations";

const highlights = [
  {
    icon: Code2,
    value: "Full-Stack",
    label: "Development",
    description:
      "Building responsive web applications with React, Laravel, Node.js, MySQL and REST APIs.",
  },
  {
    icon: BrainCircuit,
    value: "AI + CV",
    label: "Project Focus",
    description:
      "Exploring AI-assisted communication and computer vision using MediaPipe and related technologies.",
  },
  {
    icon: Layers3,
    value: "4+",
    label: "Projects",
    description:
      "Developing practical applications across full-stack development, frontend interfaces and AI-assisted solutions.",
  },
];

const education = [
  {
    period: "2025 – 2027",
    degree: "Master of Computer Applications",
    institution: "Sri Sarada College",
    score: "86%",
    current: true,
  },
  {
    period: "2023 – 2025",
    degree: "B.A. English Literature",
    institution: "Sarah Tucker College",
    score: "60%",
    current: false,
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative isolate scroll-mt-20 overflow-hidden border-b border-white/[0.06] bg-[#08080d] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.12, 0.22, 0.12],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]"
        />

        <motion.div
          animate={{
            opacity: [0.08, 0.18, 0.08],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-indigo-600/15 blur-[130px]"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />
      </div>

      <Container className="relative z-10">
        {/* Section heading */}
        <SectionHeading
          eyebrow="About Me"
          title="A developer who learns by building."
          description="MCA student with hands-on internship and project experience in frontend, backend and AI-assisted application development."
        />

        {/* Main cards */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:gap-7">
          {/* About card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl transition-colors duration-500 hover:border-violet-400/20 sm:p-8 lg:p-9"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/10 blur-[90px] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              {/* Profile heading */}
              <div className="flex flex-col gap-5 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">
                <div className="flex min-w-0 items-center gap-3.5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                    <Code2 size={22} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
                      Developer Profile
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                      Full-Stack Developer
                    </h3>
                  </div>
                </div>

                {/* Profile image */}
                <motion.div
                  whileHover={{ scale: 1.04, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative mx-auto shrink-0 min-[420px]:mx-0"
                >
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-500/40 via-indigo-500/10 to-transparent opacity-70 blur-sm" />

                  <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-white/10 bg-[#111118] p-1 sm:h-32 sm:w-32">
                    <img
                      src="/ree.jpeg"
                      alt="Reema Safreen"
                      loading="lazy"
                      className="h-full w-full rounded-xl object-cover object-top"
                    />
                  </div>

                  <span
                    className="absolute bottom-2 right-2 h-3.5 w-3.5 rounded-full border-2 border-[#101016] bg-violet-400 shadow-lg shadow-violet-500/40"
                    aria-label="Profile indicator"
                  />
                </motion.div>
              </div>

              {/* About description */}
              <div className="mt-7 space-y-4 text-sm leading-7 text-zinc-400 sm:mt-8 sm:text-base sm:leading-8">
                <p>
                  I am an MCA student interested in full-stack web development,
                  modern frontend technologies and practical AI applications.
                </p>

                <p>
                  Through internships and academic projects, I have gained
                  hands-on experience with React.js, JavaScript, Laravel,
                  Node.js, MySQL and REST APIs.
                </p>

                <p>
                  My work includes responsive web applications and an
                  AI-assisted Voice2Sign system designed to support Voice → Sign
                  and Sign → Voice communication.
                </p>
              </div>

              {/* Current focus */}
              <div className="mt-7 rounded-2xl border border-violet-400/10 bg-gradient-to-r from-violet-500/[0.07] to-transparent p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-violet-300" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-200">
                    Current Focus
                  </p>
                </div>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  Strengthening my full-stack development skills, building
                  practical projects and learning professional software
                  development workflows.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl transition-colors duration-500 hover:border-indigo-400/20 sm:p-8 lg:p-9"
          >
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-indigo-500/10 blur-[90px]" />

            <div className="relative z-10">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                  <GraduationCap size={23} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
                    Education
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                    Academic Journey
                  </h3>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative mt-9 space-y-9 pl-7">
                <div className="absolute bottom-3 left-[5px] top-2 w-px bg-gradient-to-b from-violet-400/70 via-indigo-400/40 to-transparent" />

                {education.map((item) => (
                  <motion.div
                    key={item.degree}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    <span
                      className={`absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 ${
                        item.current
                          ? "border-violet-300 bg-violet-400 shadow-md shadow-violet-500/40"
                          : "border-zinc-600 bg-[#111118]"
                      }`}
                    />

                    <div className="flex flex-wrap items-center gap-2">
                      <p
                        className={`text-xs font-semibold uppercase tracking-wider ${
                          item.current ? "text-violet-300" : "text-zinc-500"
                        }`}
                      >
                        {item.period}
                      </p>

                      {item.current && (
                        <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-violet-200">
                          In Progress
                        </span>
                      )}
                    </div>

                    <h4 className="mt-2.5 text-base font-semibold leading-6 text-white sm:text-lg">
                      {item.degree}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      {item.institution}
                    </p>

                    <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-1.5">
                      <BookOpen size={13} className="text-indigo-300" />
                      <span className="text-xs font-semibold text-zinc-300">
                        {item.score}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Skills link */}
              <a
                href="#skills"
                className="group/link mt-9 inline-flex items-center gap-2 border-t border-white/[0.07] pt-6 text-sm font-semibold text-zinc-200 transition-colors hover:text-violet-300"
              >
                Explore my technical skills
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-300 hover:border-violet-400/20 hover:bg-white/[0.035] hover:shadow-xl hover:shadow-violet-950/20 sm:p-6"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08] text-violet-300 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={20} />
                    </div>

                    <span className="max-w-[65%] break-words text-right text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {item.value}
                    </span>
                  </div>

                  <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-300">
                    {item.label}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-zinc-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

export default About;
