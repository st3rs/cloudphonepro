import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'th';

type Translations = {
  [key in Language]: {
    title: string;
    subtitle: string;
    features: string;
    f1_title: string;
    f1_desc: string;
    f2_title: string;
    f2_desc: string;
    f3_title: string;
    f3_desc: string;
    products_title: string;
    get_started: string;
    learn_more: string;
    disclaimer: string;
    price_from: string;
    month: string;
    footer_text: string;
    contact: string;
    privacy: string;
    terms: string;
    compare_title: string;
    col_name: string;
    col_price: string;
    col_rating: string;
    col_features: string;
    col_link: string;
    sort_by: string;
    sort_price_asc: string;
    sort_price_desc: string;
    sort_rating_desc: string;
  };
};

const translations: Translations = {
  en: {
    title: "Best Cloud Phone Emulators & Virtual Android Devices",
    subtitle: "Run Android apps and games 24/7 in the cloud. Compare top virtual phone services for gaming, automation, and multi-accounting.",
    features: "Why Use a Cloud Phone?",
    f1_title: "24/7 Online",
    f1_desc: "Your virtual device never sleeps. Perfect for AFK gaming and automation without keeping your PC or phone on.",
    f2_title: "Multi-Accounting",
    f2_desc: "Run multiple instances of apps or games simultaneously without hardware limits or bans.",
    f3_title: "No Battery Drain",
    f3_desc: "Save your physical phone's battery, storage, and performance by moving heavy tasks to the cloud.",
    products_title: "Top Cloud Phone Providers",
    get_started: "Get Started",
    learn_more: "Learn More",
    disclaimer: "Disclosure: We may earn an affiliate commission if you purchase through our links, at no extra cost to you.",
    price_from: "From",
    month: "month",
    footer_text: "© 2026 Cloud Phone Compare. All rights reserved.",
    contact: "Contact Us",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    compare_title: "Compare Cloud Phones",
    col_name: "Provider",
    col_price: "Starting Price",
    col_rating: "Rating",
    col_features: "Key Features",
    col_link: "Action",
    sort_by: "Sort by:",
    sort_price_asc: "Price: Low to High",
    sort_price_desc: "Price: High to Low",
    sort_rating_desc: "Rating: Highest First",
  },
  th: {
    title: "สุดยอดโปรแกรมจำลองโทรศัพท์คลาวด์และอุปกรณ์ Android เสมือน",
    subtitle: "รันแอปและเกม Android ตลอด 24 ชั่วโมงบนคลาวด์ เปรียบเทียบบริการโทรศัพท์เสมือนชั้นนำสำหรับการเล่นเกม การทำงานอัตโนมัติ และการเปิดหลายบัญชี",
    features: "ทำไมต้องใช้โทรศัพท์คลาวด์?",
    f1_title: "ออนไลน์ 24/7",
    f1_desc: "อุปกรณ์เสมือนของคุณไม่เคยหลับ เหมาะสำหรับการบอทเกมและทำงานอัตโนมัติโดยไม่ต้องเปิดคอมพิวเตอร์หรือโทรศัพท์ทิ้งไว้",
    f2_title: "เปิดหลายจอ",
    f2_desc: "รันแอปหรือเกมหลายตัวพร้อมกันโดยไม่มีข้อจำกัดด้านฮาร์ดแวร์หรือโดนแบน",
    f3_title: "ไม่เปลืองแบตเตอรี่",
    f3_desc: "ประหยัดแบตเตอรี่ พื้นที่เก็บข้อมูล และประสิทธิภาพของโทรศัพท์จริงโดยย้ายงานหนักไปไว้บนคลาวด์",
    products_title: "ผู้ให้บริการโทรศัพท์คลาวด์ชั้นนำ",
    get_started: "เริ่มต้นใช้งาน",
    learn_more: "เรียนรู้เพิ่มเติม",
    disclaimer: "การเปิดเผยข้อมูล: เราอาจได้รับค่าคอมมิชชั่นพันธมิตรหากคุณซื้อผ่านลิงก์ของเรา โดยที่คุณไม่ต้องเสียค่าใช้จ่ายเพิ่มเติม",
    price_from: "เริ่มต้น",
    month: "เดือน",
    footer_text: "© 2026 Cloud Phone Compare. สงวนลิขสิทธิ์",
    contact: "ติดต่อเรา",
    privacy: "นโยบายความเป็นส่วนตัว",
    terms: "ข้อกำหนดการใช้งาน",
    compare_title: "เปรียบเทียบโทรศัพท์คลาวด์",
    col_name: "ผู้ให้บริการ",
    col_price: "ราคาเริ่มต้น",
    col_rating: "คะแนน",
    col_features: "คุณสมบัติหลัก",
    col_link: "ดำเนินการ",
    sort_by: "เรียงตาม:",
    sort_price_asc: "ราคา: ต่ำไปสูง",
    sort_price_desc: "ราคา: สูงไปต่ำ",
    sort_rating_desc: "คะแนน: สูงสุดก่อน",
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations['en']) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: keyof Translations['en']) => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
