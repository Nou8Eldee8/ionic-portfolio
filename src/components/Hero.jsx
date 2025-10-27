"use client";

import { useLocale } from "../i18n/LocaleProvider";
import ProjectCard from "./ProjectCard";

export default function Hero() {
  const { t, locale } = useLocale();
  const isArabic = locale === "ar";

  const projects = [
    { image: "/images/project1.jpg", title: t("hero.projects.project1") },
    { image: "/images/project2.jpg", title: t("hero.projects.project2") },
    { image: "/images/project3.jpg", title: t("hero.projects.project3") },
    { image: "/images/project4.jpg", title: t("hero.projects.project4") },
  ];

  return (
    <section
      id="home"
      dir={isArabic ? "rtl" : "ltr"}
      className={`flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 gap-12 ${
        isArabic ? "md:flex-row-reverse text-right" : "text-left"
      }`}
    >
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left">
        <h1
          className={`text-5xl font-bold leading-tight mb-6 text-[--color-foreground] ${
            isArabic ? "md:text-right" : "md:text-left"
          }`}
        >
          {t("hero.title.part1")}{" "}
          <span className="text-[--color-accent]">{t("hero.title.part2")}</span>
        </h1>
        <p
          className={`text-lg text-gray-700 mb-8 max-w-md mx-auto md:mx-0 ${
            isArabic ? "md:text-right" : "md:text-left"
          }`}
        >
          {t("hero.subtitle")}
        </p>
        <div className={isArabic ? "md:text-right" : "md:text-left"}>
          <button className="bg-[#4169E1] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition-all">
            {t("hero.cta")}
          </button>
        </div>
      </div>

      {/* Right Section (Grid) */}
      <div className="flex-1 grid grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} image={p.image} title={p.title} />
        ))}
      </div>
    </section>
  );
}
