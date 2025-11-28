"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "../i18n/LocaleProvider";

const heroImages = [
  "/images/project1.jpg",
  "/images/project2.jpg",
  "/images/project3.jpg",
  "/images/project4.jpg",
];

export default function Hero() {
  const { t, locale } = useLocale();
  const isArabic = locale === "ar";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Track when component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={heroImages[currentIndex]}
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a365d]/70 to-[#1a365d]/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          {mounted ? t("hero.title") : "Precision. Quality. Finishing."}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light"
        >
          {mounted ? t("hero.subtitle") : "Building excellence with precision and care."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/allprojects"
            className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b87333] text-white rounded-full font-semibold text-lg hover:shadow-[0_10px_30px_-5px_rgba(212,175,55,0.5)] transition-all transform hover:scale-105 shadow-lg"
          >
            {mounted ? t("hero.cta") : "View Projects"}
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-[#d4af37]/50 text-white rounded-full font-semibold text-lg hover:bg-[#d4af37]/20 hover:border-[#d4af37] transition-all transform hover:scale-105"
          >
            {mounted ? t("nav.contact") : "Contact Us"}
          </Link>
        </motion.div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
              ? "bg-[#d4af37] w-8 shadow-[0_0_10px_rgba(212,175,55,0.6)]"
              : "bg-white/50 hover:bg-white"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
