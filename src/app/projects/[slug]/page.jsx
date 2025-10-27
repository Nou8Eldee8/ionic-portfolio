"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "../../../i18n/LocaleProvider"; // adjust path if needed
import Navbar from "../../../components/Navbar";

const projectData = {
  "luxury-villa": {
    title: "Luxury Villa Project",
    description:
      "A full-scale construction and interior finishing project blending contemporary design with timeless comfort. Our team handled everything from architectural planning to final furnishing.",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    phases: [
      {
        title: "Foundation & Structure",
        description:
          "We began with a solid foundation, ensuring every structural element met the highest safety and durability standards.",
        image: "/images/project1-phase1.jpg",
      },
      {
        title: "Interior Design & Finishing",
        description:
          "Our interior design team selected premium materials, creating a modern yet warm aesthetic with balanced lighting and textures.",
        image: "/images/project1-phase2.jpg",
      },
      {
        title: "Final Touches & Handover",
        description:
          "Every detail was refined — from landscaping to interior styling — before the final handover to the client.",
        image: "/images/project1-phase3.jpg",
      },
    ],
  },

  "فيلا-فاخرة": {
    title: "مشروع فيلا فاخرة",
    description:
      "مشروع متكامل يجمع بين التصميم المعماري العصري والتشطيب الفاخر. تولينا جميع مراحل العمل من التخطيط وحتى التسليم النهائي.",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    phases: [
      {
        title: "الأساسات والهيكل",
        description:
          "بدأنا من الأساس بتشييد هيكل قوي يضمن الأمان والمتانة على المدى الطويل.",
        image: "/images/project1-phase1.jpg",
      },
      {
        title: "التصميم الداخلي والتشطيب",
        description:
          "تم اختيار خامات فاخرة بألوان دافئة وتصميم متوازن يجمع بين الفخامة والراحة.",
        image: "/images/project1-phase2.jpg",
      },
      {
        title: "اللمسات النهائية والتسليم",
        description:
          "تم الاهتمام بأدق التفاصيل من تنسيق الحدائق وحتى اختيار الإكسسوارات النهائية.",
        image: "/images/project1-phase3.jpg",
      },
    ],
  },
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug;
  const { locale } = useLocale();
  const isArabic = locale === "ar";
  const project = projectData[slug];

  if (!project) {
    return (
    
      <div className="max-w-4xl mx-auto py-24 px-6 text-center">
       
        <h1 className="text-3xl font-bold text-[--color-foreground] mb-4">
          {isArabic ? "المشروع غير موجود" : "Project not found"}
        </h1>
        <p className="text-gray-600">
          {isArabic
            ? "لم نتمكن من العثور على هذا المشروع."
            : "We couldn’t find this project."}
        </p>
      </div>
    );
  }

  return (
    <>
    <Navbar />
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      
      {/* Title */}
      <h1 className="text-5xl font-bold text-center text-[--color-foreground] mb-6">
        {project.title}
      </h1>

      {/* Description */}
      <p
        className={`text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed ${
          isArabic ? "font-[Tajawal]" : ""
        }`}
      >
        {project.description}
      </p>

      {/* Showreel */}
      <div className="relative aspect-video w-full mb-20 overflow-hidden rounded-2xl shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={project.videoUrl}
          title={`${project.title} Showreel`}
          allowFullScreen
        />
      </div>

      {/* Phases */}
      <div className="space-y-24">
        {project.phases.map((phase, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
            <div className="flex-1 relative h-[350px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src={phase.image}
                alt={phase.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-[--color-accent] mb-3">
                {phase.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {phase.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
     </>
  );
}
