import React, { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useAppStore } from "@/store";
import { translations } from "@/lib/translations";
import { oldTestimonialsData } from "@/lib/oldProjectData";

export default function AboutPage() {
  const { language } = useAppStore();
  const t = translations[language];
  const isEn = language === "en";
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <Layout
      title={isEn ? "About Us - Kingdom Spices Herbs" : "من نحن - كينجدوم سبايسز هيربس"}
      description={
        isEn
          ? "Learn about Kingdom Spices Herbs, our mission, vision, and decades of expertise in organic herbs, spices, and seeds."
          : "تعرف على كينجدوم سبايسز هيربس، رسالتنا ورؤيتنا وخبرتنا الطويلة في تصدير الأعشاب الطبية والبهارات والبذور العضوية."
      }
    >
      <main className="main">
        {/* ── Breadcrumb ────────────────────────────────────── */}
        <div
          className="site-breadcrumb"
          style={{ background: "url(/assets/img/breadcrumb/breadcrumb.jpg) no-repeat center center / cover" }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">{isEn ? "About Us" : "من نحن"}</h2>
            <ul className="breadcrumb-menu">
              <li>
                <Link href="/">{isEn ? "Home" : "الرئيسية"}</Link>
              </li>
              <li className="active">{isEn ? "About Us" : "من نحن"}</li>
            </ul>
          </div>
        </div>

        {/* ── About Area ─────────────────────────────────────── */}
        <div className="about-area py-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-left">
                  <div className="about-img">
                    <div className="row">
                      <div className="col-lg-6 col-6">
                        <img
                          className="about-img-1"
                          src="/assets/img/about/01.jpg"
                          alt="Kingdom Spices Herbs Farm"
                        />
                      </div>
                      <div className="col-lg-6 col-6">
                        <img
                          className="about-img-2 mb-4"
                          src="/assets/img/about/02.jpg"
                          alt="Herb Processing"
                        />
                        <img
                          className="about-img-3"
                          src="/assets/img/about/03.jpg"
                          alt="Organic Harvest"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="about-experience">
                    <span>25</span>
                    <h5>
                      {isEn ? (
                        <>Years Of <br /> Experience</>
                      ) : (
                        <>عاماً من <br /> الخبرة</>
                      )}
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-right">
                  <div className="site-heading mb-3">
                    <span className="site-title-tagline">{isEn ? "About Us" : "من نحن"}</span>
                    <h2 className="site-title">
                      {isEn ? "Farmers at Heart, Technologists by Design" : "مزارعون في الصميم، تقنيون بالتصميم"}
                    </h2>
                    <div className="heading-divider"></div>
                  </div>
                  <p className="about-text">
                    {isEn
                      ? "We're farmers at heart and technologists by design. Kingdom Spices Herbs blends regenerative agriculture with validated processes to produce ingredients that meet global compliance and delight end consumers. From local Egyptian farms to international markets, we are dedicated to exporting premium medicinal herbs, spices, legumes, and seeds."
                      : "نحن مزارعون في الصميم وتقنيون بالتصميم. تمزج كينجدوم سبايسز هيربس بين الزراعة المتجددة والعمليات المعتمدة لإنتاج مكونات تلبي معايير الامتثال العالمية وتسعد المستهلك النهائي. من المزارع المصرية الخصبة إلى الأسواق الدولية، نكرس جهودنا لتصدير أجود الأعشاب الطبية والتوابل والبذور."}
                  </p>

                  <div className="about-list-wrapper">
                    <ul className="about-list list-unstyled">
                      <li>
                        <div className="icon">
                          <i className="flaticon-shovel"></i>
                        </div>
                        <div className="text">
                          <h4>{isEn ? "Vision" : "الرؤية"}</h4>
                          <p>
                            {isEn
                              ? "Make sustainable botanicals the industry standard, not the exception."
                              : "جعل النباتات الطبية والأعشاب المستدامة معياراً أساسياً في الصناعة وليست مجرد استثناء."}
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-sapling"></i>
                        </div>
                        <div className="text">
                          <h4>{isEn ? "Mission" : "الرسالة"}</h4>
                          <p>
                            {isEn
                              ? "Build resilient supply chains with smallholder and large-scale farms. Validate quality using measurable, repeatable methods."
                              : "بناء سلاسل إمداد مرنة ومستدامة بالتعاون مع المزارع، والتحقق من الجودة بأعلى المعايير المخبرية الدقيقة."}
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-high-quality"></i>
                        </div>
                        <div className="text">
                          <h4>{isEn ? "Values" : "القيم"}</h4>
                          <p>
                            {isEn
                              ? "Transparency • Stewardship • Craft • Reliability"
                              : "الشفافية المطلقة • حماية البيئة والاستدامة • الإتقان والحرفية • الموثوقية"}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <Link href="/products" className="theme-btn">
                    {isEn ? "Explore Our Products" : "تصفح منتجاتنا"}
                    <i className={isEn ? "far fa-arrow-right ms-2" : "far fa-arrow-left me-2"}></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Counter Area ───────────────────────────────────── */}
        <div className="counter-area pt-50 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                <div className="counter-box">
                  <div className="icon">
                    <i className="flaticon-gardening-1"></i>
                  </div>
                  <div>
                    <span className="counter">1500+</span>
                    <h6 className="title">
                      {isEn ? "+ Projects Successfully Delivered" : "+ شحنة ومشروع تم تسليمه بنجاح"}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                <div className="counter-box">
                  <div className="icon">
                    <i className="flaticon-service"></i>
                  </div>
                  <div>
                    <span className="counter">250+</span>
                    <h6 className="title">
                      {isEn ? "+ Satisfied Global Clients" : "+ عميل دولي راضٍ حول العالم"}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                <div className="counter-box">
                  <div className="icon">
                    <i className="flaticon-farmer"></i>
                  </div>
                  <div>
                    <span className="counter">120+</span>
                    <h6 className="title">
                      {isEn ? "+ Active Partner Farmers" : "+ مزارع شريك معتمد"}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                <div className="counter-box">
                  <div className="icon">
                    <i className="flaticon-medal"></i>
                  </div>
                  <div>
                    <span className="counter">50+</span>
                    <h6 className="title">
                      {isEn ? "+ Win Awards & Certificates" : "+ شهادة وجائزة تميز وجودة"}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Testimonials Area ──────────────────────────────── */}
        <div className="testimonial-area bg py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">{isEn ? "Testimonials" : "آراء العملاء"}</span>
                  <h2 className="site-title">{isEn ? "What Our Clients Say" : "ماذا يقول عملاؤنا عنا"}</h2>
                  <div className="heading-divider"></div>
                  <p>
                    {isEn
                      ? "Hear from our satisfied clients around the world who trust Kingdom Spices Herbs for premium organic herbs, spices, and seeds."
                      : "آراء شركائنا وعملائنا الدوليين الذين يثقون في كينجدوم سبايسز هيربس لتوريد أرقى الأعشاب والتوابل والبذور."}
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              {oldTestimonialsData.map((testi, idx) => (
                <div className="col-lg-6 col-md-6 mb-4" key={idx}>
                  <div className="testimonial-single h-100 d-flex flex-column justify-between">
                    <div className="testimonial-quote">
                      <span className="testimonial-quote-icon">
                        <i className="fas fa-quote-right"></i>
                      </span>
                      <p>"{isEn ? testi.quote : testi.quote_ar}"</p>
                    </div>
                    <div className="testimonial-content mt-4">
                      <div className="testimonial-author-img">
                        <img src={testi.image} alt={testi.name} />
                      </div>
                      <div className="testimonial-author-info">
                        <h4>{testi.name}</h4>
                        <p>{testi.role}</p>
                        <div className="testimonial-rate text-warning">
                          {[...Array(testi.rating)].map((_, i) => (
                            <i key={i} className="fas fa-star me-1"></i>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
