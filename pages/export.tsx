import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/store";
import { translations } from "@/lib/translations";
import {
  FiPlay,
  FiX,
  FiArrowRight,
  FiShield,
  FiPackage,
  FiTruck,
  FiCheckCircle,
  FiGlobe
} from "react-icons/fi";

const Export = () => {
  const { language } = useAppStore();
  const t = translations[language];
  const isEn = language === "en";

  const [activeTab, setActiveTab] = useState<"quality" | "processing" | "logistics">("quality");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  /* 6 Services matching service.html */
  const services = [
    {
      id: 1,
      title_en: "Global Sourcing",
      title_ar: "التوريد الزراعي العالمي",
      desc_en:
        "We source and export premium-quality herbs and spices such as basil, peppermint, thyme, and fennel to clients worldwide, ensuring reliability and compliance.",
      desc_ar:
        "نقوم بتوريد وتصدير أرقى الأعشاب والبهارات مثل الريحان والنعناع والزعتر والشمر للعملاء حول العالم مع ضمان الامتثال والموثوقية.",
      iconImg: "/assets/img/service/service1.png",
    },
    {
      id: 2,
      title_en: "Processing & Drying",
      title_ar: "المعالجة والتجفيف المتطور",
      desc_en:
        "Our facilities use modern techniques to clean, cut, and dry herbs while preserving natural flavor, color, and essential oils.",
      desc_ar:
        "تستخدم منشآتنا تقنيات حديثة للغربلة والتقطيع والتجفيف الطبيعي للأعشاب مع الحفاظ على النكهة واللون والزيوت الطيارة.",
      iconImg: "/assets/img/service/service2.png",
    },
    {
      id: 3,
      title_en: "Packaging Solutions",
      title_ar: "حلول التعبئة والتغليف",
      desc_en:
        "We offer customized packaging from bulk sacks to consumer-ready packs, designed to meet diverse client and market needs.",
      desc_ar:
        "نوفر خيارات تغليف مخصصة من أكياس الجملة الكبيرة إلى عبوات البيع بالتجزئة المصممة لتلبية متطلبات مختلف الأسواق.",
      iconImg: "/assets/img/service/service3.png",
    },
    {
      id: 4,
      title_en: "Contract Farming",
      title_ar: "الزراعة التعاقدية المباشرة",
      desc_en:
        "We partner with farmers to grow herbs under strict quality programs, guaranteeing traceability, fair pricing, and sustainability.",
      desc_ar:
        "نتعاون مباشرة مع المزارعين لزراعة المحاصيل تحت برامج رقابة صارمة، مما يضمن التتبع الكامل والأسعار العادلة والاستدامة.",
      iconImg: "/assets/img/service/service4.png",
    },
    {
      id: 5,
      title_en: "Quality Assurance",
      title_ar: "ضمان ومعايير الجودة المعملية",
      desc_en:
        "Every batch undergoes microbial, physical, and sensory analysis. We maintain ISO, HACCP, and organic certifications.",
      desc_ar:
        "تخضع كل دفعة لتحاليل ميكروبيولوجية وفيزيائية وحسية متقدمة. نحمل شهادات ISO و HACCP والشهادات العضوية الدولية.",
      iconImg: "/assets/img/service/service5.png",
    },
    {
      id: 6,
      title_en: "Export Logistics",
      title_ar: "الشحن واللوجستيات الدولية",
      desc_en:
        "We manage global shipments via sea, air, or courier, with all documentation handled smoothly for hassle-free delivery.",
      desc_ar:
        "ندير شحنات التصدير العالمية بحراً وجواً مع توفير جميع شهادات الحجر الزراعي والمستندات الجمركية لتسليم آمن وسلس.",
      iconImg: "/assets/img/service/service6.png",
    },
  ];

  return (
    <Layout
      title={isEn ? "Our Services & Export - Kingdom Spices Herbs" : "خدماتنا والتصدير - كينجدوم سبايسز هيربس"}
      description={
        isEn
          ? "Specialized solutions in organic herbs, spices sourcing, processing, packaging, and global export logistics."
          : "حلول متخصصة في توريد ومعالجة وتعبئة وشحن الأعشاب والتوابل العضوية دولياً."
      }
    >
      {/* ── Breadcrumb ────────────────────────────────────── */}
      <div
        className="site-breadcrumb"
        style={{ background: "url(/assets/img/breadcrumb/breadcrumb.jpg) no-repeat center center / cover" }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">{isEn ? "Our Services & Export" : "خدماتنا والتصدير"}</h2>
          <ul className="breadcrumb-menu">
            <li>
              <Link href="/">{isEn ? "Home" : "الرئيسية"}</Link>
            </li>
            <li className="active">{isEn ? "Export" : "التصدير"}</li>
          </ul>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2: 6 SERVICES GRID (themex_service_area)
      ══════════════════════════════════════════════════════════ */}
      <section className={`w-full py-24 lg:py-32 bg-surface ${isEn ? "" : "rtl"}`}>
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
              {isEn ? "Our Services" : "خدماتنا"}
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
              {isEn ? "Specialized Solutions in Herbs & Spices" : "حلول متخصصة في الأعشاب والتوابل"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv) => (
              <div
                key={srv.id}
                className="p-8 sm:p-10 rounded-[30px] bg-white dark:bg-[#14261b] border border-outline-variant/30 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-20 h-20 rounded-2xl bg-secondary/15 flex items-center justify-center mb-8 p-3 group-hover:scale-110 group-hover:bg-secondary/25 transition-transform duration-300">
                    <img
                      src={srv.iconImg}
                      alt={isEn ? srv.title_en : srv.title_ar}
                      className="max-h-full max-w-full object-contain filter contrast-125"
                    />
                  </div>
                  <h3 className="font-headline-sm text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {isEn ? srv.title_en : srv.title_ar}
                  </h3>
                  <p className="font-body-md text-[15px] text-on-surface-variant leading-relaxed">
                    {isEn ? srv.desc_en : srv.desc_ar}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-wider">
                  <FiCheckCircle className="w-4 h-4 shrink-0" />
                  <span>{isEn ? "Export Certified Standard" : "معيار تصدير معتمد"}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3: 3-TAB SYSTEM (themex_tab_area)
      ══════════════════════════════════════════════════════════ */}
      <section className={`w-full py-24 lg:py-32 bg-surface-container-low border-t border-outline-variant/30 ${isEn ? "" : "rtl"}`}>
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
              {isEn ? "Our Best Service" : "أفضل خدماتنا"}
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
              {isEn ? "Tailored Solutions for Your Business" : "حلول مصممة خصيصاً لأعمالكم"}
            </h2>
          </div>

          {/* Tab Navigation Menu */}
          <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
            {[
              { id: "quality" as const, label_en: "Quality & Compliance", label_ar: "الجودة والامتثال" },
              { id: "processing" as const, label_en: "Processing", label_ar: "المعالجة والتجهيز" },
              { id: "logistics" as const, label_en: "Logistics", label_ar: "الشحن واللوجستيات" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-secondary text-on-secondary shadow-lg scale-105"
                    : "bg-white dark:bg-[#14261b] text-on-surface-variant hover:text-primary border border-outline-variant/40"
                }`}
              >
                {isEn ? tab.label_en : tab.label_ar}
              </button>
            ))}
          </div>

          {/* Tab Content Box */}
          <div className="p-8 sm:p-12 rounded-[32px] bg-white dark:bg-[#14261b] border border-outline-variant/30 shadow-xl">
            <AnimatePresence mode="wait">
              
              {/* Tab 1: Quality & Compliance */}
              {activeTab === "quality" && (
                <motion.div
                  key="quality"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                >
                  <div className="space-y-6">
                    <h3 className="font-headline-lg text-3xl font-extrabold text-primary">
                      {isEn ? "Quality & Certifications" : "الجودة والشهادات الدولية"}
                    </h3>
                    <p className="font-body-lg text-base text-on-surface-variant leading-relaxed">
                      {isEn
                        ? "We follow international standards like ISO 22000, HACCP, and organic certifications. Every shipment is traceable and accompanied by required documents."
                        : "نتبع المعايير الدولية مثل ISO 22000 و HACCP والشهادات العضوية. كل شحنة قابلة للتتبع ومصحوبة بكافة الوثائق الرسمية المطلوبة."}
                    </p>

                    {/* Progress Bar 1 */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-bold text-primary">
                        <span>{isEn ? "Quality Control Standard" : "معيار مراقبة الجودة"}</span>
                        <span>95%</span>
                      </div>
                      <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-secondary rounded-full w-[95%] transition-all duration-1000" />
                      </div>
                    </div>

                    {/* Progress Bar 2 */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-bold text-primary">
                        <span>{isEn ? "Client Satisfaction" : "رضا العملاء والمستوردين"}</span>
                        <span>90%</span>
                      </div>
                      <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full w-[90%] transition-all duration-1000" />
                      </div>
                    </div>
                  </div>

                  <div className="p-8 rounded-2xl bg-surface-container border border-outline-variant/30 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center">
                      <FiGlobe className="w-6 h-6" />
                    </div>
                    <h4 className="font-headline-sm text-2xl font-bold text-primary">
                      {isEn ? "Trusted by Global Clients" : "موثوق به من عملاء في 40+ دولة"}
                    </h4>
                    <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                      {isEn
                        ? "Our herbs and spices are trusted by food manufacturers, tea companies, and health brands across more than 40 countries worldwide."
                        : "تثق في أعشابنا وتوابلنا كبرى شركات تصنيع الأغذية ومصنعي الشاي والعلامات الصحية في أكثر من 40 دولة حول العالم."}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Tab 2: Processing */}
              {activeTab === "processing" && (
                <motion.div
                  key="processing"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                >
                  <div className="space-y-6">
                    <h3 className="font-headline-lg text-3xl font-extrabold text-primary">
                      {isEn ? "Advanced Processing & Milling" : "المعالجة والطحن المتقدم"}
                    </h3>
                    <p className="font-body-lg text-base text-on-surface-variant leading-relaxed">
                      {isEn
                        ? "We specialize in cleaning, cutting, drying, and grinding herbs while maintaining natural properties. Customized mesh sizes and botanical blends are available upon request."
                        : "نتخصص في غربلة وتقطيع وتجفيف وطحن الأعشاب مع الحفاظ الكامل على الخصائص الطبيعية. تتوفر أحجام شبكية مخصصة وخلطات نباتية بناءً على طلبكم."}
                    </p>
                    <ul className="space-y-3 font-body-md text-sm text-on-surface-variant">
                      <li className="flex items-center gap-2">
                        <FiCheckCircle className="text-secondary w-5 h-5 shrink-0" />
                        <span>{isEn ? "Air-gravity separation and optical color sorting" : "فرز ضوئي وفصل بالجاذبية الهوائية"}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FiCheckCircle className="text-secondary w-5 h-5 shrink-0" />
                        <span>{isEn ? "Steam sterilization meeting European microbiological limits" : "تعقيم بالبخار مطابق للمعايير الأوروبية"}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FiCheckCircle className="text-secondary w-5 h-5 shrink-0" />
                        <span>{isEn ? "Customized mesh cuts (fine powder, T.B.C, whole leaves)" : "تقطيع مخصص (بودرة، مجروش، أوراق كاملة)"}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl overflow-hidden aspect-video shadow-xl border border-white/20">
                    <img
                      src="/images/lab.jpg"
                      alt="Processing Plant"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              )}

              {/* Tab 3: Logistics */}
              {activeTab === "logistics" && (
                <motion.div
                  key="logistics"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                >
                  <div className="space-y-6">
                    <h3 className="font-headline-lg text-3xl font-extrabold text-primary">
                      {isEn ? "Export & Global Delivery" : "الشحن والتسليم الدولي"}
                    </h3>
                    <p className="font-body-lg text-base text-on-surface-variant leading-relaxed">
                      {isEn
                        ? "We provide flexible export logistics — sea, air, and courier. Our logistics team ensures timely delivery and full documentation support for customs clearance."
                        : "نوفر خدمات لوجستية مرنة للشحن بحراً وجواً وبالبريد السريع. يضمن فريقنا التسليم في الموعد المحدد مع الدعم التوثيقي الكامل للتخليص الجمركي."}
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-surface-container flex items-center gap-3">
                        <FiTruck className="w-5 h-5 text-secondary" />
                        <span className="text-xs font-bold text-primary">{isEn ? "FCL & LCL Sea Freight" : "شحن بحري حاويات كاملة ومجمعة"}</span>
                      </div>
                      <div className="p-4 rounded-xl bg-surface-container flex items-center gap-3">
                        <FiPackage className="w-5 h-5 text-secondary" />
                        <span className="text-xs font-bold text-primary">{isEn ? "Phytosanitary Inspection" : "شهادة فحص الحجر الزراعي"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Video part from service.html */}
                  <div className="relative rounded-2xl overflow-hidden aspect-video bg-black flex items-center justify-center shadow-xl group">
                    <img
                      src="/images/agriculture-healthy-food.jpg"
                      alt="Logistics Video"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="relative z-10 w-16 h-16 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                      aria-label="Play Logistics Video"
                    >
                      <FiPlay className="w-6 h-6 fill-current ml-0.5" />
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          VIDEO MODAL POPUP
      ══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-secondary text-white flex items-center justify-center transition-all"
                aria-label="Close Video"
              >
                <FiX className="w-6 h-6" />
              </button>

              <div className="aspect-video w-full bg-black">
                <video
                  src="/assets/img/slider1.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </Layout>
  );
};

export default Export;