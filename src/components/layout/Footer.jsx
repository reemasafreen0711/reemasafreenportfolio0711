import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Mail, Heart, Code2 } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import Container from "../common/Container";

const FOOTER = {
  name: "Reema Safreen S S",
  role: "Full-Stack Developer",
  email: "reemasafreen0711@gmail.com",
  github: "https://github.com/reemasafreen0711",
  linkedin: "https://www.linkedin.com/in/reema-safreen0711/",
  instagram: "https://www.instagram.com/sky_lub_rs/",
  whatsapp: "918148558828",
};

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      label: "GitHub",
      href: FOOTER.github,
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: FOOTER.linkedin,
      icon: FaLinkedinIn,
    },
    {
      label: "Instagram",
      href: FOOTER.instagram,
      icon: FaInstagram,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/${FOOTER.whatsapp}`,
      icon: FaWhatsapp,
    },
    {
      label: "Email",
      href: `mailto:${FOOTER.email}`,
      icon: Mail,
    },
  ];

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/[0.08] bg-[#07070b] text-white">
      {/* Background decoration */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.12, 0.24, 0.12],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px] sm:h-96 sm:w-96"
        />

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      </div>

      <Container className="relative z-10">
        {/* Main footer */}

        <div className="grid gap-12 py-14 sm:py-16 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:gap-16 lg:py-20">
          {/* Brand section */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#home"
              aria-label="Reema Safreen - Back to home"
              className="group inline-flex items-center gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.06, rotate: 3 }}
                transition={{ duration: 0.25 }}
                className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/15 to-white/[0.03] shadow-lg shadow-violet-950/20"
              >
                <img
                  src="/logo1.png"
                  alt="Reema Safreen logo"
                  className="h-full w-full object-contain p-1.5"
                />

                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.04]" />
              </motion.div>

              <div>
                <p className="text-sm font-bold tracking-[0.12em] text-white transition-colors group-hover:text-violet-200 sm:text-base">
                  REEMA SAFREEN
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                  Developer Portfolio
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-400">
              I build modern, responsive web applications with thoughtful design
              and reliable functionality, combining frontend creativity with
              backend development.
            </p>

            <a
              href={`mailto:${FOOTER.email}`}
              className="group mt-6 inline-flex max-w-full items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 transition-all duration-300 hover:border-violet-400/25 hover:bg-violet-500/[0.07]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300 transition-colors group-hover:bg-violet-500/20">
                <Mail size={17} />
              </span>

              <span className="min-w-0">
                <span className="block text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                  Get in touch
                </span>

                <span className="mt-1 block break-all text-xs font-medium text-zinc-200 transition-colors group-hover:text-violet-200 sm:text-sm">
                  {FOOTER.email}
                </span>
              </span>

              <ArrowUpRight
                size={16}
                className="ml-1 shrink-0 text-zinc-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
              />
            </a>
          </motion.div>

          {/* Navigation */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-violet-500" />

              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Quick Links
              </h2>
            </div>

            <nav
              aria-label="Footer navigation"
              className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4"
            >
              {footerLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="group flex w-fit items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-zinc-700 transition-all duration-300 group-hover:bg-violet-400 group-hover:shadow-[0_0_8px_rgba(167,139,250,0.8)]" />

                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Connect */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-violet-500" />

              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Let&apos;s Connect
              </h2>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-7 text-zinc-400">
              Have a project idea or an opportunity in mind? Let&apos;s connect
              and build something meaningful together.
            </p>

            {/* Social links */}

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const isEmail = social.label === "Email";

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    aria-label={social.label}
                    title={social.label}
                    whileHover={{ y: -4, scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.03] text-zinc-300 transition-colors duration-300 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
                  >
                    <Icon size={19} />
                  </motion.a>
                );
              })}
            </div>

            <p className="mt-3 text-xs leading-5 text-zinc-500">
              GitHub · LinkedIn · Instagram · WhatsApp · Email
            </p>

            {/* Availability status */}

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-3 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs text-zinc-300">
                Open to opportunities
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}

        <div className="border-t border-white/[0.08] py-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-center text-xs leading-6 text-zinc-500 sm:text-left">
              © {currentYear} {FOOTER.name}. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs text-zinc-500 sm:justify-end">
              <Code2 size={14} className="text-violet-400" />

              <span>Designed &amp; built with</span>

              <Heart size={12} className="fill-violet-400 text-violet-400" />

              <span>using React</span>
            </div>

            <motion.button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.94 }}
              className="group mx-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.08] text-violet-200 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/15 hover:shadow-lg hover:shadow-violet-950/30 sm:mx-0"
            >
              <ArrowUp
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </motion.button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
