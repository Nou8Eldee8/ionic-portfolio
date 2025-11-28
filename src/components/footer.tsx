"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useLocale } from "../i18n/LocaleProvider";

export default function Footer() {
  const { locale } = useLocale();
  const isArabic = locale === "ar";

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-gradient-to-b from-[#1a365d] to-[#2d4a7c] text-white border-t-4 border-[#d4af37] mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* --- Logo & Socials --- */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={120}
              height={60}
              priority
            />
            <h2 className="text-xl font-semibold text-[#d4af37]">Ionic Interiors</h2>
          </div>

          <div className="flex gap-4 mt-4">
            {socialLinks.map(({ icon: Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full hover:bg-[#d4af37]/20 hover:text-[#d4af37] transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* --- Contact Info --- */}
        <div
          className={`flex flex-col ${isArabic ? "md:items-end text-right" : "md:items-start text-left"
            }`}
        >
          <h3 className="text-lg font-semibold mb-3 text-[#d4af37]">
            {isArabic ? "معلومات التواصل" : "Contact Information"}
          </h3>
          <p className="text-gray-300">
            {isArabic
              ? "الإسكندرية، مصر"
              : "Alexandria, Egypt"}
          </p>
          <p className="text-gray-300 mt-1">
            <a href="tel:+201234567890" className="hover:underline">
              +20 123 456 7890
            </a>
          </p>
          <p className="text-gray-300 mt-1">
            <a href="mailto:info@nouragency.com" className="hover:underline">
              info@nouragency.com
            </a>
          </p>
        </div>

        {/* --- Contact Us CTA --- */}
        <div
          className={`flex flex-col justify-center ${isArabic ? "md:items-end text-right" : "md:items-start text-left"
            }`}
        >
          <h3 className="text-lg font-semibold mb-3 text-[#d4af37]">
            {isArabic ? "تواصل معنا" : "Get in Touch"}
          </h3>
          <p className="text-gray-300 mb-4">
            {isArabic
              ? "هل لديك مشروع أو فكرة؟ يسعدنا الاستماع إليك!"
              : "Have a project or idea? We’d love to hear from you!"}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#d4af37] to-[#b87333] text-white px-6 py-2 rounded-full hover:shadow-[0_10px_30px_-5px_rgba(212,175,55,0.5)] transition-all transform hover:scale-105"
          >
            {isArabic ? "اتصل بنا" : "Contact Us"}
          </Link>
        </div>
      </div>

      {/* --- Footer Bottom --- */}
      <div className="border-t border-[#d4af37]/30 py-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Ionic Interiors {" "}
        {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
      </div>
    </footer>
  );
}
