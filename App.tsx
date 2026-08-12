import { useEffect, useState, type ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, BarChart3, BriefcaseBusiness, Check, Download, ExternalLink, FileText, Layers3, Mail, MapPin, Menu, Phone, Target, X } from 'lucide-react';
import hrDashboard from '@assets/HR_Capital_Analytics_Dashboard_1786561915351.png';
import ecommerceDashboard from '@assets/E-commerce_Performance_1786561921160.png';
import financeDashboard from '@assets/unnamed_1786562782821.png';
import resumePdf from '@assets/ruba-zeid-alhisan-wsiv-nFto_1786561943436.pdf';

type Lang = 'en' | 'ar';
type Project = {
  id: string;
  title: string;
  arabicTitle: string;
  eyebrow: string;
  arabicEyebrow: string;
  image: string;
  description: string;
  arabicDescription: string;
  context: string;
  arabicContext: string;
  proof: string[];
  arabicProof: string[];
  capability: string;
  arabicCapability: string;
  tools: string[];
};

const projects: Project[] = [
  {
    id: 'workforce',
    title: 'Workforce Performance & Absence Analytics',
    arabicTitle: 'تحليلات أداء القوى العاملة والغياب',
    eyebrow: 'People / workforce evidence',
    arabicEyebrow: 'الأفراد / أدلة القوى العاملة',
    image: hrDashboard,
    description: 'A Power BI dashboard designed to bring workforce KPIs, performance patterns, attendance, absence, and salary movement into one readable view.',
    arabicDescription: 'لوحة بيانات صممت عبر Power BI لجمع مؤشرات القوى العاملة وأنماط الأداء والحضور والغياب وحركة الرواتب في رؤية واحدة واضحة.',
    context: 'Designed as a practical human-capital analytics exercise grounded in workforce reporting.',
    arabicContext: 'صممت كتمرين عملي في تحليلات رأس المال البشري، مستند إلى تقارير القوى العاملة.',
    proof: ['Performance by age group', 'Attendance and absence breakdown', 'Performance versus absence by department', 'Monthly salary trend'],
    arabicProof: ['الأداء حسب الفئة العمرية', 'تحليل الحضور والغياب', 'مقارنة الأداء بالغياب حسب الإدارة', 'اتجاه الرواتب الشهري'],
    capability: 'Makes people data easier to read alongside operational signals.',
    arabicCapability: 'تجعل بيانات الأفراد أسهل قراءة إلى جانب المؤشرات التشغيلية.',
    tools: ['Power BI', 'Data analysis', 'Dashboard design'],
  },
  {
    id: 'commercial',
    title: 'Commercial Performance & Customer Analytics',
    arabicTitle: 'تحليلات الأداء التجاري والعملاء',
    eyebrow: 'Commercial / customer evidence',
    arabicEyebrow: 'التجاري / أدلة العملاء',
    image: ecommerceDashboard,
    description: 'A Power BI view of commercial performance, customer behavior, product categories, order status, and payment methods across an e-commerce dataset.',
    arabicDescription: 'رؤية عبر Power BI للأداء التجاري وسلوك العملاء وفئات المنتجات وحالة الطلبات وطرق الدفع ضمن بيانات التجارة الإلكترونية.',
    context: 'Built to practice translating commercial data into a focused decision-support view.',
    arabicContext: 'بنيت للتدرب على تحويل البيانات التجارية إلى رؤية مركزة لدعم القرار.',
    proof: ['Profit by age group', 'Returned and completed orders', 'Product category filters', 'Payment method patterns'],
    arabicProof: ['الربح حسب الفئة العمرية', 'الطلبات المرتجعة والمكتملة', 'مرشحات فئات المنتجات', 'أنماط طرق الدفع'],
    capability: 'Connects customer and product signals without overstating what the dataset proves.',
    arabicCapability: 'تربط بين إشارات العملاء والمنتجات دون تجاوز ما تثبته البيانات.',
    tools: ['Power BI', 'Excel', 'Data storytelling'],
  },
  {
    id: 'finance',
    title: 'Financial Performance & Profitability Analytics',
    arabicTitle: 'تحليلات الأداء المالي والربحية',
    eyebrow: 'Finance / decision evidence',
    arabicEyebrow: 'المالية / أدلة القرار',
    image: financeDashboard,
    description: 'A Power BI dashboard developed to analyze revenue, profit, units sold, quarterly performance, product mix, and country comparison.',
    arabicDescription: 'لوحة مالية طورت عبر Power BI لتحليل الإيرادات والأرباح والوحدات المباعة والأداء الربعي ومزيج المنتجات والمقارنة بين الدول.',
    context: 'Developed as a financial-performance visualization project using the supplied dashboard dataset.',
    arabicContext: 'طورت كمشروع لتصور الأداء المالي باستخدام مجموعة البيانات الخاصة باللوحة.',
    proof: ['Profit by product', 'Revenue by product', 'Profit by quarter', 'Profit by country'],
    arabicProof: ['الربح حسب المنتج', 'الإيرادات حسب المنتج', 'الربح حسب الربع', 'الربح حسب الدولة'],
    capability: 'Builds a clear frame for reviewing profitability and performance dimensions.',
    arabicCapability: 'تبني إطاراً واضحاً لمراجعة أبعاد الربحية والأداء.',
    tools: ['Power BI', 'Performance analysis', 'Reporting'],
  },
];

