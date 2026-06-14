const IMG = "https://cloud.logiology.com//Documents/Images";

export interface Product {
  name: string;
  price: number;
  image: string;
  badge?: string;
}

export interface Category {
  name: string;
  image: string;
}

export const designTypes: Category[] = [
  { name: "Bracelet", image: `${IMG}/092b683a-fbb2-4e02-bb6c-9857f4e89148.jpg` },
  { name: "Nose Pin", image: `${IMG}/b003e00b-3c42-48f1-b465-4e47252f0201.jpeg` },
  { name: "Ring", image: `${IMG}/9ced77d4-3390-4581-8ddd-4f9e44128223.jpg` },
  { name: "Bangle", image: `${IMG}/ec0b471b-93a5-4b29-9a8a-1c8a096d8dff.jpg` },
  { name: "Anklet", image: `${IMG}/c7853109-9bba-4761-8728-448aefda7c91.jpg` },
  { name: "Necklace", image: `${IMG}/2b689a88-1b28-4e91-aef1-45340d4e2de3.jpg` },
  { name: "Pendent", image: `${IMG}/2ed71926-a037-4cb4-8f18-bacd682abbb3.jpg` },
  { name: "Chain", image: `${IMG}/00bfdbfc-fc9a-4f0f-8706-37e8298a5f58.jpg` },
  { name: "Earring", image: `${IMG}/c135a64e-3f87-4a2c-856a-1c2941215a67.jpg` },
];

export const bestSellers: Product[] = [
  { name: "Nosepin 1", price: 26976, image: `${IMG}/ce3c0530-f1d7-44c7-a30b-a22084484638.jpeg` },
  { name: "Diamond Ring", price: 43771, image: `${IMG}/9cc1b911-0ba6-49f9-b56c-d0e2b76d2dd5.jpg` },
  { name: "Demo Bracelet", price: 144254, image: `${IMG}/55c85495-5087-4cad-aea4-d586c3b2af67.jpg` },
  { name: "Elegant Gold Necklace", price: 51780, image: `${IMG}/d79539ef-bade-4d63-b8d1-a0b92e88150b.jpg` },
  { name: "Mens Ring", price: 43256, image: `${IMG}/549205ab-d953-4596-88a9-a558a2b0edd5.jpg` },
  { name: "Kids Necklace", price: 45794, image: `${IMG}/10ec1dcf-61a2-4aa3-a3be-d4c4d1d6034f.jpg` },
  { name: "Wedding Ring", price: 132622, image: `${IMG}/6cc6f86e-a439-44cb-af9b-84b4e17adb47.jpg` },
  { name: "Gold Pendant", price: 91588, image: `${IMG}/3d50b5f1-31b1-459e-8856-04ae0139423c.jpg` },
  { name: "Heart Anklet", price: 132870, image: `${IMG}/88325d2c-fa6d-477e-a88f-a19378e93558.jpg` },
  { name: "Beaded Anklet", price: 61800, image: `${IMG}/ffeb065f-a0ce-4cd7-9004-3854133f35b1.jpg` },
  { name: "Charm Bracelet", price: 97812, image: `${IMG}/818ea64a-ae3c-457a-b1aa-2bdef4c67b88.jpg` },
  { name: "Gold Earring", price: 136100, image: `${IMG}/aa00718d-f70c-4880-a8de-dfedbecd10a2.jpg` },
];

export const newArrivals: Product[] = [
  { name: "Demo Bracelet", price: 144254, image: `${IMG}/55c85495-5087-4cad-aea4-d586c3b2af67.jpg`, badge: "New" },
  { name: "22K Ornaments", price: 180000, image: `${IMG}/ec05e18f-2435-4b4f-99ff-06fd9d0e2b77.jpg`, badge: "New" },
  { name: "Diamond Pendant", price: 91588, image: `${IMG}/59ce6836-08bc-424c-846f-4de3c7622f68.jpg`, badge: "New" },
  { name: "Earing Small", price: 26976, image: `${IMG}/08769bbc-72b4-4e8c-a02d-e0153a6fc506.jpg`, badge: "New" },
  { name: "Gold Necklace", price: 51780, image: `${IMG}/3fe0f4f2-0ff4-4729-8485-5bbdcb3c8014.jpg`, badge: "New" },
  { name: "Designer Bangle", price: 73888, image: `${IMG}/85c90bfb-8e64-4f39-a237-376d797a276c.jpg`, badge: "New" },
  { name: "Solitaire Ring", price: 132622, image: `${IMG}/b014e216-06ff-4969-b7d2-1978c3c376dd.jpg`, badge: "New" },
  { name: "Elegant Gold Necklace", price: 51780, image: `${IMG}/d79539ef-bade-4d63-b8d1-a0b92e88150b.jpg`, badge: "New" },
];

