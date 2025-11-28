"use client";

import Link from "next/link";
import { useLocale } from "../i18n/LocaleProvider";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { locale, setLocale, t } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Track when component is mounted to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.services"), href: "/#services" },
    { name: t("nav.projects"), href: "/allprojects" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <Image
            src="/images/logo.png"
            alt="Ionic Logo"
            width={100}
            height={50}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex space-x-6 text-lg font-medium text-[--color-foreground]">
            {mounted ? (
              links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group inline-block px-1"
                >
                  <span className="group-hover:text-[#d4af37] transition-colors duration-300">
                    {link.name}
                  </span>
                  <span className="absolute left-0 -bottom-1 block h-[2px] w-0 bg-[#d4af37] rounded-full transition-all duration-300 group-hover:w-full" />
                </Link>
              ))
            ) : (
              // Placeholder during SSR to prevent hydration mismatch
              <>
                <span className="px-1">Home</span>
                <span className="px-1">Services</span>
                <span className="px-1">Projects</span>
                <span className="px-1">About</span>
                <span className="px-1">Contact</span>
              </>
            )}
          </div>

          {/* Language Toggle */}
          <div className="flex items-center gap-2 border-l pl-4 border-gray-300">
            <button
              onClick={() => setLocale("en")}
              className={`px-2 py-1 text-sm rounded transition-colors ${locale === "en"
                  ? "bg-[#d4af37] text-white"
                  : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              EN
            </button>
            <button
              onClick={() => setLocale("ar")}
              className={`px-2 py-1 text-sm rounded transition-colors ${locale === "ar"
                  ? "bg-[#d4af37] text-white"
                  : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              ع
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 p-2 text-[--color-foreground]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 text-2xl font-medium text-[--color-foreground]">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Language Toggle */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={() => {
                  setLocale("en");
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-lg border ${locale === "en"
                    ? "bg-[#d4af37] text-white border-[#d4af37]"
                    : "border-gray-300"
                  }`}
              >
                English
              </button>
              <button
                onClick={() => {
                  setLocale("ar");
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-lg border ${locale === "ar"
                    ? "bg-[#d4af37] text-white border-[#d4af37]"
                    : "border-gray-300"
                  }`}
              >
                العربية
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