const copy = {
  en: {
    navWork: 'Selected evidence', navExperience: 'Experience', navAbout: 'Profile', navContact: 'Connect',
    availability: 'Open to People Analytics opportunities', kicker: 'People Analytics · HR Transformation · Riyadh',
    heroTitle: 'People Analytics & HR Transformation Analyst',
    heroBody: 'I turn workforce data, HR processes, and organizational insight into clearer business decisions.',
    heroSupport: 'Building at the intersection of people, systems, and evidence.',
    viewWork: 'Review selected evidence', download: 'Download résumé',
    signalTitle: 'A focused direction', signalBody: 'Making the people side of work more visible, structured, and useful for decisions.',
    signalA: 'People insight', signalB: 'Data clarity', signalC: 'Process improvement',
    focusLabel: 'Current focus', focusRoles: 'People Analytics · HR Transformation · Workforce Planning · Organizational Effectiveness',
    workKicker: 'Selected evidence', workTitle: 'Dashboards that show how I think.',
    workBody: 'Three practical projects demonstrate how I structure information, surface patterns, and communicate what a dataset makes visible.',
    inspect: 'Open case study', evidence: 'Evidence in view',
    experienceKicker: 'Factual experience', experienceTitle: 'Grounded in the work behind the data.',
    current: 'Current / latest experience', trainee: 'HR & OD Specialist Trainee · Tamheer Program',
    premium: 'Premium Residency Center — Riyadh', dateLatest: 'September 2025 — April 2026',
    earlier: 'Earlier experience', coop: 'HR Consulting Co-op Trainee',
    firstAccess: 'First Access Consulting — Riyadh', dateEarlier: 'January 2025 — May 2025',
    aboutKicker: 'Professional edge', aboutTitle: 'A practical bridge between people, systems, and evidence.',
    aboutBody: 'I am a recent Business Administration graduate from Princess Nourah Bint Abdulrahman University. My experience includes HR operations, performance-management support, recruitment coordination, organizational documentation, and dashboard-based analysis.',
    bringTitle: 'What I bring', bringPeople: 'People insight', bringPeopleBody: 'An HR-grounded view of how roles, performance, and workforce information connect.',
    bringData: 'Data clarity', bringDataBody: 'A habit of organizing dashboards and reports so a stakeholder can see the signal.',
    bringProcess: 'Process improvement', bringProcessBody: 'Careful documentation and workflow support that make the next step easier to execute.',
    education: 'Education', degree: 'Bachelor of Business Administration', university: 'Princess Nourah Bint Abdulrahman University',
    educationDate: 'January 2021 — June 2025', capabilities: 'Relevant capabilities', skills: 'Skills & tools',
    certifications: 'Certifications & courses', contactKicker: 'A focused next conversation',
    contactTitle: 'For teams building better people decisions.',
    contactBody: 'I am targeting early-career roles in People Analytics, HR Transformation, Workforce Planning, Performance Management, and Organizational Effectiveness.',
    email: 'Email Ruba', call: 'Call Ruba', footer: 'Ruba Zeid Alhisan · CAPM®',
    close: 'Close case study', projectLens: 'Case study / dashboard evidence', context: 'Context',
    visible: 'What the dashboard makes visible', capability: 'Capability demonstrated', tools: 'Tools',
    openPdf: 'Open résumé PDF', arabic: 'العربية', dashboardAlt: 'Dashboard evidence for',
  },
  ar: {
    navWork: 'أدلة مختارة', navExperience: 'الخبرة', navAbout: 'الملف المهني', navContact: 'تواصل',
    availability: 'منفتحة على فرص تحليلات الأفراد', kicker: 'تحليلات الأفراد · تحول الموارد البشرية · الرياض',
    heroTitle: 'محللة تحليلات القوى العاملة وتحول الموارد البشرية',
    heroBody: 'أحوّل بيانات القوى العاملة وعمليات الموارد البشرية والرؤية التنظيمية إلى قرارات أعمال أوضح.',
    heroSupport: 'أبني مساري عند تقاطع الأفراد والأنظمة والدليل.',
    viewWork: 'استعرضي الأدلة المختارة', download: 'تحميل السيرة الذاتية',
    signalTitle: 'مسار مهني واضح', signalBody: 'إظهار جانب الأفراد في العمل بصورة أوضح وأكثر تنظيماً وفائدة للقرار.',
    signalA: 'رؤية الأفراد', signalB: 'وضوح البيانات', signalC: 'تحسين العمليات',
    focusLabel: 'التركيز الحالي', focusRoles: 'تحليلات الأفراد · تحول الموارد البشرية · تخطيط القوى العاملة · الفعالية التنظيمية',
    workKicker: 'أدلة مختارة', workTitle: 'لوحات توضح طريقة تفكيري.',
    workBody: 'توضح ثلاثة مشاريع عملية كيف أنظم المعلومات، وأبرز الأنماط، وأشرح ما الذي تظهره البيانات.',
    inspect: 'افتحي دراسة الحالة', evidence: 'الدليل المعروض',
    experienceKicker: 'الخبرة الفعلية', experienceTitle: 'خبرة عملية تقف خلف البيانات.',
    current: 'الخبرة الأحدث', trainee: 'متدربة أخصائي تطوير تنظيمي وموارد بشرية · تمهير',
    premium: 'مركز الإقامة المميزة — الرياض', dateLatest: 'سبتمبر 2025 — أبريل 2026',
    earlier: 'خبرة سابقة', coop: 'متدربة تعاونية في الاستشارات الإدارية',
    firstAccess: 'First Access Consulting — الرياض', dateEarlier: 'يناير 2025 — مايو 2025',
    aboutKicker: 'الميزة المهنية', aboutTitle: 'حلقة عملية بين الأفراد والأنظمة والدليل.',
    aboutBody: 'أنا خريجة حديثة في إدارة الأعمال من جامعة الأميرة نورة بنت عبدالرحمن. تشمل خبرتي عمليات الموارد البشرية، ودعم إدارة الأداء، وتنسيق الاستقطاب، والتوثيق التنظيمي، والتحليل القائم على اللوحات.',
    bringTitle: 'ما الذي أقدمه', bringPeople: 'رؤية الأفراد', bringPeopleBody: 'فهم مستند إلى الموارد البشرية للعلاقة بين الأدوار والأداء ومعلومات القوى العاملة.',
    bringData: 'وضوح البيانات', bringDataBody: 'تنظيم اللوحات والتقارير بحيث يستطيع صاحب المصلحة رؤية الإشارة.',
    bringProcess: 'تحسين العمليات', bringProcessBody: 'توثيق دقيق ودعم لسير العمل يجعل الخطوة التالية أسهل في التنفيذ.',
    education: 'التعليم', degree: 'بكالوريوس إدارة الأعمال', university: 'جامعة الأميرة نورة بنت عبدالرحمن',
    educationDate: 'يناير 2021 — يونيو 2025', capabilities: 'المجالات ذات الصلة', skills: 'المهارات والأدوات',
    certifications: 'الشهادات والدورات', contactKicker: 'محادثة مهنية باتجاه واضح',
    contactTitle: 'للفرق التي تبني قرارات أفضل للأفراد.',
    contactBody: 'أستهدف أدوار بداية المسار في تحليلات الأفراد، وتحول الموارد البشرية، وتخطيط القوى العاملة، وإدارة الأداء، والفعالية التنظيمية.',
    email: 'راسلِي رُبى', call: 'اتصلِي برُبى', footer: 'رُبى زيد الحيسان · CAPM®',
    close: 'إغلاق دراسة الحالة', projectLens: 'دراسة حالة / دليل لوحة البيانات', context: 'السياق',
    visible: 'ما الذي توضحه اللوحة', capability: 'المهارة التي يثبتها المشروع', tools: 'الأدوات',
    openPdf: 'فتح ملف السيرة الذاتية', arabic: 'English', dashboardAlt: 'دليل لوحة البيانات لـ',
  },
} as const;

