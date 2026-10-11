export interface OldProduct {
  _id: string;
  id?: string;
  name: string;
  name_en?: string;
  name_ar?: string;
  description: string;
  description_en?: string;
  description_ar?: string;
  image: string;
  category: {
    _id: string;
    name: string;
    slug: string;
  };
  inStock?: boolean;
  featured?: boolean;
  createdAt?: string;
}

export const oldProductsData: OldProduct[] = [
  {
    _id: '6a1b79710cabe309b61458f1',
    name: 'Basil',
    name_en: 'Egyptian Dried Basil',
    name_ar: 'الريحان المصري المجفف',
    description: 'Basil is a highly aromatic herb widely used in the food, beverage, pharmaceutical, and cosmetic industries. Known for its fresh fragrance and rich essential oil content, basil is commonly used in seasonings, herbal blends, extracts, teas, and natural wellness products.',
    description_en: 'Basil is a highly aromatic herb widely used in the food, beverage, pharmaceutical, and cosmetic industries. Known for its fresh fragrance and rich essential oil content, basil is commonly used in seasonings, herbal blends, extracts, teas, and natural wellness products.',
    description_ar: 'الريحان عشب عطري استثنائي يُستخدم على نطاق واسع في صناعات الأغذية والمشروبات ومستحضرات التجميل. يتميز برائحته العطرة ونسبة الزيوت الطبيعية العالية.',
    image: '/assets/img/case/01.jpg',
    category: {
      _id: 'cat-herbs',
      name: 'Herbs',
      slug: 'herbs'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-05-30T23:57:37.896Z'
  },
  {
    _id: '6a1b7a8e0cabe309b6145914',
    name: 'Marjoram',
    name_en: 'Dried Sweet Marjoram',
    name_ar: 'البردقوش البلدي المجفف',
    description: 'Marjoram is an aromatic herb prized for its sweet, delicate fragrance and mild flavor. It is widely used in seasoning blends, herbal teas, essential oils, natural extracts, and wellness products.',
    description_en: 'Marjoram is an aromatic herb prized for its sweet, delicate fragrance and mild flavor. It is widely used in seasoning blends, herbal teas, essential oils, natural extracts, and wellness products.',
    description_ar: 'البردقوش نبات عطري مميز برائحته الزكية ونكهته الهادئة، يُستخدم في خلطات التوابل وشاي الأعشاب والزيوت العطرية والمستخلصات الطبية.',
    image: '/assets/img/case/02.jpg',
    category: {
      _id: 'cat-herbs',
      name: 'Herbs',
      slug: 'herbs'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-05-31T00:02:22.624Z'
  },
  {
    _id: '6a1b7ab70cabe309b6145919',
    name: 'Nigella',
    name_en: 'Nigella (Black Seed)',
    name_ar: 'حبة البركة / الحبة السوداء',
    description: 'Nigella, also known as Black Seed, is a highly valued aromatic seed widely used in the food, bakery, pharmaceutical, and cosmetic industries. Known for its distinctive flavor, rich oil content, and versatile health benefits.',
    description_en: 'Nigella, also known as Black Seed, is a highly valued aromatic seed widely used in the food, bakery, pharmaceutical, and cosmetic industries. Known for its distinctive flavor, rich oil content, and versatile health benefits.',
    description_ar: 'حبة البركة أو الحبة السوداء من البذور ذات القيمة الغذائية والطبية العالية، تُستخدم في المخبوزات والزيوت الطبيعية والمستحضرات الدوائية ومستحضرات التجميل.',
    image: '/assets/img/case/03.jpg',
    category: {
      _id: 'cat-seeds',
      name: 'Seeds',
      slug: 'seeds'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-05-31T00:03:03.231Z'
  },
  {
    _id: '6a1b7a3f0cabe309b614590a',
    name: 'Ginger',
    name_en: 'Premium Dried Ginger',
    name_ar: 'الجنزبيل المجفف الفاخر',
    description: 'Ginger is a widely recognized spice derived from the rhizome of the ginger plant. It is valued for its warm, spicy flavor and distinctive aroma across culinary and natural wellness industries.',
    description_en: 'Ginger is a widely recognized spice derived from the rhizome of the ginger plant. It is valued for its warm, spicy flavor and distinctive aroma across culinary and natural wellness industries.',
    description_ar: 'الجنزبيل من أشهر التوابل الطبيعية المشهورة بنكهتها الدافئة الحريفة ورائحتها المميزة وقيمتها الحيوية العالية.',
    image: '/assets/img/case/04.jpg',
    category: {
      _id: 'cat-spices',
      name: 'Spices',
      slug: 'spices'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-05-31T00:01:03.261Z'
  },
  {
    _id: '6a1b7a200cabe309b6145905',
    name: 'Fennel',
    name_en: 'Aromatic Fennel Seeds',
    name_ar: 'بذور الشمر العطرية',
    description: 'Fennel is an aromatic seed widely used in food, teas, bakery, and essential oil extraction. It is known for its sweet, licorice-like flavor and pleasant aroma.',
    description_en: 'Fennel is an aromatic seed widely used in food, teas, bakery, and essential oil extraction. It is known for its sweet, licorice-like flavor and pleasant aroma.',
    description_ar: 'بذور الشمر العطرية المشهورة بنكهتها الشبيهة بالينسون ورائحتها المحببة، تُستخدم في خلطات الشاي والمخبوزات ومستخلصات الزيوت.',
    image: '/assets/img/case/05.jpg',
    category: {
      _id: 'cat-spices',
      name: 'Spices',
      slug: 'spices'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-05-31T00:00:32.862Z'
  },
  {
    _id: '6a1b79fb0cabe309b6145900',
    name: 'Dill Tips',
    name_en: 'Dried Dill Tips & Weed',
    name_ar: 'أوراق الشبت المجففة',
    description: 'Dill Tips are the delicate, feathery leaves of the dill plant, valued for their fresh aroma and mild, distinctive flavor in seasoning, soups, and herbal blends.',
    description_en: 'Dill Tips are the delicate, feathery leaves of the dill plant, valued for their fresh aroma and mild, distinctive flavor in seasoning, soups, and herbal blends.',
    description_ar: 'أوراق الشبت الرقيقة المجففة بعناية فائقة للحفاظ على لونها الأخضر الزاهي ونكهتها العطرية المميزة.',
    image: '/assets/img/case/06.jpg',
    category: {
      _id: 'cat-herbs',
      name: 'Herbs',
      slug: 'herbs'
    },
    inStock: true,
    featured: true,
    createdAt: '2026-05-30T23:59:55.155Z'
  },
  {
    _id: '6a1b79cf0cabe309b61458fb',
    name: 'Coriander',
    name_en: 'Whole Coriander Seeds',
    name_ar: 'بذور الكزبرة الكاملة',
    description: 'Coriander is a versatile aromatic seed widely used in spice blends, seasonings, essential oils, and herbal formulations with sweet citrus notes.',
    description_en: 'Coriander is a versatile aromatic seed widely used in spice blends, seasonings, essential oils, and herbal formulations with sweet citrus notes.',
    description_ar: 'بذور الكزبرة العطرية الكاملة والمفروزة بنقاء عالٍ، تُستخدم في بهارات الطهي والخلطات العالمية واستخلاص الزيوت العطرية.',
    image: '/assets/img/case/01.jpg',
    category: {
      _id: 'cat-spices',
      name: 'Spices',
      slug: 'spices'
    },
    inStock: true,
    featured: false,
    createdAt: '2026-05-30T23:59:11.983Z'
  },
  {
    _id: '6a1b79a40cabe309b61458f6',
    name: 'Caraway',
    name_en: 'Egyptian Caraway Seeds',
    name_ar: 'بذور الكراوية المصرية',
    description: 'Caraway is a flavorful aromatic seed known for its warm, slightly sweet taste and distinctive aroma. Commonly used in bakery, spice blends, and teas.',
    description_en: 'Caraway is a flavorful aromatic seed known for its warm, slightly sweet taste and distinctive aroma. Commonly used in bakery, spice blends, and teas.',
    description_ar: 'بذور الكراوية المصرية عالية الجودة، تتميز بنكهتها الدافئة واستخداماتها الواسعة في المخبوزات والمشروبات العشبية.',
    image: '/assets/img/case/02.jpg',
    category: {
      _id: 'cat-seeds',
      name: 'Seeds',
      slug: 'seeds'
    },
    inStock: true,
    featured: false,
    createdAt: '2026-05-30T23:58:28.593Z'
  },
  {
    _id: '6a1b7a650cabe309b614590f',
    name: 'Lemongrass',
    name_en: 'Cut Lemongrass',
    name_ar: 'حشيشة الليمون المجففة',
    description: 'Lemongrass is a fragrant herb known for its fresh citrus aroma and refreshing flavor. Widely used in herbal teas, essential oils, and food seasoning.',
    description_en: 'Lemongrass is a fragrant herb known for its fresh citrus aroma and refreshing flavor. Widely used in herbal teas, essential oils, and food seasoning.',
    description_ar: 'حشيشة الليمون المجففة بنكهة حمضية منعشة ورائحة زكية، مثالية لتحضير الشاي العشبي والزيوت الأساسية.',
    image: '/assets/img/case/03.jpg',
    category: {
      _id: 'cat-herbs',
      name: 'Herbs',
      slug: 'herbs'
    },
    inStock: true,
    featured: false,
    createdAt: '2026-05-31T00:01:41.606Z'
  }
];

export interface OldCertificate {
  _id: string;
  name: string;
  name_ar?: string;
  category: string;
  category_ar?: string;
  description: string;
  description_ar?: string;
  image: string;
  createdAt: string;
}

export const oldCertificatesData: OldCertificate[] = [
  {
    _id: 'cert-1',
    name: 'ISO 22000:2018 Certification',
    name_ar: 'شهادة أيزو 22000 لإدارة سلامة الغذاء',
    category: 'Food Safety Management',
    category_ar: 'إدارة سلامة الغذاء',
    description: 'International standard for food safety management systems, verifying full hazard control across our harvesting, processing, and packaging lines.',
    description_ar: 'المعيار الدولي لأنظمة إدارة سلامة الأغذية، يضمن التحكم الكامل في كافة مراحل الزراعة والتجهيز والتعبئة.',
    image: '/images/certificates/cert1.png',
    createdAt: '2026-01-15T00:00:00.000Z'
  },
  {
    _id: 'cert-2',
    name: 'HACCP Compliance Standard',
    name_ar: 'شهادة الهاسب (HACCP) لمراقبة النقاط الحرجة',
    category: 'Hazard Analysis & Control',
    category_ar: 'تحليل المخاطر والتحكم',
    description: 'Systematic preventive approach to food safety ensuring biological, chemical, and physical safety of botanical shipments.',
    description_ar: 'نظام وقائي معتمد لضمان السلامة الحيوية والكيميائية والفيزيائية لجميع الشحنات النباتية المصدرة.',
    image: '/images/certificates/cert2.png',
    createdAt: '2026-01-20T00:00:00.000Z'
  },
  {
    _id: 'cert-3',
    name: 'USDA Organic Program Certified',
    name_ar: 'شهادة الزراعة العضوية الأمريكية (USDA Organic)',
    category: 'Organic Cultivation',
    category_ar: 'الزراعة العضوية المعتمدة',
    description: 'Certified 100% organic production free from synthetic fertilizers, pesticides, GMOs, or artificial additives.',
    description_ar: 'شهادة إنتاج عضوي 100% خالٍ من الأسمدة الكيميائية والمبيدات والمواد المعدلة وراثياً.',
    image: '/images/certificates/cert3.png',
    createdAt: '2026-02-10T00:00:00.000Z'
  },
  {
    _id: 'cert-4',
    name: 'EU Organic Farming Certification',
    name_ar: 'شهادة الزراعة العضوية للاتحاد الأوروبي (EU Organic)',
    category: 'European Standard',
    category_ar: 'المعايير الأوروبية',
    description: 'Compliant with European Commission organic farming regulations, ensuring smooth clearance across EU ports.',
    description_ar: 'مطابقة تامة للوائح المفوضية الأوروبية للزراعة العضوية مع إمكانية التتبع الكامل لجميع الموانئ.',
    image: '/images/certificates/cert5.png',
    createdAt: '2026-02-18T00:00:00.000Z'
  },
  {
    _id: 'cert-5',
    name: 'Halal Food Safety Standard',
    name_ar: 'شهادة المطابقة الحلال الدولية',
    category: 'Religious Compliance',
    category_ar: 'الامتثال الشرعي',
    description: 'Certified preparation and packaging following strict Islamic dietary requirements and purity standards.',
    description_ar: 'معايير إعداد وتعبئة متوافقة بالكامل مع الشريعة الإسلامية وأعلى متطلبات النقاء.',
    image: '/images/certificates/cert6.png',
    createdAt: '2026-03-01T00:00:00.000Z'
  },
  {
    _id: 'cert-6',
    name: 'Kosher Export Accreditation',
    name_ar: 'شهادة الكوشير للتصدير العالمي',
    category: 'Kosher Accreditation',
    category_ar: 'اعتماد كوشير',
    description: 'Supervised processing and hygienic isolation verified for food and botanical ingredient purity.',
    description_ar: 'معالجة خاضعة للإشراف الكامل والعزل الصحي لنقاء المكونات الغذائية والنباتية.',
    image: '/images/certificates/cert1.png',
    createdAt: '2026-03-12T00:00:00.000Z'
  }
];

export interface OldTeamMember {
  _id: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  whatsapp: string;
  image: string;
}

export const oldTeamData: OldTeamMember[] = [
  {
    _id: 'team-1',
    name: 'Eng. Ahmed Hassan',
    position: 'Chief Executive Officer',
    email: 'a.hassan@kingdomspicesherbs.com',
    phone: '+21236547898',
    whatsapp: '2001021500622',
    image: '/assets/img/team/01.jpg'
  },
  {
    _id: 'team-2',
    name: 'Dr. Sarah Mansour',
    position: 'Head of Quality Assurance & Lab',
    email: 's.mansour@kingdomspicesherbs.com',
    phone: '+21236547898',
    whatsapp: '2001021500622',
    image: '/assets/img/team/02.jpg'
  },
  {
    _id: 'team-3',
    name: 'Mohamed Ibrahim',
    position: 'Export & Logistics Director',
    email: 'm.ibrahim@kingdomspicesherbs.com',
    phone: '+21236547898',
    whatsapp: '2001021500622',
    image: '/assets/img/team/03.jpg'
  },
  {
    _id: 'team-4',
    name: 'Elena Rostova',
    position: 'International Relations Manager',
    email: 'e.rostova@kingdomspicesherbs.com',
    phone: '+21236547898',
    whatsapp: '2001021500622',
    image: '/assets/img/team/04.jpg'
  }
];

export interface OldService {
  id: string;
  title: string;
  title_ar: string;
  description: string;
  description_ar: string;
  image: string;
  iconClass: string;
}

export const oldServicesData: OldService[] = [
  {
    id: 'service-1',
    title: 'Medicinal Herbs',
    title_ar: 'الأعشاب الطبية والعطرية',
    description: 'Sustainably grown and carefully processed herbs like basil, peppermint, thyme, and oregano with full traceability.',
    description_ar: 'أعشاب مزروعة ومجففة بعناية فائقة كالريحان والنعناع والزعتر والبردقوش مع إمكانية التتبع الكامل.',
    image: '/assets/img/service/01.jpg',
    iconClass: 'flaticon-wheat'
  },
  {
    id: 'service-2',
    title: 'Premium Spices',
    title_ar: 'التوابل والبهارات الفاخرة',
    description: 'From anise and fennel to coriander and cumin — spices delivered with consistent flavor and aroma standards.',
    description_ar: 'من الينسون والشمر إلى الكزبرة والكمون — بهارات بنكهة أصيلة ورائحة ثابتة تلبي المعايير العالمية.',
    image: '/assets/img/service/02.jpg',
    iconClass: 'flaticon-fruit'
  },
  {
    id: 'service-3',
    title: 'Legumes & Seeds',
    title_ar: 'البقوليات والبذور الزراعية',
    description: 'Exporting a wide range of high-quality legumes and seeds that meet global food safety certifications.',
    description_ar: 'تصدير تشكيلة واسعة من البقوليات والبذور الزراعية عالية النقاوة المعتمدة دولياً.',
    image: '/assets/img/service/03.jpg',
    iconClass: 'flaticon-cow-3'
  },
  {
    id: 'service-4',
    title: 'Export & Logistics',
    title_ar: 'التصدير والخدمات اللوجستية',
    description: 'Smooth global trade with strong logistics, accurate documentation, and competitive shipping solutions worldwide.',
    description_ar: 'شحن وتخليص دولي سلس وموثوق مع توثيق صحي وزراعي دقيق لكل الموانئ حول العالم.',
    image: '/assets/img/service/04.jpg',
    iconClass: 'flaticon-vegetable'
  },
  {
    id: 'service-5',
    title: 'Organic Farming',
    title_ar: 'الزراعة العضوية المستدامة',
    description: 'Herbs and spices cultivated with eco-friendly practices that preserve biodiversity, soil health, and natural ecosystems.',
    description_ar: 'زراعة خالية من الكيماويات والمبيدات تحافظ على خصوبة التربة وتنوع البيئة الطبيعية.',
    image: '/assets/img/service/01.jpg',
    iconClass: 'flaticon-plant'
  },
  {
    id: 'service-6',
    title: 'Quality Control & Lab',
    title_ar: 'مراقبة الجودة والمختبرات',
    description: 'Every batch is tested for purity, microbial counts, essential oils, and compliance with destination country standards.',
    description_ar: 'فحص مخبري دقيق لكل دفعة للتأكد من النقاوة ونسبة الزيوت والتحاليل الميكروبيولوجية.',
    image: '/assets/img/service/02.jpg',
    iconClass: 'flaticon-high-quality'
  },
  {
    id: 'service-7',
    title: 'Custom Packaging',
    title_ar: 'حلول التغليف المخصصة',
    description: 'From 1kg retail-ready stand-up pouches to 25kg multi-wall kraft paper bags and container bulk bales.',
    description_ar: 'خيارات تغليف مرنة من أكياس التجزئة 1 كجم إلى أكياس الكرافت 25 كجم وبالات الحاويات الكبيرة.',
    image: '/assets/img/service/03.jpg',
    iconClass: 'flaticon-box'
  },
  {
    id: 'service-8',
    title: 'Customer Support',
    title_ar: 'خدمة ودعم العملاء المستمر',
    description: 'A dedicated trade support desk ensuring fast sampling, transparent contracting, and ongoing post-shipment care.',
    description_ar: 'فريق تجاري متخصص يقدم المشورة وسرعة إرسال العينات ومتابعة الشحنات على مدار الساعة.',
    image: '/assets/img/service/04.jpg',
    iconClass: 'flaticon-service'
  }
];

export interface OldTestimonial {
  name: string;
  role: string;
  quote: string;
  quote_ar: string;
  image: string;
  rating: number;
}

export const oldTestimonialsData: OldTestimonial[] = [
  {
    name: 'Sylvia H. Green',
    role: 'Importer – United Kingdom',
    quote: 'Kingdom Spices Herbs delivers the freshest organic herbs we have ever imported. The quality is unmatched and the packaging is always perfect.',
    quote_ar: 'تقدم كينجدوم سبايسز هيربس أنقى وأجود أنواع الأعشاب العضوية التي استوردناها على الإطلاق. التعبئة والجودة استثنائية.',
    image: '/assets/img/testimonial/01.jpg',
    rating: 5
  },
  {
    name: 'Gordon D. Novak',
    role: 'Wholesaler – USA',
    quote: 'Their export process is smooth and efficient. Documentation is clear, and shipping always arrives on time without surprises.',
    quote_ar: 'عملية التصدير لديهم احترافية وسلسة للغاية. أوراق الشحن والشهادات دقيقة جداً والتسليم دائماً في الموعد المحدد.',
    image: '/assets/img/testimonial/02.jpg',
    rating: 5
  },
  {
    name: 'Reid E. Butt',
    role: 'Retailer – Canada',
    quote: 'We appreciate their commitment to organic farming. Our retail customers constantly praise the rich aroma and vibrant color of their herbs.',
    quote_ar: 'نقدر التزامهم الصارم بالزراعة العضوية النظيفة. عملاؤنا في كندا يثنون دائماً على الرائحة العطرة واللون الطبيعي لمنتجاتهم.',
    image: '/assets/img/testimonial/03.jpg',
    rating: 5
  },
  {
    name: 'Parker Jimenez',
    role: 'Distributor – Spain',
    quote: 'Excellent service and fast customer support. They always respond quickly and provide professional advice about the market.',
    quote_ar: 'خدمة ممتازة واستجابة سريعة جداً في إرسال العينات والرد على الاستفسارات وتقديم المشورة الفنية الدقيقة.',
    image: '/assets/img/testimonial/04.jpg',
    rating: 5
  }
];

export interface OldFaq {
  question: string;
  question_ar: string;
  answer: string;
  answer_ar: string;
}

export const oldFaqData: OldFaq[] = [
  {
    question: 'Do you ship internationally?',
    question_ar: 'هل تقومون بالشحن والتصدير إلى كافة دول العالم؟',
    answer: 'Yes, we ship to most countries worldwide via sea and air freight. Delivery times vary depending on destination, usually 7–14 business days with full phytosanitary clearance.',
    answer_ar: 'نعم، نصدر إلى معظم دول العالم عبر الشحن البحري والجوي. تتراوح مدة الشحن عادة بين 7 إلى 14 يوم عمل حسب الميناء مع توفير كافة الشهادات الصحية والزراعية.'
  },
  {
    question: 'Are your products organic?',
    question_ar: 'هل جميع منتجاتكم أعشاب وتوابل عضوية معتمدة؟',
    answer: 'Most of our herbs and spices are certified organic and cultivated without harmful chemicals, pesticides, synthetic fertilizers, or GMOs under international accreditation.',
    answer_ar: 'معظم تشكيلتنا من الأعشاب والبهارات معتمدة عضوياً ومزروعة بدون أسمدة صناعية أو مبيدات كيميائية أو تعديل وراثي وفقاً للمعايير الأوروبية والأمريكية.'
  },
  {
    question: 'What payment methods do you accept?',
    question_ar: 'ما هي طرق وشروط الدفع والتعامل المعتمدة لديكم؟',
    answer: 'We accept T/T (Bank Transfer), confirmed irrevocable L/C at sight, and commercial trade agreements tailored to long-term partnerships.',
    answer_ar: 'نقبل التحويلات البنكية المباشرة (T/T)، والاعتمادات المستندية غير القابلة للإلغاء (L/C at sight)، والاتفاقيات التجارية الميسرة للشراكات طويلة الأجل.'
  },
  {
    question: 'Do you offer bulk or wholesale orders?',
    question_ar: 'هل توفرون طلبيات التصدير بالجملة وبالكميات الكبيرة؟',
    answer: 'Yes, Kingdom Spices Herbs specializes in bulk exports and wholesale supply with customized packaging options ranging from pallets to 20ft and 40ft containers.',
    answer_ar: 'نعم، تتخصص كينجدوم سبايسز هيربس في التصدير بالكميات الكبيرة والتوريد بالجملة مع خيارات تعبئة مخصصة تشمل الحاويات 20 و40 قدماً.'
  },
  {
    question: 'How do you ensure product quality?',
    question_ar: 'كيف تضمنون جودة ونقاء المنتجات قبل الشحن؟',
    answer: 'We follow a strict 5-step quality assurance process, from harvest inspection and laser sorting to microbiology lab analysis, moisture testing, and sealed export packing.',
    answer_ar: 'نطبق نظاماً صارماً من 5 خطوات يبدأ من فحص الحصاد والفرز الإلكتروني، مروراً بالفحوص المخبرية الدقيقة ونسبة الزيوت، وحتى التعبئة المعقمة للشحن.'
  },
  {
    question: 'Do you provide blend development?',
    question_ar: 'هل تقدمون خدمة خلط وتطوير التراكيب العشبية الخاصة؟',
    answer: 'Yes—we formulate custom botanical and herbal tea blends under confidentiality agreements (NDAs) tailored to client recipes.',
    answer_ar: 'نعم، نقوم بإعداد وتجهيز خلطات الأعشاب والشاي والتوابل الخاصة وفق نسب ومواصفات العميل مع توقيع اتفاقيات سرية المهنة.'
  },
  {
    question: 'Can you match competitor specs?',
    question_ar: 'هل يمكنكم مطابقة مواصفات ومعايير الجودة للعينات المنافسة؟',
    answer: 'Share your target sample or Certificate of Analysis (CoA); our lab team will benchmark the organoleptic and technical parameters and propose equivalent or superior grades.',
    answer_ar: 'شاركنا عينة أو شهادة التحليل المستهدفة وسيقوم مختبرنا بمطابقة المواصفات وتقديم درجة مطابقة أو أعلى جودة.'
  },
  {
    question: 'Do you support e-commerce and retail packaging formats?',
    question_ar: 'هل تدعمون أشكال التغليف المخصصة للتجزئة والتجارة الإلكترونية؟',
    answer: 'Yes—we offer stand-up pouches, Kraft window bags, retail boxes, and master carton shippers with customized barcode and labeling.',
    answer_ar: 'نعم، نوفر أكياس مخصصة للبيع بالتجزئة، وأكياس كرافت، وعبوات جاهزة للعلامات التجارية مع الطباعة والتكويد.'
  },
  {
    question: 'What about heavy metals and microbiological limits?',
    question_ar: 'ما هي معاييركم بالنسبة للمعادن الثقيلة والحدود الميكروبيولوجية؟',
    answer: 'All exported lots undergo accredited lab screening for heavy metals, pesticide residues, salmonella, E. coli, and aflatoxins according to destination country regulations.',
    answer_ar: 'تخضع كافة الشحنات لاختبارات دقيقة للمعادن الثقيلة ومتبقيات المبيدات والسالمونيلا والأفلاتوكسين لضمان سلامتها التامة.'
  },
  {
    question: 'Do you offer free product samples?',
    question_ar: 'هل توفرون عينات مجانية لفحص الجودة قبل التعاقد؟',
    answer: 'Yes, representative samples with Certificates of Analysis (CoA) can be dispatched via international express courier within 48 hours for qualification.',
    answer_ar: 'نعم، نقوم بإرسال عينات مجانية معتمدة مصحوبة بشهادات التحليل عبر شركات الشحن السريع الدولي خلال 48 ساعة.'
  }
];
