import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useAppStore } from "@/store";
import { translations } from "@/lib/translations";
import { oldProductsData, OldProduct } from "@/lib/oldProjectData";
import api from "@/lib/api";

export default function ProductsPage() {
  const { language } = useAppStore();
  const isEn = language === "en";

  const [products, setProducts] = useState<OldProduct[]>(oldProductsData);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    // Attempt fetch from API, fallback to oldProductsData
    const fetchApiProducts = async () => {
      try {
        const res = await api.get("/products");
        const data = res.data?.data || res.data;
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((item: any) => ({
            _id: item._id || item.id,
            id: item._id || item.id,
            name: item.name,
            name_en: item.name_en || item.name,
            name_ar: item.name_ar || item.name,
            description: item.description || item.short_description_en || "",
            description_en: item.description_en || item.description,
            description_ar: item.description_ar || item.description,
            image: item.image?.startsWith("http") || item.image?.startsWith("/")
              ? item.image
              : `/assets/img/case/01.jpg`,
            category: {
              _id: item.category?._id || item.category?.id || "cat",
              name: item.category?.name_en || item.category?.name || "Herbs",
              slug: item.category?.slug || "herbs"
            },
            inStock: item.inStock ?? true
          }));
          setProducts(mapped);
        }
      } catch (err) {
        // Fallback already set to oldProductsData
      }
    };

    fetchApiProducts();
  }, []);

  // Compute categories
  const categoryCounts = products.reduce((acc: Record<string, number>, p) => {
    const slug = p.category?.slug?.toLowerCase() || "herbs";
    acc[slug] = (acc[slug] || 0) + 1;
    return acc;
  }, {});

  const categories = [
    { slug: "all", label_en: "All", label_ar: "الكل", count: products.length },
    { slug: "herbs", label_en: "Herbs", label_ar: "الأعشاب", count: categoryCounts["herbs"] || 0 },
    { slug: "spices", label_en: "Spices", label_ar: "التوابل", count: categoryCounts["spices"] || 0 },
    { slug: "seeds", label_en: "Seeds", label_ar: "البذور", count: categoryCounts["seeds"] || 0 }
  ];

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter(p => p.category?.slug?.toLowerCase() === activeCategory.toLowerCase());

  return (
    <Layout
      title={isEn ? "Portfolio - Kingdom Spices Herbs" : "معرض المنتجات - كينجدوم سبايسز هيربس"}
      description={
        isEn
          ? "Browse our complete catalog of organic herbs, spices, and seeds exported to over 50 countries."
          : "تصفح قائمة منتجاتنا الشاملة من الأعشاب والبهارات والبذور العضوية المصدرة لأكثر من 50 دولة."
      }
    >
      <main className="main">
        {/* ── Breadcrumb ────────────────────────────────────── */}
        <div
          className="site-breadcrumb"
          style={{ background: "url(/assets/img/breadcrumb/breadcrumb.jpg) no-repeat center center / cover" }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">{isEn ? "Portfolio" : "منتجاتنا"}</h2>
            <ul className="breadcrumb-menu">
              <li>
                <Link href="/">{isEn ? "Home" : "الرئيسية"}</Link>
              </li>
              <li className="active">{isEn ? "Portfolio" : "منتجاتنا"}</li>
            </ul>
          </div>
        </div>

        {/* ── Case Area ─────────────────────────────────────── */}
        <div className="case-area py-120">
          <div className="container">
            {/* Filter Buttons */}
            <div className="text-center mb-5">
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {categories.map(cat => (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => setActiveCategory(cat.slug)}
                    className={`theme-btn filter-btn ${
                      activeCategory === cat.slug ? "active" : ""
                    }`}
                    style={{
                      background: activeCategory === cat.slug ? "#0F4229" : "#5B8C51",
                      opacity: activeCategory === cat.slug ? 1 : 0.9,
                      padding: "10px 22px",
                      borderRadius: "50px",
                      fontSize: "15px"
                    }}
                  >
                    {isEn ? cat.label_en : cat.label_ar} ({cat.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid: 3 columns desktop, 2 columns tablet, 1 column mobile */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-5">
                <h3>{isEn ? "No products found in this category" : "لا توجد منتجات في هذا التصنيف"}</h3>
              </div>
            ) : (
              <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => {
                  const pName = isEn
                    ? (product.name_en || product.name)
                    : (product.name_ar || product.name);
                  const pCat = isEn
                    ? (product.category?.name || "Herbs")
                    : (product.category?.slug === "herbs"
                        ? "الأعشاب"
                        : product.category?.slug === "spices"
                        ? "التوابل"
                        : product.category?.slug === "seeds"
                        ? "البذور"
                        : "الأعشاب");
                  const pId = product._id || product.id;

                  return (
                    <div key={pId} className="w-full">
                      <div
                        className="case-item group position-relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 d-flex flex-column"
                        style={{
                          borderRadius: "16px",
                          width: "100%",
                          border: "1px solid rgba(15, 66, 41, 0.08)"
                        }}
                      >
                        {/* Image Frame */}
                        <div
                          className="case-img position-relative overflow-hidden w-100"
                          style={{
                            height: "320px",
                            backgroundColor: "#f4f6f4",
                            margin: 0
                          }}
                        >
                          <img
                            src={product.image}
                            alt={pName}
                            className="w-100 h-100 object-cover group-hover:scale-108 transition-transform duration-700"
                            style={{ objectFit: "cover" }}
                          />

                          {/* Hover Overlay */}
                          <div
                            className="position-absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 d-flex align-items-center justify-content-center"
                            style={{
                              background: "rgba(15, 66, 41, 0.55)",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0
                            }}
                          >
                            <button
                              type="button"
                              className="d-flex align-items-center justify-content-center rounded-circle border-0 text-success bg-white shadow-lg"
                              onClick={() => setPreviewImage(product.image)}
                              title={isEn ? "Zoom Image" : "تكبير الصورة"}
                              style={{
                                width: "52px",
                                height: "52px",
                                fontSize: "20px",
                                cursor: "pointer",
                                color: "#5B8C51"
                              }}
                            >
                              <i className="far fa-plus"></i>
                            </button>
                          </div>

                          {/* Category Badge */}
                          <span
                            className="position-absolute px-3 py-1 rounded-pill text-white fw-bold shadow-sm"
                            style={{
                              top: "16px",
                              left: isEn ? "16px" : "auto",
                              right: isEn ? "auto" : "16px",
                              background: "rgba(15, 66, 41, 0.85)",
                              fontSize: "12px",
                              letterSpacing: "0.5px",
                              backdropFilter: "blur(4px)",
                              zIndex: 2
                            }}
                          >
                            {pCat}
                          </span>
                        </div>

                        {/* Content Box */}
                        <div
                          className="case-content p-4 d-flex align-items-center justify-content-between bg-white w-100"
                          style={{
                            position: "relative",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            margin: 0,
                            boxShadow: "none",
                            borderTop: "1px solid #f0f3f0"
                          }}
                        >
                          <div className="case-content-info pe-3">
                            <small
                              className="d-block mb-1 fw-bold text-uppercase"
                              style={{ color: "#5B8C51", fontSize: "12px", letterSpacing: "1px" }}
                            >
                              {pCat}
                            </small>
                            <h4 className="m-0">
                              <Link
                                href={`/products/${pId}`}
                                className="text-decoration-none fw-bold"
                                style={{
                                  color: "#0F4229",
                                  fontSize: "19px",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 1,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden"
                                }}
                              >
                                {pName}
                              </Link>
                            </h4>
                          </div>

                          <Link
                            href={`/products/${pId}`}
                            className="case-arrow shrink-0 d-flex align-items-center justify-content-center text-white rounded-circle text-decoration-none"
                            style={{
                              width: "48px",
                              height: "48px",
                              background: "#5B8C51",
                              transition: "all 0.3s ease"
                            }}
                            title={isEn ? "View Product" : "عرض المنتج"}
                          >
                            <i className={isEn ? "far fa-arrow-right" : "far fa-arrow-left"}></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* ── Image Lightbox Modal ───────────────────────────── */}
        {previewImage && (
          <div
            className="modal-backdrop-custom fixed-top w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.88)",
              zIndex: 99999
            }}
            onClick={() => setPreviewImage(null)}
          >
            <div
              className="position-relative p-2"
              style={{ maxWidth: "90%", maxHeight: "90%" }}
              onClick={e => e.stopPropagation()}
            >
              <button
                type="button"
                className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
                onClick={() => setPreviewImage(null)}
                style={{
                  background: "#da1d25",
                  color: "#fff",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <i className="far fa-times text-white"></i>
              </button>
              <img
                src={previewImage}
                alt="Enlarged preview"
                className="img-fluid rounded-3 shadow-2xl"
                style={{ maxHeight: "80vh", objectFit: "contain" }}
              />
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}