const experienceBullets = [
  'Supported the administration of and improvements to the Performance Management System, ensuring accurate goal alignment and timely approval workflows.',
  'Coordinated performance cycle activities through the Dynamic ERP System (Khadamati), improving process accuracy and workflow efficiency.',
  'Standardized and maintained job descriptions to improve role clarity, organizational alignment, and workforce documentation.',
  'Contributed to organizational structure updates by supporting documentation and alignment with business requirements.',
  'Maintained accurate HR records for 200+ employees while preparing HR operational reports, processing medical insurance requests, and supporting the 2026 Employee Handbook.',
];
const arabicExperienceBullets = [
  'دعمت إدارة نظام إدارة الأداء وتحسينه، مع ضمان دقة مواءمة الأهداف وسرعة مسارات الاعتماد.',
  'نسقت أنشطة دورة الأداء عبر نظام ERP الديناميكي (خدماتي)، مما عزز دقة الإجراءات وكفاءة سير العمل.',
  'وحّدت الأوصاف الوظيفية وحافظت عليها لتحسين وضوح الأدوار والمواءمة التنظيمية وتوثيق القوى العاملة.',
  'ساهمت في تحديث الهياكل التنظيمية عبر دعم التوثيق ومواءمته مع متطلبات العمل.',
  'حافظت على دقة سجلات الموارد البشرية لأكثر من 200 موظف، وأعددت التقارير التشغيلية، وعالجت طلبات التأمين الطبي، ودعمت دليل الموظف لعام 2026.',
];
const consultingBullets = [
  'Screened 50+ CVs daily, ensuring efficient candidate shortlisting and alignment with client requirements.',
  'Sourced candidates through the company’s recruitment CRM, LinkedIn, and AI-powered tools to strengthen the recruitment pipeline and expand candidate reach.',
  'Assessed applicants based on experience, job alignment, and salary expectations, while preparing candidate profiles and conducting initial screening interviews.',
  'Developed a business improvement report analyzing competitors’ HR services and marketing strategies, providing insights to support service enhancement initiatives.',
];
const arabicConsultingBullets = [
  'راجعت أكثر من 50 سيرة ذاتية يومياً لضمان كفاءة فرز المرشحين ومواءمتهم مع متطلبات العملاء.',
  'استقطبت المرشحين عبر نظام إدارة علاقات التوظيف وLinkedIn وأدوات مدعومة بالذكاء الاصطناعي لتعزيز قاعدة الاستقطاب وتوسيع الوصول.',
  'قيّمت المتقدمين بناءً على الخبرة وملاءمة الدور والتوقعات المالية، وأعددت ملفات المرشحين وأجريت المقابلات الأولية.',
  'أعددت تقريراً لتحسين الأعمال حلل خدمات الموارد البشرية واستراتيجيات التسويق لدى المنافسين لدعم تطوير الخدمات.',
];
const skills = ['Organizational Development', 'Performance Management', 'Workforce Planning', 'Data Analysis', 'Change Support', 'Power BI', 'Microsoft Excel', 'Dynamic ERP System (Khadamati)'];
const certifications = ['Certified Associate in Project Management (CAPM®) · PMI', 'Data Analysis Using Excel and Power BI · TVTC', 'Organizational Design · Macquarie University (Coursera)', 'Human Resources Analytics · University of California, Irvine (Coursera)', 'Modern Practices in Human Resources Management · HADAF', 'Labor Culture According to the Saudi Labor System · HADAF', 'Using Artificial Intelligence in Human Resources Management · HADAF', 'Corporate Strategy · University of London (Coursera)', 'Microsoft Office Specialist · Pearson MyLab', 'Negotiation & Persuasion Skills · Adel Bahim'];

