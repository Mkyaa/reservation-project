//icons
import { BsAward } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import { AiOutlinePropertySafety } from "react-icons/ai";

const allAirports = [
  { name: "İstanbul Havalimanı", code: "IST" },
  { name: "İstanbul Sabiha Gökçen Havalimanı", code: "SAW" },
  { name: "Ankara Esenboğa Havalimanı", code: "ESB" },
  { name: "İzmir Adnan Menderes Havalimanı", code: "ADB" },
  { name: "Antalya Havalimanı", code: "AYT" },
  { name: "Adana Şakirpaşa Havalimanı", code: "ADA" },
  { name: "Dalaman Havalimanı", code: "DLM" },
  { name: "Bodrum Havalimanı", code: "BJV" },
  { name: "Trabzon Havalimanı", code: "TZX" },
  { name: "Diyarbakır Havalimanı", code: "DIY" },
  { name: "Kayseri Havalimanı", code: "ASR" },
  { name: "Konya Havalimanı", code: "KYA" },
  { name: "Gaziantep Havalimanı", code: "GZT" },
  { name: "Hatay Havalimanı", code: "HTY" },
  { name: "Erzurum Havalimanı", code: "ERZ" },
  { name: "Samsun Çarşamba Havalimanı", code: "SZF" },
  { name: "Van Ferit Melen Havalimanı", code: "VAN" },
  { name: "Adıyaman Havalimanı", code: "ADF" },
  { name: "Amasya Merzifon Havalimanı", code: "MZH" },
  { name: "Balıkesir Koca Seyit Havalimanı", code: "EDO" },
  { name: "Batman Havalimanı", code: "BAL" },
  { name: "Bursa Yenişehir Havalimanı", code: "YEI" },
  { name: "Çanakkale Havalimanı", code: "CKZ" },
  { name: "Denizli Çardak Havalimanı", code: "DNZ" },
  { name: "Edremit Körfez Havalimanı", code: "EDO" },
  { name: "Elazığ Havalimanı", code: "EZS" },
  { name: "Erzincan Havalimanı", code: "ERC" },
  { name: "Gazipaşa-Alanya Havalimanı", code: "GZP" },
  { name: "Hakkari Yüksekova Selahaddin Eyyubi Havalimanı", code: "YKO" },
  { name: "Iğdır Havalimanı", code: "IGD" },
  { name: "Isparta Süleyman Demirel Havalimanı", code: "ISE" },
  { name: "Kahramanmaraş Havalimanı", code: "KCM" },
  { name: "Kars Harakani Havalimanı", code: "KSY" },
  { name: "Kastamonu Havalimanı", code: "KFS" },
  { name: "Kocaeli Cengiz Topel Havalimanı", code: "KCO" },
  { name: "Kütahya Zafer Havalimanı", code: "KZR" },
  { name: "Malatya Havalimanı", code: "MLX" },
  { name: "Mardin Havalimanı", code: "MQM" },
  { name: "Muş Havalimanı", code: "MSR" },
  { name: "Nevşehir Kapadokya Havalimanı", code: "NAV" },
  { name: "Ordu Giresun Havalimanı", code: "OGU" },
  { name: "Sinop Havalimanı", code: "NOP" },
  { name: "Şanlıurfa GAP Havalimanı", code: "GNY" },
  { name: "Şırnak Şerafettin Elçi Havalimanı", code: "NKT" },
  { name: "Tekirdağ Çorlu Havalimanı", code: "TEQ" },
  { name: "Tokat Havalimanı", code: "TJK" },
  { name: "Uşak Havalimanı", code: "USQ" },
  { name: "Yozgat Havalimanı", code: "YOZ" },
  { name: "Zonguldak Çaycuma Havalimanı", code: "ONQ" },
  { name: "Afyon Havalimanı", code: "AFY" },
  { name: "Ağrı Ahmed-i Hani Havalimanı", code: "AJI" },
  { name: "Aksaray Havalimanı", code: "ASR" },
  { name: "Ardahan Havalimanı", code: "KSY" },
  { name: "Artvin Havalimanı", code: "AJI" },
  { name: "Aydın Havalimanı", code: "DNZ" },
  { name: "Bartın Havalimanı", code: "KFS" },
  { name: "Bayburt Havalimanı", code: "NOP" },
  { name: "Bilecik Havalimanı", code: "KZR" },
  { name: "Bingöl Havalimanı", code: "BGG" },
  { name: "Bitlis Havalimanı", code: "BZI" },
  { name: "Bolu Havalimanı", code: "KFS" },
  { name: "Burdur Havalimanı", code: "KZR" },
  { name: "Çankırı Havalimanı", code: "CKZ" },
  { name: "Çorum Havalimanı", code: "CKZ" },
  { name: "Düzce Havalimanı", code: "KFS" },
  { name: "Edirne Havalimanı", code: "TEQ" },
  { name: "Eskişehir Havalimanı", code: "ESK" },
  { name: "Gümüşhane Havalimanı", code: "NOP" },
  { name: "Karabük Havalimanı", code: "KFS" },
  { name: "Karaman Havalimanı", code: "KCM" },
  { name: "Kilis Havalimanı", code: "GZT" },
  { name: "Yalova Havalimanı", code: "KCO" },
];

