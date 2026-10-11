import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { useAppStore } from '@/store';
import api from '@/lib/api';
import {
  oldProductsData,
  oldServicesData,
  oldTestimonialsData,
  oldFaqData,
  OldProduct
} from '@/lib/oldProjectData';
import { FiChevronLeft, FiChevronRight, FiPlus, FiX } from 'react-icons/fi';
import HeroFuturisticBotanicals from '@/components/HeroFuturisticBotanicals';

/* ── CountUp Number Component ────────────────────────────────── */
function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const stepTime = 20;
    const steps = Math.ceil(duration / stepTime);
    const stepVal = Math.ceil(target / steps);

    const timer = setInterval(() => {
      start = Math.min(start + stepVal, target);
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const Home = () => {
  const { language } = useAppStore();
  const isEn = language === 'en';

  /* Slider State */
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  /* FAQ Accordion State */
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  /* Products from API with fallback */
  const [products, setProducts] = useState<OldProduct[]>(oldProductsData);

  /* Slider Definition according to old index.html */
  const slides = [
    {
      id: 1,
      type: 'video',
      videoSrc: '/assets/img/slider1.mp4',
      subTitle_en: 'Welcome To Kingdom Spices Herbs!',
      subTitle_ar: 'مرحباً بكم في كينجدوم سبايسز هيربس!',
      title_en: 'Pure Organic Herbs',
      title_ar: 'أعشاب عضوية نقية',
      desc_en:
        'Discover the natural goodness of organic herbs with Kingdom Spices Herbs. Our collection is rich in aroma, taste, and health benefits, carefully grown in fertile soil under the sun.',
      desc_ar:
        'اكتشف الجودة الطبيعية للأعشاب العضوية مع كينجدوم سبايسز هيربس. تشكيلتنا غنية بالرائحة العطرة والنكهة والقيم الصحية، تُزرع بعناية في تربة خصبة تحت أشعة الشمس.'
    },
    {
      id: 2,
      type: 'image',
      imageSrc: '/assets/img/slider2.jpg',
      subTitle_en: 'Sustainable Agriculture',
      subTitle_ar: 'زراعة مستدامة واعية',
      title_en: 'Farming with Care',
      title_ar: 'زراعة برعاية واعية',
      desc_en:
        "We believe farming is an art. That's why we empower local farmers with eco-friendly techniques that preserve nature while producing crops of exceptional quality.",
      desc_ar:
        'نؤمن بأن الزراعة فن ورسالة. لذلك ندعم المزارعين المحليين بأحدث التقنيات البيئية المستدامة التي تحمي الطبيعة وتنتج محاصيل استثنائية الجودة.'
    },
    {
      id: 3,
      type: 'image',
      imageSrc: '/assets/img/slider3.jpg',
      subTitle_en: 'International Distribution',
      subTitle_ar: 'توزيع وتصدير دولي',
      title_en: 'Global Export Leader',
      title_ar: 'رائد التصدير العالمي',
      desc_en:
        'From our fields to your shelves — we export herbs worldwide with efficiency and trust. Our packaging solutions keep freshness intact until they reach you.',
      desc_ar:
        'من مزارعنا الخصبة إلى موانئ ورفوف العالم — نصدر الأعشاب بكفاءة وموثوقية عالية. حلول التغليف لدينا تحفظ النضارة والرائحة حتى تصل إليكم.'
    },
    {
      id: 4,
      type: 'image',
      imageSrc: '/assets/img/slider4.jpeg',
      subTitle_en: 'Sustainability',
      subTitle_ar: 'الاستدامة وحماية البيئة',
      title_en: 'For a Greener Future',
      title_ar: 'لمستقبل أكثر اخضراراً',
      desc_en:
        'We care for Earth as much as we care for our products. Our planet-first philosophy means less waste, organic fertilizers, and sustainable farming practices that restore balance to nature.',
      desc_ar:
        'نهتم بالأرض كما نهتم بمنتجاتنا تماماً. فلسفتنا الصديقة للبيئة تعتمد على تقليل الهدر والأسمدة العضوية والممارسات المستدامة التي تعيد التوازن للطبيعة.'
    }
  ];

  /* Autoplay Hero Slider */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  /* Fetch live products if available */
  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const res = await api.get('/products');
        const data = res.data?.data || res.data || [];
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setProducts(data);
        }
      } catch {
        // Fallback already set to oldProductsData
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Layout
      title={
        isEn
          ? 'Kingdom Spices Herbs - Organic Herbs, Spices & Seeds Exporter'
          : 'كينجدوم سبايسز هيربس - مُصدر الأعشاب والتوابل والبذور العضوية'
      }
      description={
        isEn
          ? 'Discover the natural goodness of organic herbs with Kingdom Spices Herbs. Carefully grown, processed, and exported worldwide.'
          : 'اكتشف الجودة الطبيعية للأعشاب والبهارات العضوية مع كينجدوم سبايسز هيربس. زراعة وتجفيف وتصدير دولي معتمد.'
      }
    >
      {/* ══════════════════════════════════════════════════════════
          1. FUTURISTIC BOTANICALS HERO SECTION (Smart Tracking Style)
      ══════════════════════════════════════════════════════════ */}
      <HeroFuturisticBotanicals />

      {/* ══════════════════════════════════════════════════════════
          2. FEATURE AREA (Agriox .feature-area py-120)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white dark:bg-[#0d110d]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-white dark:bg-[#141913] border border-gray-100 dark:border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-[#E8F5E9] text-[#5B8C51] flex items-center justify-center mb-6 text-3xl group-hover:bg-[#5B8C51] group-hover:text-white transition-all duration-300">
                <i className="flaticon-farmer"></i>
              </div>
              <h4 className="font-serif text-xl font-bold text-[#181818] dark:text-white mb-3">
                {isEn ? 'Expert Farmers' : 'مزارعون خبراء'}
              </h4>
              <p className="text-sm text-[#757F95] dark:text-gray-300 leading-relaxed">
                {isEn
                  ? 'From boutique batches to industrial runs, we scale quality without compromise, ensuring consistent grade.'
                  : 'من الدفعات المتخصصة إلى شحنات الحاويات الكبيرة، نضمن جودة فائقة وتصنيفاً قياسياً موحداً.'}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-white dark:bg-[#141913] border border-gray-100 dark:border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-[#E8F5E9] text-[#5B8C51] flex items-center justify-center mb-6 text-3xl group-hover:bg-[#5B8C51] group-hover:text-white transition-all duration-300">
                <i className="flaticon-salad"></i>
              </div>
              <h4 className="font-serif text-xl font-bold text-[#181818] dark:text-white mb-3">
                {isEn ? 'Healthy Food' : 'غذاء صحي نقي'}
              </h4>
              <p className="text-sm text-[#757F95] dark:text-gray-300 leading-relaxed">
                {isEn
                  ? 'We provide clear timelines and transparent processes, ensuring you always know when to expect your premium botanicals.'
                  : 'أعشاب طبيعية نقية خالية من المواد الكيميائية والمبيدات، غنية بالنكهة والقيم الغذائية العالية.'}
              </p>
            </div>

            {/* Feature 3 (ACTIVE: Highlighted Agriox card) */}
            <div className="p-8 rounded-2xl bg-[#5B8C51] text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-white text-[#5B8C51] flex items-center justify-center mb-6 text-3xl transition-all duration-300">
                <i className="flaticon-high-quality"></i>
              </div>
              <h4 className="font-serif text-xl font-bold text-white mb-3">
                {isEn ? 'Consistent Grade' : 'درجة جودة ثابتة'}
              </h4>
              <p className="text-sm text-white/90 leading-relaxed">
                {isEn
                  ? 'Our comprehensive documentation ensures compliance and traceability, making audits straightforward and hassle-free.'
                  : 'توثيق شامل وفحوصات دورية معتمدة تضمن ثبات المواصفات القياسية وسهولة الفحص والتخليص الجمركي.'}
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-2xl bg-white dark:bg-[#141913] border border-gray-100 dark:border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-[#E8F5E9] text-[#5B8C51] flex items-center justify-center mb-6 text-3xl group-hover:bg-[#5B8C51] group-hover:text-white transition-all duration-300">
                <i className="flaticon-ecologism"></i>
              </div>
              <h4 className="font-serif text-xl font-bold text-[#181818] dark:text-white mb-3">
                {isEn ? 'Industry Oriented' : 'موجّه للصناعات الكبرى'}
              </h4>
              <p className="text-sm text-[#757F95] dark:text-gray-300 leading-relaxed">
                {isEn
                  ? 'We prioritize sustainability in our supply chain, providing transparent origin stories for all our premium botanicals.'
                  : 'نلبي احتياجات مصانع الأغذية والأدوية ومستحضرات التجميل بمرونة توريد وأعلى معايير الاستدامة.'}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. ABOUT US AREA (Agriox .about-area pb-120)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white dark:bg-[#0d110d] overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 3-Image Collage */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <img
                    src="/assets/img/about/01.jpg"
                    alt="About 1"
                    className="w-full h-full min-h-[320px] object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="col-span-6 flex flex-col gap-4">
                  <img
                    src="/assets/img/about/02.jpg"
                    alt="About 2"
                    className="w-full h-[180px] object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="/assets/img/about/03.jpg"
                    alt="About 3"
                    className="w-full h-[180px] object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              {/* 25 Years Of Experience Badge */}
              <div className={`absolute -bottom-6 ${isEn ? 'right-6' : 'left-6'} bg-[#5B8C51] text-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 border-4 border-white dark:border-[#141913]`}>
                <span className="font-serif text-4xl sm:text-5xl font-extrabold text-[#d6b161]">25</span>
                <div className="font-serif text-sm font-bold uppercase tracking-wider leading-snug">
                  {isEn ? <>Years Of <br /> Experience</> : <>عاماً من <br /> الخبرة الزراعية</>}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className={`lg:col-span-6 space-y-6 ${isEn ? 'text-left' : 'text-right rtl'}`}>
              <div className="site-heading mb-3">
                <span className="site-title-tagline">{isEn ? 'About Us' : 'من نحن'}</span>
                <h2 className="site-title text-3xl sm:text-4xl font-bold mt-2 text-[#0F4229] dark:text-white">
                  {isEn ? 'At Kingdom Spices Herbs,' : 'في كينجدوم سبايسز هيربس،'}
                </h2>
              </div>

              <p className="text-base text-[#757F95] dark:text-gray-300 leading-relaxed">
                {isEn
                  ? 'Bringing Nature’s Best To The World we are dedicated to exporting premium medicinal herbs, spices, legumes, and seeds. With years of experience in sustainable agriculture, we combine tradition and innovation to deliver products trusted by customers worldwide.'
                  : 'نقدم أفضل ما تجود به الطبيعة للعالم؛ نختص في تصدير الأعشاب الطبية والبهارات والبقوليات والبذور الفاخرة. بفضل سنوات طويلة من الخبرة في الزراعة المستدامة، ندمج الأصالة بالتقنيات الحديثة لنيل ثقة شركائنا حول العالم.'}
              </p>

              {/* Icon List Items */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#141913] border border-gray-100 dark:border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-[#5B8C51] text-white flex items-center justify-center text-2xl shrink-0">
                    <i className="flaticon-shovel"></i>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#181818] dark:text-white mb-1">
                      {isEn ? 'Agriculture Leader' : 'رائد زراعي معتمد'}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#757F95] dark:text-gray-300 leading-relaxed">
                      {isEn
                        ? 'From local farms to global markets, Kingdom Spices Herbs stands as a leader in organic farming, eco-friendly cultivation, and international export.'
                        : 'من مزارعنا الخصبة إلى الأسواق العالمية، نقود زراعة وتصدير الأعشاب الطبيعية والبهارات بأعلى المعايير.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#141913] border border-gray-100 dark:border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-[#5B8C51] text-white flex items-center justify-center text-2xl shrink-0">
                    <i className="flaticon-sapling"></i>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#181818] dark:text-white mb-1">
                      {isEn ? 'Quality & Trust' : 'جودة وموثوقية عالية'}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#757F95] dark:text-gray-300 leading-relaxed">
                      {isEn
                        ? 'Every product goes through strict quality checks and certifications to guarantee freshness, authenticity, and safety.'
                        : 'يخضع كل منتج لفحوصات جودة دقيقة وشهادات اعتماد تضمن النضارة والأصالة والسلامة الغذائية.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="theme-btn"
                >
                  <span>{isEn ? 'Discover More' : 'اكتشف المزيد'}</span>
                  <i className={`far fa-arrow-right text-xs ${isEn ? '' : 'rotate-180'}`}></i>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. SERVICES AREA (Agriox .service-area bg py-120)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#E8F5E9] dark:bg-[#111912] transition-colors">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="site-title-tagline">{isEn ? 'Services' : 'خدماتنا'}</span>
            <h2 className="site-title text-3xl sm:text-4xl font-bold mt-1 text-[#0F4229] dark:text-white">
              {isEn ? 'What We Offer' : 'ماذا نقدم لعملائنا'}
            </h2>
            <div className="heading-divider"></div>
            <p className="text-sm sm:text-base text-[#757F95] dark:text-gray-300 leading-relaxed">
              {isEn
                ? 'At Kingdom Spices Herbs, we provide high-quality herbs, spices, legumes, and seeds — cultivated naturally, processed with care, and exported worldwide.'
                : 'في كينجدوم سبايسز هيربس، نقدم أعشاباً وبقوليات وتوابل وبذوراً عالية الجودة — مزروعة طبيعياً ومعالجة بعناية ومصدرة لكافة الموانئ.'}
            </p>
          </div>

          {/* 4 Main Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {oldServicesData.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="rounded-2xl bg-white dark:bg-[#141913] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={isEn ? service.title : service.title_ar}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Content */}
                <div className="p-6 relative flex flex-col flex-grow">
                  {/* Floating Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#5B8C51] text-white flex items-center justify-center text-2xl shadow-md -mt-12 mb-4 group-hover:bg-[#0F4229] transition-colors relative z-10">
                    <i className={service.iconClass}></i>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#181818] dark:text-white mb-2">
                    {isEn ? service.title : service.title_ar}
                  </h3>

                  <p className="text-sm text-[#757F95] dark:text-gray-300 leading-relaxed mb-4 flex-grow">
                    {isEn ? service.description : service.description_ar}
                  </p>

                  <Link
                    href="/service"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#5B8C51] hover:text-[#0F4229] transition-colors pt-2 border-t border-gray-100 dark:border-white/5"
                  >
                    <span>{isEn ? 'Learn More' : 'اقرأ المزيد'}</span>
                    <i className={`far fa-arrow-right text-xs ${isEn ? '' : 'rotate-180'}`}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/service"
              className="theme-btn"
            >
              <span>{isEn ? 'View All Services' : 'عرض كافة الخدمات'}</span>
              <i className={`far fa-arrow-right text-xs ${isEn ? '' : 'rotate-180'}`}></i>
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. FEATURED PRODUCTS (Agriox .case-area py-120)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white dark:bg-[#0d110d]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="site-title-tagline">{isEn ? 'Products' : 'منتجاتنا'}</span>
            <h2 className="site-title text-3xl sm:text-4xl font-bold mt-1 text-[#0F4229] dark:text-white">
              {isEn ? 'Our Featured Products' : 'منتجاتنا المميزة'}
            </h2>
            <div className="heading-divider"></div>
            <p className="text-sm sm:text-base text-[#757F95] dark:text-gray-300 leading-relaxed">
              {isEn
                ? 'At Kingdom Spices Herbs, we proudly offer a wide range of premium quality herbs, spices, legumes, and seeds. Each product is carefully cultivated, naturally processed, and selected for export.'
                : 'في كينجدوم سبايسز هيربس، نفخر بتقديم تشكيلة واسعة من الأعشاب والبهارات والبذور والبقوليات العضوية المختارة بعناية فائقة لتلبية طلبات التصدير.'}
            </p>
          </div>

          {/* Products Grid */}
          <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product) => (
              <div
                key={product._id}
                className="group rounded-2xl bg-white dark:bg-[#141913] border border-gray-100 dark:border-white/10 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Image Box */}
                <div className="relative h-64 overflow-hidden bg-gray-50 dark:bg-black/20">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Zoom Lightbox Trigger */}
                  <button
                    onClick={() => setPreviewImage(product.image)}
                    aria-label={`Preview ${product.name}`}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-[#5B8C51] text-[#0F4229] hover:text-white flex items-center justify-center transition-all duration-300 shadow-md opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
                  >
                    <FiPlus className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#5B8C51] text-white shadow-sm">
                      {product.category?.name || 'Herbs'}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#181818] dark:text-white mb-2 group-hover:text-[#5B8C51] transition-colors">
                      <Link href={`/products/${product._id}`}>
                        {isEn ? product.name_en || product.name : product.name_ar || product.name}
                      </Link>
                    </h4>
                    <p className="text-sm text-[#757F95] dark:text-gray-300 line-clamp-2 leading-relaxed mb-4">
                      {isEn ? product.description_en || product.description : product.description_ar || product.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                    <Link
                      href={`/products/${product._id}`}
                      className="text-sm font-bold text-[#5B8C51] hover:text-[#0F4229] transition-colors flex items-center gap-2"
                    >
                      <span>{isEn ? 'View Details' : 'عرض التفاصيل'}</span>
                      <i className={`far fa-arrow-right text-xs ${isEn ? '' : 'rotate-180'}`}></i>
                    </Link>

                    <Link
                      href={`/products/${product._id}`}
                      className="w-8 h-8 rounded-full bg-[#E8F5E9] text-[#5B8C51] hover:bg-[#5B8C51] hover:text-white flex items-center justify-center transition-colors text-xs"
                      aria-label="Details"
                    >
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Products CTA */}
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="theme-btn"
            >
              <span>{isEn ? 'View All Products' : 'مشاهدة جميع المنتجات'}</span>
              <i className={`far fa-arrow-right text-xs ${isEn ? '' : 'rotate-180'}`}></i>
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. COUNTER AREA (Agriox .counter-area pt-50 pb-50)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#5B8C51] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Box 1 */}
            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <div className="w-16 h-16 rounded-2xl bg-white/15 text-white flex items-center justify-center text-3xl shrink-0">
                <i className="flaticon-gardening-1"></i>
              </div>
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
                  <CountUp target={1500} suffix="+" />
                </div>
                <h6 className="text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-wider mt-1">
                  {isEn ? 'Delivered Projects' : 'مشروع تم تسليمه'}
                </h6>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <div className="w-16 h-16 rounded-2xl bg-white/15 text-white flex items-center justify-center text-3xl shrink-0">
                <i className="flaticon-service"></i>
              </div>
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
                  <CountUp target={250} suffix="+" />
                </div>
                <h6 className="text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-wider mt-1">
                  {isEn ? 'Global Clients' : 'عميل دولي راضٍ'}
                </h6>
              </div>
            </div>

            {/* Box 3 */}
            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <div className="w-16 h-16 rounded-2xl bg-white/15 text-white flex items-center justify-center text-3xl shrink-0">
                <i className="flaticon-farmer"></i>
              </div>
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
                  <CountUp target={120} suffix="+" />
                </div>
                <h6 className="text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-wider mt-1">
                  {isEn ? 'Partner Farmers' : 'مزارع شريك'}
                </h6>
              </div>
            </div>

            {/* Box 4 */}
            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <div className="w-16 h-16 rounded-2xl bg-white/15 text-white flex items-center justify-center text-3xl shrink-0">
                <i className="flaticon-medal"></i>
              </div>
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
                  <CountUp target={50} suffix="+" />
                </div>
                <h6 className="text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-wider mt-1">
                  {isEn ? 'Win Awards' : 'جوائز واعتمادات'}
                </h6>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7. FAQ AREA (Agriox .faq-area py-120)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white dark:bg-[#0d110d]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left FAQ Info */}
            <div className={`lg:col-span-5 space-y-6 ${isEn ? 'text-left' : 'text-right rtl'}`}>
              <div className="site-heading mb-3">
                <span className="site-title-tagline">{isEn ? "FAQ's" : 'الأسئلة الشائعة'}</span>
                <h2 className="site-title text-3xl sm:text-4xl font-bold mt-2 text-[#0F4229] dark:text-white">
                  {isEn ? 'General Frequently Asked Questions' : 'أبرز الأسئلة المتداولة عن التصدير'}
                </h2>
              </div>

              <p className="text-base text-[#757F95] dark:text-gray-300 leading-relaxed">
                {isEn
                  ? 'At Kingdom Spices Herbs, we value transparency and customer satisfaction. Here are answers to some of the most common questions about our herbs, spices, and services.'
                  : 'في كينجدوم سبايسز هيربس، نضع الشفافية ورضا العملاء في قمة أولوياتنا. إليكم إجابات وافية عن أهم الاستفسارات حول التوريد والشحن والمواصفات.'}
              </p>

              <p className="text-sm text-[#757F95] dark:text-gray-300">
                {isEn
                  ? 'If you don’t find your answer here, feel free to contact our support team — we’re happy to help!'
                  : 'إذا لم تجد إجابة لسؤالك هنا، تواصل مباشرة مع فريق التصدير وسنسعد بخدمتك فوراً!'}
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="theme-btn"
                >
                  <span>{isEn ? 'Ask Your Question' : 'اطرح سؤالك الآن'}</span>
                  <i className={`far fa-arrow-right text-xs ${isEn ? '' : 'rotate-180'}`}></i>
                </Link>
              </div>
            </div>

            {/* Right Accordion List */}
            <div className="lg:col-span-7 space-y-4">
              {oldFaqData.slice(0, 5).map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden bg-white dark:bg-[#141913] shadow-sm"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className={`w-full p-5 text-left rtl:text-right flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold transition-colors ${
                        isOpen
                          ? 'bg-[#E8F5E9] dark:bg-[#18281b] text-[#5B8C51]'
                          : 'text-[#181818] dark:text-white hover:text-[#5B8C51]'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <i className="far fa-question text-[#5B8C51]"></i>
                        <span>{isEn ? faq.question : faq.question_ar}</span>
                      </span>
                      <i
                        className={`far fa-chevron-down text-sm transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      ></i>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 py-5 text-sm sm:text-base text-[#757F95] dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-white/5"
                        >
                          {isEn ? faq.answer : faq.answer_ar}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          8. CHOOSE AREA (Agriox .choose-area)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#0F4229] text-white relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className={`lg:col-span-7 space-y-6 ${isEn ? 'text-left' : 'text-right rtl'}`}>
              <div className="site-heading mb-3">
                <span className="text-[#d6b161] font-bold text-sm tracking-widest uppercase block mb-1">
                  {isEn ? 'Why Choose Us' : 'لماذا تختارنا'}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  {isEn
                    ? 'Trusted Source for Premium Organic Herbs & Spices'
                    : 'المصدر الموثوق للأعشاب والبهارات العضوية الفاخرة'}
                </h2>
              </div>

              <p className="text-gray-300 text-base leading-relaxed">
                {isEn
                  ? 'At Kingdom Spices Herbs, we are dedicated to providing the finest quality herbs and spices. With years of experience, sustainable farming practices, and a global export network, we ensure excellence from our farms to your table.'
                  : 'نكرس جهودنا لتقديم أجود أنواع الأعشاب والتوابل. بفضل عقود من الخبرة والممارسات الزراعية المستدامة وشبكة الشحن الدولية، نضمن التميز من مزارعنا إلى رفوفكم.'}
              </p>

              {/* 4 Feature Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#5B8C51] text-white flex items-center justify-center text-2xl shrink-0">
                    <i className="flaticon-ecologism"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white mb-1">
                      {isEn ? 'Organic & Sustainable' : 'عضوي ومستدام'}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {isEn
                        ? 'All our herbs are grown using eco-friendly methods, ensuring natural taste and freshness.'
                        : 'تُزرع كافة محاصيلنا بأساليب بيئية آمنة تضمن النكهة الطبيعية والنضارة التامة.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#5B8C51] text-white flex items-center justify-center text-2xl shrink-0">
                    <i className="flaticon-harvest"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white mb-1">
                      {isEn ? 'Global Export Expertise' : 'خبرة تصدير عالمية'}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {isEn
                        ? 'We export to countries worldwide, backed by certifications, strong logistics, and reliable delivery.'
                        : 'نصدر لمختلف قارات العالم مدعومين بشهادات معتمدة وشبكة شحن سريعة.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#5B8C51] text-white flex items-center justify-center text-2xl shrink-0">
                    <i className="flaticon-diet"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white mb-1">
                      {isEn ? 'Customer Focused' : 'تركيز تام على العميل'}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {isEn
                        ? 'We prioritize customer satisfaction by offering tailored solutions, flexible packaging, and support.'
                        : 'نلبي متطلباتكم بمرونة عالية تشمل التغليف المخصص والدعم الفني المتواصل.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#5B8C51] text-white flex items-center justify-center text-2xl shrink-0">
                    <i className="flaticon-high-quality"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white mb-1">
                      {isEn ? 'Uncompromised Quality' : 'جودة لا تهاون فيها'}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {isEn
                        ? 'From farm selection to final packaging, every step follows strict quality control.'
                        : 'من الحصاد الأولي حتى العبوة المغلقة، تخضع كل خطوة لرقابة صارمة.'}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Video Thumbnail Box */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-video group">
                <img
                  src="/assets/img/choose/01.jpg"
                  onError={(e) => {
                    // Fallback to slider2 if choose/01.jpg missing
                    (e.target as HTMLImageElement).src = '/assets/img/slider2.jpg';
                  }}
                  alt="Choose Us Video"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="w-20 h-20 rounded-full bg-[#5B8C51] text-white flex items-center justify-center text-2xl shadow-2xl hover:scale-110 hover:bg-white hover:text-[#0F4229] transition-all duration-300"
                    aria-label="Play video"
                  >
                    <i className="fas fa-play ml-1"></i>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          9. TESTIMONIALS AREA (Agriox .testimonial-area bg py-120)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#E8F5E9] dark:bg-[#111912] transition-colors">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="site-title-tagline">{isEn ? 'Testimonials' : 'آراء العملاء'}</span>
            <h2 className="site-title text-3xl sm:text-4xl font-bold mt-1 text-[#0F4229] dark:text-white">
              {isEn ? 'What Our Clients Say' : 'ماذا يقول عنا عملاؤنا الدوليون'}
            </h2>
            <div className="heading-divider"></div>
            <p className="text-sm sm:text-base text-[#757F95] dark:text-gray-300 leading-relaxed">
              {isEn
                ? 'Hear from our satisfied clients around the world who trust Kingdom Spices Herbs for premium organic herbs, spices, and seeds.'
                : 'آراء موثوقة من شركائنا ومستوردينا في بريطانيا والولايات المتحدة وكندا وإسبانيا.'}
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {oldTestimonialsData.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-[#141913] p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Quote icon & text */}
                  <div className="text-[#5B8C51] text-2xl mb-3">
                    <i className="fas fa-quote-right"></i>
                  </div>
                  <p className="text-sm text-[#757F95] dark:text-gray-300 leading-relaxed italic mb-6">
                    &ldquo;{isEn ? item.quote : item.quote_ar}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#5B8C51]"
                  />
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#181818] dark:text-white">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#757F95] dark:text-gray-400">{item.role}</p>
                    <div className="flex items-center gap-1 text-xs text-[#d6b161] mt-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Video Modal ── */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-[#5B8C51] text-white flex items-center justify-center"
              >
                <FiX className="w-6 h-6" />
              </button>
              <video controls autoPlay className="w-full aspect-video object-cover">
                <source src="/assets/img/slider1.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Image Lightbox Modal ── */}
      <AnimatePresence>
        {previewImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
            onClick={() => setPreviewImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-3xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPreviewImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-[#5B8C51] text-white flex items-center justify-center"
              >
                <FiX className="w-6 h-6" />
              </button>
              <img src={previewImage} alt="Preview" className="w-full h-auto object-contain max-h-[80vh]" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Home;
