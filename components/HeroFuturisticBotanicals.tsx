/// <reference types="react" />
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useAppStore } from "@/store";
import {
  FiCheck,
  FiArrowRight,
  FiActivity,
  FiGlobe,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export default function HeroFuturisticBotanicals() {
  const { language } = useAppStore();
  const isEn = language === "en";

  const whatsappMessage = encodeURIComponent(
    "Hello Kingdom Spices Herbs! I am interested in wholesale export and bulk orders for your Certified Organic Egyptian Herbs, Spices, and Seeds."
  );
  const whatsappUrl = `https://wa.me/2001021500622?text=${whatsappMessage}`;

  return (
    <section
      id="hero"
      className="relative w-full min-h-[760px] lg:min-h-[880px] bg-[#070b08] text-white overflow-hidden flex items-center justify-center pt-32 sm:pt-40 lg:pt-44 xl:pt-48 pb-16 sm:pb-24 lg:pb-32 select-none"
    >
      
      {/* ══════════════════════════════════════════════════════════
          §1  HIGH-TECH AMBIENT GLOWS & ARCHITECTURAL GRID BACKGROUND
      ══════════════════════════════════════════════════════════ */}
      
      {/* Architectural subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Cyber/Organic Ambient Radial Glows */}
      {/* 1. Neon Emerald Top-Left Glow */}
      <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-[#5B8C51]/25 blur-[130px] pointer-events-none animate-pulse" />

      {/* 2. Electric Cyan / Emerald Center-Right Glow behind product */}
      <div className="absolute top-1/4 right-0 lg:right-12 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#10b981]/25 via-[#5B8C51]/20 to-[#d6b161]/15 blur-[140px] pointer-events-none" />

      {/* 3. Deep Indigo/Black Vignette around borders */}
      <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-[#070b08] pointer-events-none" />

      {/* ══════════════════════════════════════════════════════════
          §2  MAIN HERO STAGE (2-COLUMN GRID MATCHING MOCKUP)
      ══════════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ──────────────────────────────────────────────────────
              LEFT COLUMN: TYPOGRAPHY, CTAS & GLOWING BADGES
          ────────────────────────────────────────────────────── */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left rtl:lg:text-right max-w-xl mx-auto lg:mx-0">
            
            {/* 1. Glowing Pill Badge ("Active User ✓" in mockup) */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/35 backdrop-blur-xl shadow-[0_0_24px_rgba(16,185,129,0.35)] mb-6 sm:mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#34d399] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#34d399] -ml-4" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#6ee7b7]">
                {isEn
                  ? "Certified Organic Exporter"
                  : "مُصدر معتمد للأعشاب والبهارات العضوية"}
              </span>
              <span className="w-4 h-4 rounded-full bg-[#10b981]/20 text-[#34d399] flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
            </motion.div>

            {/* 2. Main High-Impact Headline ("The Future of Smart Tracking" in mockup) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-black leading-[1.08] tracking-tight mb-5 sm:mb-6"
            >
              <span className="text-white block font-['Noto_Serif',serif]">
                {isEn ? "The Future of" : "الجيل القادم في"}
              </span>
              <span className="bg-gradient-to-r from-[#74c69d] via-[#aed581] to-[#e9c46a] bg-clip-text text-transparent font-['Noto_Serif',serif] drop-shadow-[0_8px_30px_rgba(91,140,81,0.35)]">
                {isEn ? "Organic Botanicals" : "الأعشاب والتوابل الفاخرة"}
              </span>
            </motion.h1>

            {/* 3. Concise Compelling Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-lg mb-8 sm:mb-10 font-normal"
            >
              {isEn
                ? "Cultivated in Egypt's fertile Nile soils, steam-sterilized, and laboratory-tested for purity. Direct farm-to-port export to pharmaceutical, culinary, and tea blenders across 50+ countries."
                : "تُزرع في أخصب أراضي وادي النيل المصرية، معقمة بالبخار ومفحوصة مخبرياً بأعلى معايير النقاوة. تصدير مباشر لكبرى مصانع الأغذية والأدوية والشاي في أكثر من 50 دولة."}
            </motion.p>

            {/* 4. Dual Pill CTA Buttons ("Interactive Demo" & "Learn More" in mockup) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5 mb-10 sm:mb-12"
            >
              {/* Primary Glowing Pill ("Interactive Demo" equivalent) */}
              <Link
                href="/products"
                className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#5B8C51] to-[#3e6836] hover:from-[#6aa35e] hover:to-[#4a7a40] text-white font-bold text-sm sm:text-base tracking-wide shadow-[0_0_30px_rgba(91,140,81,0.55)] hover:shadow-[0_0_40px_rgba(91,140,81,0.75)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>{isEn ? "Explore Catalog" : "استكشف المنتجات"}</span>
                <FiArrowRight className={`text-base ${isEn ? "" : "rotate-180"}`} />
              </Link>

              {/* Secondary Glass Border Pill ("Learn More" equivalent) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold text-sm sm:text-base tracking-wide border border-white/20 hover:border-white/40 backdrop-blur-xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <FaWhatsapp className="text-[#4ade80] text-lg" />
                <span>{isEn ? "Request Bulk Quote" : "طلب تسعير جملة"}</span>
              </a>
            </motion.div>

            {/* 5. Bottom Trust Indicators (Matching bottom pill badges in mockup) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 border-t border-white/10"
            >
              {/* Active User pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md text-neutral-300 text-xs sm:text-sm font-medium shadow-sm">
                <span className="w-5 h-5 rounded-full bg-[#10b981]/25 text-[#34d399] flex items-center justify-center text-xs">
                  <FiGlobe />
                </span>
                <span>{isEn ? "50+ Global Export Ports" : "شبكة تصديرية في 50+ ميناء"}</span>
              </div>

              {/* Trust Indicators pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md text-neutral-300 text-xs sm:text-sm font-medium shadow-sm hover:border-amber-500/40 transition-colors">
                <span className="w-5 h-5 rounded-full bg-[#eab308]/25 text-[#facc15] flex items-center justify-center text-xs">
                  <FiShield />
                </span>
                <span>{isEn ? "ISO 22000 & FDA Verified" : "شهادات ISO و FDA معتمدة"}</span>
              </div>

              {/* Organic Non-GMO pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md text-neutral-300 text-xs sm:text-sm font-medium shadow-sm hover:border-emerald-500/40 transition-colors">
                <span className="w-5 h-5 rounded-full bg-[#10b981]/25 text-[#34d399] flex items-center justify-center text-xs">
                  <FiCheckCircle />
                </span>
                <span>{isEn ? "100% Non-GMO & Pure" : "نقي 100% غير معدل وراثياً"}</span>
              </div>
            </motion.div>

          </div>

          {/* ──────────────────────────────────────────────────────
              RIGHT COLUMN: 3D CENTERPIECE PRODUCT + FLOATING GLASS METRICS
          ────────────────────────────────────────────────────── */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[620px]">
            
            {/* ── Ambient Glowing Hologram Rings behind Product ── */}
            <div className="absolute w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full border border-[#5B8C51]/25 animate-[spin_40s_linear_infinite] pointer-events-none flex items-center justify-center">
              <div className="w-[280px] sm:w-[360px] h-[280px] sm:h-[360px] rounded-full border border-dashed border-[#10b981]/30 animate-[spin_25s_linear_infinite_reverse]" />
            </div>

            {/* ── Central Hero Product with Smooth 3D Float Animation ── */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
                rotate: [-0.8, 0.8, -0.8],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-[310px] sm:w-[400px] lg:w-[480px] max-w-full flex items-center justify-center filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)]"
            >
              <img
                src="/images/hero.png"
                alt="Pure Egyptian Organic Herbs and Spices"
                className="w-full h-auto object-contain select-none"
              />
            </motion.div>

            {/* Soft contact shadow beneath product */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-64 sm:w-80 h-10 rounded-full bg-black/70 blur-2xl pointer-events-none" />

            {/* ══════════════════════════════════════════════════════════
                FLOATING GLASSMORPHISM CARDS (MATCHING MOCKUP PRECISELY)
            ══════════════════════════════════════════════════════════ */}

            {/* ── 1. TOP-LEFT GLASS CARD ("Activity Streak" in mockup) ── */}
            <motion.div
              animate={{ y: [-4, 6, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 sm:top-6 lg:top-4 left-0 sm:left-2 lg:-left-2 z-20 w-[210px] sm:w-[240px]"
            >
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0f1711]/75 backdrop-blur-2xl border border-white/15 shadow-[0_20px_45px_rgba(0,0,0,0.65)] hover:border-[#10b981]/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-neutral-300">
                    {isEn ? "Purity Index" : "مؤشر النقاوة"}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
                </div>

                {/* Progress bar with glowing thumb (like Activity Streak slider) */}
                <div className="relative w-full h-2 rounded-full bg-white/10 overflow-hidden mb-3">
                  <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-[#5B8C51] via-[#10b981] to-[#facc15]" />
                </div>

                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-2xl font-black text-white font-['Outfit',sans-serif]">
                    99.8%
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#34d399]">
                    {isEn ? "Grade A Export" : "درجة أولى تصدير"}
                  </span>
                </div>

                {/* Micro step indicators: Mo, 17, 18, 19 equivalent */}
                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-neutral-400 font-mono">
                  <span>Soil</span>
                  <span>Crop</span>
                  <span>Steam</span>
                  <span className="text-[#34d399] font-bold">Pack ✓</span>
                </div>
              </div>
            </motion.div>

            {/* ── 2. BOTTOM-RIGHT GLASS CARD ("Real-time Metrics" in mockup) ── */}
            <motion.div
              animate={{ y: [6, -4, 6] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 sm:bottom-4 right-0 sm:right-2 z-20 w-[230px] sm:w-[260px]"
            >
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0f1711]/75 backdrop-blur-2xl border border-white/15 shadow-[0_20px_45px_rgba(0,0,0,0.65)] hover:border-[#facc15]/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-neutral-300">
                    {isEn ? "Real-time Metrics" : "إحصائيات التصدير"}
                  </span>
                  <FiActivity className="text-[#34d399] text-sm" />
                </div>

                {/* Neon Wave Sparkline Curve */}
                <div className="w-full h-8 mb-2 relative">
                  <svg
                    viewBox="0 0 200 40"
                    className="w-full h-full overflow-visible"
                    fill="none"
                  >
                    <defs>
                      <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#5B8C51" />
                        <stop offset="50%" stopColor="#34d399" />
                        <stop offset="100%" stopColor="#facc15" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 28 Q 30 8, 60 22 T 120 12 T 170 20 T 200 10"
                      stroke="url(#waveGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="120" cy="12" r="4" fill="#34d399" className="animate-ping" />
                    <circle cx="120" cy="12" r="3" fill="#ffffff" />
                  </svg>
                </div>

                {/* 3 Metric Columns: 300 Activity / 175 Time / 86 High in mockup */}
                <div className="grid grid-cols-3 gap-1 pt-2 border-t border-white/10 text-center">
                  <div>
                    <div className="text-base sm:text-lg font-black text-white font-['Outfit',sans-serif]">
                      50+
                    </div>
                    <div className="text-[9px] uppercase tracking-wider text-neutral-400">
                      {isEn ? "Ports" : "ميناء"}
                    </div>
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-black text-[#34d399] font-['Outfit',sans-serif]">
                      100%
                    </div>
                    <div className="text-[9px] uppercase tracking-wider text-neutral-400">
                      {isEn ? "Organic" : "عضوي"}
                    </div>
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-black text-[#facc15] font-['Outfit',sans-serif]">
                      25+
                    </div>
                    <div className="text-[9px] uppercase tracking-wider text-neutral-400">
                      {isEn ? "Years" : "عاماً"}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── 3. FLOATING POINTER PILL 1 ("Interactive Indicators" in mockup) ── */}
            <motion.div
              animate={{ x: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[48%] -left-2 sm:left-2 z-20"
            >
              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 text-white text-xs font-semibold shadow-lg hover:border-[#34d399] transition-all cursor-pointer group">
                <span className="text-[#34d399] text-xs">⤢</span>
                <span>{isEn ? "Farm-Direct Sourcing" : "حصاد زراعي مباشر"}</span>
                <span className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity">
                  👆
                </span>
              </div>
            </motion.div>

            {/* ── 4. FLOATING POINTER PILL 2 ("Hovers Indicators" in mockup) ── */}
            <motion.div
              animate={{ x: [3, -3, 3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute top-[22%] -right-2 sm:right-6 z-20"
            >
              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 text-white text-xs font-semibold shadow-lg hover:border-[#facc15] transition-all cursor-pointer group">
                <span className="text-neutral-300">✋</span>
                <span>{isEn ? "Steam Sterilized" : "تعقيم بالبخار وجرش خاص"}</span>
                <span className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity">
                  👆
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* ── Bottom Decorative Line ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#5B8C51]/60 to-transparent pointer-events-none" />
    </section>
  );
}