const cabines = [
  { name: "Economy", code: "E" },
  { name: "Business", code: "B" },
  { name: "First Class", code: "F" },
];

const hotels = [
  {
    id: "1",
    name: "Yeni Örnek Otel",
    city: "İzmir",
    district: "Alsancak",
    room_prices: {
      standard: 180,
      deluxe: 280,
      suite: 450,
    },
    room_availability: {
      standard: 8,
      deluxe: 3,
      suite: 1,
    },
    amenities: ["Ücretsiz Wi-Fi", "Spa", "Restoran", "Havuz"],
    rating: 4.7,
    description: "Lüks ve konforlu odalar sunan özel bir otel.",
    room_images: [
      "https://zhabercomtr.teimg.com/crop/1280x720/zhaber-com-tr/uploads/2023/02/otel-fiyatlari-izmir.jpg",
      "https://www.turizmgunlugu.com/wp-content/uploads/2018/01/saphir-otel-696x414.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/70e5970a-3247-45fe-a188-6b9f677b7a0e-1024.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/dc8ae765-dc6e-44a4-8013-1ded3c0d0253-1024.jpg",
    ],
    contact_information: {
      phone: "+90 555 987 65 43",
      email: "info@yeniornekotel.com",
    },
  },
  {
    id: "2",
    name: "Yeni Örnek Otel 2",
    city: "Muğla",
    district: "Fethiye",
    room_prices: {
      standard: 160,
      deluxe: 270,
      suite: 420,
    },
    room_availability: {
      standard: 12,
      deluxe: 6,
      suite: 3,
    },
    amenities: ["Ücretsiz Wi-Fi", "Spa", "Restoran"],
    rating: 4.3,
    description: "Modern ve rahat odalar sunan özel bir otel.",
    room_images: [
      "https://zhabercomtr.teimg.com/crop/1280x720/zhaber-com-tr/uploads/2023/02/otel-fiyatlari-mugla.jpg",
      "https://www.turizmgunlugu.com/wp-content/uploads/2018/01/saphir-otel-696x414.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/70e5970a-3247-45fe-a188-6b9f677b7a0e-1024.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/dc8ae765-dc6e-44a4-8013-1ded3c0d0253-1024.jpg",
    ],
    contact_information: {
      phone: "+90 555 987 65 43",
      email: "info@yeniornekotel2.com",
    },
  },
  {
    id: "3",
    name: "Yeni Örnek Otel 3",
    city: "Antalya",
    district: "Belek",
    room_prices: {
      standard: 170,
      deluxe: 260,
      suite: 430,
    },
    room_availability: {
      standard: 9,
      deluxe: 4,
      suite: 2,
    },
    amenities: ["Ücretsiz Wi-Fi", "Spa", "Restoran"],
    rating: 4.6,
    description: "Lüks ve huzurlu odalar sunan özel bir otel.",
    room_images: [
      "https://zhabercomtr.teimg.com/crop/1280x720/zhaber-com-tr/uploads/2023/02/otel-fiyatlari-antalya-belek.jpg",
      "https://www.turizmgunlugu.com/wp-content/uploads/2018/01/saphir-otel-696x414.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/70e5970a-3247-45fe-a188-6b9f677b7a0e-1024.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/dc8ae765-dc6e-44a4-8013-1ded3c0d0253-1024.jpg",
    ],
    contact_information: {
      phone: "+90 555 987 65 43",
      email: "info@yeniornekhotel3.com",
    },
  },
  {
    id: "4",
    name: "Yeni Örnek Otel 4",
    city: "Antalya",
    district: "Kaş",
    room_prices: {
      standard: 155,
      deluxe: 265,
      suite: 410,
    },
    room_availability: {
      standard: 11,
      deluxe: 5,
      suite: 2,
    },
    amenities: ["Ücretsiz Wi-Fi", "Spa", "Restoran"],
    rating: 4.4,
    description: "Modern ve konforlu odalar sunan özel bir otel.",
    room_images: [
      "https://zhabercomtr.teimg.com/crop/1280x720/zhaber-com-tr/uploads/2023/02/otel-fiyatlari-antalya-kas.jpg",
      "https://www.turizmgunlugu.com/wp-content/uploads/2018/01/saphir-otel-696x414.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/70e5970a-3247-45fe-a188-6b9f677b7a0e-1024.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/dc8ae765-dc6e-44a4-8013-1ded3c0d0253-1024.jpg",
    ],
    contact_information: {
      phone: "+90 555 987 65 43",
      email: "info@yeniornekhotel4.com",
    },
  },
  {
    id: "5",
    name: "Yeni Örnek Otel 5",
    city: "Bodrum",
    district: "Turgutreis",
    room_prices: {
      standard: 175,
      deluxe: 255,
      suite: 420,
    },
    room_availability: {
      standard: 10,
      deluxe: 6,
      suite: 3,
    },
    amenities: ["Ücretsiz Wi-Fi", "Spa", "Restoran"],
    rating: 4.5,
    description: "Huzurlu ve şık odalar sunan özel bir otel.",
    room_images: [
      "https://zhabercomtr.teimg.com/crop/1280x720/zhaber-com-tr/uploads/2023/02/otel-fiyatlari-bodrum.jpg",
      "https://www.turizmgunlugu.com/wp-content/uploads/2018/01/saphir-otel-696x414.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/70e5970a-3247-45fe-a188-6b9f677b7a0e-1024.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/dc8ae765-dc6e-44a4-8013-1ded3c0d0253-1024.jpg",
    ],
    contact_information: {
      phone: "+90 555 987 65 43",
      email: "info@yeniornekhotel5.com",
    },
  },

  {
    id: "6",
    name: "Yeni Örnek Otel 6",
    city: "Antalya",
    district: "Kemer",
    room_prices: {
      standard: 160,
      deluxe: 270,
      suite: 420,
    },
    room_availability: {
      standard: 12,
      deluxe: 6,
      suite: 3,
    },
    amenities: ["Ücretsiz Wi-Fi", "Spa", "Restoran"],
    rating: 4.3,
    description: "Modern ve rahat odalar sunan özel bir otel.",
    room_images: [
      "https://zhabercomtr.teimg.com/crop/1280x720/zhaber-com-tr/uploads/2023/02/otel-fiyatlari-antalya-kemer.jpg",
      "https://www.turizmgunlugu.com/wp-content/uploads/2018/01/saphir-otel-696x414.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/70e5970a-3247-45fe-a188-6b9f677b7a0e-1024.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/dc8ae765-dc6e-44a4-8013-1ded3c0d0253-1024.jpg",
    ],
    contact_information: {
      phone: "+90 555 987 65 43",
      email: "info@yeniornekotel6.com",
    },
  },
  {
    id: "7",
    name: "Yeni Örnek Otel 7",
    city: "Muğla",
    district: "Bodrum",
    room_prices: {
      standard: 165,
      deluxe: 255,
      suite: 430,
    },
    room_availability: {
      standard: 11,
      deluxe: 5,
      suite: 2,
    },
    amenities: ["Ücretsiz Wi-Fi", "Spa", "Restoran"],
    rating: 4.4,
    description: "Lüks ve konforlu odalar sunan özel bir otel.",
    room_images: [
      "https://zhabercomtr.teimg.com/crop/1280x720/zhaber-com-tr/uploads/2023/02/otel-fiyatlari-mugla-bodrum.jpg",
      "https://www.turizmgunlugu.com/wp-content/uploads/2018/01/saphir-otel-696x414.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/70e5970a-3247-45fe-a188-6b9f677b7a0e-1024.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/dc8ae765-dc6e-44a4-8013-1ded3c0d0253-1024.jpg",
    ],
    contact_information: {
      phone: "+90 555 987 65 43",
      email: "info@yeniornekotel7.com",
    },
  },
  {
    id: "8",
    name: "Yeni Örnek Otel 8",
    city: "Antalya",
    district: "Alanya",
    room_prices: {
      standard: 175,
      deluxe: 265,
      suite: 410,
    },
    room_availability: {
      standard: 10,
      deluxe: 6,
      suite: 3,
    },
    amenities: ["Ücretsiz Wi-Fi", "Spa", "Restoran"],
    rating: 4.5,
    description: "Huzurlu ve şık odalar sunan özel bir otel.",
    room_images: [
      "https://zhabercomtr.teimg.com/crop/1280x720/zhaber-com-tr/uploads/2023/02/otel-fiyatlari-antalya-alanya.jpg",
      "https://www.turizmgunlugu.com/wp-content/uploads/2018/01/saphir-otel-696x414.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/70e5970a-3247-45fe-a188-6b9f677b7a0e-1024.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/dc8ae765-dc6e-44a4-8013-1ded3c0d0253-1024.jpg",
    ],
    contact_information: {
      phone: "+90 555 987 65 43",
      email: "info@yeniornekotel8.com",
    },
  },
  {
    id: "9",
    name: "Yeni Örnek Otel 9",
    city: "Antalya",
    district: "Belek",
    room_prices: {
      standard: 160,
      deluxe: 250,
      suite: 400,
    },
    room_availability: {
      standard: 12,
      deluxe: 5,
      suite: 2,
    },
    amenities: ["Ücretsiz Wi-Fi", "Spa", "Restoran"],
    rating: 4.3,
    description: "Modern ve konforlu odalar sunan özel bir otel.",
    room_images: [
      "https://zhabercomtr.teimg.com/crop/1280x720/zhaber-com-tr/uploads/2023/02/otel-fiyatlari-antalya-belek.jpg",
      "https://www.turizmgunlugu.com/wp-content/uploads/2018/01/saphir-otel-696x414.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/70e5970a-3247-45fe-a188-6b9f677b7a0e-1024.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/dc8ae765-dc6e-44a4-8013-1ded3c0d0253-1024.jpg",
    ],
    contact_information: {
      phone: "+90 555 987 65 43",
      email: "info@yeniornekotel9.com",
    },
  },
  {
    id: "10",
    name: "Yeni Örnek Otel 10",
    city: "Antalya",
    district: "Konyaaltı",
    room_prices: {
      standard: 170,
      deluxe: 260,
      suite: 420,
    },
    room_availability: {
      standard: 11,
      deluxe: 6,
      suite: 3,
    },
    amenities: ["Ücretsiz Wi-Fi", "Spa", "Restoran"],
    rating: 4.4,
    description:
      "Şehir merkezine yakın ve konforlu odalar sunan özel bir otel.",
    room_images: [
      "https://zhabercomtr.teimg.com/crop/1280x720/zhaber-com-tr/uploads/2023/02/otel-fiyatlari-antalya-konyaalti.jpg",
      "https://www.turizmgunlugu.com/wp-content/uploads/2018/01/saphir-otel-696x414.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/70e5970a-3247-45fe-a188-6b9f677b7a0e-1024.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/dc8ae765-dc6e-44a4-8013-1ded3c0d0253-1024.jpg",
    ],
    contact_information: {
      phone: "+90 555 987 65 43",
      email: "info@yeniornekotel10.com",
    },
  },
  {
    id: "11",
    name: "Yeni Örnek Otel 11",
    city: "Muğla",
    district: "Fethiye",
    room_prices: {
      standard: 180,
      deluxe: 290,
      suite: 450,
    },
    room_availability: {
      standard: 9,
      deluxe: 4,
      suite: 2,
    },
    amenities: ["Ücretsiz Wi-Fi", "Spa", "Restoran"],
    rating: 4.6,
    description: "Doğayla iç içe ve lüks odalar sunan özel bir otel.",
    room_images: [
      "https://zhabercomtr.teimg.com/crop/1280x720/zhaber-com-tr/uploads/2023/02/otel-fiyatlari-mugla-fethiye.jpg",
      "https://www.turizmgunlugu.com/wp-content/uploads/2018/01/saphir-otel-696x414.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/70e5970a-3247-45fe-a188-6b9f677b7a0e-1024.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/dc8ae765-dc6e-44a4-8013-1ded3c0d0253-1024.jpg",
    ],
    contact_information: {
      phone: "+90 555 987 65 43",
      email: "info@yeniornekotel11.com",
    },
  },
  {
    id: "12",
    name: "Yeni Örnek Otel 12",
    city: "Antalya",
    district: "Kaş",
    room_prices: {
      standard: 185,
      deluxe: 275,
      suite: 430,
    },
    room_availability: {
      standard: 10,
      deluxe: 5,
      suite: 2,
    },
    amenities: ["Ücretsiz Wi-Fi", "Spa", "Restoran"],
    rating: 4.7,
    description: "Deniz manzaralı ve şık odalar sunan özel bir otel.",
    room_images: [
      "https://zhabercomtr.teimg.com/crop/1280x720/zhaber-com-tr/uploads/2023/02/otel-fiyatlari-antalya-kas.jpg",
      "https://www.turizmgunlugu.com/wp-content/uploads/2018/01/saphir-otel-696x414.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/70e5970a-3247-45fe-a188-6b9f677b7a0e-1024.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/dc8ae765-dc6e-44a4-8013-1ded3c0d0253-1024.jpg",
    ],
    contact_information: {
      phone: "+90 555 987 65 43",
      email: "info@yeniornekotel12.com",
    },
  },
  {
    id: "13",
    name: "Yeni Örnek Otel 13",
    city: "Antalya",
    district: "Side",
    room_prices: {
      standard: 170,
      deluxe: 260,
      suite: 420,
    },
    room_availability: {
      standard: 11,
      deluxe: 6,
      suite: 3,
    },
    amenities: ["Ücretsiz Wi-Fi", "Spa", "Restoran"],
    rating: 4.5,
    description: "Tarihi yerlere yakın ve konforlu odalar sunan özel bir otel.",
    room_images: [
      "https://zhabercomtr.teimg.com/crop/1280x720/zhaber-com-tr/uploads/2023/02/otel-fiyatlari-antalya-side.jpg",
      "https://www.turizmgunlugu.com/wp-content/uploads/2018/01/saphir-otel-696x414.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/70e5970a-3247-45fe-a188-6b9f677b7a0e-1024.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/dc8ae765-dc6e-44a4-8013-1ded3c0d0253-1024.jpg",
    ],
    contact_information: {
      phone: "+90 555 987 65 43",
      email: "info@yeniornekotel13.com",
    },
  },
  {
    id: "14",
    name: "Yeni Örnek Otel 14",
    city: "Antalya",
    district: "Alanya",
    room_prices: {
      standard: 160,
      deluxe: 250,
      suite: 400,
    },
    room_availability: {
      standard: 12,
      deluxe: 5,
      suite: 2,
    },
    amenities: ["Ücretsiz Wi-Fi", "Spa", "Restoran"],
    rating: 4.3,
    description: "Modern ve konforlu odalar sunan özel bir otel.",
    room_images: [
      "https://zhabercomtr.teimg.com/crop/1280x720/zhaber-com-tr/uploads/2023/02/otel-fiyatlari-antalya-alanya.jpg",
      "https://www.turizmgunlugu.com/wp-content/uploads/2018/01/saphir-otel-696x414.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/70e5970a-3247-45fe-a188-6b9f677b7a0e-1024.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/dc8ae765-dc6e-44a4-8013-1ded3c0d0253-1024.jpg",
    ],
    contact_information: {
      phone: "+90 555 987 65 43",
      email: "info@yeniornekotel14.com",
    },
  },
  {
    id: "15",
    name: "Yeni Örnek Otel 15",
    city: "Antalya",
    district: "Belek",
    room_prices: {
      standard: 155,
      deluxe: 240,
      suite: 380,
    },
    room_availability: {
      standard: 10,
      deluxe: 4,
      suite: 2,
    },
    amenities: ["Ücretsiz Wi-Fi", "Spa", "Restoran"],
    rating: 4.2,
    description: "Golf sahasına yakın ve konforlu odalar sunan özel bir otel.",
    room_images: [
      "https://zhabercomtr.teimg.com/crop/1280x720/zhaber-com-tr/uploads/2023/02/otel-fiyatlari-antalya-belek.jpg",
      "https://www.turizmgunlugu.com/wp-content/uploads/2018/01/saphir-otel-696x414.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/70e5970a-3247-45fe-a188-6b9f677b7a0e-1024.jpg",
      "https://cdng.jollytur.com/files/cms/media/hotel/dc8ae765-dc6e-44a4-8013-1ded3c0d0253-1024.jpg",
    ],
    contact_information: {
      phone: "+90 555 987 65 43",
      email: "info@yeniornekotel15.com",
    },
  },
];

