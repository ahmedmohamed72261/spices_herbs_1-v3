import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useAppStore } from "@/store";
import { oldTeamData, OldTeamMember } from "@/lib/oldProjectData";
import api from "@/lib/api";

export default function TeamPage() {
  const { language } = useAppStore();
  const isEn = language === "en";

  const [team, setTeam] = useState<OldTeamMember[]>(oldTeamData);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await api.get("/team");
        const data = res.data?.data || res.data;
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((item: any, idx: number) => ({
            _id: item._id || item.id || `team-${idx}`,
            name: item.name,
            position: item.position || item.role || "Specialist",
            email: item.email || "info@kingdomspicesherbs.com",
            phone: item.phone || "+21236547898",
            whatsapp: item.whatsapp || "2001021500622",
            image: item.image?.startsWith("http") || item.image?.startsWith("/")
              ? item.image
              : `/assets/img/team/0${(idx % 4) + 1}.jpg`
          }));
          setTeam(mapped);
        }
      } catch (err) {
        // Fallback to oldTeamData
      }
    };

    fetchTeam();
  }, []);

  return (
    <Layout
      title={isEn ? "Team Members - Kingdom Spices Herbs" : "فريق العمل - كينجدوم سبايسز هيربس"}
      description={
        isEn
          ? "Meet the dedicated agronomists, quality lab directors, and logistics experts behind Kingdom Spices Herbs."
          : "تعرف على خبراء الزراعة ومختبرات الجودة وإدارة التصدير في كينجدوم سبايسز هيربس."
      }
    >
      <main className="main">
        {/* ── Breadcrumb ────────────────────────────────────── */}
        <div
          className="site-breadcrumb"
          style={{ background: "url(/assets/img/breadcrumb/breadcrumb.jpg) no-repeat center center / cover" }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">{isEn ? "Team Members" : "فريق العمل"}</h2>
            <ul className="breadcrumb-menu">
              <li>
                <Link href="/">{isEn ? "Home" : "الرئيسية"}</Link>
              </li>
              <li className="active">{isEn ? "Team Members" : "فريق العمل"}</li>
            </ul>
          </div>
        </div>

        {/* ── Team Area ─────────────────────────────────────── */}
        <div className="team-area py-120">
          <div className="container">
            <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map(member => (
                <div className="w-full" key={member._id}>
                  <div className="team-item shadow-sm rounded overflow-hidden bg-white text-center h-100">
                    <div className="team-img position-relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{ height: "380px", width: "100%", objectFit: "cover" }}
                      />
                      <div className="team-social">
                        <a href={`mailto:${member.email}`} title="Email">
                          <i className="far fa-envelope"></i>
                        </a>
                        <a href={`tel:${member.phone}`} title="Phone">
                          <i className="far fa-phone"></i>
                        </a>
                        <a
                          href={`https://wa.me/${member.whatsapp.replace(/[^0-9]/g, "")}`}
                          title="WhatsApp"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-whatsapp"></i>
                        </a>
                      </div>
                    </div>
                    <div className="team-content p-4">
                      <h5 className="mb-1" style={{ color: "#0F4229", fontWeight: 700 }}>
                        {member.name}
                      </h5>
                      <span className="text-muted" style={{ fontSize: "14px" }}>
                        {member.position}
                      </span>
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
