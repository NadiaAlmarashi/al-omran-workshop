// استيراد الصور من مجلد src/assets
import pn1 from './assets/pn1.JPG';
import pn2 from './assets/pn2.JPG';
import pn3 from './assets/pn3.JPG';
import pn4 from './assets/pn4.jpg';
import pn5 from './assets/pn5.jpg';
import pn6 from './assets/pn6.JPG';
import pn7 from './assets/pn7.jpg';
import pn8 from './assets/pn8.jpg';
import pn9 from './assets/pn9.jpg';
import pn10 from './assets/pn10.jpg';
import pn11 from './assets/pn11.jpg';
import pn12 from './assets/pn12.jpg';

export const siteData = {
  ar: {
    hero: {
      title: "صناعة الحديد والألومنيوم والزجاج بدقة هندسية متكاملة",
      subtitle: "نجمع بين متانة التصنيع وعصرية التشطيب للمشاريع السكنية والتجارية بالمدينة المنورة. ملتزمون بأعلى معايير الجودة والعمل المتقن تحت إدارة وإشراف وطني.",
      cta: "احجز موعد فحص ومعاينة مجانية للموقع" // أضفت الفاصلة التي كانت مفقودة
    },
    services: {
      title: "خدماتنا وحلولنا المعمارية",
      subtitle: "حلول متكاملة نضمن فيها جودة المواد وخلو التنفيذ من العيوب لتلبية تطلعاتكم بالمدينة المنورة.",
      items: [
        { title: "أبواب وشبابيك حديد أمنية", desc: "تصنيع وتركيب أبواب حديد فاخرة ونوافذ (شبابيك) حديد متينة بأعلى درجات الصلابة وتصاميم تجمع بين الأمان والأناقة." },
        { title: "درابزينات حديد فنية", desc: "تنفيذ وتفصيل درابزينات حديد للسلالم والشرفات بتصاميم عصرية وكلاسيكية تتناسب مع الديكورات الداخلية والخارجية." },
        { title: "أبواب ونوافذ ألمنيوم", desc: "تركيب أبواب ألمنيوم ونوافذ ألمنيوم بقطاعات ممتازة تضمن عزلاً تاماً للأتربة ومياه الأمطار وتتحمل الاستخدام المكثف." },
        { title: "الواجهات وألواح الألمنيوم والزجاج", desc: "تكسية وتطوير واجهات المنشآت والمباني بألواح ألمنيوم (كلادينج)، وتركيب ألواح زجاج متطورة للأبواب والنوافذ والواجهات المعمارية." },
        { title: "خدمات الصيانة الشاملة", desc: "صيانة متخصصة لمعالجة تسريبات الغبار والمياه في قطاعات الألمنيوم والزجاج، وإصلاح وترميم الأبواب والنوافذ بكفاءة عالية." }
      ]
    },
    sliderTitle: "من واقع مشاريعنا وتنفيذنا الميداني في المدينة المنورة",
    contact: {
      title: "طلب استشارة وتسعير دقيق لمشروعك",
      subtitle: "أرسل لنا تفاصيل العمل أو الصيانة المطلوبة بالمدينة المنورة، وسيقوم فريقنا الفني الهندسي بمراجعتها لتقديم عرض سعر واضح ومناسب.",
      name: "الاسم الكريم / اسم المنشأة",
      phone: "رقم الجوال للتواصل",
      serviceType: "نوع الخدمة المطلوبة",
      selectService: "اضغط لتحديد الخدمة المطلوبة",
      message: "اكتب هنا تفاصيل العمل، نوع الألمنيوم أو الحديد أو الزجاج المطلوب، والمواصفات أو الأبعاد التقريبية للموقع",
      submit: "إرسال الطلب وحجز موعد المعاينة عبر الواتساب"
    },
    footer: {
      cr: "سجل تجاري رقم: 4030438155",
      rights: "جميع الحقوق محفوظة © 2026 ورشة العمران المتألق للحدادة والألومنيوم | المدينة المنورة."
    }
  },
  en: {
    hero: {
      title: "Engineering Precision & Architectural Fabrications",
      subtitle: "Combining manufacturing durability with elegant modern finishing for residential and commercial projects in Medina under proud Saudi management.",
      cta: "Book Your Free On-Site Inspection"
    },
    services: {
      title: "Our Architectural Solutions",
      subtitle: "Integrated, tailored solutions in Medina, guaranteeing premium materials and flawless execution.",
      items: [
        { title: "Iron Doors & Security Windows", desc: "Custom fabrication and installation of luxury iron gates and high-security window grills crafted with maximum endurance." },
        { title: "Artistic Iron Handrails & Balustrades", desc: "Designing and installing premium steel handrails for stairs and balconies with modern and classic patterns." },
        { title: "Aluminum Doors & Windows", desc: "Premium aluminum profiles, doors, and windows designed for maximum dust and water insulation with long-lasting life." },
        { title: "Aluminum Panels & Glass Facades", desc: "Installing fire-rated aluminum cladding panels, and high-end glass structures for windows, doors, and building exteriors." },
        { title: "Comprehensive Maintenance & Repairs", desc: "Expert technical maintenance fixing water and dust leaks in aluminum profiles and restoring existing glass doors and windows." }
      ]
    },
    sliderTitle: "Our Live Portfolio in Medina",
    contact: {
      title: "Request a Technical Quotation",
      subtitle: "Send us your project scope or maintenance requirements in Medina, and our engineering team will deliver a comprehensive proposal.",
      name: "Full Name / Company Name",
      phone: "Contact Phone Number",
      serviceType: "Required Service Type",
      selectService: "Click to select a service type",
      message: "Describe your requirements, dimensions, or specific glass/aluminum/iron types here",
      submit: "Submit Request & Book Slot via WhatsApp"
    },
    footer: {
      cr: "Commercial Registration No: 4030438155",
      rights: "All Rights Reserved © 2026 Al-Omran Sparkling Workshop | Medina."
    }
  },
  // هنا تم استخدام المتغيرات التي استوردناها في الأعلى
  workImages: [
    { url: pn1, title: "مشروع 1" },
    { url: pn2, title: "مشروع 2" },
    { url: pn3, title: "مشروع 3" },
    { url: pn4, title: "مشروع 4" },
    { url: pn5, title: "مشروع 5" },
    { url: pn6, title: "مشروع 6" },
    { url: pn7, title: "مشروع 7" },
    { url: pn8, title: "مشروع 8" },
    { url: pn9, title: "مشروع 9" },
    { url: pn10, title: "مشروع 10" },
    { url: pn11, title: "مشروع 11" },
    { url: pn12, title: "مشروع 12" }
  ]
};