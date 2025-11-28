"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({ image, title }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#d4af37]">
        <div className="relative h-64 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-lg font-semibold text-[#1a365d]">
        <span className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#d4af37] group-hover:after:w-full after:transition-all after:duration-300">
          {title}
        </span>
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#d4af37]"
        >
          <ArrowRight size={18} />
        </motion.span>
      </div>
    </motion.div>
  );
}
