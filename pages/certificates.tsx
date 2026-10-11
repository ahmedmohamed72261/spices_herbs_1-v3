import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useAppStore } from "@/store";
import { oldCertificatesData, OldCertificate } from "@/lib/oldProjectData";
import api from "@/lib/api";

export default function CertificatesPage() {
  const { language } = useAppStore();
  const isEn = language === "en";

  const [certificates, setCertificates] = useState<OldCertificate[]>(oldCertificatesData);
  const [selectedCert, setSelectedCert] = useState<OldCertificate | null>(null);

  useEffect(() => {
    // Attempt fetch from API
    const fetchCertificates = async () => {
      try {
        const res = await api.get("/certificates");
        const data = res.data?.data || res.data;
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((item: any, idx: number) => ({
            _id: item._id || item.id || `cert-${idx}`,
            name: item.name || item.title || "Accreditation",
            name_ar: item.name_ar || item.title_ar,
            category: item.category || "Food Safety Standard",
            category_ar: item.category_ar,
            description: item.description || "Certified standard for botanical exports.",
            description_ar: item.description_ar,
            image: item.image?.startsWith("http") || item.image?.startsWith("/")
              ? item.image
              : `/images/certificates/cert${(idx % 6) + 1}.png`,
            createdAt: item.createdAt || "2026-01-15T00:00:00.000Z"
          }));
          setCertificates(mapped);
        }
      } catch (err) {
        // Fallback to oldCertificatesData
      }
    };

    fetchCertificates();
  }, []);

  return (
    <Layout
      title={isEn ? "Certificates - Kingdom Spices Herbs" : "الشهادات والاعتمادات - كينجدوم سبايسز هيربس"}
      description={
        isEn
          ? "Certified international standards: ISO 22000, HACCP, USDA Organic, EU Organic, Halal, and Kosher."
          : "الشهادات والاعتمادات الدولية: أيزو 22000، هاسب، العضوية الأمريكية والأوروبية، وحلال وكوشير."
      }
    >
      <main className="main">
        {/* ── Breadcrumb ────────────────────────────────────── */}
        <div
          className="site-breadcrumb"
          style={{ background: "url(/assets/img/breadcrumb/breadcrumb.jpg) no-repeat center center / cover" }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">{isEn ? "Portfolio" : "الشهادات والاعتمادات"}</h2>
            <ul className="breadcrumb-menu">
              <li>
                <Link href="/">{isEn ? "Home" : "الرئيسية"}</Link>
              </li>
              <li className="active">{isEn ? "Portfolio" : "الشهادات والاعتمادات"}</li>
            </ul>
          </div>
        </div>

        {/* ── Case / Certificates Area ──────────────────────── */}
        <div className="case-area py-120">
          <div className="container">
            <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map(cert => {
                const cName = isEn ? cert.name : (cert.name_ar || cert.name);
                const cCat = isEn ? cert.category : (cert.category_ar || cert.category);

                return (
                  <div className="w-full" key={cert._id}>
                    <div className="case-item w-100 h-100 p-0 shadow-sm rounded overflow-hidden d-flex flex-column justify-content-between bg-white border border-gray-100">
                      <div
                        className="case-img w-100 d-flex position-relative bg-light align-items-center justify-content-center"
                        style={{ height: "450px" }}
                      >
                        <img
                          src={cert.image}
                          className="w-100 h-100 p-4"
                          alt={cName}
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <div className="case-content p-4">
                        <div className="case-content-info">
                          <span className="text-muted d-block mb-1" style={{ fontSize: "14px" }}>
                            {cCat}
                          </span>
                          <h5 className="mb-3">
                            <button
                              type="button"
                              onClick={() => setSelectedCert(cert)}
                              className="p-0 border-0 bg-transparent text-start fw-bold"
                              style={{ color: "#0F4229", cursor: "pointer", fontSize: "1.25rem" }}
                            >
                              {cName}
                            </button>
                          </h5>
                        </div>
                        <div className="case-details-btn mt-3">
                          <button
                            type="button"
                            className="theme-btn border-0"
                            onClick={() => setSelectedCert(cert)}
                          >
                            {isEn ? "Details" : "التفاصيل"}
                            <i className={isEn ? "far fa-arrow-right ms-2" : "far fa-arrow-left me-2"}></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Certificate Details Modal ──────────────────────── */}
        {selectedCert && (
          <div
            className="modal-backdrop-custom fixed-top w-100 h-100 d-flex align-items-center justify-content-center p-3"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: 99999
            }}
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="modal-dialog modal-lg bg-white rounded-3 shadow-2xl overflow-hidden w-100"
              style={{ maxWidth: "800px" }}
              onClick={e => e.stopPropagation()}
            >
              <div className="modal-header d-flex justify-content-between align-items-center p-4 border-bottom bg-light">
                <h5 className="modal-title m-0" style={{ color: "#0F4229" }}>
                  {isEn ? selectedCert.name : (selectedCert.name_ar || selectedCert.name)}
                </h5>
                <button
                  type="button"
                  className="btn-close border-0 bg-transparent fs-4 text-muted"
                  onClick={() => setSelectedCert(null)}
                  style={{ cursor: "pointer" }}
                >
                  <i className="far fa-times"></i>
                </button>
              </div>

              <div className="modal-body p-4">
                <div className="row align-items-center">
                  <div className="col-md-6 mb-4 mb-md-0 text-center bg-light rounded p-3">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.name}
                      className="img-fluid"
                      style={{ maxHeight: "350px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <h5 className="mb-3" style={{ color: "#0F4229" }}>
                      {isEn ? "Certificate Description" : "تفاصيل الاعتماد"}
                    </h5>
                    <p style={{ lineHeight: "1.7", color: "#555" }}>
                      {isEn
                        ? selectedCert.description
                        : (selectedCert.description_ar || selectedCert.description)}
                    </p>
                    <hr />
                    <p className="mb-2">
                      <strong>{isEn ? "Category:" : "التصنيف:"}</strong>{" "}
                      <span className="text-muted">
                        {isEn ? selectedCert.category : (selectedCert.category_ar || selectedCert.category)}
                      </span>
                    </p>
                    <p className="mb-3">
                      <strong>{isEn ? "Audit Date:" : "تاريخ التوثيق:"}</strong>{" "}
                      <span className="text-muted">
                        {new Date(selectedCert.createdAt).toLocaleDateString()}
                      </span>
                    </p>
                    <Link
                      href="/contact"
                      className="theme-btn mt-2"
                      onClick={() => setSelectedCert(null)}
                    >
                      <i className="far fa-file-pdf me-2"></i>
                      {isEn ? "Request Official Document" : "طلب النسخة الرسمية"}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-3 bg-light border-top d-flex justify-content-end">
                <button
                  type="button"
                  className="theme-border-btn"
                  onClick={() => setSelectedCert(null)}
                >
                  {isEn ? "Close" : "إغلاق"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}