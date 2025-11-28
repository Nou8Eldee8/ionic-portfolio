"use client";

import { Hammer, Ruler, Paintbrush, Building2, Layers, Home } from "lucide-react";
import { useLocale } from "../i18n/LocaleProvider";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const { locale, t } = useLocale();
  const isArabic = locale === "ar";

  const services = [
    {
      icon: <Hammer className="w-6 h-6 text-white" />,
      title: t("services.items.custom.title"),
      description: t("services.items.custom.description"),
    },
    {
      icon: <Ruler className="w-6 h-6 text-white" />,
      title: t("services.items.planning.title"),
      description: t("services.items.planning.description"),
    },
    {
      icon: <Paintbrush className="w-6 h-6 text-white" />,
      title: t("services.items.interior.title"),
      description: t("services.items.interior.description"),
    },
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      title: t("services.items.renovation.title"),
      description: t("services.items.renovation.description"),
    },
    {
      icon: <Layers className="w-6 h-6 text-white" />,
      title: t("services.items.sourcing.title"),
      description: t("services.items.sourcing.description"),
    },
    {
      icon: <Home className="w-6 h-6 text-white" />,
      title: t("services.items.turnkey.title"),
      description: t("services.items.turnkey.description"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      className={`py-24 bg-gradient-to-b from-[#faf8f3] to-[#f5e6d3] text-[#1a365d] ${isArabic ? "rtl text-right" : "ltr text-left"}`}
      id="services"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-3">
            {t("services.title")}
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            {t("services.intro")}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-xl hover:border-[#d4af37] transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-4 w-14 h-14 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b87333] flex items-center justify-center shadow-lg group-hover:shadow-[0_10px_30px_-5px_rgba(212,175,55,0.4)] transition-shadow duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#1a365d] group-hover:text-[#d4af37] transition-colors duration-300">{service.title}</h3>
              <p className="text-[#475569] text-[15px] leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
