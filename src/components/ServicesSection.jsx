"use client";

import { Hammer, Ruler, Paintbrush, Building2, Layers, Home } from "lucide-react";
import { useLocale } from "../i18n/LocaleProvider";

export default function ServicesSection() {
  const { locale } = useLocale();

  const isArabic = locale === "ar";

  const services = [
    {
      icon: <Hammer className="w-6 h-6 text-black" />,
      title: isArabic ? "البناء المخصص" : "Custom Construction",
      description: isArabic
        ? "مبانٍ عالية الجودة مصممة لتناسب احتياجاتك التصميمية والوظيفية."
        : "High-quality builds tailored to your design and functional needs.",
    },
    {
      icon: <Ruler className="w-6 h-6 text-black" />,
      title: isArabic ? "التخطيط المعماري" : "Architectural Planning",
      description: isArabic
        ? "من الفكرة إلى المخططات التفصيلية التي تُجسّد رؤيتك."
        : "From concept to detailed plans that bring your vision to life.",
    },
    {
      icon: <Paintbrush className="w-6 h-6 text-black" />,
      title: isArabic ? "التصميم الداخلي" : "Interior Design",
      description: isArabic
        ? "تصاميم عصرية تجمع بين الأناقة والراحة والدقة."
        : "Modern aesthetics that balance style, comfort, and precision.",
    },
    {
      icon: <Building2 className="w-6 h-6 text-black" />,
      title: isArabic ? "مشروعات التجديد" : "Renovation Projects",
      description: isArabic
        ? "تحويل المساحات بلمسة راقية وتشطيب احترافي."
        : "Transforming spaces with a refined touch and professional finish.",
    },
    {
      icon: <Layers className="w-6 h-6 text-black" />,
      title: isArabic ? "توريد المواد" : "Material Sourcing",
      description: isArabic
        ? "نختار أجود المواد يدويًا لضمان الجمال والمتانة."
        : "Only the finest materials — hand-selected for durability and beauty.",
    },
    {
      icon: <Home className="w-6 h-6 text-black" />,
      title: isArabic ? "مشروعات تسليم مفتاح" : "Turnkey Solutions",
      description: isArabic
        ? "تسليم شامل للمشروعات من الفكرة إلى المنزل الجاهز."
        : "Complete project delivery — from idea to finished home.",
    },
  ];

  return (
    <section
      className={`py-24 bg-[#FAFAFA] text-black ${isArabic ? "rtl text-right" : "ltr text-left"}`}
      id="services"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-3">
          {isArabic ? "خدماتنا" : "Our Services"}
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
          {isArabic
            ? "نمزج بين الحرفية والابتكار والاهتمام بالتفاصيل — لنقدم مجموعة متكاملة من الخدمات للمساحات السكنية والتجارية."
            : "We combine craftsmanship, innovation, and attention to detail — offering full-spectrum services for residential and commercial spaces."}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
