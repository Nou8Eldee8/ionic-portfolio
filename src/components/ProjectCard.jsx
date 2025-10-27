"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({ image, title }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
      className="group cursor-pointer"
    >
      <div className="overflow-hidden rounded-2xl shadow-sm">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-3 flex items-center gap-2 text-lg font-semibold text-[--color-foreground]">
        <span className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[--color-accent] group-hover:after:w-full after:transition-all after:duration-300">
          {title}
        </span>
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="text-[--color-accent]"
        >
          <ArrowRight size={18} />
        </motion.span>
      </div>
    </motion.div>
  );
}
