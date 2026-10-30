import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  GitBranch,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaLaravel,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
  SiFastapi,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiPytorch,
  SiOpencv,
  SiPostman,
} from "react-icons/si";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { fadeUp, staggerContainer } from "../../utils/animations";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Creating responsive, accessible and engaging user interfaces.",
    icon: Code2,
    accent: "from-violet-500 to-fuchsia-500",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Building server-side applications, APIs and application logic.",
    icon: Server,
    accent: "from-indigo-500 to-violet-500",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Laravel", icon: FaLaravel },
      { name: "Node.js", icon: FaNodeJs },
      { name: "REST APIs", icon: Server },
    ],
  },
  {
    number: "03",
    title: "Databases",
    description:
      "Organizing, storing and managing application data efficiently.",
    icon: Database,
    accent: "from-blue-500 to-indigo-500",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    number: "04",
    title: "AI & Computer Vision",
    description:
      "Exploring intelligent applications and computer vision solutions.",
    icon: BrainCircuit,
    accent: "from-fuchsia-500 to-purple-500",
    skills: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "OpenCV", icon: SiOpencv },
      { name: "MediaPipe", icon: BrainCircuit },
      { name: "Computer Vision", icon: BrainCircuit },
    ],
  },
  {
    number: "05",
    title: "Development Tools",
    description: "Using modern tools for coding, testing and version control.",
    icon: Wrench,
    accent: "from-purple-500 to-blue-500",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: Code2 },
    ],
  },
];

const SkillCard = ({ group, index }) => {
  const GroupIcon = group.icon;

  return (
    <motion.article
      variants={fadeUp}
      className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0c12] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-violet-400/30 hover:bg-[#101019] sm:p-7 ${
        index === 4 ? "lg:col-span-2" : ""
      }`}
    >
      {/* Hover glow */}
      <div
        className={`pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${group.accent} opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-20`}
      />

      {/* Top accent line */}
      <div
        className={`absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r ${group.accent} transition-all duration-500 group-hover:w-full`}
      />

      <div className="relative z-10">
        {/* Card heading */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-gradient-to-br ${group.accent} bg-opacity-10`}
            >
              <GroupIcon
                size={22}
                className="text-violet-300 transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div>
              <p className="mb-1 text-[10px] font-semibold tracking-[0.2em] text-violet-400">
                CATEGORY {group.number}
              </p>

              <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                {group.title}
              </h3>
            </div>
          </div>

          <ArrowUpRight
            size={18}
            className="shrink-0 text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400"
          />
        </div>

        <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-500">
          {group.description}
        </p>

        {/* Skill chips */}
        <div className="mt-6 flex flex-wrap gap-2.5">
          {group.skills.map((skill) => {
            const SkillIcon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group/skill inline-flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2.5 text-sm text-zinc-300 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/[0.09] hover:text-white"
              >
                <SkillIcon
                  size={16}
                  className="shrink-0 text-zinc-500 transition-colors duration-300 group-hover/skill:text-violet-400"
                />

                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
};

function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden border-b border-white/[0.06] bg-[#07070a] py-24 sm:py-28 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-violet-600/[0.09] blur-[130px]" />

        <div className="absolute -left-40 top-[45%] h-96 w-96 rounded-full bg-indigo-600/[0.07] blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <Container>
        {/* Section heading */}
        <SectionHeading
          eyebrow="Technical Skills"
          title="My tools. My technology stack."
          description="Technologies and tools I use to create modern web applications, develop backend systems and explore AI-powered solutions."
        />

        {/* Skills grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-14"
        >
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </motion.div>

        {/* Learning approach */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="group relative mt-7 overflow-hidden rounded-3xl border border-violet-400/[0.16] bg-gradient-to-br from-violet-500/[0.09] via-[#0b0b11] to-indigo-500/[0.08] p-6 sm:p-9 lg:p-10"
        >
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-violet-500/[0.08] blur-[90px]" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-3 py-1.5">
                <Sparkles size={13} className="text-violet-400" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                  My Approach
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Learn. Build.{" "}
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  Improve.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                I believe in learning through practical experience. Every
                project helps me strengthen my development skills, solve
                real-world problems and explore new technologies.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 lg:min-w-[340px]">
              {[
                { value: "05", label: "Skill Areas" },
                { value: "20+", label: "Technologies" },
                { value: "∞", label: "Learning" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/[0.08] bg-black/30 px-2 py-5 text-center transition-all duration-300 hover:border-violet-400/25 hover:bg-violet-500/[0.05] sm:px-4"
                >
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-[9px] font-medium uppercase tracking-wider text-zinc-500 sm:text-[10px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-8 flex items-center gap-2 border-t border-white/[0.07] pt-5 text-xs text-zinc-500">
            <GitBranch size={14} className="text-violet-400" />
            <span>Consistent learning through building real projects.</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Skills;
