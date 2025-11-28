import { Project } from "../types";

export const projectsEn: Project[] = [
    {
        slug: "luxury-villa",
        title: "Luxury Villa",
        description: "A full-scale luxury villa project combining modern architecture and elegant finishing.",
        image: "/images/project1.jpg",
        videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
        phases: [
            {
                title: "Foundation & Structure",
                description: "We began with a solid foundation, ensuring every structural element met the highest safety and durability standards.",
                image: "/images/project1.jpg", // Using main image as placeholder if phase images missing
            },
            {
                title: "Interior Design & Finishing",
                description: "Our interior design team selected premium materials, creating a modern yet warm aesthetic with balanced lighting and textures.",
                image: "/images/project2.jpg",
            },
            {
                title: "Final Touches & Handover",
                description: "Every detail was refined — from landscaping to interior styling — before the final handover to the client.",
                image: "/images/project3.jpg",
            },
        ],
    },
    {
        slug: "modern-apartment",
        title: "Modern Apartment",
        description: "A sleek modern apartment interior inspired by contemporary European aesthetics.",
        image: "/images/project2.jpg",
    },
    {
        slug: "office-space",
        title: "Office Space",
        description: "An office space designed for productivity, aesthetics, and brand identity.",
        image: "/images/project3.jpg",
    },
    {
        slug: "retail-store",
        title: "Retail Store",
        description: "A modern retail store crafted for an immersive customer experience.",
        image: "/images/project4.jpg",
    },
];

export const projectsAr: Project[] = [
    {
        slug: "فيلا-فاخرة",
        title: "فيلا فاخرة",
        description: "مشروع يجمع بين التصميم المعماري العصري والتشطيب الفاخر، بمزيج من الأناقة والراحة.",
        image: "/images/project1.jpg",
        videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
        phases: [
            {
                title: "الأساسات والهيكل",
                description: "بدأنا من الأساس بتشييد هيكل قوي يضمن الأمان والمتانة على المدى الطويل.",
                image: "/images/project1.jpg",
            },
            {
                title: "التصميم الداخلي والتشطيب",
                description: "تم اختيار خامات فاخرة بألوان دافئة وتصميم متوازن يجمع بين الفخامة والراحة.",
                image: "/images/project2.jpg",
            },
            {
                title: "اللمسات النهائية والتسليم",
                description: "تم الاهتمام بأدق التفاصيل من تنسيق الحدائق وحتى اختيار الإكسسوارات النهائية.",
                image: "/images/project3.jpg",
            },
        ],
    },
    {
        slug: "شقة-عصرية",
        title: "شقة عصرية",
        description: "تصميم داخلي حديث مستوحى من الأسلوب الأوروبي، يعكس التوازن بين الجمال والوظيفة.",
        image: "/images/project2.jpg",
    },
    {
        slug: "مكتب-إداري",
        title: "مكتب إداري",
        description: "تصميم وتشطيب مكتب إداري يجمع بين الهوية البصرية والراحة العملية لفريق العمل.",
        image: "/images/project3.jpg",
    },
    {
        slug: "متجر-تجاري",
        title: "متجر تجاري",
        description: "مساحة تجارية بتصميم حديث وتجربة عملاء فريدة تبرز هوية العلامة التجارية.",
        image: "/images/project4.jpg",
    },
];

export const getProjectBySlug = (slug: string, locale: string): Project | undefined => {
    const projects = locale === "ar" ? projectsAr : projectsEn;
    return projects.find((p) => p.slug === slug);
};

export const getAllProjects = (locale: string): Project[] => {
    return locale === "ar" ? projectsAr : projectsEn;
};
