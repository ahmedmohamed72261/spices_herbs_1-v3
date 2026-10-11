import React, { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useAppStore } from "@/store";
import { oldFaqData } from "@/lib/oldProjectData";

export default function FaqPage() {
  const { language } = useAppStore();
  const isEn = language === "en";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Layout
      title={isEn ? "FAQ - Kingdom Spices Herbs" : "الأسئلة الشائعة - كينجدوم سبايسز هيربس"}
      description={
        isEn
          ? "Frequently asked questions about our organic herbs, spices, export regulations, testing, and shipping."
          : "الأسئلة الشائعة حول الأعشاب والتوابل العضوية وإجراءات التصدير وفحوصات الجودة والشحن الدولي."
      }
    >
      <main className="main">
        {/* ── Breadcrumb ────────────────────────────────────── */}
        <div
          className="site-breadcrumb"
          style={{ background: "url(/assets/img/breadcrumb/breadcrumb.jpg) no-repeat center center / cover" }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">{isEn ? "Faq" : "الأسئلة الشائعة"}</h2>
            <ul className="breadcrumb-menu">
              <li>
                <Link href="/">{isEn ? "Home" : "الرئيسية"}</Link>
              </li>
              <li className="active">{isEn ? "Faq" : "الأسئلة الشائعة"}</li>
            </ul>
          </div>
        </div>

        {/* ── FAQ Area ──────────────────────────────────────── */}
        <div className="faq-area py-120">
          <div className="container">
            <div className="row align-items-start">
              {/* Left Column: Intro */}
              <div className="col-lg-5 mb-5 mb-lg-0">
                <div className="faq-right pe-lg-4">
                  <div className="site-heading mb-4">
                    <span className="site-title-tagline">{isEn ? "Faq's" : "الأسئلة الشائعة"}</span>
                    <h2 className="site-title my-3">
                      {isEn ? "General Frequently Asked Questions" : "كل ما تحتاج معرفته عن خدماتنا ومنتجاتنا"}
                    </h2>
                    <div className="heading-divider"></div>
                  </div>
                  <p className="about-text text-muted mb-4" style={{ lineHeight: "1.8" }}>
                    {isEn
                      ? "Find clear answers to questions regarding our certified organic farming, laboratory testing, international freight terms, and bespoke botanical blend formulations."
                      : "إجابات وافية وشاملة حول الزراعة العضوية المعتمدة، والفحوص المخبرية، وشروط الشحن والتصدير الدولي، وإعداد الخلطات العشبية الخاصة."}
                  </p>
                  <p className="text-muted mb-5" style={{ lineHeight: "1.8" }}>
                    {isEn
                      ? "Have a specific project requirement, need custom cuts, or want to request a free qualified sample with Certificate of Analysis (CoA)?"
                      : "هل لديك مواصفات خاصة، أو ترغب في طلب عينات مجانية معتمدة مصحوبة بشهادة التحليل المخبري (CoA)؟"}
                  </p>
                  <Link href="/contact" className="theme-btn">
                    {isEn ? "Ask Your Question" : "تواصل معنا واطرح سؤالك"}
                    <i className={isEn ? "far fa-arrow-right ms-2" : "far fa-arrow-left me-2"}></i>
                  </Link>
                </div>
              </div>

              {/* Right Column: Accordion */}
              <div className="col-lg-7">
                <div className="accordion" id="accordionFaq">
                  {oldFaqData.map((faq, idx) => {
                    const isOpen = openIndex === idx;
                    const q = isEn ? faq.question : faq.question_ar;
                    const a = isEn ? faq.answer : faq.answer_ar;

                    return (
                      <div
                        className="accordion-item mb-3 border rounded shadow-sm overflow-hidden"
                        key={idx}
                        style={{ borderColor: isOpen ? "#5B8C51" : "#e9ecef" }}
                      >
                        <h2 className="accordion-header" id={`heading${idx}`}>
                          <button
                            type="button"
                            className={`accordion-button w-100 text-start p-4 border-0 d-flex justify-content-between align-items-center ${
                              isOpen ? "" : "collapsed"
                            }`}
                            style={{
                              background: isOpen ? "#E8F5E9" : "#ffffff",
                              color: isOpen ? "#0F4229" : "#333",
                              fontWeight: 600,
                              fontSize: "17px",
                              boxShadow: "none"
                            }}
                            onClick={() => toggleAccordion(idx)}
                          >
                            <span className="d-flex align-items-center">
                              <i
                                className="far fa-question-circle me-3"
                                style={{ color: "#5B8C51", fontSize: "20px" }}
                              ></i>
                              {q}
                            </span>
                            <i
                              className={`fas ${
                                isOpen ? "fa-chevron-up" : "fa-chevron-down"
                              } text-muted ms-2`}
                              style={{ fontSize: "14px" }}
                            ></i>
                          </button>
                        </h2>
                        {isOpen && (
                          <div className="accordion-collapse show">
                            <div
                              className="accordion-body p-4 pt-2 text-muted"
                              style={{ lineHeight: "1.8", fontSize: "15px", background: "#ffffff" }}
                            >
                              {a}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
