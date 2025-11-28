"use client";

import { useState } from "react";
import { useLocale } from "../../i18n/LocaleProvider";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  const { locale } = useLocale?.() || { locale: "en" };
  const isArabic = locale === "ar";

  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    setStatus("loading");

    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form.reset();
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <>
      <Navbar />
      <section
        dir={isArabic ? "rtl" : "ltr"}
        className="min-h-screen bg-gradient-to-b from-[#faf8f3] to-[#f5e6d3] text-[#1a365d] py-20 px-6"
      >
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-3 text-[#1a365d]">
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </h1>
            <p className="text-[#475569] max-w-xl mx-auto leading-relaxed">
              {isArabic
                ? "هل لديك مشروع ترغب في تنفيذه؟ املأ النموذج أدناه وسيتواصل معك أحد مهندسينا."
                : "Have a project in mind? Fill out the form below and one of our engineers will get in touch soon."}
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg border border-[#d4af37]/20 space-y-6"
          >
            <div>
              <label className="block mb-2 font-medium">
                {isArabic ? "اسمك بالكامل" : "Your Full Name"}
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder={isArabic ? "اكتب اسمك هنا" : "Enter your full name"}
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                {isArabic ? "نوع مشروعك؟" : "Unit Type"}
              </label>
              <input
                required
                type="text"
                name="unitType"
                placeholder={
                  isArabic
                    ? "مثال: وحدة سكنية، فيلا، مصنع، مكتب إداري"
                    : "e.g. Residential unit, Villa, Factory, Office"
                }
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                {isArabic ? "رقم هاتفك" : "Phone Number"}
              </label>
              <input
                required
                type="tel"
                name="phone"
                placeholder={isArabic ? "أدخل رقم هاتفك" : "Enter your phone number"}
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                required
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#222]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                {isArabic ? "مساحة الوحدة (بالمتر المربع)" : "Unit Size (m²)"}
              </label>
              <input
                required
                type="number"
                name="unitSize"
                placeholder={isArabic ? "أدخل المساحة هنا" : "Enter the area in m²"}
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-gradient-to-r from-[#d4af37] to-[#b87333] text-white py-3 rounded-xl font-semibold hover:shadow-[0_10px_30px_-5px_rgba(212,175,55,0.5)] transition-all transform hover:scale-105"
            >
              {status === "loading"
                ? isArabic
                  ? "جاري الإرسال..."
                  : "Sending..."
                : isArabic
                  ? "إرسال"
                  : "Send"}
            </button>

            {/* Status Message */}
            {status === "success" && (
              <p className="text-green-600 text-center font-medium mt-4">
                {isArabic
                  ? "تم إرسال الرسالة بنجاح! سنتواصل معك قريبًا."
                  : "Your message has been sent successfully! We’ll get back to you soon."}
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center font-medium mt-4">
                {isArabic
                  ? "حدث خطأ أثناء الإرسال. حاول مرة أخرى لاحقًا."
                  : "There was an error sending your message. Please try again later."}
              </p>
            )}
          </motion.form>
        </div>
      </section>
      <Footer />
    </>
  );
}
