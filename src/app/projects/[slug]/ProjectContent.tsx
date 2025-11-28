"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "../../../i18n/LocaleProvider";
import Navbar from "../../../components/Navbar";
import { getProjectBySlug } from "../../../data/projects";

interface ProjectContentProps {
    slug: string;
}

export default function ProjectContent({ slug }: ProjectContentProps) {
    const { locale } = useLocale();
    const isArabic = locale === "ar";

    // Safe access to projectData
    const project = slug ? getProjectBySlug(slug, locale) : undefined;

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
                    className={`text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed ${isArabic ? "font-[Tajawal]" : ""
                        }`}
                >
                    {project.description}
                </p>

                {/* Showreel */}
                {project.videoUrl && (
                    <div className="relative aspect-video w-full mb-20 overflow-hidden rounded-2xl shadow-lg">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={project.videoUrl}
                            title={`${project.title} Showreel`}
                            allowFullScreen
                        />
                    </div>
                )}

                {/* Phases */}
                {project.phases && (
                    <div className="space-y-24">
                        {project.phases.map((phase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
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
                )}
            </section>
        </>
    );
}
