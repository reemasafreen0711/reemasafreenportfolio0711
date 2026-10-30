import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

const CONTACT = {
  email: "reemasafreen0711@gmail.com",
  phone: "",
  whatsapp: "918148558828",
  linkedin: "https://www.linkedin.com/in/reema-safreen0711/",
  instagram: "https://www.instagram.com/sky_lub_rs/",
  location: "Tamil Nadu, India",
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: CONTACT.linkedin,
    icon: FaLinkedinIn,
    description: "Let's connect professionally",
  },
  {
    label: "Email",
    href: `mailto:${CONTACT.email}`,
    icon: Mail,
    description: "Send me an email",
  },
  {
    label: "Instagram",
    href: CONTACT.instagram,
    icon: FaInstagram,
    description: "Connect with me on Instagram",
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${CONTACT.whatsapp}`,
    icon: FaWhatsapp,
    description: "Chat with me on WhatsApp",
  },
];

export default function Contact() {
  const reduceMotion = useReducedMotion();

  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.5, ease: "easeOut" };

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);

      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, subject, message } = formData;

    const mailSubject = encodeURIComponent(
      subject.trim() || `Portfolio enquiry from ${name.trim()}`,
    );

    const mailBody = encodeURIComponent(
      `Hi Reema,\n\n${message.trim()}\n\nFrom: ${name.trim()}\nEmail: ${email.trim()}`,
    );

    setFormStatus("Your email app is opening...");

    window.location.href = `mailto:${CONTACT.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background decoration */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}

        <motion.div {...reveal} className="mb-12 max-w-3xl sm:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
            Get in touch
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s build something{" "}
            <span className="text-violet-300">meaningful.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            Have a project idea, collaboration opportunity, or just want to
            connect? I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Main contact layout */}

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Left panel */}

          <motion.div
            {...reveal}
            className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="mb-8">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-400/10 text-violet-300">
                <MessageCircle size={22} />
              </span>

              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Contact information
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/55">
                Choose whichever way works best for you.
              </p>
            </div>

            {/* Email */}

            <div className="flex min-w-0 items-center gap-4 rounded-2xl border border-white/[0.07] bg-black/10 p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                <Mail size={19} />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-xs text-white/45">Email address</p>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-1 block break-all text-sm font-medium text-white transition hover:text-violet-300"
                >
                  {CONTACT.email}
                </a>
              </div>

              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                title="Copy email address"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-white/60 transition hover:border-violet-300/30 hover:bg-violet-400/10 hover:text-violet-300"
              >
                {copied ? <CheckCircle2 size={17} /> : <Copy size={17} />}
              </button>
            </div>

            {/* Optional phone */}

            {CONTACT.phone && (
              <div className="mt-4 flex min-w-0 items-center gap-4 rounded-2xl border border-white/[0.07] bg-black/10 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                  <Phone size={19} />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-xs text-white/45">Phone</p>

                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="mt-1 block truncate text-sm font-medium text-white transition hover:text-violet-300"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
            )}

            {/* Location */}

            <div className="mt-4 flex min-w-0 items-center gap-4 rounded-2xl border border-white/[0.07] bg-black/10 p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                <MapPin size={19} />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-xs text-white/45">Location</p>

                <p className="mt-1 text-sm font-medium text-white">
                  {CONTACT.location}
                </p>
              </div>
            </div>

            {/* Find me online */}

            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                Find me online
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  const isEmail = social.label === "Email";

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={isEmail ? undefined : "_blank"}
                      rel={isEmail ? undefined : "noopener noreferrer"}
                      aria-label={social.label}
                      className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-3 transition duration-300 hover:-translate-y-0.5 hover:border-violet-300/30 hover:bg-violet-400/[0.06]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-violet-300 transition group-hover:border-violet-300/20 group-hover:bg-violet-400/10">
                        <Icon size={19} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium text-white">
                          {social.label}
                        </span>

                        <span className="mt-1 block text-xs text-white/45">
                          {social.description}
                        </span>
                      </span>

                      <ArrowUpRight
                        size={16}
                        className="shrink-0 text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right panel: Contact form */}

          <motion.div
            {...reveal}
            transition={{
              ...transition,
              delay: reduceMotion ? 0 : 0.1,
            }}
            className="h-full min-w-0 rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8 lg:p-9"
          >
            <div className="mb-8">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-400/10 text-violet-300">
                <Send size={21} />
              </span>

              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Send me a message
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/55">
                Tell me a little about what you have in mind.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name and email */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="min-w-0">
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-white/75"
                  >
                    Your name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-violet-300/50 focus:ring-2 focus:ring-violet-300/10"
                  />
                </div>

                <div className="min-w-0">
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-white/75"
                  >
                    Email address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-violet-300/50 focus:ring-2 focus:ring-violet-300/10"
                  />
                </div>
              </div>

              {/* Subject */}

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-white/75"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-violet-300/50 focus:ring-2 focus:ring-violet-300/10"
                />
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-white/75"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your idea, project, or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-white/30 focus:border-violet-300/50 focus:ring-2 focus:ring-violet-300/10"
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-violet-300 px-5 py-4 text-sm font-semibold text-[#171323] transition duration-300 hover:-translate-y-0.5 hover:bg-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2 focus:ring-offset-[#171323]"
              >
                Send message
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              {formStatus && (
                <p
                  role="status"
                  aria-live="polite"
                  className="text-center text-sm text-violet-200"
                >
                  {formStatus}
                </p>
              )}

              <p className="text-center text-xs leading-5 text-white/40">
                Your default email application will open with your message
                prepared. No message is sent automatically.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom cards */}

        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
          <motion.div
            {...reveal}
            className="h-full rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
              What I do
            </p>

            <h3 className="mt-4 text-xl font-semibold text-white">
              Turning ideas into digital experiences.
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/55">
              I enjoy building responsive web applications with thoughtful
              design, useful functionality, and a focus on user experience.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["React", "JavaScript", "Python", "FastAPI", "Laravel"].map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/65"
                  >
                    {technology}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{
              ...transition,
              delay: reduceMotion ? 0 : 0.1,
            }}
            className="h-full rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
              Open to opportunities
            </p>

            <h3 className="mt-4 text-xl font-semibold text-white">
              Let&apos;s create something great together.
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/55">
              I&apos;m interested in connecting with teams and people working on
              meaningful projects, web development, and new ideas.
            </p>

            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-violet-300/25 bg-violet-400/[0.07] px-4 py-3 text-sm font-medium text-violet-200 transition hover:border-violet-300/50 hover:bg-violet-400/[0.12]"
            >
              Let&apos;s talk
              <ArrowUpRight size={17} />
            </a>
          </motion.div>
        </div>

        {/* Footer */}

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            Designed with care. Built with purpose.
          </p>

          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 text-xs text-white/50 transition hover:text-violet-300"
          >
            <Mail size={14} />
            {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  );
}
