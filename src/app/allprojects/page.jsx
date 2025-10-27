"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "../../i18n/LocaleProvider";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";

export default function ProjectsPage() {
  const { locale } = useLocale();
  const isArabic = locale === "ar";

  const projects = [
    {
      slug: isArabic ? "فيلا-فاخرة" : "luxury-villa",
      title: isArabic ? "فيلا فاخرة" : "Luxury Villa",
      description: isArabic
        ? "مشروع يجمع بين التصميم المعماري العصري والتشطيب الفاخر، بمزيج من الأناقة والراحة."
        : "A full-scale luxury villa project combining modern architecture and elegant finishing.",
      image: "/images/project1.jpg",
    },
    {
      slug: isArabic ? "شقة-عصرية" : "modern-apartment",
      title: isArabic ? "شقة عصرية" : "Modern Apartment",
      description: isArabic
        ? "تصميم داخلي حديث مستوحى من الأسلوب الأوروبي، يعكس التوازن بين الجمال والوظيفة."
        : "A sleek modern apartment interior inspired by contemporary European aesthetics.",
      image: "/images/project2.jpg",
    },
    {
      slug: isArabic ? "مكتب-إداري" : "office-space",
      title: isArabic ? "مكتب إداري" : "Office Space",
      description: isArabic
        ? "تصميم وتشطيب مكتب إداري يجمع بين الهوية البصرية والراحة العملية لفريق العمل."
        : "An office space designed for productivity, aesthetics, and brand identity.",
      image: "/images/project3.jpg",
    },
    {
      slug: isArabic ? "متجر-تجاري" : "retail-store",
      title: isArabic ? "متجر تجاري" : "Retail Store",
      description: isArabic
        ? "مساحة تجارية بتصميم حديث وتجربة عملاء فريدة تبرز هوية العلامة التجارية."
        : "A modern retail store crafted for an immersive customer experience.",
      image: "/images/project4.jpg",
    },
  ];

  return (
    <>
    <Navbar />
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="max-w-6xl mx-auto px-6 py-24 text-[--color-foreground]"
    >
     
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          {isArabic ? "مشاريعنا" : "Our Projects"}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              className={`flex flex-col md:flex-row items-center gap-10 ${
                i % 2 !== 0
                  ? isArabic
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                  : isArabic
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              }`}
            >
              {/* Image */}
              <div className="flex-1 relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h2 className="text-3xl font-semibold mb-4 group-hover:text-[--color-accent] transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {project.description}
                </p>
                <span className="text-[--color-accent] font-medium group-hover:underline">
                  {isArabic ? "عرض المشروع →" : "View Project →"}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
    <Footer />
        </>

  );
}
