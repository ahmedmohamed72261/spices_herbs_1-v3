import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useAppStore } from "@/store";
import { oldServicesData } from "@/lib/oldProjectData";

export default function ServicePage() {
  const { language } = useAppStore();
  const isEn = language === "en";

  const technicalServices = [
    {
      title_en: "End-to-End Export Management",
      title_ar: "إدارة التصدير الشاملة من البداية للنهاية",
      desc_en: "Vendor qualification, sampling, contracting, documentation, and dedicated post-shipment support.",
      desc_ar: "تأهيل الموردين وإرسال العينات والتوثيق القانوني والصحي ومتابعة الشحنات حتى الوصول.",
      icon: "flaticon-delivery-truck"
    },
    {
      title_en: "Precision Cutting & Milling",
      title_ar: "التقطيع والجرش والطحن الدقيق",
      desc_en: "Herbal tea cuts, flakes, granules, and ultra-fine powders optimized for capsules or blends.",
      desc_ar: "تقطيع مخصص لأكياس الشاي (TBC)، رقائق، حبيبات، ومساحيق دقيقة مناسبة للكبسولات والخلطات.",
      icon: "flaticon-wheat"
    },
    {
      title_en: "Bespoke Blending Services",
      title_ar: "خلطات الأعشاب والبهارات الحصرية",
      desc_en: "Create bespoke herbal or spice blends with consistent ratios, NDAs, and batch production records.",
      desc_ar: "تصنيع خلطات عشبية وبهارات خاصة وفق نسب دقيقة مع توقيع اتفاقيات الحفاظ على سرية التركيبات.",
      icon: "flaticon-salad"
    },
    {
      title_en: "Sensory & Color Standardization",
      title_ar: "توحيد اللون والنكهة والخواص الحسية",
      desc_en: "Maintain vibrant green color, aroma profiles, and volatile essential oils across harvests.",
      desc_ar: "الحفاظ على اللون الأخضر الزاهي وقوة الرائحة العطرية ونسبة الزيوت الطيارة عبر المواسم.",
      icon: "flaticon-plant"
    },
    {
      title_en: "Micro & Residue Compliance",
      title_ar: "الامتثال الميكروبيولوجي ومتبقيات المبيدات",
      desc_en: "Rigorous pathogen screens (Salmonella, E. coli), TPC, yeast/mold, and heavy metal testing with official CoA.",
      desc_ar: "فحوصات معملية دورية للبكتيريا والفطريات والمعادن الثقيلة ومتبقيات المبيدات مع شهادات التحليل الرسمية.",
      icon: "flaticon-high-quality"
    },
    {
      title_en: "Packaging Engineering",
      title_ar: "هندسة وحلول التعبئة المتقدمة",
      desc_en: "Barrier selection, nitrogen flushing, oxygen/moisture protection, and high-strength export bulk bags.",
      desc_ar: "أكياس عازلة للرطوبة والأكسجين مع الحقن بالنيتروجين وأكياس كرافت متعددة الطبقات لحماية الشحنات.",
      icon: "flaticon-box"
    },
    {
      title_en: "Label & Artwork Support",
      title_ar: "دعم التصميم والملصقات التجارية",
      desc_en: "Print-ready dielines, barcode generation, multi-language localization, and regulatory compliance.",
      desc_ar: "قوالب طباعة جاهزة، توليد الباركود، وترجمة الملصقات لتتوافق مع اللوائح الجمركية لبلد الوصول.",
      icon: "flaticon-service"
    },
    {
      title_en: "Freight Optimization",
      title_ar: "تحسين تكاليف وشحن الحاويات",
      desc_en: "Container cube utilization, temperature control, ocean & air logistics, and Incoterms guidance (FOB, CIF, CFR).",
      desc_ar: "استغلال مساحات الحاويات والشحن الجوي والبحري والتوجيه وفق شروط التجارة الدولية (FOB, CIF, CFR).",
      icon: "flaticon-gardening-1"
    },
    {
      title_en: "After-Sales Quality Support",
      title_ar: "خدمات ما بعد البيع وضمان الجودة",
      desc_en: "Rapid dispute resolution, corrective action reports (CAPA), retention sample tracking, and improvement loops.",
      desc_ar: "متابعة ما بعد استلام الشحنة، الاحتفاظ بعينات مرجعية لكل تشغيلة، والرد السريع على أي متطلبات فنية.",
      icon: "flaticon-farmer"
    }
  ];

  return (
    <Layout
      title={isEn ? "Services - Kingdom Spices Herbs" : "خدماتنا - كينجدوم سبايسز هيربس"}
      description={
        isEn
          ? "Explore our full spectrum of botanical services: medicinal herbs, spice processing, custom cutting, organic export, and packaging."
          : "استكشف خدماتنا المتكاملة في زراعة ومعالجة وجرش وتصدير الأعشاب الطبية والتوابل والتغليف المتخصص."
      }
    >
      <main className="main">
        {/* ── Breadcrumb ────────────────────────────────────── */}
        <div
          className="site-breadcrumb"
          style={{ background: "url(/assets/img/breadcrumb/breadcrumb.jpg) no-repeat center center / cover" }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">{isEn ? "Services" : "خدماتنا"}</h2>
            <ul className="breadcrumb-menu">
              <li>
                <Link href="/">{isEn ? "Home" : "الرئيسية"}</Link>
              </li>
              <li className="active">{isEn ? "Services" : "خدماتنا"}</li>
            </ul>
          </div>
        </div>

        {/* ── 8 Main Services Section ────────────────────────── */}
        <div className="service-area bg py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto text-center mb-5">
                <div className="site-heading">
                  <span className="site-title-tagline">{isEn ? "What We Do" : "ماذا نقدم"}</span>
                  <h2 className="site-title">{isEn ? "Our Core Agricultural Services" : "خدماتنا الزراعية والتصديرية"}</h2>
                  <div className="heading-divider"></div>
                  <p>
                    {isEn
                      ? "From harvesting in fertile Egyptian soil to worldwide shipping, we provide reliable, certified, and end-to-end solutions for food and botanical industries."
                      : "من الحصاد في المزارع المصرية الخصبة إلى الشحن الدولي، نقدم حلولاً متكاملة وموثوقة ومعتمدة لصناعات الأغذية والأعشاب."}
                  </p>
                </div>
              </div>
            </div>

            <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {oldServicesData.map(srv => {
                const sTitle = isEn ? srv.title : srv.title_ar;
                const sDesc = isEn ? srv.description : srv.description_ar;

                return (
                  <div className="w-full" key={srv.id}>
                    <div className="service-item h-100 shadow-sm rounded overflow-hidden bg-white d-flex flex-column justify-content-between border border-gray-100">
                      <div>
                        <div className="service-img position-relative overflow-hidden">
                          <img
                            src={srv.image}
                            alt={sTitle}
                            className="w-100"
                            style={{ height: "200px", objectFit: "cover" }}
                          />
                        </div>
                        <div className="service-icon my-3 text-center">
                          <i
                            className={srv.iconClass || "flaticon-plant"}
                            style={{ fontSize: "40px", color: "#5B8C51" }}
                          ></i>
                        </div>
                        <div className="service-content px-4 pb-4 text-center">
                          <h4 className="service-title mb-2">
                            <span style={{ color: "#0F4229" }}>{sTitle}</span>
                          </h4>
                          <p className="service-text text-muted" style={{ fontSize: "14px", lineHeight: "1.6" }}>
                            {sDesc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Technical Capabilities (service-content.js) ────── */}
        <div className="service-capabilities py-120" style={{ background: "#f8faf7" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center mb-5">
                <div className="site-heading">
                  <span className="site-title-tagline">{isEn ? "Technical Excellence" : "القدرات التقنية والصناعية"}</span>
                  <h2 className="site-title">{isEn ? "Advanced Processing & Trade Capabilities" : "إمكانات المعالجة والتجهيز المتقدمة"}</h2>
                  <div className="heading-divider"></div>
                  <p>
                    {isEn
                      ? "Specialized processing, milling, lab analyses, and customized packaging tailored to meet the strict regulatory guidelines of global markets."
                      : "عمليات التجهيز والجرش والفحص المخبري والتعبئة المخصصة لتلبية أشد اللوائح التنظيمية في الأسواق العالمية."}
                  </p>
                </div>
              </div>
            </div>

            <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalServices.map((tech, idx) => (
                <div className="w-full" key={idx}>
                  <div className="p-4 bg-white rounded shadow-sm h-100 border-start border-4 border-success">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{ width: "50px", height: "50px", background: "#E8F5E9", color: "#5B8C51" }}
                      >
                        <i className={`${tech.icon} fs-4`}></i>
                      </div>
                      <h5 className="m-0" style={{ color: "#0F4229" }}>
                        {isEn ? tech.title_en : tech.title_ar}
                      </h5>
                    </div>
                    <p className="text-muted mb-0" style={{ fontSize: "14px", lineHeight: "1.6" }}>
                      {isEn ? tech.desc_en : tech.desc_ar}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="row mt-5">
              <div className="col-12 text-center">
                <Link href="/contact" className="theme-btn">
                  {isEn ? "Request A Technical Specification / Quote" : "طلب عرض سعر ومواصفات فنية"}
                  <i className={isEn ? "far fa-arrow-right ms-2" : "far fa-arrow-left me-2"}></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