const allCities = [
  { id: 1, name: "Adana" },
  { id: 2, name: "Adıyaman" },
  { id: 3, name: "Afyonkarahisar" },
  { id: 4, name: "Ağrı" },
  { id: 5, name: "Amasya" },
  { id: 6, name: "Ankara" },
  { id: 7, name: "Antalya" },
  { id: 8, name: "Artvin" },
  { id: 9, name: "Aydın" },
  { id: 10, name: "Balıkesir" },
  { id: 11, name: "Bilecik" },
  { id: 12, name: "Bingöl" },
  { id: 13, name: "Bitlis" },
  { id: 14, name: "Bolu" },
  { id: 15, name: "Burdur" },
  { id: 16, name: "Bursa" },
  { id: 17, name: "Çanakkale" },
  { id: 18, name: "Çankırı" },
  { id: 19, name: "Çorum" },
  { id: 20, name: "Denizli" },
  { id: 21, name: "Diyarbakır" },
  { id: 22, name: "Edirne" },
  { id: 23, name: "Elazığ" },
  { id: 24, name: "Erzincan" },
  { id: 25, name: "Erzurum" },
  { id: 26, name: "Eskişehir" },
  { id: 27, name: "Gaziantep" },
  { id: 28, name: "Giresun" },
  { id: 29, name: "Gümüşhane" },
  { id: 30, name: "Hakkâri" },
  { id: 31, name: "Hatay" },
  { id: 32, name: "Isparta" },
  { id: 33, name: "Mersin" },
  { id: 34, name: "İstanbul" },
  { id: 35, name: "İzmir" },
  { id: 36, name: "Kars" },
  { id: 37, name: "Kastamonu" },
  { id: 38, name: "Kayseri" },
  { id: 39, name: "Kırklareli" },
  { id: 40, name: "Kırşehir" },
  { id: 41, name: "Kocaeli" },
  { id: 42, name: "Konya" },
  { id: 43, name: "Kütahya" },
  { id: 44, name: "Malatya" },
  { id: 45, name: "Manisa" },
  { id: 46, name: "Kahramanmaraş" },
  { id: 47, name: "Mardin" },
  { id: 48, name: "Muğla" },
  { id: 49, name: "Muş" },
  { id: 50, name: "Nevşehir" },
  { id: 51, name: "Niğde" },
  { id: 52, name: "Ordu" },
  { id: 53, name: "Rize" },
  { id: 54, name: "Sakarya" },
  { id: 55, name: "Samsun" },
  { id: 56, name: "Siirt" },
  { id: 57, name: "Sinop" },
  { id: 58, name: "Sivas" },
  { id: 59, name: "Tekirdağ" },
  { id: 60, name: "Tokat" },
  { id: 61, name: "Trabzon" },
  { id: 62, name: "Tunceli" },
  { id: 63, name: "Şanlıurfa" },
  { id: 64, name: "Uşak" },
  { id: 65, name: "Van" },
  { id: 66, name: "Yozgat" },
  { id: 67, name: "Zonguldak" },
  { id: 68, name: "Aksaray" },
  { id: 69, name: "Bayburt" },
  { id: 70, name: "Karaman" },
  { id: 71, name: "Kırıkkale" },
  { id: 72, name: "Batman" },
  { id: 73, name: "Şırnak" },
  { id: 74, name: "Bartın" },
  { id: 75, name: "Ardahan" },
  { id: 76, name: "Iğdır" },
  { id: 77, name: "Yalova" },
  { id: 78, name: "Karabük" },
  { id: 79, name: "Kilis" },
  { id: 80, name: "Osmaniye" },
  { id: 81, name: "Düzce" },
];

