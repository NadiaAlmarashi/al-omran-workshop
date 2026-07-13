import React, { useState, useEffect, useRef } from 'react';
import { siteData } from './Data'; 

// استيراد الأصول
import greenPattern from './assets/green-pattern.png';
import logoHeader from './assets/hero.png'; 
import logoFooter from './assets/logo.png'; 
import tiktokIcon from './assets/tiktok.png';
import locationIcon from './assets/location.png';
import whatsappIcon from './assets/whatsapp.png';

function App() {
  const [lang, setLang] = useState('ar');
  const [formData, setFormData] = useState({ name: '', phone: '', serviceType: '', message: '' });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const text = siteData[lang];
  const isRtl = lang === 'ar';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === siteData.workImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const selectService = (serviceTitle) => { setFormData({ ...formData, serviceType: serviceTitle }); setIsDropdownOpen(false); };
  
  const nextSlide = () => setCurrentSlide((prev) => (prev === siteData.workImages.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? siteData.workImages.length - 1 : prev - 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.serviceType) { alert(text.contact.selectService); return; }
    const whatsappNumber = "966564088373"; 
    const messageText = lang === 'ar' 
      ? `*طلب فحص ومعاينة - ورشة العمران*\n\n- *العميل:* ${formData.name}\n- *الجوال:* ${formData.phone}\n- *الخدمة:* ${formData.serviceType}\n- *التفاصيل:* ${formData.message}`
      : `*New Service Request - Medina*\n\n- *Name:* ${formData.name}\n- *Phone:* ${formData.phone}\n- *Service:* ${formData.serviceType}\n- *Details:* ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans relative" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* شريط التواصل العائم */}
      <div className={`fixed top-1/2 -translate-y-1/2 ${isRtl ? 'left-3 md:left-5' : 'right-3 md:right-5'} z-50 flex flex-col gap-4 bg-primary-dark/90 backdrop-blur-md p-3 rounded-2xl shadow-2xl border border-accent-gold/30`}>
        <a href="https://wa.me/966564088373" target="_blank" rel="noreferrer" className="w-11 h-11 flex items-center justify-center transition-all duration-300 transform hover:scale-115 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] rounded-xl active:scale-95"><img src={whatsappIcon} alt="واتساب" className="w-full h-full object-contain" /></a>
        <a href="https://www.tiktok.com/@user8731330011126?_r=1&_t=ZS-97z7KobzUWd" target="_blank" rel="noreferrer" className="w-11 h-11 flex items-center justify-center transition-all duration-300 transform hover:scale-115 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] rounded-xl active:scale-95"><img src={tiktokIcon} alt="تيك توك" className="w-full h-full object-contain" /></a>
        <a href="https://maps.app.goo.gl/DJ8JfnuStL6wdgna8?g_st=ic" target="_blank" rel="noreferrer" className="w-11 h-11 flex items-center justify-center transition-all duration-300 transform hover:scale-115 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] rounded-xl active:scale-95"><img src={locationIcon} alt="الموقع" className="w-full h-full object-contain" /></a>
      </div>

      {/* النافبار */}
      <nav className="bg-white border-b border-gray-100 py-2 px-3 md:px-6 flex justify-between items-center sticky top-0 z-50 shadow-xs">
        <div className="flex items-center gap-2 md:gap-4 overflow-hidden">
          <img src={logoHeader} alt="ورشة العمران المتألق" className="h-10 w-10 md:h-16 md:w-auto object-contain shrink-0" />
          <div className="flex flex-col items-start min-w-0">
            <span className="text-primary-dark font-black text-[10px] sm:text-xs md:text-base leading-tight truncate w-full">{lang === 'ar' ? 'ورشة العمران المتألق للحدادة والألومنيوم' : 'Al-Omran Sparkling Workshop'}</span>
            <div className="flex gap-1 mt-0.5">
              <span className="bg-primary-green/10 text-primary-green text-[8px] md:text-[9px] font-bold px-1 py-0.5 rounded-sm border border-primary-green/10 whitespace-nowrap">{lang === 'ar' ? 'المدينة المنورة' : 'Medina'}</span>
              <span className="bg-accent-gold/10 text-accent-darkgold text-[8px] md:text-[9px] font-bold px-1 py-0.5 rounded-sm border border-accent-gold/20 whitespace-nowrap">{lang === 'ar' ? 'إدارة وإشراف سعودي' : 'Saudi Supervised'}</span>
            </div>
          </div>
        </div>
        <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="bg-accent-gold hover:bg-accent-darkgold text-white px-3 py-1.5 rounded-lg text-[10px] md:text-sm font-bold transition-all shadow-xs cursor-pointer shrink-0 ml-2">{lang === 'ar' ? 'English' : 'العربية'}</button>
      </nav>

      {/* البنر الرئيسي */}
      <header className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-primary-dark shadow-inner bg-repeat" style={{ backgroundImage: `url(${greenPattern})`, backgroundSize: '240px' }}>
        <div className="absolute inset-0 bg-black/15 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-xl sm:text-2xl md:text-5xl font-black mb-4 md:mb-6 leading-tight text-white drop-shadow-md max-w-3xl mx-auto">{text.hero.title}</h1>
          <p className="text-[11px] md:text-base text-neutral-200 mb-6 md:mb-10 max-w-xl mx-auto leading-relaxed opacity-95">{text.hero.subtitle}</p>
          <a href="#contact" className="font-bold px-8 py-3 md:px-10 md:py-3.5 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 inline-block text-white bg-accent-gold hover:bg-accent-darkgold text-xs md:text-base">{text.hero.cta}</a>
        </div>
      </header>

      {/* قسم الخدمات */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto bg-white">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-primary-green">{text.services.title}</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-xs md:text-base">{text.services.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {text.services.items.map((service, index) => (
            <div key={index} className="group p-6 rounded-2xl border bg-white border-gray-100 hover:border-accent-gold/40 hover:shadow-2xl transition-all duration-300 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-xl bg-primary-green/5 border border-primary-green/10 flex items-center justify-center text-accent-gold group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
                <span className="text-base md:text-lg font-bold">0{index + 1}</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm md:text-xl font-bold text-primary-dark">{service.title}</h3>
                <p className="text-gray-600 text-[11px] md:text-sm leading-relaxed mt-1">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* معرض المشاريع */}
      <section className="py-12 md:py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-primary-green">{text.sliderTitle}</h2>
          <div className="relative h-[250px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100">
            {siteData.workImages.map((img, index) => (
              <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
                <img src={img.url} alt={img.title} className="w-full h-full object-contain p-2" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center">
                  <p className="text-white text-xs md:text-sm font-semibold">{img.title}</p>
                </div>
              </div>
            ))}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-primary-dark w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md transition">{isRtl ? '←' : '→'}</button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-primary-dark w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md transition">{isRtl ? '→' : '←'}</button>
          </div>
        </div>
      </section>

      {/* قسم تواصل معنا */}
      <section id="contact" className="py-20 md:py-24 max-w-3xl mx-auto px-6 bg-white">
        <div className="p-8 md:p-12 rounded-3xl border shadow-2xl bg-primary-dark text-white border-primary-green/30">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-accent-gold mb-2">{text.contact.title}</h2>
            <p className="text-neutral-300 text-sm">{text.contact.subtitle}</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-2">{text.contact.name}</label>
                <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-accent-gold focus:outline-none text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-2">{text.contact.phone}</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-accent-gold focus:outline-none text-sm" />
              </div>
            </div>
            <div className="relative" ref={dropdownRef}>
              <label className="block text-xs font-semibold text-neutral-300 mb-2">{text.contact.serviceType}</label>
              <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-accent-gold border-solid flex justify-between items-center text-sm cursor-pointer select-none min-h-[48px]">
                <span className={formData.serviceType ? "text-white" : "text-neutral-400"}>{formData.serviceType || text.contact.selectService}</span>
                <span className={`transition-transform duration-200 text-neutral-400 text-xs ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
              </div>
              {isDropdownOpen && (
                <div className="absolute left-0 right-0 mt-2 bg-primary-dark border border-white/15 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto">
                  {text.services.items.map((s, idx) => (
                    <div key={idx} onClick={() => selectService(s.title)} className="px-4 py-3 text-sm text-neutral-200 hover:bg-accent-gold hover:text-primary-dark cursor-pointer transition-colors duration-200 border-b border-white/5 last:border-b-0">{s.title}</div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-2">{text.contact.message}</label>
              <textarea name="message" rows="3" required value={formData.message} onChange={handleInputChange} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-accent-gold focus:outline-none transition resize-none text-sm"></textarea>
            </div>
            <button type="submit" className="w-full font-bold py-4 px-6 rounded-xl shadow-xl text-primary-dark bg-accent-gold hover:bg-accent-darkgold flex justify-center items-center gap-2 text-base cursor-pointer transition-all duration-300">{text.contact.submit}</button>
          </form>
        </div>
      </section>

      {/* الفوتر */}
      <footer className="bg-primary-dark py-12 px-6 border-t-2 border-accent-gold text-white text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-5">
          <img src={logoFooter} alt="ورشة العمران المتألق" className="h-32 w-auto object-contain mx-auto" />
          <div className="text-accent-gold font-black text-xl md:text-2xl tracking-wide">ورشة العمران المتألق للحدادة والألومنيوم</div>
          <p className="text-neutral-400 font-mono text-xs tracking-wider border border-white/10 px-4 py-1 rounded-md bg-white/5 inline-block">{text.footer.cr}</p>
          <p className="text-neutral-400 text-xs mt-6 pt-4 border-t border-white/5 w-full tracking-tight">{text.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;