import { Project } from "../types";

export const projectsEn: Project[] = [
    {
        slug: "Alex West",
        title: "Alex West - Full Construction Jobs",
        description: "A full-scale luxury villa project combining modern architecture and elegant finishing.",
        image: "/images/alexwest.jpg",
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
        slug: "radisonblu",
        title: "Radison Blu Hotel - Project",
        description: "A sleek modern apartment interior inspired by contemporary European aesthetics.",
        image: "/images/radisonblu.jpg",
    },
    {
        slug: "Elvan-Factory",
        title: "Elvan Factory",
        description: "An office space designed for productivity, aesthetics, and brand identity.",
        image: "/images/elvan.jpg",
    },
    {
        slug: "denis-textile",
        title: "Retail Store",
        description: "Project is still under construction.",
        image: "/images/denis.jpg",
    },
];

export const projectsAr: Project[] = [
    {
        slug: "اليكس ويست",
        title: "مشروع اليكس ويست",
        description: "مشروع يجمع بين التصميم المعماري العصري والتشطيب الفاخر، بمزيج من الأناقة والراحة.",
        image: "/images/alexwest.jpg",
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
        slug: "radisonblu",
        title: "مشروع فندق رادسيون بلو",
        description: " تصميم داخلي حديث مستوحى من الأسلوب الأوروبي، يعكس التوازن بين الجمال والوظيفة. تم العمل على حمام السباحة وقاعة فاروس وقاعة المؤتمرات - حمامات ومطابخ مصر للطيران",
        image: "/images/radisonblu.jpg",
    },
    {
        slug: "Elvan-Factory",
        title: "مصنع الوان ",
        description: "تصميم وتشطيب مكتب إداري يجمع بين الهوية البصرية والراحة العملية لفريق العمل.",
        image: "/images/elvan.jpg",
    },
    {
        slug: "متجر-تجاري",
        title: "متجر تجاري",
        description: "لا يزال العمل على انشاءات المصنع بالمنطقة الحرة - تابعوا التطورات",
        image: "/images/denis.jpg",
    },
];

export const getProjectBySlug = (slug: string, locale: string): Project | undefined => {
    const projects = locale === "ar" ? projectsAr : projectsEn;
    return projects.find((p) => p.slug === slug);
};

export const getAllProjects = (locale: string): Project[] => {
    return locale === "ar" ? projectsAr : projectsEn;
};