const exploreData = [
  {
    id: "1",
    name: "İstanbul",
    airport: "İstanbul Havalimanı",
    image:
      "https://cdn2.enuygun.com/media/lib/uploads/image/istanbul-bg-48279.png",
  },
  {
    id: "2",
    name: "İzmir",
    airport: "İzmir Adnan Menderes",
    image:
      "https://cdn2.enuygun.com/media/lib/uploads/image/izmir-bg-48278.png",
  },
  {
    id: "3",
    name: "Ankara",
    airport: "Ankara Esenboğa Havalimanı",
    image:
      "https://cdn2.enuygun.com/media/lib/uploads/image/ankara-bg-48280.png",
  },
  {
    id: "4",
    name: "Antalya",
    airport: "Antalya Havalimanı",
    image:
      "https://cdn2.enuygun.com/media/lib/uploads/image/antalya-bg-48282.png",
  },
  {
    id: "5",
    name: "Bodrum",
    airport: "Antalya Havalimanı",
    image:
      "https://cdn2.enuygun.com/media/lib/uploads/image/bodrum-bg-48281.png",
  },
  {
    id: "6",
    name: "Londra",
    airport: "Heathrow Havalimanı",
    image:
      "https://cdn2.enuygun.com/media/lib/uploads/image/londra-bg-48283.png",
  },
  {
    id: "7",
    name: "Paris",
    airport: "Charles de Gaulle Havalimanı",
    image:
      "https://cdn2.enuygun.com/media/lib/uploads/image/paris-bg-48284.png",
  },
  {
    id: "8",
    name: "Roma",
    airport: "Leonardo da Vinci Havalimanı",
    image: "https://cdn2.enuygun.com/media/lib/uploads/image/roma-bg-48285.png",
  },
];

