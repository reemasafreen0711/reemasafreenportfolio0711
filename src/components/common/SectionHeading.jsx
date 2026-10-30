import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`mb-14 ${
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }`}
    >
      {eyebrow && (
        <div className="mb-4 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
          <span className="h-px w-8 bg-violet-500" />
          {eyebrow}
        </div>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
