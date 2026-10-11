import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useAppStore } from "@/store";
import { oldProductsData, OldProduct } from "@/lib/oldProjectData";
import api from "@/lib/api";
import { GetStaticProps, GetStaticPaths } from "next";

interface ProductDetailsProps {
  product: OldProduct;
  relatedProducts: OldProduct[];
}

export default function ProductDetailsPage({ product, relatedProducts }: ProductDetailsProps) {
  const router = useRouter();
  const { language } = useAppStore();
  const isEn = language === "en";
  const [copied, setCopied] = useState(false);

  if (router.isFallback) {
    return (
      <Layout title="Loading Product...">
        <div className="container py-120 text-center">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout title="Product Not Found">
        <div className="case-single-area py-120">
          <div className="container text-center">
            <h3>{isEn ? "Product Not Found" : "المنتج غير موجود"}</h3>
            <Link href="/products" className="theme-btn mt-4">
              {isEn ? "Back to Products" : "العودة إلى المنتجات"}
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const pName = isEn
    ? (product.name_en || product.name)
    : (product.name_ar || product.name);
  const pDesc = isEn
    ? (product.description_en || product.description)
    : (product.description_ar || product.description);
  const pCat = isEn
    ? (product.category?.name || "Botanical Herbs")
    : (product.category?.slug === "herbs"
        ? "الأعشاب الطبية"
        : product.category?.slug === "spices"
        ? "التوابل الفاخرة"
        : product.category?.slug === "seeds"
        ? "البذور الزراعية"
        : "الأعشاب");

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const whatsappNumber = "2001021500622";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    isEn
      ? `Hello Kingdom Spices Herbs, I am inquiring about product: ${pName}`
      : `مرحباً كينجدوم سبايسز هيربس، أود الاستفسار عن منتج: ${pName}`
  )}`;

  return (
    <Layout
      title={`${pName} - Kingdom Spices Herbs`}
      description={pDesc ? pDesc.slice(0, 150) : "Kingdom Spices Herbs"}
    >
      <main className="main">
        {/* ── Breadcrumb ────────────────────────────────────── */}
        <div
          className="site-breadcrumb"
          style={{ background: "url(/assets/img/breadcrumb/breadcrumb.jpg) no-repeat center center / cover" }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">{pName}</h2>
            <ul className="breadcrumb-menu">
              <li>
                <Link href="/">{isEn ? "Home" : "الرئيسية"}</Link>
              </li>
              <li>
                <Link href="/products">{isEn ? "Products" : "المنتجات"}</Link>
              </li>
              <li className="active">{pName}</li>
            </ul>
          </div>
        </div>

        {/* ── Case Single Area ──────────────────────────────── */}
        <div className="case-single-area py-120">
          <div className="container">
            <div className="case-single-wrapper">
              <div className="row">
                {/* ── Left Sidebar ───────────────────────────── */}
                <div className="col-xl-4 col-lg-4 mb-5 mb-lg-0">
                  <div className="case-sidebar">
                    <div className="widget case-sidebar-content p-4 rounded bg-white shadow-sm mb-4">
                      <h4 className="case-sidebar-title mb-4 pb-2 border-bottom">
                        {isEn ? "Product Specifications" : "مواصفات المنتج"}
                      </h4>
                      <ul className="list-unstyled">
                        <li className="d-flex justify-content-between py-2 border-bottom">
                          <strong>{isEn ? "Category" : "التصنيف"}</strong>
                          <span className="text-muted">{pCat}</span>
                        </li>
                        <li className="d-flex justify-content-between py-2 border-bottom">
                          <strong>{isEn ? "Origin" : "بلد المنشأ"}</strong>
                          <span className="text-muted">{isEn ? "Egypt (Fayoum / Minya)" : "مصر (الفيوم / المنيا)"}</span>
                        </li>
                        <li className="d-flex justify-content-between py-2 border-bottom">
                          <strong>{isEn ? "Quality Grade" : "درجة النقاء"}</strong>
                          <span className="text-muted">{isEn ? "Export Grade A (99.8%)" : "درجة أولى تصدير (99.8%)"}</span>
                        </li>
                        <li className="d-flex justify-content-between py-2 border-bottom">
                          <strong>{isEn ? "Cultivation" : "نوع الزراعة"}</strong>
                          <span className="text-muted">{isEn ? "Certified 100% Organic" : "عضوي معتمد 100%"}</span>
                        </li>
                        <li className="d-flex justify-content-between py-2 border-bottom">
                          <strong>{isEn ? "Packaging" : "خيارات التعبئة"}</strong>
                          <span className="text-muted">{isEn ? "1kg - 25kg Kraft / Poly Bags" : "1كجم - 25كجم أكياس كرافت"}</span>
                        </li>
                        <li className="d-flex justify-content-between py-2">
                          <strong>{isEn ? "Rating" : "التقييم"}</strong>
                          <div className="rating text-warning">
                            <i className="fas fa-star me-1"></i>
                            <i className="fas fa-star me-1"></i>
                            <i className="fas fa-star me-1"></i>
                            <i className="fas fa-star me-1"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="widget case-new-project text-white p-4 rounded text-center"
                      style={{
                        background: "linear-gradient(135deg, #0F4229 0%, #1e5a3c 100%)",
                        boxShadow: "0 10px 30px rgba(15, 66, 41, 0.25)"
                      }}
                    >
                      <i className="flaticon-salad display-4 text-warning mb-3 d-inline-block"></i>
                      <h4 className="text-white mb-2">
                        {isEn ? "Need A Custom Bulk Order?" : "هل تحتاج طلبية تصدير خاصة؟"}
                      </h4>
                      <p className="text-white-50 mb-4" style={{ fontSize: "14px" }}>
                        {isEn
                          ? "We provide tailored milling, lab analysis, and private labeling for international importers."
                          : "نوفر خدمات الفرز والجرش المخبري والتعبئة الخاصة للعلامات التجارية العالمية."}
                      </p>
                      <Link href="/contact" className="theme-btn w-100 mb-2">
                        {isEn ? "Contact Now" : "تواصل معنا الآن"}
                        <i className={isEn ? "far fa-arrow-right ms-2" : "far fa-arrow-left me-2"}></i>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── Main Details ───────────────────────────── */}
                <div className="col-xl-8 col-lg-8">
                  <div className="case-details">
                    <div className="case-details-img mb-30 overflow-hidden rounded shadow-sm">
                      <img
                        src={product.image}
                        alt={pName}
                        className="img-fluid w-100"
                        style={{ maxHeight: "500px", objectFit: "cover" }}
                      />
                    </div>

                    <div className="case-details mt-4">
                      <div className="d-flex align-items-center justify-content-between flex-wrap mb-3">
                        <h2 className="mb-0" style={{ color: "#0F4229" }}>{pName}</h2>
                        <span className="badge bg-success px-3 py-2" style={{ fontSize: "13px" }}>
                          {isEn ? "In Stock for Export" : "متوفر للتصدير الفوري"}
                        </span>
                      </div>

                      <div className="heading-divider"></div>

                      <p className="mb-4" style={{ fontSize: "17px", lineHeight: "1.8", color: "#555" }}>
                        {pDesc}
                      </p>

                      <div className="d-flex flex-wrap gap-3 my-4">
                        <button
                          type="button"
                          className="theme-btn"
                          onClick={handleShare}
                        >
                          <i className="far fa-share-alt me-2"></i>
                          {copied
                            ? (isEn ? "Link Copied!" : "تم نسخ الرابط!")
                            : (isEn ? "Share Product" : "مشاركة المنتج")}
                        </button>

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="theme-border-btn"
                        >
                          <i className="fab fa-whatsapp me-2"></i>
                          {isEn ? "Inquire on WhatsApp" : "طلب عبر واتساب"}
                        </a>

                        <Link href="/contact" className="theme-border-btn">
                          <i className="far fa-envelope me-2"></i>
                          {isEn ? "Request Certificate of Analysis (CoA)" : "طلب شهادة التحليل (CoA)"}
                        </Link>
                      </div>

                      <div className="card border-0 bg-light p-4 rounded mt-4">
                        <h5 className="mb-3" style={{ color: "#0F4229" }}>
                          <i className="flaticon-high-quality me-2 text-success"></i>
                          {isEn ? "Quality & Traceability Guarantee" : "ضمان الجودة والتتبع"}
                        </h5>
                        <p className="mb-0" style={{ fontSize: "15px", color: "#666" }}>
                          {isEn
                            ? "All batches of our herbs and spices are tested for moisture levels, essential oil percentage, microbial contamination, heavy metals, and pesticide residues according to destination standards."
                            : "تخضع جميع دفعات منتجاتنا لاختبارات فحص دقيقة لنسبة الرطوبة والزيوت العطرية والتحاليل الميكروبيولوجية وخلوها من المعادن الثقيلة ومتبقيات المبيدات وفق معايير بلد الوصول."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Related Products ──────────────────────────── */}
              {relatedProducts && relatedProducts.length > 0 && (
                <div className="related-products mt-5 pt-5 border-top">
                  <div className="site-heading mb-4 text-center">
                    <span className="site-title-tagline">{isEn ? "Explore More" : "المزيد من المنتجات"}</span>
                    <h3 className="site-title">{isEn ? "Related Botanical Products" : "منتجات عشبية ذات صلة"}</h3>
                    <div className="heading-divider"></div>
                  </div>

                  <div className="row mt-4">
                    {relatedProducts.slice(0, 3).map(rel => {
                      const relName = isEn
                        ? (rel.name_en || rel.name)
                        : (rel.name_ar || rel.name);
                      const relId = rel._id || rel.id;
                      return (
                        <div className="col-md-4 mb-4" key={relId}>
                          <div className="case-item">
                            <div className="case-img position-relative overflow-hidden">
                              <img
                                className="img-fluid w-100"
                                src={rel.image}
                                alt={relName}
                                style={{ height: "260px", objectFit: "cover" }}
                              />
                            </div>
                            <div className="case-content">
                              <div className="case-content-info">
                                <small>{rel.category?.name}</small>
                                <h4>
                                  <Link href={`/products/${relId}`}>
                                    {relName}
                                  </Link>
                                </h4>
                              </div>
                              <Link href={`/products/${relId}`} className="case-arrow">
                                <i className={isEn ? "far fa-arrow-right" : "far fa-arrow-left"}></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Pre-generate static paths for all products in oldProductsData
  const paths = oldProductsData.map(p => ({
    params: { id: p._id }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<ProductDetailsProps> = async ({ params }) => {
  const productId = params?.id as string;

  // First search in oldProductsData
  let product = oldProductsData.find(p => p._id === productId || p.id === productId);

  // If not found in old dataset, attempt API fetch
  if (!product) {
    try {
      const res = await api.get(`/products/${productId}`);
      const apiData = res.data?.data || res.data;
      if (apiData) {
        product = {
          _id: apiData._id || apiData.id,
          id: apiData._id || apiData.id,
          name: apiData.name,
          name_en: apiData.name_en || apiData.name,
          name_ar: apiData.name_ar || apiData.name,
          description: apiData.description || "",
          description_en: apiData.description_en || apiData.description,
          description_ar: apiData.description_ar || apiData.description,
          image: apiData.image || "/assets/img/case/01.jpg",
          category: {
            _id: apiData.category?._id || "cat",
            name: apiData.category?.name || "Herbs",
            slug: apiData.category?.slug || "herbs"
          }
        };
      }
    } catch {
      // fallback
    }
  }

  // Fallback to first product if still not found
  if (!product) {
    product = oldProductsData[0];
  }

  const relatedProducts = oldProductsData.filter(p => p._id !== product?._id).slice(0, 3);

  return {
    props: {
      product,
      relatedProducts
    },
    revalidate: 60
  };
};