const benchmarkData = [
  {
    id: "1",
    page: "flight",
    data: [
      {
        title: "Uçak bileti nasıl alınır?",
        description: "Uçak bileti almak için yapmanız gerekenler çok basit. Sitemizde yer alan uçak bileti arama kutucuğuna nereden nereye uçmak istediğinizi, gidiş-dönüş tarihlerini ve yolcu sayısını girerek arama yapabilirsiniz. Arama sonuçlarında size en uygun uçak biletini seçerek, uçuş bilgilerini kontrol ettikten sonra satın alma işlemini gerçekleştirebilirsiniz.",
      },
      {
        title: "Uçak bileti fiyatları neye göre değişir?",
        description:
          "Uçak bileti fiyatları, uçuşunuzun tarihine, uçuşunuzun gerçekleşeceği havayolu şirketine, uçuşunuzun gerçekleşeceği havalimanına ve uçuşunuzun gerçekleşeceği saatlere göre değişiklik gösterir. Erken rezervasyon dönemlerinde uçak bileti fiyatları daha uygun olurken, uçuş tarihinize yaklaştıkça uçak bileti fiyatları artar.",
      }
    ],
  },
  {
    id: "2",
    page: "bus",
    data: [
      {
        title: "Ucuz otobüs bileti nasıl bulunur?",
        description:
          "Eğer en uygun fiyatlı otobüs biletini satın alarak seyahat etmek istiyorsanız, doğru yerdesiniz. Enuygun’da size en uygun otobüs bileti sadece birkaç tık uzağınızda. Yüzlerce otobüs firmasının Türkiye’nin tüm noktalarına düzenlediği seferleri karşılaştırabileceğiniz Enuygun sayesinde gitmek istediğiniz yere en uygun fiyatlı otobüs biletini bulabilirsiniz.",
      },
      {
        title: "Neden uçak ya da araç yerine otobüsle seyahat etmeliyim?",
        description:
          "Otobüs biletleri, uçak bileti fiyatlarına ve benzin masraflarına kıyasla daha uygun fiyatlı. Uçak yolculuklarının aksine otobüsle seyahat ederken otogara saatler öncesinde gitmenize gerek yok. Havalimanları şehir merkezine uzak noktalarda bulunurken otobüs terminalleri, genelde şehir merkezlerinde konumlanıyor.",
      },
    ],
  },
  {
    id: "3",
    page: "hotel",
    data: [
      {
        title: "Otelde konaklama nasıl yapılır?",
        description:
          "Enuygun’da size en uygun otel fiyatları sadece birkaç tık uzağınızda. Yüzlerce otel rezervasyon sitesini karşılaştırabileceğiniz Enuygun sayesinde gitmek istediğiniz yere en uygun fiyatlı otel rezervasyonunu bulabilirsiniz.",
      },
      {
        title: "Otel fiyatları neye göre değişir?",
        description:
          "Otel fiyatları, konaklamak istediğiniz otelin konumuna, yıldız sayısına, hizmet kalitesine, oda tipine ve oda sayısına göre değişiklik gösterir. Otel fiyatları, konaklamak istediğiniz otelin konumuna, yıldız sayısına, hizmet kalitesine, oda tipine ve oda sayısına göre değişiklik gösterir.",
      },
    ],
  },
];

