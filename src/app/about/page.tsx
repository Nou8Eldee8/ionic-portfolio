"use client";

import Image from "next/image";
import { useLocale } from "../../i18n/LocaleProvider";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { locale } = useLocale();
  const isArabic = locale === "ar";

  return (
    <>
      <Navbar />
      <section
        dir={isArabic ? "rtl" : "ltr"}
        className="min-h-screen bg-gradient-to-b from-[#faf8f3] to-[#f5e6d3] text-[#1a365d] py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-3 text-[#1a365d]">
              {isArabic ? "من نحن" : "About Ionic Contracting"}
            </h1>
            <p className="text-[#475569] max-w-2xl mx-auto leading-relaxed">
              {isArabic
                ? "خبرة تمتد لأكثر من عقد في تنفيذ المشاريع المتكاملة بمعايير جودة عالمية."
                : "Over a decade of excellence in construction, finishing, and integrated project delivery."}
            </p>
          </motion.div>

          {/* Image / Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 rounded-2xl overflow-hidden shadow-lg border-2 border-[#d4af37]/20"
          >
            <Image
              src="/images/about-cover.jpg"
              alt="Ionic Projects"
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg leading-relaxed text-gray-700"
          >
            {isArabic ? (
              <>
                <p>
                  تأسست شركة <strong>Ionic</strong> منذ أكثر من 10 سنوات لتكون واحدة من الشركات
                  الرائدة في مجال المقاولات والتشطيبات، حيث نجحت الشركة في أن تكون شريكًا
                  موثوقًا لعملائها بفضل خبرتها الواسعة واعتمادها على أحدث الأساليب والتقنيات
                  مثل نظام الـ <strong>BIM</strong>، بالإضافة إلى ورشها ومصانعها الخاصة وفريق
                  متكامل من المهندسين والفنيين والمشرفين.
                </p>

                <p>
                  تقدم الشركة حلولاً متكاملة تشمل تشطيب وإنشاء الفيلات، تطوير وتشطيب الفنادق،
                  ومن أبرز إنجازاتها أعمال التشطيب والصيانة في فندق <strong>راديسون بلو</strong>،
                  بالإضافة إلى تطوير وإنشاء المصانع، ومشروعات الساحل الشمالي التي شملت
                  تشطيبات الفيلات والشاليهات وأعمال اللاندسكيب والهاردسكيب.
                </p>

                <p>
                  اكتسبت شركة Ionic ثقة عملائها بفضل جودة التشطيبات، الالتزام بالمواعيد، وسرعة
                  التنفيذ، مستفيدة من بنيتها التحتية الذاتية التي تضم ورشها ومصانعها وفريقها
                  المتكامل من المهندسين والفنيين.
                </p>

                <p>
                  شعار الشركة الأساسي هو <strong>بناء الثقة</strong> مع العميل، إذ تضع الشركة
                  رضا العميل قبل أي مكاسب مادية، إيمانًا منها بأن النجاح الحقيقي يُقاس برضا
                  العملاء واستمرار علاقتهم بها.
                </p>

                <p>
                  تضم قاعدة عملائنا المصريين والأجانب على حد سواء، بفضل التزامنا بتطبيق معايير
                  الجودة العالمية، وليس المحلية فقط، مما جعلنا الخيار الأول للعملاء الباحثين عن
                  الاحترافية والجودة.
                </p>

                <p>
                  كما نتميز بالمرونة في التعاقد من خلال أنظمة متنوعة مثل المقايسات التقليدية أو
                  نظام <strong>Cost Plus</strong> الذي يضمن الشفافية في إدارة التكاليف.
                </p>

                <p>
                  نلتزم بتقديم خدمات ما بعد التنفيذ والصيانة، ونسعى لأن نكون دائمًا الشريك الأول
                  لعملائنا بثقتكم في التزامنا وجودة أعمالنا.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>Ionic Contracting & Finishing</strong> was founded over a decade ago
                  and has since become a trusted leader in the construction and finishing industry.
                  With extensive experience and a commitment to excellence, Ionic relies on
                  cutting-edge technologies such as <strong>BIM</strong>, in-house workshops,
                  and a full team of engineers, technicians, and supervisors ensuring precision
                  and top-tier quality.
                </p>

                <p>
                  The company specializes in complete solutions — from luxury villa construction
                  and hotel development (including finishing and maintenance for{" "}
                  <strong>Radisson Blu Hotel</strong>) to factory construction and North Coast
                  projects that include villa finishing, landscaping, and hardscape works.
                </p>

                <p>
                  Ionic has earned client trust through superior finishing quality, timely delivery,
                  and operational efficiency, thanks to its self-sufficient infrastructure of
                  workshops, factories, and a highly skilled engineering team.
                </p>

                <p>
                  The company’s core value is <strong>building trust</strong> — prioritizing client
                  satisfaction above profit, believing that real success is measured by lasting
                  relationships with clients.
                </p>

                <p>
                  Ionic’s client base includes both Egyptian and international clients, a reflection
                  of its adherence to global quality standards that position it as a top choice for
                  professional construction and finishing solutions.
                </p>

                <p>
                  The company offers flexible contracting models, including traditional estimation
                  systems and the <strong>Cost Plus</strong> model for transparent cost management.
                </p>

                <p>
                  Ionic remains committed to post-delivery maintenance and ongoing support —
                  ensuring clients always have a reliable partner for quality and excellence.
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