function ArrowLink({ href, children, className = '', testId }: { href: string; children: ReactNode; className?: string; testId?: string }) {
  return <a href={href} data-testid={testId} className={`group inline-flex items-center gap-2 transition-colors hover:text-[hsl(var(--secondary))] ${className}`}>{children}<ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></a>;
}
function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="font-mono-ui text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--secondary))]">{children}</p>;
}

function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const text = copy[lang];
  const isAr = lang === 'ar';
  useEffect(() => { document.documentElement.lang = lang; document.documentElement.dir = isAr ? 'rtl' : 'ltr'; }, [lang, isAr]);
  useEffect(() => {
    if (!activeProject) return undefined;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setActiveProject(null); };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = ''; };
  }, [activeProject]);
  const switchLanguage = () => setLang((current) => current === 'en' ? 'ar' : 'en');

  return <div className="grain min-h-[100dvh] overflow-x-hidden bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[hsl(var(--border)/.75)] bg-[hsl(var(--background)/.88)] backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
        <a href="#top" data-testid="link-home" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}><span className="grid h-9 w-9 place-items-center rounded-full bg-[hsl(var(--primary))] font-display text-lg text-[hsl(var(--accent))]">R</span><span className="hidden text-sm font-semibold tracking-tight sm:block">Ruba Zeid Alhisan<span className="text-[hsl(var(--secondary))]">.</span></span></a>
        <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-5 right-5 top-[82px] flex-col gap-1 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-3 shadow-xl md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`} aria-label="Primary navigation">
          <ArrowLink href="#work" testId="link-nav-work" className="px-3 py-2 text-sm font-medium">{text.navWork}</ArrowLink>
          <ArrowLink href="#experience" testId="link-nav-experience" className="px-3 py-2 text-sm font-medium">{text.navExperience}</ArrowLink>
          <ArrowLink href="#about" testId="link-nav-about" className="px-3 py-2 text-sm font-medium">{text.navAbout}</ArrowLink>
          <ArrowLink href="#contact" testId="link-nav-contact" className="px-3 py-2 text-sm font-medium">{text.navContact}</ArrowLink>
        </nav>
        <div className="flex items-center gap-2"><button type="button" data-testid="button-language-toggle" onClick={switchLanguage} className="focus-ring rounded-full border border-[hsl(var(--border))] px-3 py-2 font-mono-ui text-[10px] font-bold uppercase tracking-wider transition-colors hover:border-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary))]">{text.arabic}</button><button type="button" data-testid="button-mobile-menu" onClick={() => setMenuOpen((open) => !open)} className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-[hsl(var(--border))] md:hidden" aria-label="Toggle menu">{menuOpen ? <X size={17} /> : <Menu size={17} />}</button></div>
      </div>
    </header>

    <main id="top">
      <section className="portfolio-grid relative px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-48">
        <div className="mx-auto grid max-w-[1240px] gap-16 lg:grid-cols-[1.14fr_.86fr] lg:items-end lg:gap-24">
          <div className="reveal"><div className="mb-7 flex items-center gap-3"><span className="h-px w-10 bg-[hsl(var(--secondary))]" /><span className="font-mono-ui text-[10px] font-bold uppercase tracking-[.2em] text-[hsl(var(--muted-foreground))]">{text.kicker}</span></div><h1 data-testid="text-hero-title" className="max-w-5xl text-balance font-display text-[clamp(3.5rem,8.2vw,7.8rem)] leading-[.88] tracking-[-.045em] text-[hsl(var(--primary))]">{text.heroTitle}</h1><p data-testid="text-hero-body" className="mt-8 max-w-xl text-lg leading-8 text-[hsl(var(--muted-foreground))]">{text.heroBody}</p><p className="mt-4 font-mono-ui text-xs font-bold uppercase tracking-[.12em] text-[hsl(var(--secondary))]">{text.heroSupport}</p><div className="mt-10 flex flex-wrap items-center gap-5"><a href="#work" data-testid="link-view-work" className="group inline-flex items-center gap-4 rounded-full bg-[hsl(var(--primary))] px-6 py-3.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] transition-transform hover:-translate-y-0.5">{text.viewWork}<span className="grid h-6 w-6 place-items-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--primary))] transition-transform group-hover:rotate-45"><ArrowUpRight size={14} /></span></a><a href={resumePdf} download="Ruba-Zeid-Alhisan-Resume.pdf" data-testid="link-download-resume" className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-[hsl(var(--accent))] decoration-2 underline-offset-4 hover:text-[hsl(var(--secondary))]"><Download size={15} />{text.download}</a></div></div>
          <div className="reveal reveal-delay-2 relative"><div className="absolute -right-4 -top-8 h-24 w-24 rounded-full border border-[hsl(var(--accent)/.75)] lg:-right-10" aria-hidden="true" /><div className="relative overflow-hidden rounded-[2rem] bg-[hsl(var(--primary))] p-7 text-[hsl(var(--primary-foreground))] shadow-2xl shadow-[hsl(var(--primary)/.18)] lg:p-9"><div className="mb-12 flex items-start justify-between"><Target size={20} className="text-[hsl(var(--accent))]" /><span className="font-mono-ui text-[10px] uppercase tracking-[.18em] text-[hsl(var(--primary-foreground)/.58)]">CAPM® / 2025</span></div><p className="font-mono-ui text-[10px] font-bold uppercase tracking-[.2em] text-[hsl(var(--secondary))]">{text.signalTitle}</p><p className="mt-4 max-w-sm font-display text-4xl leading-[.98]">{text.signalBody}</p><div className="mt-12 grid grid-cols-3 gap-2 border-t border-[hsl(var(--primary-foreground)/.16)] pt-5">{[text.signalA, text.signalB, text.signalC].map((signal, index) => <div key={signal}><span className="mb-2 block font-mono-ui text-[10px] text-[hsl(var(--primary-foreground)/.46)]">0{index + 1}</span><span className="text-sm font-semibold">{signal}</span></div>)}</div></div></div>
        </div>
        <div className="mx-auto mt-20 grid max-w-[1240px] gap-4 border-t border-[hsl(var(--border))] pt-4 font-mono-ui text-[10px] uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))] sm:grid-cols-[auto_1fr_auto]"><span>0506709877</span><span className="hidden text-center sm:block">{text.focusLabel}: {text.focusRoles}</span><span className="text-left sm:text-right">Riyadh, Saudi Arabia</span></div>
      </section>

      <section id="work" className="px-5 py-24 lg:px-8 lg:py-36"><div className="mx-auto max-w-[1240px]"><div className="mb-14 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><div><SectionLabel>{text.workKicker}</SectionLabel><h2 className="mt-4 max-w-2xl font-display text-5xl leading-[.95] tracking-[-.03em] text-[hsl(var(--primary))] lg:text-7xl">{text.workTitle}</h2></div><p className="max-w-sm text-sm leading-6 text-[hsl(var(--muted-foreground))]">{text.workBody}</p></div><div className="grid gap-6 lg:grid-cols-[1.16fr_.84fr]"><ProjectCard project={projects[0]} tall onOpen={() => setActiveProject(projects[0])} text={text} isAr={isAr} /><div className="grid gap-6"><ProjectCard project={projects[1]} onOpen={() => setActiveProject(projects[1])} text={text} isAr={isAr} /><ProjectCard project={projects[2]} onOpen={() => setActiveProject(projects[2])} text={text} isAr={isAr} /></div></div></div></section>

      <section id="experience" className="bg-[hsl(var(--primary))] px-5 py-24 text-[hsl(var(--primary-foreground))] lg:px-8 lg:py-36"><div className="mx-auto max-w-[1240px]"><div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24"><div><SectionLabel>{text.experienceKicker}</SectionLabel><h2 className="mt-4 max-w-md font-display text-5xl leading-[.95] tracking-[-.03em] lg:text-7xl">{text.experienceTitle}</h2></div><div className="space-y-12"><ExperienceEntry label={text.current} role={text.trainee} company={text.premium} date={text.dateLatest} bullets={isAr ? arabicExperienceBullets : experienceBullets} current /><ExperienceEntry label={text.earlier} role={text.coop} company={text.firstAccess} date={text.dateEarlier} bullets={isAr ? arabicConsultingBullets : consultingBullets} /></div></div></div></section>

      <section id="about" className="portfolio-grid px-5 py-24 lg:px-8 lg:py-36"><div className="mx-auto max-w-[1240px]"><div className="grid gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-24"><div><SectionLabel>{text.aboutKicker}</SectionLabel><h2 className="mt-4 font-display text-5xl leading-[.95] tracking-[-.03em] text-[hsl(var(--primary))] lg:text-7xl">{text.aboutTitle}</h2><p className="mt-8 max-w-lg text-lg leading-8 text-[hsl(var(--muted-foreground))]">{text.aboutBody}</p><div className="mt-10 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card)/.68)] p-5"><p className="font-mono-ui text-[10px] font-bold uppercase tracking-[.15em] text-[hsl(var(--secondary))]">{text.focusLabel}</p><p className="mt-3 text-sm font-semibold leading-6">{text.focusRoles}</p></div></div><div><div className="mb-5 flex items-center gap-3"><Layers3 size={18} className="text-[hsl(var(--secondary))]" /><h3 className="font-mono-ui text-[10px] font-bold uppercase tracking-[.16em]">{text.bringTitle}</h3></div><div className="grid gap-4 md:grid-cols-3"><Pillar number="01" title={text.bringPeople} body={text.bringPeopleBody} /><Pillar number="02" title={text.bringData} body={text.bringDataBody} /><Pillar number="03" title={text.bringProcess} body={text.bringProcessBody} /></div><div className="mt-6 grid gap-5 sm:grid-cols-2"><InfoBlock icon={<BriefcaseBusiness size={18} />} title={text.education}><p className="font-semibold">{text.degree}</p><p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">{text.university}</p><p className="mt-3 font-mono-ui text-[10px] text-[hsl(var(--secondary))]">{text.educationDate}</p></InfoBlock><InfoBlock icon={<BarChart3 size={18} />} title={text.capabilities}><div className="flex flex-wrap gap-2">{skills.slice(0, 5).map((skill) => <span key={skill} className="rounded-full border border-[hsl(var(--border))] px-2.5 py-1.5 text-xs">{isAr ? translateSkill(skill) : skill}</span>)}</div></InfoBlock><InfoBlock icon={<FileText size={18} />} title={text.certifications} wide><ul className="grid gap-2 text-sm leading-5 text-[hsl(var(--muted-foreground))] sm:grid-cols-2">{certifications.map((cert) => <li key={cert} className="flex gap-2"><Check size={14} className="mt-0.5 shrink-0 text-[hsl(var(--secondary))]" />{isAr ? translateCertification(cert) : cert}</li>)}</ul></InfoBlock><InfoBlock icon={<Layers3 size={18} />} title={text.skills} wide><div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-full bg-[hsl(var(--muted))] px-3 py-2 text-xs font-medium">{isAr ? translateSkill(skill) : skill}</span>)}</div></InfoBlock></div></div></div></div></section>

      <section id="contact" className="relative overflow-hidden bg-[hsl(var(--accent))] px-5 py-24 lg:px-8 lg:py-32"><div className="absolute -bottom-24 -left-12 h-72 w-72 rounded-full border-[1.5px] border-[hsl(var(--primary)/.16)]" aria-hidden="true" /><div className="relative mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[1fr_auto] lg:items-end"><div><SectionLabel>{text.contactKicker}</SectionLabel><h2 className="mt-4 max-w-3xl font-display text-6xl leading-[.88] tracking-[-.04em] text-[hsl(var(--primary))] lg:text-8xl">{text.contactTitle}</h2><p className="mt-7 max-w-xl text-lg leading-7 text-[hsl(var(--primary)/.72)]">{text.contactBody}</p></div><div className="flex flex-col items-start gap-4 lg:items-end"><a href="mailto:rubazaid9@gmail.com" data-testid="link-email-contact" className="inline-flex items-center gap-3 rounded-full bg-[hsl(var(--primary))] px-6 py-4 text-sm font-semibold text-[hsl(var(--primary-foreground))] transition-transform hover:-translate-y-0.5"><Mail size={17} />{text.email}</a><a href="tel:+966506709877" data-testid="link-phone-contact" className="inline-flex items-center gap-3 px-3 py-2 text-sm font-semibold text-[hsl(var(--primary))] underline decoration-[hsl(var(--primary)/.35)] underline-offset-4"><Phone size={15} />{text.call}</a></div></div></section>
    </main>
    <footer className="bg-[hsl(var(--primary))] px-5 py-7 text-[hsl(var(--primary-foreground)/.65)] lg:px-8"><div className="mx-auto flex max-w-[1240px] flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between"><span className="font-semibold text-[hsl(var(--primary-foreground))]">{text.footer}</span><span className="flex items-center gap-2"><MapPin size={13} />Riyadh, Saudi Arabia</span><a href={resumePdf} target="_blank" rel="noreferrer" data-testid="link-open-resume-footer" className="inline-flex items-center gap-2 hover:text-[hsl(var(--accent))]"><ExternalLink size={13} />{text.openPdf}</a></div></footer>
    {activeProject && <ProjectModal project={activeProject} text={text} isAr={isAr} onClose={() => setActiveProject(null)} />}
  </div>;
}

function ProjectCard({ project, tall = false, onOpen, text, isAr }: { project: Project; tall?: boolean; onOpen: () => void; text: Record<string, string>; isAr: boolean }) {
  const title = isAr ? project.arabicTitle : project.title;
  return <article className={`group overflow-hidden rounded-[1.4rem] border border-[hsl(var(--border))] bg-[hsl(var(--card))] ${tall ? 'lg:row-span-2' : ''}`}><button type="button" data-testid={`button-project-${project.id}`} onClick={onOpen} className="focus-ring block w-full text-left"><div className={`dashboard-stage ${tall ? 'aspect-[1.45]' : 'aspect-[1.85]'}`}><img src={project.image} alt={`${text.dashboardAlt} ${title}`} className="dashboard-image opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100" /></div><div className="p-6 lg:p-7"><div className="mb-4 flex items-center justify-between gap-4"><span className="font-mono-ui text-[10px] font-bold uppercase tracking-[.15em] text-[hsl(var(--secondary))]">{isAr ? project.arabicEyebrow : project.eyebrow}</span><span className="grid h-9 w-9 place-items-center rounded-full border border-[hsl(var(--border))] transition-colors group-hover:border-[hsl(var(--secondary))] group-hover:bg-[hsl(var(--secondary))]"><ArrowUpRight size={16} /></span></div><h3 className="max-w-lg font-display text-3xl leading-none text-[hsl(var(--primary))] lg:text-4xl">{title}</h3><p className="mt-4 max-w-xl text-sm leading-6 text-[hsl(var(--muted-foreground))]">{isAr ? project.arabicDescription : project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tools.map((tool) => <span key={tool} className="rounded-full bg-[hsl(var(--muted))] px-2.5 py-1 font-mono-ui text-[9px] uppercase tracking-wide">{tool}</span>)}</div><span className="mt-6 inline-flex items-center gap-2 text-xs font-bold underline decoration-[hsl(var(--accent))] decoration-2 underline-offset-4">{text.inspect}<ArrowRight size={13} /></span></div></button></article>;
}

function ExperienceEntry({ label, role, company, date, bullets, current = false }: { label: string; role: string; company: string; date: string; bullets: string[]; current?: boolean }) {
  return <article className="relative border-t border-[hsl(var(--primary-foreground)/.22)] pt-6"><div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-start"><div><div className="mb-3 flex items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[.16em] text-[hsl(var(--secondary))]"><span className={`h-2 w-2 rounded-full ${current ? 'bg-[hsl(var(--accent))]' : 'bg-[hsl(var(--primary-foreground)/.4)]'}`} />{label}</div><h3 className="text-xl font-semibold">{role}</h3><p className="mt-1 text-[hsl(var(--primary-foreground)/.65)]">{company}</p></div><span className="font-mono-ui text-[10px] uppercase tracking-[.12em] text-[hsl(var(--primary-foreground)/.5)]">{date}</span></div><ul className="grid gap-3 text-sm leading-6 text-[hsl(var(--primary-foreground)/.72)]">{bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--secondary))]" />{bullet}</li>)}</ul></article>;
}

function Pillar({ number, title, body }: { number: string; title: string; body: string }) {
  return <article className="rounded-[1.2rem] border border-[hsl(var(--border))] bg-[hsl(var(--card)/.72)] p-5"><span className="font-mono-ui text-[10px] font-bold text-[hsl(var(--secondary))]">{number}</span><h3 className="mt-10 font-display text-3xl leading-none text-[hsl(var(--primary))]">{title}</h3><p className="mt-4 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{body}</p></article>;
}
function InfoBlock({ icon, title, children, wide = false }: { icon: ReactNode; title: string; children: ReactNode; wide?: boolean }) {
  return <div className={`${wide ? 'sm:col-span-2' : ''} rounded-[1.2rem] border border-[hsl(var(--border))] bg-[hsl(var(--card)/.65)] p-6`}><div className="mb-6 flex items-center gap-3 text-[hsl(var(--secondary))]"><span className="grid h-8 w-8 place-items-center rounded-full bg-[hsl(var(--muted))]">{icon}</span><h3 className="font-mono-ui text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--foreground))]">{title}</h3></div>{children}</div>;
}

function ProjectModal({ project, text, isAr, onClose }: { project: Project; text: Record<string, string>; isAr: boolean; onClose: () => void }) {
  const title = isAr ? project.arabicTitle : project.title;
  const proof = isAr ? project.arabicProof : project.proof;
  return <div className="fixed inset-0 z-50 grid place-items-center bg-[hsl(var(--primary)/.72)] p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><div className="max-h-[92dvh] w-full max-w-5xl overflow-y-auto rounded-[1.5rem] bg-[hsl(var(--card))] shadow-2xl"><div className="sticky top-0 z-10 flex items-center justify-between border-b border-[hsl(var(--border))] bg-[hsl(var(--card)/.94)] px-5 py-4 backdrop-blur-md lg:px-7"><span className="font-mono-ui text-[10px] font-bold uppercase tracking-[.17em] text-[hsl(var(--secondary))]">{text.projectLens}</span><button type="button" data-testid="button-close-project" onClick={onClose} className="focus-ring grid h-9 w-9 place-items-center rounded-full border border-[hsl(var(--border))]" aria-label={text.close}><X size={16} /></button></div><div className="grid lg:grid-cols-[1.05fr_.95fr]"><div className="flex min-h-[280px] items-center justify-center bg-[hsl(var(--primary))] p-4 lg:p-7"><img src={project.image} alt={`${text.dashboardAlt} ${title}`} className="max-h-[58vh] w-full object-contain rounded-lg" /></div><div className="p-6 lg:p-10"><h2 id="project-modal-title" className="font-display text-5xl leading-[.9] text-[hsl(var(--primary))]">{title}</h2><p className="mt-6 text-base leading-7 text-[hsl(var(--muted-foreground))]">{isAr ? project.arabicDescription : project.description}</p><Detail label={text.context} value={isAr ? project.arabicContext : project.context} /><p className="mt-8 font-mono-ui text-[10px] font-bold uppercase tracking-[.18em] text-[hsl(var(--secondary))]">{text.visible}</p><ul className="mt-5 grid gap-4">{proof.map((item) => <li key={item} className="flex items-center gap-3 text-sm"><Check size={16} className="text-[hsl(var(--secondary))]" />{item}</li>)}</ul><Detail label={text.capability} value={isAr ? project.arabicCapability : project.capability} /><p className="mt-8 font-mono-ui text-[10px] font-bold uppercase tracking-[.18em] text-[hsl(var(--secondary))]">{text.tools}</p><div className="mt-4 flex flex-wrap gap-2">{project.tools.map((tool) => <span key={tool} className="rounded-full bg-[hsl(var(--muted))] px-3 py-2 font-mono-ui text-[10px] uppercase">{tool}</span>)}</div></div></div></div></div>;
}
function Detail({ label, value }: { label: string; value: string }) {
  return <div className="mt-8 border-l-2 border-[hsl(var(--accent))] pl-4"><p className="font-mono-ui text-[10px] font-bold uppercase tracking-[.18em] text-[hsl(var(--secondary))]">{label}</p><p className="mt-2 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{value}</p></div>;
}
function translateSkill(skill: string) {
  const map: Record<string, string> = { 'Organizational Development': 'التطوير التنظيمي', 'Performance Management': 'إدارة الأداء', 'Workforce Planning': 'تخطيط القوى العاملة', 'Data Analysis': 'تحليل البيانات', 'Change Support': 'دعم التغيير', 'Power BI': 'Power BI', 'Microsoft Excel': 'Microsoft Excel', 'Dynamic ERP System (Khadamati)': 'نظام ERP الديناميكي (خدماتي)' };
  return map[skill] ?? skill;
}
function translateCertification(certification: string) {
  const map: Record<string, string> = { 'Certified Associate in Project Management (CAPM®) · PMI': 'شهادة مساعد معتمد في إدارة المشاريع (CAPM®) · PMI', 'Data Analysis Using Excel and Power BI · TVTC': 'تحليل البيانات باستخدام Excel وPower BI · TVTC', 'Organizational Design · Macquarie University (Coursera)': 'التصميم التنظيمي · جامعة Macquarie (Coursera)', 'Human Resources Analytics · University of California, Irvine (Coursera)': 'تحليلات الموارد البشرية · جامعة كاليفورنيا، إيرفاين (Coursera)', 'Modern Practices in Human Resources Management · HADAF': 'الممارسات الحديثة في إدارة الموارد البشرية · HADAF', 'Labor Culture According to the Saudi Labor System · HADAF': 'الثقافة العمالية وفق نظام العمل السعودي · HADAF', 'Using Artificial Intelligence in Human Resources Management · HADAF': 'استخدام الذكاء الاصطناعي في إدارة الموارد البشرية · HADAF', 'Corporate Strategy · University of London (Coursera)': 'استراتيجية الشركات · جامعة لندن (Coursera)', 'Microsoft Office Specialist · Pearson MyLab': 'أخصائي Microsoft Office · Pearson MyLab', 'Negotiation & Persuasion Skills · Adel Bahim': 'مهارات التفاوض والإقناع · عادل بهيم' };
  return map[certification] ?? certification;
}

export default App;