const brandsData = [
  {
    id: "1",
    page: "flight",
    values: [
      {
        id: "1",
        image: "/assets/images/brands/flight/pegasus.svg",
      },
      {
        id: "2",
        image: "/assets/images/brands/flight/turkish.svg",
      },
      {
        id: "3",
        image: "/assets/images/brands/flight/sun.svg",
      },
      {
        id: "4",
        image: "/assets/images/brands/flight/anadolu.svg",
      },
      {
        id: "5",
        image: "/assets/images/brands/flight/uzbekistan.svg",
      },
      {
        id: "6",
        image: "/assets/images/brands/flight/corendon.svg",
      },
      {
        id: "7",
        image: "/assets/images/brands/flight/pobedan.svg",
      },
      {
        id: "8",
        image: "/assets/images/brands/flight/azerbeijan.svg",
      },
    ],
  },
  {
    id: "2",
    page: "bus",
    values: [
      {
        id: "1",
        image: "/assets/images/brands/bus/ali-osman-ulusoy.png",
      },
      {
        id: "2",
        image: "/assets/images/brands/bus/balikesir-uludag.png",
      },
      {
        id: "3",
        image: "/assets/images/brands/bus/guney-akdeniz.png",
      },
      {
        id: "4",
        image: "/assets/images/brands/bus/isparta-petrol-turizm.png",
      },
      {
        id: "5",
        image: "/assets/images/brands/bus/kale-seyahat.png",
      },
      {
        id: "6",
        image: "/assets/images/brands/bus/metro-turizm.png",
      },
      {
        id: "7",
        image: "/assets/images/brands/bus/pamukkale-turizm.png",
      },
      {
        id: "8",
        image: "/assets/images/brands/bus/varan-turizm.png",
      },
    ],
  },
];

