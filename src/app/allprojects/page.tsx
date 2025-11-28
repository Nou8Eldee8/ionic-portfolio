"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "../../i18n/LocaleProvider";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";

import { getAllProjects } from "../../data/projects";

export default function ProjectsPage() {
  const { locale } = useLocale();
  const isArabic = locale === "ar";

  const projects = getAllProjects(locale);

  return (
    <>
      <Navbar />
      <section
        dir={isArabic ? "rtl" : "ltr"}
        className="min-h-screen bg-gradient-to-b from-[#faf8f3] to-[#f5e6d3] px-6 py-24"
      >
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-[#1a365d]">
              {isArabic ? "مشاريعنا" : "Our Projects"}
            </h1>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              {isArabic
                ? "استكشف مجموعة من المشاريع التي تعكس التزامنا بالجودة، التفاصيل، والحرفية العالية."
                : "Explore our portfolio of projects that reflect our commitment to quality, detail, and modern craftsmanship."}
            </p>
          </div>

          {/* Projects List */}
          <div className="flex flex-col gap-24">
            {projects.map((project, i) => (
              <Link
                key={i}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div
                  className={`flex flex-col md:flex-row items-center gap-10 ${i % 2 !== 0
                      ? isArabic
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                      : isArabic
                        ? "md:flex-row-reverse"
                        : "md:flex-row"
                    }`}
                >
                  {/* Image */}
                  <div className="flex-1 relative h-[400px] rounded-2xl overflow-hidden shadow-lg border-2 border-transparent group-hover:border-[#d4af37] transition-all duration-300">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h2 className="text-3xl font-semibold mb-4 text-[#1a365d] group-hover:text-[#d4af37] transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-[#475569] leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <span className="text-[#d4af37] font-medium group-hover:underline">
                      {isArabic ? "عرض المشروع →" : "View Project →"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
