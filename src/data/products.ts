export interface Product {
  id: string;
  name: string;
  logo: string;
  price: number;
  affiliateLink: string;
  features: {
    en: string[];
    th: string[];
  };
  description: {
    en: string;
    th: string;
  };
  rating: number;
  tags: {
    en: string[];
    th: string[];
  };
}

const validateProducts = (productsList: Product[]) => {
  productsList.forEach(product => {
    try {
      new URL(product.affiliateLink);
    } catch (e) {
      throw new Error(`Invalid affiliate link for product ${product.name}: ${product.affiliateLink}`);
    }
  });
  return productsList;
};

export const products: Product[] = validateProducts([
  {
    id: "vmos",
    name: "VMOS Cloud",
    logo: "https://play-lh.googleusercontent.com/gztNnTXWCho-d2qVLFb1KmAlxOMcZUxwozOxVTN7nDQulkin__aHDm7BU6nxfM4ucrM=s256",
    price: 5.99,
    affiliateLink: "https://www.vmoscloud.com/invite/vmosagfyu3rs",
    rating: 4.8,
    features: {
      en: ["Root Access Available", "Xposed Framework", "Smooth Gaming 60FPS"],
      th: ["รองรับ Root", "รองรับ Xposed Framework", "เล่นเกมลื่นไหล 60FPS"]
    },
    description: {
      en: "A powerful cloud phone emulator for Android. Great for gaming, running apps in the background, and testing with root access.",
      th: "โปรแกรมจำลองโทรศัพท์คลาวด์ที่ทรงพลังสำหรับ Android เหมาะสำหรับการเล่นเกม รันแอปในพื้นหลัง และการทดสอบด้วยสิทธิ์ Root"
    },
    tags: {
      en: ["Best for Gaming", "Rooted"],
      th: ["เหมาะสำหรับเล่นเกม", "รูทแล้ว"]
    }
  },
  {
    id: "redfinger",
    name: "Redfinger Cloud Phone",
    logo: "https://www.google.com/s2/favicons?domain=cloudemulator.net&sz=128",
    price: 9.95,
    affiliateLink: "https://www.cloudemulator.net/?aff=123",
    rating: 4.7,
    features: {
      en: ["Cross-Platform (Win/Mac/iOS/Android)", "High Security", "24/7 AFK"],
      th: ["รองรับหลายแพลตฟอร์ม (Win/Mac/iOS/Android)", "ความปลอดภัยสูง", "บอท 24/7"]
    },
    description: {
      en: "Cross-platform cloud Android emulator. Access your virtual phone securely from any device, anywhere in the world.",
      th: "โปรแกรมจำลอง Android บนคลาวด์ข้ามแพลตฟอร์ม เข้าถึงโทรศัพท์เสมือนของคุณอย่างปลอดภัยจากทุกอุปกรณ์ ทุกที่ในโลก"
    },
    tags: {
      en: ["Cross-Platform", "Secure"],
      th: ["ข้ามแพลตฟอร์ม", "ปลอดภัย"]
    }
  },
  {
    id: "ldcloud",
    name: "LDCloud",
    logo: "https://www.google.com/s2/favicons?domain=ldcloud.net&sz=128",
    price: 7.99,
    affiliateLink: "https://www.ldcloud.net/?aff=123",
    rating: 4.6,
    features: {
      en: ["Cloud Gaming Optimized", "Multi-Instance Sync", "Low Latency"],
      th: ["ปรับแต่งสำหรับเล่นเกมบนคลาวด์", "ซิงค์หลายจอ", "ความหน่วงต่ำ"]
    },
    description: {
      en: "Cloud gaming emulator built by the makers of LDPlayer. Play heavy mobile games smoothly without draining your phone's battery.",
      th: "โปรแกรมจำลองการเล่นเกมบนคลาวด์ที่สร้างโดยผู้สร้าง LDPlayer เล่นเกมมือถือหนักๆ ได้อย่างราบรื่นโดยไม่เปลืองแบตเตอรี่โทรศัพท์"
    },
    tags: {
      en: ["Cloud Gaming", "Multi-Instance"],
      th: ["เล่นเกมบนคลาวด์", "เปิดหลายจอ"]
    }
  },
  {
    id: "ugphone",
    name: "UgPhone",
    logo: "https://www.google.com/s2/favicons?domain=ugphone.com&sz=128",
    price: 6.50,
    affiliateLink: "https://www.ugphone.com/?aff=123",
    rating: 4.5,
    features: {
      en: ["Global Server Nodes", "High Stability", "Automation Ready"],
      th: ["เซิร์ฟเวอร์ทั่วโลก", "ความเสถียรสูง", "พร้อมสำหรับการทำงานอัตโนมัติ"]
    },
    description: {
      en: "Global cloud phone service with nodes worldwide for low latency and high stability. Perfect for international gaming and app testing.",
      th: "บริการโทรศัพท์คลาวด์ระดับโลกพร้อมโหนดทั่วโลกเพื่อความหน่วงต่ำและความเสถียรสูง เหมาะสำหรับการเล่นเกมระดับนานาชาติและการทดสอบแอป"
    },
    tags: {
      en: ["Global Nodes", "Stable"],
      th: ["โหนดทั่วโลก", "เสถียร"]
    }
  },
  {
    id: "multilogin",
    name: "Multilogin Cloud",
    logo: "https://www.google.com/s2/favicons?domain=multilogin.com&sz=128",
    price: 15.00,
    affiliateLink: "https://multilogin.com/?aff=123",
    rating: 4.9,
    features: {
      en: ["Anti-Detect Browser", "Unique Fingerprints", "Team Collaboration"],
      th: ["เบราว์เซอร์ป้องกันการตรวจจับ", "ลายนิ้วมือเฉพาะ", "การทำงานร่วมกันเป็นทีม"]
    },
    description: {
      en: "The ultimate solution for managing multiple accounts securely. While primarily a browser, their mobile profiles emulate real devices perfectly.",
      th: "โซลูชันขั้นสูงสุดสำหรับการจัดการหลายบัญชีอย่างปลอดภัย แม้ว่าจะเป็นเบราว์เซอร์เป็นหลัก แต่โปรไฟล์มือถือของพวกเขาก็จำลองอุปกรณ์จริงได้อย่างสมบูรณ์แบบ"
    },
    tags: {
      en: ["Anti-Detect", "Pro"],
      th: ["ป้องกันการตรวจจับ", "มืออาชีพ"]
    }
  }
]);