const prepositionData = [
  {
    id: 1,
    page: "flight",
    content: [
      {
        title: "Hızlı ve Kolay",
        description:
          "Hızlı ve kolay bir şekilde uçak bileti arayabilir ve rezervasyon yapabilirsiniz.",
        icon: <BsAward />,
      },
      {
        title: "Tek Adres",
        description:
          "Tüm havayollarının uçuşlarını tek bir adresten arayabilir ve rezervasyon yapabilirsiniz.",
        icon: <GrMapLocation />,
      },
      {
        title: "Güvenli Alışveriş",
        description:
          "Tüm ödeme işlemleriniz, dünyanın önde gelen güvenlik sertifikası şirketi DigiCert koruması altındadır.",
        icon: <AiOutlinePropertySafety />,
      },
    ],
  },
  {
    id: 2,
    page: "bus",
    content: [
      {
        title: "Hızlı ve Kolay",
        description:
          "Hızlı ve kolay bir şekilde otobüs bileti arayabilir ve rezervasyon yapabilirsiniz.",
        icon: <BsAward />,
      },
      {
        title: "Tek Adres",
        description:
          "Tüm otobüs firmalarının seferlerini tek bir adresten arayabilir ve rezervasyon yapabilirsiniz.",
        icon: <GrMapLocation />,
      },
      {
        title: "Güvenli Alışveriş",
        description:
          "Tüm ödeme işlemleriniz, dünyanın önde gelen güvenlik sertifikası şirketi DigiCert koruması altındadır.",
        icon: <AiOutlinePropertySafety />,
      },
    ],
  },
];

const kvkkMetni = {
  text : "Bu formu doldurarak ve göndererek, kişisel verilerinizin toplanmasına, işlenmesine ve saklanmasına onay vermiş olursunuz. Kişisel verilerinizin gizliliğini korumak amacıyla, bu bilgiler sadece belirtilen amaçlar doğrultusunda kullanılacak ve üçüncü taraflarla paylaşılmayacaktır. KVKK ve gizlilik politikası hakkında daha fazla bilgi almak için lütfen [Şirket Adı] Gizlilik Politikası'nı inceleyiniz."
}

const iadeKosullari = {
  text :"İptal ve iade koşulları hakkında bilgi almak için lütfen [Şirket Adı] İptal ve İade Koşulları sayfasını inceleyiniz."
}


export {
  allAirports,
  cabines,
  hotels,
  allCities,
  exploreData,
  benchmarkData,
  brandsData,
  prepositionData,
  kvkkMetni,
  iadeKosullari
};
