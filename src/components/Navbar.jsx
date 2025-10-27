"use client";

import Link from "next/link";
import { useLocale } from "../i18n/LocaleProvider";
import Image from "next/image";

export default function Navbar() {
  const { locale, setLocale, t } = useLocale();

const links = [
  { name: t("nav.home"), href: "/" },                // Root page
  { name: t("nav.services"), href: "/#services" },   // Scrolls to section on homepage
  { name: t("nav.projects"), href: "/allprojects" },    // Goes to projects page
  { name: t("nav.about"), href: "/#about" },         // Scrolls to about section
  { name: t("nav.contact"), href: "/#contact" },     // Scrolls to contact section
];

  return (
    <nav className="w-full bg-[--color-background] text-[--color-foreground]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
<Image
  src="/images/logo.png"
  alt="Logo"
  width={120}
  height={60}
  priority
/>

        {/* Links */}
        <div className="flex items-center gap-6">
          <div className="flex space-x-8 text-lg font-medium">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="relative group inline-block px-1">
                <span className="group-hover:text-[--color-accent] transition-colors duration-300">
                  {link.name}
                </span>
                <span className="absolute left-0 -bottom-1 block h-[2px] w-0 bg-[--color-accent] rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Language toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLocale("en")}
              className={`px-3 py-1 rounded ${locale === "en" ? "bg-[--color-accent] text-white" : "bg-transparent text-[--color-foreground] border border-gray-200"}`}
              aria-pressed={locale === "en"}
            >
              EN
            </button>

            <button
              onClick={() => setLocale("ar")}
              className={`px-3 py-1 rounded ${locale === "ar" ? "bg-[--color-accent] text-white" : "bg-transparent text-[--color-foreground] border border-gray-200"}`}
              aria-pressed={locale === "ar"}
            >
              ع
            </button>
          </div>
        </div>
      </div>

      {/* Main centered underline under navbar */}
      <div className="border-b-2 border-[--color-accent] w-2/3 mx-auto rounded-full" />
    </nav>
  );
}
