import { useState } from 'react';
import Link from 'next/link';
import { useAppStore } from '@/store';
import toast from 'react-hot-toast';

const Footer = () => {
  const { language } = useAppStore();
  const isEn = language === 'en';
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error(isEn ? 'Please enter your email' : 'يرجى إدخال بريدك الإلكتروني');
      return;
    }
    toast.success(isEn ? 'Thank you for subscribing!' : 'شكراً لاشتراكك في نشرتنا!');
    setEmail('');
  };

  return (
    <footer className={`relative bg-[#0F4229] text-white overflow-hidden pt-16 pb-8 ${language === 'ar' ? 'rtl' : ''}`}>
      {/* Top Decorative Shape */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none opacity-25 pointer-events-none">
        <img
          src="/assets/img/shape/shape-1.png"
          alt="shape"
          className="w-full object-cover max-h-16"
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: About (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <img
                src="/assets/img/logo/logo-light.png"
                alt="Kingdom Spices Herbs"
                className="h-12 w-auto object-contain brightness-105"
              />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              {isEn
                ? 'We are dedicated to cultivating and exporting premium organic medicinal herbs, spices, legumes, and seeds to partners across the world with guaranteed quality.'
                : 'نحن ملتزمون بزراعة وتصدير أرقى الأعشاب الطبية والبهارات والبقوليات والبذور العضوية لشركائنا حول العالم بأعلى معايير الجودة والاعتماد.'}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#5B8C51] text-white flex items-center justify-center transition-all duration-300 text-sm"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter X"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#5B8C51] text-white flex items-center justify-center transition-all duration-300 text-sm"
              >
                <i className="fab fa-x-twitter"></i>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#5B8C51] text-white flex items-center justify-center transition-all duration-300 text-sm"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#5B8C51] text-white flex items-center justify-center transition-all duration-300 text-sm"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Contact Us (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-xl font-bold text-white relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 rtl:after:right-0 rtl:after:left-auto after:w-10 after:h-0.5 after:bg-[#5B8C51]">
              {isEn ? 'Contact Us' : 'تواصل معنا'}
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <i className="far fa-map-marker-alt text-[#5B8C51] mt-1 shrink-0"></i>
                <span>25/B Milford Road, New York, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="far fa-phone text-[#5B8C51] shrink-0"></i>
                <a href="tel:+21236547898" className="hover:text-white transition-colors">+2 123 654 7898</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="far fa-envelope text-[#5B8C51] shrink-0"></i>
                <a href="mailto:info@kingdomspicesherbs.com" className="hover:text-white transition-colors">info@kingdomspicesherbs.com</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="far fa-clock text-[#5B8C51] shrink-0"></i>
                <span>{isEn ? 'Sun - Fri (08AM - 10PM)' : 'الأحد - الجمعة (08ص - 10م)'}</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-xl font-bold text-white relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 rtl:after:right-0 rtl:after:left-auto after:w-10 after:h-0.5 after:bg-[#5B8C51]">
              {isEn ? 'Quick Links' : 'روابط سريعة'}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white flex items-center gap-2 transition-colors">
                  <i className="fas fa-caret-right text-[#5B8C51] text-xs"></i>
                  <span>{isEn ? 'About Us' : 'من نحن'}</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white flex items-center gap-2 transition-colors">
                  <i className="fas fa-caret-right text-[#5B8C51] text-xs"></i>
                  <span>{isEn ? "FAQ's" : 'الأسئلة الشائعة'}</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white flex items-center gap-2 transition-colors">
                  <i className="fas fa-caret-right text-[#5B8C51] text-xs"></i>
                  <span>{isEn ? 'Products' : 'منتجاتنا'}</span>
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="hover:text-white flex items-center gap-2 transition-colors">
                  <i className="fas fa-caret-right text-[#5B8C51] text-xs"></i>
                  <span>{isEn ? 'Certificates' : 'الشهادات'}</span>
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-white flex items-center gap-2 transition-colors">
                  <i className="fas fa-caret-right text-[#5B8C51] text-xs"></i>
                  <span>{isEn ? 'Our Services' : 'خدماتنا'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-xl font-bold text-white relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 rtl:after:right-0 rtl:after:left-auto after:w-10 after:h-0.5 after:bg-[#5B8C51]">
              {isEn ? 'Newsletter' : 'النشرة البريدية'}
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {isEn
                ? 'Subscribe Our Newsletter To Get Latest Update And News'
                : 'اشترك في نشرتنا البريدية لتصلك أحدث المستجدات والأسعار'}
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3 pt-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={isEn ? 'Your Email' : 'بريدك الإلكتروني'}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#5B8C51] text-sm"
              />
              <button
                type="submit"
                className="theme-btn w-full"
              >
                <i className="far fa-envelope mr-1"></i>
                <span>{isEn ? 'Subscribe Now' : 'اشترك الآن'}</span>
              </button>
            </form>
          </div>

        </div>

        {/* Copyright Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-300">
          <p>
            &copy; Copyright {new Date().getFullYear()}{' '}
            <Link href="/" className="text-white font-semibold hover:text-yellow-300 transition-colors">
              Kingdom Spices Herbs
            </Link>{' '}
            {isEn ? 'All Rights Reserved.' : 'جميع الحقوق محفوظة.'}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              {isEn ? 'Support' : 'الدعم'}
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              {isEn ? 'Terms Of Services' : 'الشروط والأحكام'}
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              {isEn ? 'Privacy Policy' : 'سياسة الخصوصية'}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
