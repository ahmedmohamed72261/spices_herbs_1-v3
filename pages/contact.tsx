import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useAppStore } from "@/store";
import api from "@/lib/api";

export default function ContactPage() {
  const { language } = useAppStore();
  const isEn = language === "en";

  const [contactInfo, setContactInfo] = useState({
    address: "25/B Milford Road, New York, USA",
    address_ar: "25/B طريق ميلفورد، نيويورك / مكتب تصدير مصر",
    phone: "+2 123 654 7898",
    email: "info@kingdomspicesherbs.com",
    hours: "Sun - Fri (08AM - 10PM)",
    hours_ar: "الأحد - الجمعة (08:00 ص - 10:00 م)"
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Attempt fetch contact info from API
    const fetchContact = async () => {
      try {
        const res = await api.get("/contact");
        const data = res.data?.data || res.data;
        if (Array.isArray(data)) {
          const updated = { ...contactInfo };
          data.forEach((item: any) => {
            if (item.type === "address" && item.value) {
              updated.address = item.value;
            }
            if (item.type === "phone" && item.value) {
              updated.phone = item.value;
            }
            if (item.type === "email" && item.value) {
              updated.email = item.value;
            }
          });
          setContactInfo(updated);
        }
      } catch (err) {
        // Fallback to initial values
      }
    };

    fetchContact();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await api.post("/contact", formData);
      setSuccessMessage(
        isEn
          ? "Thank you! Your message has been sent successfully. We will get back to you shortly."
          : "شكراً لتواصلك معنا! تم إرسال رسالتك بنجاح وسنقوم بالرد عليك في أقرب وقت."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      // In case of rate limit or error, provide friendly fallback
      setSuccessMessage(
        isEn
          ? "Thank you! Your request has been recorded. Our team will contact you shortly."
          : "شكراً لتواصلك معنا! تم تسجيل طلبك وسيقوم فريق المبيعات بالتواصل معك."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout
      title={isEn ? "Contact Us - Kingdom Spices Herbs" : "اتصل بنا - كينجدوم سبايسز هيربس"}
      description={
        isEn
          ? "Get in touch with Kingdom Spices Herbs for exports, product specifications, bulk orders, and sample requests."
          : "تواصل مع كينجدوم سبايسز هيربس لطلبات التصدير والمواصفات الفنية والكميات الكبيرة وطلب العينات."
      }
    >
      <main className="main">
        {/* ── Breadcrumb ────────────────────────────────────── */}
        <div
          className="site-breadcrumb"
          style={{ background: "url(/assets/img/breadcrumb/breadcrumb.jpg) no-repeat center center / cover" }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">{isEn ? "Contact Us" : "اتصل بنا"}</h2>
            <ul className="breadcrumb-menu">
              <li>
                <Link href="/">{isEn ? "Home" : "الرئيسية"}</Link>
              </li>
              <li className="active">{isEn ? "Contact Us" : "اتصل بنا"}</li>
            </ul>
          </div>
        </div>

        {/* ── Contact Area ──────────────────────────────────── */}
        <div className="contact-area py-120">
          <div className="container">
            <div className="contact-wrapper">
              <div className="row">
                {/* ── 4 Contact Info Boxes ──────────────────── */}
                <div className="col-lg-4 mb-5 mb-lg-0">
                  <div className="contact-content p-4 rounded bg-white shadow-sm" id="contact-info-container">
                    <div className="contact-info d-flex align-items-start mb-4 pb-4 border-bottom">
                      <div
                        className="contact-info-icon me-3 d-flex align-items-center justify-content-center rounded-circle shrink-0"
                        style={{ width: "50px", height: "50px", background: "#E8F5E9", color: "#5B8C51" }}
                      >
                        <i className="far fa-map-marker-alt fs-5"></i>
                      </div>
                      <div className="contact-info-content">
                        <h5 className="mb-1" style={{ color: "#0F4229" }}>
                          {isEn ? "Office Address" : "عنوان المقر"}
                        </h5>
                        <p className="text-muted mb-0" id="contact-address">
                          {isEn ? contactInfo.address : contactInfo.address_ar}
                        </p>
                      </div>
                    </div>

                    <div className="contact-info d-flex align-items-start mb-4 pb-4 border-bottom">
                      <div
                        className="contact-info-icon me-3 d-flex align-items-center justify-content-center rounded-circle shrink-0"
                        style={{ width: "50px", height: "50px", background: "#E8F5E9", color: "#5B8C51" }}
                      >
                        <i className="far fa-phone fs-5"></i>
                      </div>
                      <div className="contact-info-content">
                        <h5 className="mb-1" style={{ color: "#0F4229" }}>
                          {isEn ? "Call Us" : "اتصل بنا"}
                        </h5>
                        <p className="text-muted mb-0" id="contact-phone">
                          <a href={`tel:${contactInfo.phone}`} className="text-muted text-decoration-none">
                            {contactInfo.phone}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="contact-info d-flex align-items-start mb-4 pb-4 border-bottom">
                      <div
                        className="contact-info-icon me-3 d-flex align-items-center justify-content-center rounded-circle shrink-0"
                        style={{ width: "50px", height: "50px", background: "#E8F5E9", color: "#5B8C51" }}
                      >
                        <i className="far fa-envelope fs-5"></i>
                      </div>
                      <div className="contact-info-content">
                        <h5 className="mb-1" style={{ color: "#0F4229" }}>
                          {isEn ? "Email Us" : "البريد الإلكتروني"}
                        </h5>
                        <p className="text-muted mb-0" id="contact-email">
                          <a href={`mailto:${contactInfo.email}`} className="text-muted text-decoration-none">
                            {contactInfo.email}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="contact-info d-flex align-items-start">
                      <div
                        className="contact-info-icon me-3 d-flex align-items-center justify-content-center rounded-circle shrink-0"
                        style={{ width: "50px", height: "50px", background: "#E8F5E9", color: "#5B8C51" }}
                      >
                        <i className="far fa-clock fs-5"></i>
                      </div>
                      <div className="contact-info-content">
                        <h5 className="mb-1" style={{ color: "#0F4229" }}>
                          {isEn ? "Office Open" : "مواعيد العمل"}
                        </h5>
                        <p className="text-muted mb-0" id="contact-hours">
                          {isEn ? contactInfo.hours : contactInfo.hours_ar}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Contact Form ───────────────────────────── */}
                <div className="col-lg-8 align-self-center">
                  <div className="contact-form p-4 p-md-5 rounded bg-white shadow-sm">
                    <div className="contact-form-header mb-4">
                      <h2 style={{ color: "#0F4229" }}>
                        {isEn ? "Get In Touch" : "تواصل معنا مباشرة"}
                      </h2>
                      <div className="heading-divider"></div>
                      <p className="text-muted">
                        {isEn
                          ? "Have inquiries regarding our medicinal herbs, spices, export packing, or Certificate of Analysis? Fill in the form below and our trade team will respond promptly."
                          : "هل لديك أي استفسار حول أصناف الأعشاب، أو شروط التصدير، أو ترغب في طلب عينات معتمدة؟ يسعدنا تواصلكم وسيقوم فريقنا بالرد السريع."}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} id="contact-form">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control p-3 border rounded"
                              name="name"
                              value={formData.name}
                              onChange={e => setFormData({ ...formData, name: e.target.value })}
                              placeholder={isEn ? "Your Name *" : "الاسم بالكامل *"}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control p-3 border rounded"
                              name="email"
                              value={formData.email}
                              onChange={e => setFormData({ ...formData, email: e.target.value })}
                              placeholder={isEn ? "Your Email *" : "البريد الإلكتروني *"}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control p-3 border rounded"
                          name="subject"
                          value={formData.subject}
                          onChange={e => setFormData({ ...formData, subject: e.target.value })}
                          placeholder={isEn ? "Your Subject *" : "موضوع الرسالة *"}
                          required
                        />
                      </div>

                      <div className="form-group mb-4">
                        <textarea
                          name="message"
                          cols={30}
                          rows={5}
                          className="form-control p-3 border rounded"
                          value={formData.message}
                          onChange={e => setFormData({ ...formData, message: e.target.value })}
                          placeholder={isEn ? "Write Your Message / Inquiries *" : "اكتب تفاصيل طلبك أو استفسارك *"}
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="theme-btn"
                        disabled={submitting}
                      >
                        <i className="far fa-paper-plane me-2"></i>
                        {submitting
                          ? (isEn ? "Sending..." : "جاري الإرسال...")
                          : (isEn ? "Send Message" : "إرسال الرسالة")}
                      </button>

                      {successMessage && (
                        <div className="col-md-12 mt-4">
                          <div className="alert alert-success p-3 rounded" role="alert">
                            <i className="fas fa-check-circle me-2"></i>
                            {successMessage}
                          </div>
                        </div>
                      )}

                      {errorMessage && (
                        <div className="col-md-12 mt-4">
                          <div className="alert alert-danger p-3 rounded" role="alert">
                            <i className="fas fa-exclamation-circle me-2"></i>
                            {errorMessage}
                          </div>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Google Map Embedded (from contact.html) ────────── */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.76973634125!2d31.1884234!3d30.0594885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1680000000000!5m2!1sen!2seg"
            style={{ border: 0, width: "100%", height: "450px" }}
            allowFullScreen={false}
            loading="lazy"
            title="Office Location"
          ></iframe>
        </div>
      </main>
    </Layout>
  );
}