import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'motion/react';
import { useAppStore } from '@/store';
import { translations } from '@/lib/translations';
import api from '@/lib/api';
import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiArrowRight,
  FiSun,
  FiMoon,
  FiGlobe,
  FiPhone,
  FiMail,
} from 'react-icons/fi';
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa6';

export default function Navbar() {
  const router = useRouter();
  const { language, setLanguage, theme, toggleTheme } = useAppStore();
  const t = translations[language];
  const isEn = language === 'en';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch categories for product dropdown
  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const res = await api.get('/categories');
        const data = res.data?.data || res.data;
        if (isMounted && Array.isArray(data)) {
          const slugToKey: Record<string, string> = {
            herbs: t.nav.herbs,
            spices: t.nav.spices,
            seeds: t.nav.seeds,
            'dried-flowers': t.nav.driedFlowers,
            'herbal-teas': t.nav.herbalTeas,
            botanicals: t.nav.botanicals,
          };
          setCategories(
            data
              .filter((c: any) => c.is_active !== false)
              .map((c: any) => ({
                id: c._id || c.id,
                order: c.order ?? 0,
                slug: c.slug,
                label:
                  slugToKey[c.slug] ||
                  (isEn ? c.name_en : c.name_ar || c.name),
              }))
              .sort((a: any, b: any) => a.order - b.order)
          );
        }
      } catch {
        // fallback to default categories if API is unavailable
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [language, t.nav, isEn]);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    {
      href: '/products',
      label: t.nav.products,
      hasDropdown: true,
    },
    { href: '/certificates', label: t.nav.certificates },
    { href: '/team', label: t.nav.team },
    { href: '/faq', label: t.nav.faq },
    { href: '/service', label: t.nav.services },
    { href: '/contact', label: t.nav.contact },
  ];

  const whatsappMessage = encodeURIComponent(
    'Hello Kingdom Spices & Herbs! I would like to inquire about wholesale export of organic herbs and spices.'
  );
  const whatsappUrl = `https://wa.me/2001021500622?text=${whatsappMessage}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 pointer-events-none ${
        language === 'ar' ? 'rtl' : 'ltr'
      }`}
    >
      <div className="w-full pointer-events-auto">
        
        {/* ══════════════════════════════════════════════════════════
            §1  SLEEK TOP MICRO-UTILITY BAR (AUTO-COLLAPSES ON SCROLL)
        ══════════════════════════════════════════════════════════ */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isScrolled
              ? 'max-h-0 opacity-0 pointer-events-none -translate-y-4'
              : 'max-h-12 opacity-100 bg-[#050806]/90 backdrop-blur-xl border-b border-white/10'
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between text-xs text-neutral-300">
            {/* Left: Live Status + Contact Chips */}
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              <div className="hidden sm:inline-flex items-center gap-2 text-[#34d399] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#34d399] animate-ping" />
                <span className="w-2 h-2 rounded-full bg-[#34d399] -ml-4" />
                <span>
                  {isEn
                    ? 'Certified Organic Nile Sourcing'
                    : 'محاصيل عضوية معتمدة من وادي النيل'}
                </span>
              </div>

              <div className="flex items-center gap-4 text-neutral-300">
                <a
                  href="tel:+21236547898"
                  className="inline-flex items-center gap-1.5 hover:text-[#34d399] transition-colors"
                >
                  <FiPhone className="text-xs text-[#34d399]" />
                  <span dir="ltr">+2 123 654 7898</span>
                </a>
                <a
                  href="mailto:info@kingdomspicesherbs.com"
                  className="hidden md:inline-flex items-center gap-1.5 hover:text-[#34d399] transition-colors"
                >
                  <FiMail className="text-xs text-[#34d399]" />
                  <span>info@kingdomspicesherbs.com</span>
                </a>
              </div>
            </div>

            {/* Right: Social Media Pills + Direct WhatsApp */}
            <div className="flex items-center gap-3">
              <span className="hidden lg:inline-block text-[11px] text-neutral-400 font-medium">
                {isEn ? 'Follow Us:' : 'تابعنا:'}
              </span>
              <div className="flex items-center gap-1.5">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#1877f2] text-white flex items-center justify-center text-[10px] transition-all hover:scale-110"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  aria-label="Twitter X"
                  className="w-6 h-6 rounded-full bg-white/10 hover:bg-neutral-800 text-white flex items-center justify-center text-[10px] transition-all hover:scale-110"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#0a66c2] text-white flex items-center justify-center text-[10px] transition-all hover:scale-110"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#ff0000] text-white flex items-center justify-center text-[10px] transition-all hover:scale-110"
                >
                  <FaYoutube />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-6 h-6 rounded-full bg-[#25d366]/20 hover:bg-[#25d366] text-[#25d366] hover:text-white flex items-center justify-center text-[11px] transition-all hover:scale-110 ml-1"
                  title="Direct WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            §2  FLOATING GLASSMORPHISM COMMAND CAPSULE (NAVBAR)
        ══════════════════════════════════════════════════════════ */}
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 mt-2.5 sm:mt-3">
          <nav
            className={`w-full transition-all duration-300 rounded-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 backdrop-blur-2xl border ${
              isScrolled
                ? 'bg-[#060a07]/90 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.15)]'
                : 'bg-[#070b08]/75 border-white/15 shadow-[0_12px_35px_rgba(0,0,0,0.55)] hover:border-emerald-500/30'
            }`}
          >
            {/* ── Brand Typographic Emblem & Title ── */}
            <Link href="/" className="inline-flex items-center gap-2.5 sm:gap-3 shrink-0 group">
              <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-2xl bg-gradient-to-br from-[#10b981]/25 via-[#059669]/30 to-[#047857]/40 border border-[#10b981]/40 shadow-[0_0_20px_rgba(16,185,129,0.35)] flex items-center justify-center text-base sm:text-lg group-hover:scale-105 group-hover:rotate-6 transition-all duration-300 backdrop-blur-md">
                🌿
              </div>
              <div className="flex flex-col text-left rtl:text-right">
                <span className="font-['Outfit',sans-serif] font-black text-lg sm:text-xl lg:text-[22px] tracking-[0.06em] text-white uppercase leading-none group-hover:text-[#34d399] transition-colors flex items-center gap-1">
                  <span>{isEn ? 'KINGDOM' : 'كينجدوم'}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] inline-block shadow-[0_0_8px_#34d399]" />
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[8.5px] sm:text-[9.5px] tracking-[0.24em] bg-gradient-to-r from-[#34d399] to-[#facc15] bg-clip-text text-transparent uppercase leading-none mt-1">
                  {isEn ? 'SPICES & HERBS' : 'للأعشاب والتوابل'}
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav Links with Pill Hover ── */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navLinks.map((link) => {
                const isActive = router.pathname === link.href;
                return (
                  <div key={link.href} className="relative group py-1">
                    <Link
                      href={link.href}
                      className={`font-['Plus_Jakarta_Sans',sans-serif] text-[13px] xl:text-sm font-semibold px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1 relative ${
                        isActive
                          ? 'bg-gradient-to-r from-[#10b981]/25 to-[#059669]/20 text-[#34d399] border border-[#10b981]/40 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-bold'
                          : 'text-neutral-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{link.label}</span>
                      {link.hasDropdown && (
                        <FiChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 ${
                            isActive ? 'text-[#34d399]' : 'text-neutral-400 group-hover:text-white'
                          }`}
                        />
                      )}
                    </Link>

                    {/* Modern Glass Dropdown for Products */}
                    {link.hasDropdown && (
                      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 absolute top-full left-0 mt-2 w-64 bg-[#070b08]/95 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/15 p-2.5 z-50 rounded-2xl">
                        <Link
                          href="/products"
                          className="block px-3.5 py-2 rounded-xl text-sm font-bold text-white hover:bg-[#10b981] hover:text-neutral-950 transition-colors"
                        >
                          {isEn ? 'All Products' : 'جميع المنتجات'}
                        </Link>
                        <Link
                          href="/catalog"
                          className="block px-3.5 py-2 rounded-xl text-sm font-semibold text-neutral-300 hover:bg-[#10b981] hover:text-neutral-950 transition-colors"
                        >
                          {isEn ? 'Download Catalog' : 'تحميل الكتالوج'}
                        </Link>
                        <Link
                          href="/export"
                          className="block px-3.5 py-2 rounded-xl text-sm font-semibold text-neutral-300 hover:bg-[#10b981] hover:text-neutral-950 transition-colors border-b border-white/10 mb-1"
                        >
                          {isEn ? 'Export & Logistics' : 'التصدير والشحن الدولي'}
                        </Link>
                        {categories.map((cat) => (
                          <Link
                            key={cat.id}
                            href={`/products?category=${cat.id}`}
                            className="block px-3.5 py-1.5 rounded-lg text-xs text-neutral-400 hover:bg-white/10 hover:text-[#34d399] transition-colors"
                          >
                            {cat.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* ── Right Controls: Lang + Theme + Glowing Contact CTA ── */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Language Switcher Pill */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 shadow-sm transition-all hover:scale-105 active:scale-95 hover:border-[#10b981]/50"
                title="Switch Language"
              >
                <FiGlobe className="text-xs text-[#34d399]" />
                <span>{language === 'en' ? 'العربية' : 'English'}</span>
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/15 shadow-sm transition-all hover:scale-105 active:scale-95 hover:border-[#10b981]/50"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? (
                  <FiMoon className="w-3.5 h-3.5 text-neutral-300" />
                ) : (
                  <FiSun className="w-3.5 h-3.5 text-[#facc15]" />
                )}
              </button>

              {/* Glowing Futuristic Pill CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#10b981] via-[#059669] to-[#047857] hover:from-[#34d399] hover:to-[#059669] text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_22px_rgba(16,185,129,0.5)] hover:shadow-[0_0_32px_rgba(16,185,129,0.75)] hover:scale-105 active:scale-95 transition-all group ml-1"
              >
                <span>{isEn ? 'Contact US' : 'تواصل معنا'}</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                  <FiArrowRight className={isEn ? '' : 'rotate-180'} />
                </span>
              </Link>
            </div>

            {/* ── Mobile Hamburger & Quick Lang ── */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="px-2.5 py-1 text-xs font-bold rounded-full bg-white/10 text-white border border-white/15"
              >
                {language === 'en' ? 'عربي' : 'EN'}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full bg-white/10 text-white border border-white/15 hover:bg-white/20 transition-colors"
                aria-label="Toggle Navigation"
              >
                {isMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </button>
            </div>
          </nav>

          {/* ── Modern Floating Mobile Drawer ── */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden mt-2 bg-[#070b08]/98 backdrop-blur-3xl border border-white/15 px-6 py-6 shadow-2xl rounded-3xl"
              >
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${
                        router.pathname === link.href
                          ? 'bg-[#10b981] text-neutral-950'
                          : 'text-neutral-200 hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                    <div className="flex items-center gap-3">
                      <a
                        href="tel:+21236547898"
                        className="flex-1 py-2.5 rounded-full bg-white/10 text-white font-semibold text-xs flex items-center justify-center gap-1.5 border border-white/15"
                      >
                        <FiPhone className="text-[#34d399]" />
                        <span>{isEn ? 'Call Now' : 'اتصل بنا'}</span>
                      </a>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-2.5 rounded-full bg-[#25d366]/20 text-[#25d366] font-semibold text-xs flex items-center justify-center gap-1.5 border border-[#25d366]/30"
                      >
                        <FaWhatsapp />
                        <span>WhatsApp</span>
                      </a>
                    </div>

                    <Link
                      href="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="mt-1 w-full py-3 rounded-full bg-gradient-to-r from-[#10b981] to-[#059669] text-white font-bold text-center text-sm shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2"
                    >
                      <span>{isEn ? 'Contact US' : 'تواصل معنا'}</span>
                      <FiArrowRight className={isEn ? '' : 'rotate-180'} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </header>
  );
}
