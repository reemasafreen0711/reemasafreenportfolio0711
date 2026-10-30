import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Layers3,
  Sparkles,
  X,
  CheckCircle2,
  Target,
  Code2,
  Lightbulb,
  CloudSun,
  GraduationCap,
  ClipboardCheck,
  ExternalLink,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { projects as localProjects } from "../../data/projects";
import { API_BASE_URL } from "../../lib/api";
import { fadeUp, staggerContainer } from "../../utils/animations";

/* =========================================================
   PROJECTS SECTION
========================================================= */

function Projects() {
  const [projects, setProjects] = useState(localProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Initially display only four projects.
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 4);

  // Load projects from API. Keep local projects as fallback.
  useEffect(() => {
    let active = true;

    async function loadProjects() {
      try {
        const response = await fetch(`${API_BASE_URL}/projects.php`);

        if (!response.ok) {
          throw new Error("Unable to load projects from API");
        }

        const result = await response.json();

        if (!active || !result.success || !Array.isArray(result.data)) {
          return;
        }

        const mappedProjects = result.data.map((item, index) => {
          const projectId = item.slug || item.id;

          const original =
            localProjects.find(
              (project) => String(project.id) === String(projectId),
            ) || {};

          const technologies = item.technologies ?? original.technologies ?? [];

          const highlights = item.highlights ?? original.highlights ?? [];

          const coverImage = item.cover_image || original.coverImage || "";

          return {
            ...original,
            ...item,
            id: projectId || original.id || `project-${index + 1}`,
            number: String(index + 1).padStart(2, "0"),
            title: item.title || original.title || "Untitled Project",
            category: item.category || original.category || "Development",
            subtitle: item.subtitle || original.subtitle || "",
            description: item.description || original.description || "",
            coverImage,
            images:
              original.images?.length > 0
                ? original.images
                : coverImage
                  ? [coverImage]
                  : [],
            technologies: Array.isArray(technologies) ? technologies : [],
            highlights: Array.isArray(highlights) ? highlights : [],
            objective: original.objective || item.description || "",
            features: original.features || highlights,
            contribution: original.contribution || "",
          };
        });

        if (active) {
          setProjects(mappedProjects);
        }
      } catch (error) {
        console.error("Projects API error:", error);
        // Local projects remain visible if the API fails.
      }
    }

    loadProjects();

    return () => {
      active = false;
    };
  }, []);

  // Close modal with Escape key and lock background scrolling.
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  // If the list changes, keep the selected project synchronized.
  useEffect(() => {
    if (!selectedProject) return;

    const updatedProject = projects.find(
      (project) => project.id === selectedProject.id,
    );

    if (updatedProject) {
      setSelectedProject(updatedProject);
    }
  }, [projects]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden border-b border-white/[0.06] bg-[#07070a] py-24 sm:py-28 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/[0.09] blur-[140px]" />

        <div className="absolute -right-40 top-[40%] h-96 w-96 rounded-full bg-indigo-600/[0.08] blur-[140px]" />

        <div className="absolute bottom-0 left-[40%] h-72 w-72 rounded-full bg-fuchsia-600/[0.04] blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>

      <Container className="relative z-10">
        {/* Section heading */}
        <SectionHeading
          eyebrow="Selected Projects"
          title="Ideas turned into reality."
          description="A selection of academic, internship and personal projects showcasing my work in frontend development, full-stack applications, APIs and AI-powered solutions."
        />

        {/* Project count */}
        <div className="mb-7 mt-10 flex flex-wrap items-center justify-between gap-3 sm:mb-8">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
              Project Showcase
            </span>
          </div>

          <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-1.5 font-mono text-xs text-zinc-400">
            {String(visibleProjects.length).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")} projects
          </span>
        </div>

        {/* Project cards */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.04 }}
          className="space-y-6"
        >
          <AnimatePresence initial={false}>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{
                  duration: 0.35,
                  delay: index < 4 ? index * 0.035 : 0,
                  layout: { duration: 0.3 },
                }}
              >
                <ProjectCard
                  project={{
                    ...project,
                    number:
                      project.number || String(index + 1).padStart(2, "0"),
                  }}
                  onCaseStudy={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less */}
        {projects.length > 4 && (
          <motion.div
            layout
            className="mt-10 flex flex-col items-center sm:mt-12"
          >
            <button
              type="button"
              onClick={() => setShowAllProjects((current) => !current)}
              aria-expanded={showAllProjects}
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-violet-400/20 bg-violet-500/[0.08] px-6 py-3 text-sm font-semibold text-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-violet-500/[0.14] hover:shadow-lg hover:shadow-violet-500/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070a]"
            >
              {showAllProjects ? "Show Less" : "Show More Projects"}

              <ArrowRight
                size={16}
                className={`transition-transform duration-300 ${
                  showAllProjects
                    ? "-rotate-90"
                    : "rotate-90 group-hover:translate-x-1"
                }`}
              />
            </button>

            <p className="mt-3 text-center text-xs text-zinc-600">
              {showAllProjects
                ? "Showing all projects"
                : `${projects.length - 4} more ${
                    projects.length - 4 === 1 ? "project" : "projects"
                  } to explore`}
            </p>
          </motion.div>
        )}
      </Container>

      {/* Case study modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, onCaseStudy }) {
  const hasImage = Boolean(project.coverImage);

  return (
    <motion.article
      layout
      className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b0b10] transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-[#0e0e15] ${
        project.featured ? "lg:min-h-[420px]" : ""
      }`}
    >
      {/* Card glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 z-0 h-64 w-64 rounded-full bg-violet-600/[0.10] opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr]">
        {/* Project visual */}
        <div
          className={`relative overflow-hidden border-b border-white/[0.07] bg-gradient-to-br from-violet-500/[0.07] via-transparent to-indigo-500/[0.05] p-5 sm:p-7 lg:border-b-0 lg:border-r ${
            project.featured ? "lg:min-h-[420px]" : "lg:min-h-[340px]"
          }`}
        >
          {/* Grid pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />
          </div>

          <div className="relative z-20 flex items-center justify-between gap-3">
            <span className="font-mono text-xs text-zinc-600">
              PROJECT / {project.number}
            </span>

            {project.featured && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/20 bg-violet-500/[0.10] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                <Sparkles size={11} />
                Featured
              </span>
            )}
          </div>

          <div className="relative z-10 mt-6 flex min-h-[220px] items-center justify-center sm:min-h-[250px]">
            {hasImage ? (
              <ProjectImage
                src={project.coverImage}
                alt={`${project.title || "Project"} preview`}
                featured={project.featured}
                fallbackId={project.id}
              />
            ) : (
              <FallbackProjectVisual projectId={project.id} />
            )}
          </div>

          <div className="relative z-20 mt-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                Category
              </p>
              <p className="mt-1 text-xs font-medium text-zinc-400">
                {project.category || "Development"}
              </p>
            </div>

            <button
              type="button"
              onClick={onCaseStudy}
              aria-label={`View ${project.title} case study`}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-black/30 text-zinc-400 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-violet-300"
            >
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        {/* Project details */}
        <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-9">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-violet-400" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-400">
                {project.category || "Development"}
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-violet-200 sm:text-3xl">
              {project.title || "Untitled Project"}
            </h3>

            {project.subtitle && (
              <p className="mt-2 text-sm font-medium text-zinc-300">
                {project.subtitle}
              </p>
            )}

            <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400">
              {project.description ||
                "A project built through practical development and experimentation."}
            </p>

            {/* Highlights */}
            {project.highlights?.length > 0 && (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.highlights.map((highlight, index) => (
                  <div
                    key={`${highlight}-${index}`}
                    className="flex items-start gap-2.5 text-xs leading-5 text-zinc-500"
                  >
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 shrink-0 text-violet-400"
                    />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Technologies */}
            {project.technologies?.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology, index) => (
                  <span
                    key={`${technology}-${index}`}
                    className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[11px] font-medium text-zinc-400 transition-colors duration-300 group-hover:border-white/[0.12] group-hover:text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Card footer */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] pt-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">
              {project.id}
            </span>

            <button
              type="button"
              onClick={onCaseStudy}
              className="group/case inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-300 hover:shadow-lg hover:shadow-violet-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              View Case Study
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover/case:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   PROJECT IMAGE
========================================================= */

function ProjectImage({ src, alt, featured, fallbackId }) {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [src]);

  if (imageFailed) {
    return <FallbackProjectVisual projectId={fallbackId} />;
  }

  return (
    <motion.div
      whileHover={{ scale: 1.025 }}
      transition={{ duration: 0.4 }}
      className={`group/image relative w-full overflow-hidden rounded-2xl border border-white/[0.10] bg-black/40 shadow-2xl shadow-black/30 ${
        featured ? "h-[230px] sm:h-[265px]" : "h-[220px] sm:h-[245px]"
      }`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setImageFailed(true)}
        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover/image:scale-[1.04]"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 to-transparent" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-violet-500/[0.06]" />

      <div className="absolute bottom-3 left-3 rounded-lg border border-white/[0.10] bg-black/55 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-zinc-300 backdrop-blur-md">
        Project Preview
      </div>

      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/[0.10] blur-3xl" />
    </motion.div>
  );
}

/* =========================================================
   FALLBACK PROJECT VISUAL
========================================================= */

function FallbackProjectVisual({ projectId }) {
  const normalizedId = String(projectId || "").toLowerCase();

  let Icon = Layers3;
  let label = "Application";

  if (normalizedId.includes("voice2sign")) {
    Icon = Sparkles;
    label = "AI + Vision";
  } else if (normalizedId.includes("rilax-tiles")) {
    Icon = Layers3;
    label = "Surfaces";
  } else if (normalizedId.includes("task-management")) {
    Icon = ClipboardCheck;
    label = "Workflow";
  } else if (normalizedId.includes("student-management")) {
    Icon = GraduationCap;
    label = "Education";
  } else if (normalizedId.includes("weather")) {
    Icon = CloudSun;
    label = "Weather";
  }

  return (
    <div className="relative flex h-44 w-44 items-center justify-center rounded-[2rem] border border-violet-400/[0.16] bg-black/30 shadow-2xl shadow-violet-900/20">
      <div className="flex h-28 w-28 flex-col items-center justify-center rounded-3xl border border-white/[0.08] bg-white/[0.03]">
        <Icon size={40} strokeWidth={1.35} className="text-violet-400" />
        <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-violet-300">
          {label}
        </p>
      </div>

      <div className="pointer-events-none absolute h-52 w-52 rounded-full border border-violet-400/[0.06]" />
      <div className="pointer-events-none absolute h-64 w-64 rounded-full border border-white/[0.025]" />
    </div>
  );
}

/* =========================================================
   CASE STUDY MODAL
========================================================= */

function CaseStudyModal({ project, onClose }) {
  const gallery =
    project.images?.length > 0
      ? project.images
      : project.coverImage
        ? [project.coverImage]
        : [];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [project.id]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 backdrop-blur-md sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.28 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto overscroll-contain rounded-3xl border border-white/[0.10] bg-[#0b0b10] shadow-2xl shadow-black/60"
      >
        {/* Modal header */}
        <div className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-white/[0.07] bg-[#0b0b10]/95 px-5 py-4 backdrop-blur-xl sm:px-8 sm:py-5">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-400">
              Project Details
            </p>

            <h3
              id="case-study-title"
              className="mt-1 truncate text-xl font-bold text-white sm:text-2xl"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition hover:border-violet-400/25 hover:bg-violet-500/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            <X size={19} />
          </button>
        </div>

        <div className="p-5 sm:p-8">
          {/* Image gallery */}
          {gallery.length > 0 && (
            <div className="mb-8">
              <div className="relative flex min-h-[200px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-black/30 sm:min-h-[300px]">
                <div className="absolute left-4 top-4 z-10 rounded-lg border border-white/[0.10] bg-black/60 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-zinc-300 backdrop-blur-md">
                  Project Showcase
                </div>

                <AnimatePresence mode="wait">
                  <motion.img
                    key={gallery[activeImage]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    src={gallery[activeImage]}
                    alt={`${project.title} screenshot ${activeImage + 1}`}
                    className="max-h-[520px] w-full object-contain"
                  />
                </AnimatePresence>

                {gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous screenshot"
                      onClick={() =>
                        setActiveImage((current) =>
                          current === 0 ? gallery.length - 1 : current - 1,
                        )
                      }
                      className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-white/[0.10] bg-black/60 text-white backdrop-blur-md transition hover:border-violet-400/30 hover:bg-violet-500/20"
                    >
                      <ArrowLeft size={17} />
                    </button>

                    <button
                      type="button"
                      aria-label="Next screenshot"
                      onClick={() =>
                        setActiveImage((current) =>
                          current === gallery.length - 1 ? 0 : current + 1,
                        )
                      }
                      className="absolute right-3 top-1/2 flex h-10 w-10 translate-y-1/2 items-center justify-center rounded-xl border border-white/[0.10] bg-black/60 text-white backdrop-blur-md transition hover:border-violet-400/30 hover:bg-violet-500/20"
                    >
                      <ArrowRight size={17} />
                    </button>

                    <div className="absolute bottom-3 right-3 rounded-lg border border-white/[0.10] bg-black/60 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-md">
                      {activeImage + 1} / {gallery.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {gallery.length > 1 && (
                <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
                  {gallery.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-label={`View screenshot ${index + 1}`}
                      aria-pressed={activeImage === index}
                      className={`relative aspect-video overflow-hidden rounded-xl border transition-all duration-300 ${
                        activeImage === index
                          ? "border-violet-400/60 ring-2 ring-violet-500/20"
                          : "border-white/[0.08] opacity-60 hover:border-white/[0.20] hover:opacity-100"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${project.title} thumbnail ${index + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Project introduction */}
          <div className="rounded-2xl border border-violet-400/[0.12] bg-violet-500/[0.04] p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/[0.12] bg-violet-500/[0.10]">
                <ProjectVisualIcon projectId={project.id} />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-400">
                  {project.category || "Development"}
                </p>

                {project.subtitle && (
                  <p className="mt-1 text-sm font-medium text-zinc-300">
                    {project.subtitle}
                  </p>
                )}
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
              {project.description || "Project description not available."}
            </p>
          </div>

          {/* Objective */}
          <CaseStudySection icon={Target} title="Project Objective">
            <p>
              {project.objective ||
                project.description ||
                "Project objective not available."}
            </p>
          </CaseStudySection>

          {/* Key features */}
          {project.features?.length > 0 && (
            <CaseStudySection icon={Lightbulb} title="Key Features">
              <div className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature, index) => (
                  <div
                    key={`${feature}-${index}`}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-violet-400/[0.15] hover:bg-violet-500/[0.025]"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-violet-400"
                    />
                    <span className="text-sm leading-6 text-zinc-400">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </CaseStudySection>
          )}

          {/* Technology stack */}
          {project.technologies?.length > 0 && (
            <CaseStudySection icon={Code2} title="Technology Stack">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology, index) => (
                  <span
                    key={`${technology}-${index}`}
                    className="rounded-lg border border-violet-400/[0.12] bg-violet-500/[0.05] px-3 py-2 text-xs font-medium text-zinc-300 transition hover:border-violet-400/25 hover:bg-violet-500/[0.10]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </CaseStudySection>
          )}

          {/* Highlights */}
          {project.highlights?.length > 0 && (
            <CaseStudySection icon={Sparkles} title="Project Highlights">
              <div className="grid gap-3 sm:grid-cols-2">
                {project.highlights.map((highlight, index) => (
                  <div
                    key={`${highlight}-${index}`}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    <span className="text-sm text-zinc-400">{highlight}</span>
                  </div>
                ))}
              </div>
            </CaseStudySection>
          )}

          {/* Contribution */}
          {project.contribution && (
            <CaseStudySection icon={Sparkles} title="My Contribution">
              <p>{project.contribution}</p>
            </CaseStudySection>
          )}

          {/* Links, if supplied by project data */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[0.07] pt-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-violet-300"
                >
                  Live Demo <ExternalLink size={15} />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.10] bg-white/[0.03] px-4 py-3 text-sm font-semibold text-zinc-300 transition hover:border-violet-400/25 hover:bg-violet-500/[0.08] hover:text-white"
                >
                  Source Code <ExternalLink size={15} />
                </a>
              )}
            </div>
          )}

          {/* Modal footer */}
          <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] pt-6">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                Project ID
              </p>
              <p className="mt-1 font-mono text-xs text-zinc-500">
                {project.id}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-violet-400/25 hover:bg-violet-500/[0.08] hover:text-white"
            >
              <ArrowLeft size={15} />
              Back to Projects
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   PROJECT VISUAL ICON
========================================================= */

function ProjectVisualIcon({ projectId }) {
  const normalizedId = String(projectId || "").toLowerCase();

  let Icon = Layers3;

  if (normalizedId.includes("voice2sign")) {
    Icon = Sparkles;
  } else if (normalizedId.includes("task-management")) {
    Icon = ClipboardCheck;
  } else if (normalizedId.includes("student-management")) {
    Icon = GraduationCap;
  } else if (normalizedId.includes("weather")) {
    Icon = CloudSun;
  }

  return <Icon size={23} strokeWidth={1.4} className="text-violet-400" />;
}

/* =========================================================
   CASE STUDY SECTION
========================================================= */

function CaseStudySection({ icon: Icon, title, children }) {
  return (
    <section className="mt-9">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03]">
          <Icon size={17} className="text-violet-400" />
        </div>

        <h4 className="text-base font-semibold text-white">{title}</h4>
      </div>

      <div className="text-sm leading-7 text-zinc-400">{children}</div>
    </section>
  );
}

export default Projects;
