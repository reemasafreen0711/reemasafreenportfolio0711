import { motion } from "framer-motion";

import {
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  BrainCircuit,
  Award,
  CheckCircle2,
  CalendarDays,
  MapPin,
  ExternalLink,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { fadeUp, staggerContainer } from "../../utils/animations";

/* =========================================================
   INTERNSHIP EXPERIENCE
========================================================= */

const internships = [
  {
    year: "May 12 — June 09, 2026",
    type: "Internship",
    role: "Frontend Developer Intern",
    company: "Tech Green Steps Private Limited",
    location: "Tirunelveli",
    icon: Code2,
    status: "Completed",

    description:
      "Completed a frontend development internship focused on building responsive and user-friendly web interfaces using HTML, CSS and JavaScript.",

    technologies: ["HTML", "CSS", "JavaScript"],

    projects: ["E-commerce Website"],

    responsibilities: [
      "Developed responsive and user-friendly web pages",
      "Implemented website layouts using HTML and CSS",
      "Added interactive functionality using JavaScript",
      "Worked on frontend structure, styling and user experience",
    ],
  },

  {
    year: "June 22 — September 22, 2026",
    type: "Internship",
    role: "Full-Stack Developer Intern",
    company: "Jaz Infotech",
    location: "Tirunelveli",
    icon: BriefcaseBusiness,
    status: "Completed",

    description:
      "Successfully completed a Full-Stack Developer Internship, gaining practical experience in frontend and backend web development through hands-on application development.",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Laravel",
      "Node.js",
      "Express.js",
      "MySQL",
      "Postman",
      "Git",
      "GitHub",
    ],

    projects: [
      "RILAX TILES",
      "Weather Forecast Web Application",
      "Task Management System",
    ],

    responsibilities: [
      "Developed responsive web interfaces using React and JavaScript",
      "Integrated REST APIs with frontend applications",
      "Worked with Laravel, Node.js and Express.js for backend development",
      "Worked with MySQL databases",
      "Tested APIs using Postman",
      "Used Git and GitHub for version control",
      "Debugged and improved application features",
    ],
  },
];

/* =========================================================
   EDUCATION & DEVELOPMENT JOURNEY
========================================================= */

const journey = [
  {
    year: "2025 — 2027",
    type: "Education",
    title: "Master of Computer Applications",
    organization: "Sri Sarada College",
    icon: GraduationCap,

    description:
      "Pursuing MCA with a focus on software development, web technologies, databases and modern application development.",

    points: [
      "Full-stack web development",
      "Database and API development",
      "Artificial Intelligence & Machine Learning",
      "Software engineering concepts",
    ],
  },

  {
    year: "2025 — 2026",
    type: "Development",
    title: "Full-Stack Development Journey",
    organization: "Hands-on Projects",
    icon: Code2,

    description:
      "Building practical applications using frontend and backend technologies while developing hands-on experience with complete application workflows.",

    points: [
      "React-based responsive interfaces",
      "Laravel and FastAPI backend development",
      "REST API integration",
      "MySQL, MongoDB and PostgreSQL",
    ],
  },

  {
    year: "2025 — 2026",
    type: "AI & Computer Vision",
    title: "Exploring Intelligent Applications",
    organization: "AI / ML Projects",
    icon: BrainCircuit,

    description:
      "Exploring practical applications of artificial intelligence, speech processing and computer vision through project-based learning.",

    points: [
      "Speech processing",
      "Computer vision",
      "MediaPipe hand tracking",
      "AI-assisted accessibility solutions",
    ],
  },

  {
    year: "2023 — 2025",
    type: "Education",
    title: "Bachelor of Arts — English Literature",
    organization: "Sarah Tucker College",
    icon: GraduationCap,

    description:
      "Completed a bachelor's degree in English Literature, developing skills in reading, writing, comprehension, critical analysis and communication.",

    points: [
      "Written communication",
      "Critical analysis",
      "Reading and comprehension",
      "Presentation and communication skills",
    ],
  },
];

/* =========================================================
   CERTIFICATIONS
========================================================= */

