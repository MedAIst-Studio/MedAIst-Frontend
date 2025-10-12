export const YEAR_OPTIONS = [
  {value: "1", label: "1. Sınıf"},
  {value: "2", label: "2. Sınıf"},
  {value: "3", label: "3. Sınıf"},
  {value: "4", label: "4. Sınıf"},
  {value: "5", label: "5. Sınıf"},
  {value: "6", label: "6. Sınıf"},
  {value: "graduate", label: "Mezun"},
];

// Validation functions
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

export const validatePassword = (password: string): {isValid: boolean; errors: string[]} => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("Şifre en az 8 karakter olmalıdır");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("En az bir büyük harf içermelidir");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("En az bir küçük harf içermelidir");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("En az bir rakam içermelidir");
  }
  if (!/[!@#$%^&*]/.test(password)) {
    errors.push("En az bir özel karakter içermelidir");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Helper functions
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

export const generateAvatarFallback = (firstName: string, lastName: string): string => {
  return (firstName.charAt(0) + lastName.charAt(0)).toUpperCase();
};

// Subscription related utils
export const SUBSCRIPTION_PLANS = [
  {
    id: "free" as const,
    name: "Ücretsiz",
    price: 0,
    currency: "TL",
    interval: "month" as const,
    description: "Temel özelliklerle başlayın",
    features: [
      {name: "AI Soru-Cevap", description: "Ayda 100 sorgu", included: true, limit: 100},
      {name: "Quiz Oluşturma", description: "Ayda 50 quiz", included: true, limit: 50},
      {name: "Not Alma", description: "20 not", included: true, limit: 20},
      {name: "Depolama", description: "500 MB", included: true, limit: 500},
      {name: "Temel Destek", description: "E-posta desteği", included: true},
    ],
  },
  {
    id: "student" as const,
    name: "Öğrenci",
    price: 29,
    currency: "TL",
    interval: "month" as const,
    description: "Öğrenciler için özel fiyat",
    popular: true,
    features: [
      {name: "AI Soru-Cevap", description: "Ayda 500 sorgu", included: true, limit: 500},
      {name: "Quiz Oluşturma", description: "Ayda 200 quiz", included: true, limit: 200},
      {name: "Not Alma", description: "Sınırsız not", included: true},
      {name: "Depolama", description: "5 GB", included: true, limit: 5000},
      {name: "Öncelikli Destek", description: "24/7 destek", included: true},
      {name: "İleri Analitikler", description: "Detaylı raporlar", included: true},
    ],
  },
  {
    id: "premium" as const,
    name: "Premium",
    price: 99,
    currency: "TL",
    interval: "month" as const,
    description: "Profesyoneller için",
    features: [
      {name: "AI Soru-Cevap", description: "Ayda 2000 sorgu", included: true, limit: 2000},
      {name: "Quiz Oluşturma", description: "Sınırsız quiz", included: true},
      {name: "Not Alma", description: "Sınırsız not", included: true},
      {name: "Depolama", description: "20 GB", included: true, limit: 20000},
      {name: "Premium Destek", description: "Öncelikli destek", included: true},
      {name: "AI Özel Modeller", description: "GPT-4 erişimi", included: true},
      {name: "Takım Özellikleri", description: "5 üyeye kadar", included: true},
    ],
  },
  {
    id: "pro" as const,
    name: "Pro",
    price: 199,
    currency: "TL",
    interval: "month" as const,
    description: "Kurumsal çözümler",
    features: [
      {name: "AI Soru-Cevap", description: "Sınırsız sorgu", included: true},
      {name: "Quiz Oluşturma", description: "Sınırsız quiz", included: true},
      {name: "Not Alma", description: "Sınırsız not", included: true},
      {name: "Depolama", description: "100 GB", included: true, limit: 100000},
      {name: "Kurumsal Destek", description: "Özel hesap yöneticisi", included: true},
      {name: "API Erişimi", description: "Özel entegrasyonlar", included: true},
      {name: "Takım Özellikleri", description: "Sınırsız üye", included: true},
      {name: "Özel Eğitim", description: "1:1 eğitim seansları", included: true},
    ],
  },
];

export const formatUsagePercentage = (used: number, limit: number): number => {
  if (limit === 0) return 0;

  return Math.min((used / limit) * 100, 100);
};

export const formatPrice = (price: number, currency: string = "TL"): string => {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: currency === "TL" ? "TRY" : currency,
  }).format(price);
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
