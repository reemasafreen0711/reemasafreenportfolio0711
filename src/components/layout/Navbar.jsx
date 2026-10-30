import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Download, ArrowUpRight, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

/* =========================================================
   NAVIGATION ITEMS
========================================================= */

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

/* =========================================================
   CONTACT DETAILS
========================================================= */

const CONTACT = {
  email: "reemasafreen0711@gmail.com",
  github: "https://github.com/safreen0711",
  linkedin: "https://www.linkedin.com/in/reema-safreen0711/",
  resume: "/Resume1.pdf",
};

/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  /* =======================================================
     SCROLL AND ACTIVE SECTION
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const scrollPosition = window.scrollY + 180;
      let currentSection = "home";

      NAV_ITEMS.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (section && scrollPosition >= section.offsetTop) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =======================================================
     CLOSE MENU ON DESKTOP
  ======================================================= */

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");

    const handleResize = (event) => {
      if (event.matches) {
        setMobileOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const scrollToSection = (id) => {
    setMobileOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* =======================================================
     RESUME DOWNLOAD
  ======================================================= */

  const downloadResume = () => {
    const link = document.createElement("a");

    link.href = CONTACT.resume;
    link.download = "Reema-Safreen-Resume.pdf";

    document.body.appendChild(link);
    link.click();
    link.remove();

    setMobileOpen(false);
  };

  /* =======================================================
     SOCIAL BUTTON STYLE
  ======================================================= */

  const socialButtonClass =
    "flex h-10 w-10 shrink-0 items-center justify-center " +
    "rounded-xl border border-white/[0.09] bg-white/[0.025] " +
    "text-zinc-400 transition-all duration-300 " +
    "hover:-translate-y-0.5 hover:border-violet-400/40 " +
    "hover:bg-violet-500/10 hover:text-white";

  /* =======================================================
     NAVIGATION LINK
  ======================================================= */

  const renderNavLink = (item, mobile = false) => {
    const isActive = activeSection === item.id;

    if (mobile) {
      return (
        <button
          type="button"
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          aria-current={isActive ? "location" : undefined}
          className={`group flex min-h-[50px] w-full items-center justify-between rounded-xl border px-4 text-left text-sm font-medium transition-all duration-200 ${
            isActive
              ? "border-violet-400/20 bg-violet-500/[0.12] text-white"
              : "border-transparent text-zinc-400 hover:border-white/[0.06] hover:bg-white/[0.04] hover:text-white"
          }`}
        >
          <span className="flex items-center gap-3">
            <span
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                isActive
                  ? "bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]"
                  : "bg-zinc-700 group-hover:bg-zinc-400"
              }`}
            />
            {item.label}
          </span>

          {isActive && (
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300">
              Current
            </span>
          )}
        </button>
      );
    }

    return (
      <button
        type="button"
        key={item.id}
        onClick={() => scrollToSection(item.id)}
        aria-current={isActive ? "location" : undefined}
        className={`relative whitespace-nowrap rounded-lg px-3 py-2.5 text-[13px] font-medium transition-colors duration-200 2xl:px-3.5 2xl:text-sm ${
          isActive ? "text-white" : "text-zinc-400 hover:text-white"
        }`}
      >
        {item.label}

        {isActive && (
          <motion.span
            layoutId="navbar-active-indicator"
            className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 2xl:inset-x-3.5"
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />
        )}
      </button>
    );
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-white/[0.08] bg-[#08080c]/90 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-2xl"
          : "border-b border-transparent bg-[#08080c]/40 backdrop-blur-md"
      }`}
    >
      {/* ===================================================
          MAIN NAVBAR
      ==================================================== */}

      <div className="mx-auto flex h-[70px] w-full max-w-[1440px] items-center justify-between gap-3 px-4 sm:h-[76px] sm:px-6 lg:px-8 2xl:px-12">
        {/* BRAND */}

        <button
          type="button"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
          className="group flex min-w-0 shrink items-center gap-3 text-left"
        >
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] border border-violet-400/25 bg-gradient-to-br from-violet-500/[0.13] to-fuchsia-500/[0.04] p-[1px] shadow-[0_0_25px_rgba(139,92,246,0.08)] transition-all duration-300 group-hover:border-violet-400/60 group-hover:shadow-[0_0_28px_rgba(139,92,246,0.18)] sm:h-11 sm:w-11">
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[12px] bg-[#09090d]">
              <img
                src="/logo1.png"
                alt="RS - Reema Safreen"
                className="h-full w-full object-contain p-1"
              />
            </div>
          </div>

          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-[14px] font-semibold tracking-[0.015em] text-white transition-colors duration-300 group-hover:text-violet-200 sm:text-[15px]">
              Reema Safreen
            </p>

            <p className="mt-1 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.13em] text-zinc-500 sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.55)]" />
              Full-Stack Developer
            </p>
          </div>
        </button>

        {/* DESKTOP NAVIGATION */}

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-0.5 xl:flex"
        >
          {NAV_ITEMS.map((item) => renderNavLink(item))}
        </nav>

        {/* DESKTOP ACTIONS */}

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className={socialButtonClass}
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub size={16} />
          </a>

          {CONTACT.linkedin && (
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={socialButtonClass}
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn size={16} />
            </a>
          )}

          <a
            href={`mailto:${CONTACT.email}`}
            className={socialButtonClass}
            aria-label="Email"
            title="Email"
          >
            <Mail size={16} />
          </a>

          <button
            type="button"
            onClick={downloadResume}
            className="ml-1 inline-flex h-10 shrink-0 items-center gap-2 rounded-xl border border-white/[0.12] bg-white px-4 text-[13px] font-semibold !text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-200 hover:shadow-[0_8px_25px_rgba(139,92,246,0.18)]"
          >
            <Download size={15} />
            <span>Resume</span>
            <ArrowUpRight size={13} />
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}

        <button
          type="button"
          onClick={() => setMobileOpen((previous) => !previous)}
          className="relative z-[60] flex h-10 w-10 shrink-0 touch-manipulation items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.04] text-white transition-all duration-200 hover:border-violet-400/50 hover:bg-violet-500/10 focus:outline-none focus:ring-2 focus:ring-violet-500/50 xl:hidden sm:h-11 sm:w-11"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -70, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 70, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                <X size={21} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 70, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -70, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                <Menu size={21} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* ===================================================
          MOBILE MENU
      ==================================================== */}

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full z-[55] max-h-[calc(100dvh-70px)] overflow-y-auto overscroll-contain border-t border-white/[0.08] bg-[#09090d]/[0.98] shadow-[0_25px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl xl:hidden"
          >
            <div className="mx-auto w-full max-w-[1440px] px-4 pb-6 pt-5 sm:px-6 sm:pb-7">
              {/* MOBILE PROFILE CARD */}

              <div className="mb-5 flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3.5 sm:p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-violet-400/20 bg-violet-500/[0.08]">
                  <img
                    src="/logo1.png"
                    alt="Reema Safreen logo"
                    className="h-full w-full object-contain p-1"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-white">
                    Reema Safreen
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    Full-Stack Developer
                  </p>
                </div>

                <Sparkles size={17} className="shrink-0 text-violet-300" />
              </div>

              {/* NAVIGATION */}

              <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                Navigation
              </p>

              <nav
                className="flex flex-col gap-1"
                aria-label="Mobile navigation"
              >
                {NAV_ITEMS.map((item) => renderNavLink(item, true))}
              </nav>

              {/* SOCIAL LINKS */}

              <div className="mt-5 border-t border-white/[0.08] pt-5">
                <p className="mb-3 px-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  Connect with me
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={CONTACT.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.025] text-sm text-zinc-300 transition-all hover:border-violet-400/30 hover:bg-violet-500/[0.08] hover:text-white"
                  >
                    <FaGithub size={16} />
                    GitHub
                    <ArrowUpRight size={13} className="text-zinc-600" />
                  </a>

                  {CONTACT.linkedin ? (
                    <a
                      href={CONTACT.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.025] text-sm text-zinc-300 transition-all hover:border-violet-400/30 hover:bg-violet-500/[0.08] hover:text-white"
                    >
                      <FaLinkedinIn size={16} />
                      LinkedIn
                      <ArrowUpRight size={13} className="text-zinc-600" />
                    </a>
                  ) : (
                    <a
                      href={`mailto:${CONTACT.email}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.025] text-sm text-zinc-300 transition-all hover:border-violet-400/30 hover:bg-violet-500/[0.08] hover:text-white"
                    >
                      <Mail size={16} />
                      Email
                      <ArrowUpRight size={13} className="text-zinc-600" />
                    </a>
                  )}
                </div>
              </div>

              {/* RESUME CTA */}

              <button
                type="button"
                onClick={downloadResume}
                className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-violet-400 px-4 py-3 text-sm font-semibold !text-white shadow-[0_8px_25px_rgba(139,92,246,0.16)] transition-all duration-300 hover:from-violet-400 hover:to-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-violet-300/60"
              >
                <Download size={17} />
                Download Resume
                <ArrowUpRight size={15} />
              </button>

              <p className="mt-4 text-center text-[11px] text-zinc-600">
                Designed with care · Built for the web
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