export const inStock: Product[] = [
  { name: "Link Bracelet", price: 45127, image: `${IMG}/03ce15d9-52be-4798-a132-7d20bd23ec81.jpg`, badge: "In Stock" },
  { name: "Bangle Bracelet", price: 90000, image: `${IMG}/fbfb9474-d98b-4b6a-9d47-3c029c05806a.JPG`, badge: "In Stock" },
  { name: "Gold Ornament", price: 61800, image: `${IMG}/315c5cce-ae08-4a37-83d1-2234e06ce91f.jpg`, badge: "In Stock" },
  { name: "Gold Bangle", price: 30530, image: `${IMG}/dd91dd5d-f9b0-49dc-8f80-15c0f58f980e.jpg`, badge: "In Stock" },
  { name: "Gold Pendant", price: 30530, image: `${IMG}/9041b626-ff97-4300-952c-b669fdda2fa9.jpg`, badge: "In Stock" },
  { name: "Kada Bangle", price: 30000, image: `${IMG}/fd69bed3-7c47-414d-bbac-87083060f959.jpg`, badge: "In Stock" },
  { name: "Jimki Kamal", price: 132274, image: `${IMG}/55f9d57d-cfd7-45ee-a146-466708b91000.jpg`, badge: "In Stock" },
  { name: "Small Jimki", price: 151016, image: `${IMG}/2a54ebf9-b5a9-4f08-bd13-124ea2d53570.jpg`, badge: "In Stock" },
];

export interface Collection {
  name: string;
  image: string;
}

export const collections: Collection[] = [
  { name: "For Womens", image: `${IMG}/021f7779-b35c-4172-bae2-73b0d4934996.png` },
  { name: "Brilliant Beginnings", image: `${IMG}/727909c8-8426-44a9-9114-17bd206e55ba.jpg` },
  { name: "Sangeeth", image: `${IMG}/faad908c-1ce2-43ed-b0f3-d8f61513f3d0.JPG` },
  { name: "Bangle Collection", image: `${IMG}/3814a8fb-d1ca-439d-bed9-535b6aedee4b.jpeg` },
];

export const faqs = [
  {
    q: "What makes Navaratna Jewellers special?",
    a: "Navaratna Jewellers blends timeless craftsmanship with contemporary elegance. Each piece is thoughtfully designed and meticulously handcrafted using certified gold, diamonds, and precious gemstones to ensure unmatched brilliance and quality.",
  },
  {
    q: "Are your diamonds and gemstones certified?",
    a: "Yes. Our diamonds are certified by reputed gemological laboratories such as IGI and GIA. Precious gemstones used in Navaratna collections are carefully authenticated to guarantee purity, origin, and quality.",
  },
  {
    q: "Do you offer customization services?",
    a: "Absolutely. We specialize in bespoke jewellery creations. From engagement rings to bridal sets, our design experts work closely with you to craft a personalized piece that reflects your story and style.",
  },
  {
    q: "What purity of gold do you use?",
    a: "We offer 22K and 18K BIS hallmarked gold jewellery. Each piece meets strict quality standards to ensure authenticity, durability, and long-term value.",
  },
  {
    q: "How should I care for my jewellery?",
    a: "Clean your jewellery gently with mild soap and lukewarm water using a soft brush. Avoid harsh chemicals and store pieces separately to prevent scratches. We also offer complimentary cleaning and maintenance services at our store.",
  },
  {
    q: "Do you provide exchange or buyback options?",
    a: "Yes, Navaratna Jewellers offers transparent exchange and buyback policies in accordance with prevailing gold rates and product condition. Please visit our store or contact our team for complete details.",
  },
];

export const navItems = ["Anklet", "Ring", "Necklace", "Bangle", "Pendent"];

export const formatPrice = (n: number) =>
  "₹ " + n.toLocaleString("en-IN");