const certifications = [
  "C Programming",
  "C++ Programming",
  "Java Programming",
  "Python Programming",
  "Microsoft Word",
  "Microsoft Excel",
  "Microsoft PowerPoint",
];

/* =========================================================
   EXPERIENCE COMPONENT
========================================================= */

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-b border-white/5 bg-[#07080a] py-28 sm:py-32"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[15%] h-96 w-96 rounded-full bg-violet-600/8 blur-[140px]" />

        <div className="absolute bottom-[10%] right-[-10%] h-96 w-96 rounded-full bg-indigo-600/8 blur-[140px]" />
      </div>

      <Container className="relative z-10">
        {/* ===================================================
            SECTION HEADING
        ==================================================== */}

        <SectionHeading
          eyebrow="Experience & Journey"
          title="Where learning meets real-world development."
          description="My professional journey combines internship experience, academic learning and hands-on software development across frontend, backend and AI-assisted applications."
        />

        {/* =====================================================
            INTERNSHIP EXPERIENCE
        ====================================================== */}

        <div className="mb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="mb-8 flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/10">
              <BriefcaseBusiness size={19} className="text-violet-400" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
                Professional Experience
              </p>

              <h3 className="mt-1 text-2xl font-bold text-white">
                Internship Experience
              </h3>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            className="relative space-y-6"
          >
            {/* Timeline */}

            <div className="absolute left-5 top-6 hidden h-[calc(100%-48px)] w-px bg-gradient-to-b from-violet-500/60 via-indigo-500/30 to-transparent md:block" />

            {internships.map((internship) => {
              const Icon = internship.icon;

              return (
                <motion.article
                  key={internship.company}
                  variants={fadeUp}
                  className="relative grid gap-5 md:grid-cols-[190px_1fr]"
                >
                  {/* =================================================
                      DATE
                  ================================================== */}

                  <div className="hidden pt-5 md:block">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] leading-5 text-violet-400">
                      {internship.year}
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-zinc-600">
                      <CalendarDays size={13} />

                      <span className="text-[11px]">{internship.status}</span>
                    </div>
                  </div>

                  {/* Mobile Date */}

                  <div className="flex items-center gap-3 md:hidden">
                    <span className="h-2 w-2 rounded-full bg-violet-400" />

                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-violet-400">
                      {internship.year}
                    </p>
                  </div>

                  {/* =================================================
                      INTERNSHIP CARD
                  ================================================== */}

                  <div className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.04] sm:p-8">
                    {/* Glow */}

                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Timeline Dot */}

                    <div className="absolute -left-[196px] top-8 hidden h-3 w-3 rounded-full border-2 border-violet-400 bg-[#07080a] shadow-lg shadow-violet-500/30 md:block" />

                    <div className="relative">
                      {/* Header */}

                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-500/10">
                            <Icon size={22} className="text-violet-400" />
                          </div>

                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                              {internship.type}
                            </p>

                            <h4 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                              {internship.role}
                            </h4>

                            <p className="mt-1 text-sm font-medium text-zinc-300">
                              {internship.company}
                            </p>

                            <div className="mt-2 flex items-center gap-2 text-xs text-zinc-600">
                              <MapPin size={13} />

                              {internship.location}
                            </div>
                          </div>
                        </div>

                        {/* Status */}

                        <span
                          className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider ${
                            internship.status === "Ongoing"
                              ? "border-emerald-400/15 bg-emerald-400/10 text-emerald-300"
                              : "border-violet-400/15 bg-violet-500/10 text-violet-300"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              internship.status === "Ongoing"
                                ? "animate-pulse bg-emerald-400"
                                : "bg-violet-400"
                            }`}
                          />

                          {internship.status}
                        </span>
                      </div>

                      {/* Description */}

                      <p className="mt-7 max-w-4xl text-sm leading-7 text-zinc-500 sm:text-base">
                        {internship.description}
                      </p>

                      {/* Projects */}

                      <div className="mt-7">
                        <div className="mb-3 flex items-center gap-2">
                          <ExternalLink size={15} className="text-violet-400" />

                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                            Projects
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {internship.projects.map((project) => (
                            <span
                              key={project}
                              className="rounded-lg border border-white/7 bg-white/[0.025] px-3 py-2 text-xs text-zinc-400 transition-colors duration-300 group-hover:border-violet-400/10 group-hover:text-zinc-300"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Responsibilities */}

                      <div className="mt-7">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                          What I Worked On
                        </p>

                        <div className="grid gap-2 sm:grid-cols-2">
                          {internship.responsibilities.map((responsibility) => (
                            <div
                              key={responsibility}
                              className="flex items-start gap-2 text-xs leading-6 text-zinc-500"
                            >
                              <CheckCircle2
                                size={14}
                                className="mt-1 shrink-0 text-violet-400"
                              />

                              <span>{responsibility}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}

                      <div className="mt-7 border-t border-white/6 pt-6">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                          Technologies
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {internship.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-lg border border-white/7 bg-black/10 px-3 py-1.5 text-[11px] font-medium text-zinc-500 transition-all duration-300 hover:border-violet-400/20 hover:text-violet-300"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* =====================================================
            EDUCATION & DEVELOPMENT JOURNEY
        ====================================================== */}

        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="mb-8 flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/15 bg-indigo-500/10">
              <GraduationCap size={19} className="text-indigo-400" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                Education & Development
              </p>

              <h3 className="mt-1 text-2xl font-bold text-white">
                Learning Journey
              </h3>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            className="relative"
          >
            {/* Timeline */}

            <div className="absolute left-5 top-4 hidden h-[calc(100%-30px)] w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent md:block" />

            <div className="space-y-8">
              {journey.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="relative grid gap-5 md:grid-cols-[180px_1fr]"
                  >
                    {/* Desktop Year */}

                    <div className="hidden pt-2 md:block">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-400">
                        {item.year}
                      </p>
                    </div>

                    {/* Mobile Year */}

                    <div className="flex items-center gap-3 md:hidden">
                      <span className="h-2 w-2 rounded-full bg-indigo-400" />

                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-400">
                        {item.year}
                      </p>
                    </div>

                    {/* Journey Card */}

                    <div className="relative rounded-3xl border border-white/8 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/20 hover:bg-white/[0.04] sm:p-7">
                      {/* Timeline Dot */}

                      <div className="absolute -left-[186px] top-8 hidden h-3 w-3 rounded-full border-2 border-indigo-400 bg-[#07080a] shadow-lg shadow-indigo-500/30 md:block" />

                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-400/15 bg-indigo-500/10">
                          <Icon size={21} className="text-indigo-400" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                            {item.type}
                          </p>

                          <h3 className="mt-1 text-xl font-semibold text-white">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm text-zinc-500">
                            {item.organization}
                          </p>
                        </div>
                      </div>

                      <p className="mt-6 text-sm leading-7 text-zinc-500 sm:text-base">
                        {item.description}
                      </p>

                      <div className="mt-6 grid gap-2 sm:grid-cols-2">
                        {item.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-center gap-2 text-xs text-zinc-500"
                          >
                            <CheckCircle2
                              size={14}
                              className="shrink-0 text-indigo-400"
                            />

                            {point}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            TECHNICAL FOUNDATIONS
        ====================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-10 rounded-3xl border border-white/8 bg-white/[0.025] p-7 backdrop-blur-xl sm:p-9"
        >
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            {/* Heading */}

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-indigo-400/15 bg-indigo-500/10">
                <Award size={22} className="text-indigo-400" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                  Certifications
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  Technical Foundations
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
                  Certifications and technical learning that support my software
                  development journey.
                </p>
              </div>
            </div>

            {/* Certifications */}

            <div className="flex max-w-2xl flex-wrap gap-2">
              {certifications.map((certificate) => (
                <span
                  key={certificate}
                  className="rounded-lg border border-white/7 bg-white/[0.025] px-3 py-2 text-xs text-zinc-400 transition hover:border-violet-400/20 hover:text-zinc-200"
                >
                  {certificate}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Experience;
