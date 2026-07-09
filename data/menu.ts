export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  popular?: boolean;
  image: string;
  /** Emoji shown in the premium gradient fallback if the photo can't load. */
  emoji: string;
};

// All items are 100% vegetarian.
//
// IMAGES — how this works
// ───────────────────────
// Each dish points at a *verified* Wikimedia Commons photo of that actual
// dish (filenames existence-checked against Commons), served via the stable
// Special:FilePath endpoint which redirects to upload.wikimedia.org and
// returns a pre-sized thumbnail. Every image renders through <SmartImage>,
// which paints a branded gradient + dish emoji underneath and swaps to it
// automatically if the photo ever fails — no broken-image boxes, ever.
//
// To use Aruki's own photography: drop files in /public/images and replace the
// image URL with e.g. "/images/masala-dosey.jpg".
const W = (file: string, w = 900) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${w}`;

// Verified Commons photo pool — each file shows the dish it's named for.
export const IMG = {
  masalaDosa: W("Masala Dosa (Bengaluru).JPG"),
  butterDosa: W("Butter Masala Dosa.png"),
  mysoreDosa: W("Mysore Masala Dosa.jpg"),
  cheeseDosa: W("Cheese mysore masala dosa.jpg"),
  ravaDosa: W("Masala dosa 01.jpg"),
  paperDosa: W("Paper Masala Dosa.jpg"),
  uttapam: W("Mixed Uttapam.jpg"),
  idli: W("Idli Sambar.JPG"),
  thatteIdli: W("Idli Sambar-Noida-UP-SP004.jpg"),
  vadaSambar: W("Medu Vada and Sambhar.JPG"),
  meduVada: W("Medu Vada.JPG"),
  upma: W("Broken rice upma & coconut chutney.jpg"),
  semiyaUpma: W("Traditional Vermicelli Upma (Semiya Upma) with Fresh Vegetables.jpg"),
  bisiBele: W("Bisi Bele Bath (Bisibelebath).JPG"),
  curdRice: W("Curd Rice ThayirSaadam.JPG"),
  vegPulao: W("Veg Pulao (Indian fried rice).jpg"),
  pulao: W("Pulao.png"),
  poori: W("Poori with Potato Masala.JPG"),
  pooriTN: W("Poori Masala Tamil Nadu.jpg"),
  samosa: W("Samosa with tamarind chutney and tomato sauce.jpg"),
  pakora: W("Samosas 2 pieces and pakora 1 piece.jpg"),
  dahiVada: W("Dahi Vada or Dahi Bhalla.JPG"),
  gulabJamun: W("Gulab Jamun with Ice cream.png"),
  kesari: W("Kesari bhath.jpg"),
  gajarHalwa: W("Gajar halwa2.jpg"),
  obbattu: W("Obbattu.jpg"),
  filterCoffee: W("South Indian filter coffee.JPG"),
  chaiCoffee: W("Masala Tea and South Indian Filter Coffee.jpg"),
  masalaChai: W("Masala Chai.JPG"),
  mangoLassi: W("Wikipedia-Stammtisch Augsburg 2021-09-19 Mango Lassi.JPG"),
  limeSoda: W("Lemon lime soda.jpg"),
};

export const menuItems: MenuItem[] = [
  // ── Dosa ──
  { id: 1, name: "Masala Dosey", description: "Crispy golden dosa filled with spiced potato masala, served with coconut chutney and sambar.", price: "₹80", category: "Dosa", popular: true, image: IMG.masalaDosa, emoji: "🥞" },
  { id: 2, name: "Ghee Masala Dosey", description: "Our signature masala dosa lavished with ghee — golden, rich and irresistibly crisp.", price: "₹90", category: "Dosa", popular: true, image: IMG.butterDosa, emoji: "🧈" },
  { id: 3, name: "Mysore Masala Dosey", description: "Dosa spread with spicy red Mysore chutney, stuffed with potato masala. A Bengaluru classic.", price: "₹90", category: "Dosa", image: IMG.mysoreDosa, emoji: "🌶️" },
  { id: 4, name: "Cheese Masala Dosey", description: "Masala dosa topped with melted cheese — crispy outside, indulgent inside.", price: "₹100", category: "Dosa", image: IMG.cheeseDosa, emoji: "🧀" },
  { id: 5, name: "Rava Masala Dosey", description: "Semolina dosa with a lacy, porous texture and potato masala filling. Light and crispy.", price: "₹90", category: "Dosa", image: IMG.ravaDosa, emoji: "🥞" },
  { id: 6, name: "Onion Uttapam", description: "Thick, soft rice pancake topped with fresh onions and green chillies. Comfort in a plate.", price: "₹80", category: "Dosa", image: IMG.uttapam, emoji: "🧅" },
  { id: 7, name: "Plain Dosey", description: "The classic — a thin, crispy fermented rice and lentil crepe. Simple perfection.", price: "₹70", category: "Dosa", image: IMG.paperDosa, emoji: "🫓" },

  // ── Tiffin ──
  { id: 8, name: "Idly (2 pcs)", description: "Soft, fluffy steamed rice cakes — the soul of South Indian breakfast. With chutney & sambar.", price: "₹50", category: "Tiffin", popular: true, image: IMG.idli, emoji: "🍚" },
  { id: 9, name: "Vade (2 pcs)", description: "Crispy, golden lentil doughnuts with a soft centre. Perfect with filter coffee.", price: "₹50", category: "Tiffin", image: IMG.vadaSambar, emoji: "🍩" },
  { id: 10, name: "Ghee Pudi Thatte Idly", description: "Large, pillowy thatte idly drenched in ghee and dusted with our secret pudi spice blend.", price: "₹70", category: "Tiffin", popular: true, image: IMG.thatteIdli, emoji: "🍮" },
  { id: 11, name: "Khara Bhath (Upma)", description: "Savory semolina upma tempered with mustard, curry leaves, cashews and vegetables.", price: "₹50", category: "Tiffin", image: IMG.upma, emoji: "🍲" },
  { id: 12, name: "Mangalore Buns", description: "Sweet banana-flavored fried buns, fluffy inside and golden outside — a coastal specialty.", price: "₹80", category: "Tiffin", image: IMG.poori, emoji: "🍞" },
  { id: 13, name: "Poori", description: "Deep-fried puffed wheat bread, light and airy, served with spiced potato masala.", price: "₹80", category: "Tiffin", image: IMG.pooriTN, emoji: "🫓" },

  // ── Rice & Bhath ──
  { id: 14, name: "Bisi Bele Bhath", description: "Karnataka's beloved one-pot dish — rice, lentils and vegetables in a warming spiced broth.", price: "₹80", category: "Rice & Bhath", popular: true, image: IMG.bisiBele, emoji: "🍛" },
  { id: 15, name: "Chow Chow Bhath", description: "The classic Bengaluru duo — khara bhath and kesari bhath side by side on one plate.", price: "₹80", category: "Rice & Bhath", image: IMG.kesari, emoji: "🍲" },
  { id: 16, name: "Shavige Bhath", description: "Vermicelli upma tempered with mustard, peanuts and curry leaves. Light and aromatic.", price: "₹60", category: "Rice & Bhath", image: IMG.semiyaUpma, emoji: "🍜" },
  { id: 17, name: "Lemon Rice", description: "Tangy turmeric rice with curry leaves, peanuts and a bright squeeze of lemon.", price: "₹60", category: "Rice & Bhath", image: IMG.vegPulao, emoji: "🍋" },
  { id: 18, name: "Curd Rice", description: "Chilled rice stirred with fresh curd, tempered with mustard and pomegranate. Cooling and calm.", price: "₹60", category: "Rice & Bhath", image: IMG.curdRice, emoji: "🍚" },
  { id: 19, name: "Mushroom Pulav", description: "Fragrant basmati rice cooked with mushrooms and aromatic whole spices.", price: "₹100", category: "Rice & Bhath", image: IMG.pulao, emoji: "🍄" },

  // ── Snacks ──
  { id: 20, name: "Samosa", description: "Flaky pastry filled with spiced potatoes and peas. Crispy, golden and comforting.", price: "₹30", category: "Snacks", popular: true, image: IMG.samosa, emoji: "🥟" },
  { id: 21, name: "Bajji (4 pcs)", description: "Banana, capsicum, aloo and onion fritters — hot, crispy and perfect with chai.", price: "₹30", category: "Snacks", image: IMG.pakora, emoji: "🍤" },
  { id: 22, name: "Masala Vade", description: "Spiced lentil fritters with a crisp shell and soft, aromatic interior.", price: "₹30", category: "Snacks", image: IMG.meduVada, emoji: "🧆" },
  { id: 23, name: "Dahi Vade", description: "Soft lentil fritters soaked in cool yogurt, drizzled with chutneys and spices.", price: "₹40", category: "Snacks", image: IMG.dahiVada, emoji: "🥣" },

  // ── Desserts ──
  { id: 24, name: "Kesari Bhath", description: "Saffron-hued semolina halwa with ghee, cashews and a hint of cardamom.", price: "₹50", category: "Desserts", popular: true, image: IMG.kesari, emoji: "🍮" },
  { id: 25, name: "Carrot Halwa", description: "Slow-cooked carrot pudding with ghee, sugar and nuts. Served warm with vanilla ice cream.", price: "₹50", category: "Desserts", image: IMG.gajarHalwa, emoji: "🥕" },
  { id: 26, name: "Gulab Jamun", description: "Melt-in-the-mouth milk dumplings in rose-cardamom syrup. With ice cream for ₹65.", price: "₹25", category: "Desserts", image: IMG.gulabJamun, emoji: "🍡" },
  { id: 27, name: "Holige / Puran Poli", description: "Sweet lentil-stuffed flatbread griddled with ghee — a festive South Indian classic.", price: "₹30", category: "Desserts", image: IMG.obbattu, emoji: "🫓" },

  // ── Beverages ──
  { id: 28, name: "Filter Coffee", description: "South India's finest — strong decoction brewed through a metal filter, frothed with fresh milk.", price: "₹25", category: "Beverages", popular: true, image: IMG.filterCoffee, emoji: "☕" },
  { id: 29, name: "Cold Coffee", description: "Chilled coffee blended smooth and drizzled with chocolate sauce. Cool and indulgent.", price: "₹100", category: "Beverages", image: IMG.chaiCoffee, emoji: "🥤" },
  { id: 30, name: "Fresh Lime Juice", description: "Freshly squeezed lime — sweet, salted, or mixed. The perfect thirst-quencher.", price: "₹40", category: "Beverages", image: IMG.limeSoda, emoji: "🍋" },
  { id: 31, name: "Mango Milkshake", description: "Real mango blended into a thick, creamy shake. Seasonal indulgence, perfectly poured.", price: "₹100", category: "Beverages", popular: true, image: IMG.mangoLassi, emoji: "🥭" },
  { id: 32, name: "Masala Tea", description: "Ginger-spiced chai brewed strong with cardamom and fresh milk. The morning ritual.", price: "₹25", category: "Beverages", image: IMG.masalaChai, emoji: "🍵" },
];

export const categories = ["All", "Dosa", "Tiffin", "Rice & Bhath", "Snacks", "Desserts", "Beverages"];

// Brand-tinted gradients used by the SmartImage fallback so every dish keeps a
// premium, on-brand look even before (or without) its photo.
export const categoryAccent: Record<string, string> = {
  Dosa: "linear-gradient(135deg,#3a1606 0%,#6e3410 55%,#e0a82e 140%)",
  Tiffin: "linear-gradient(135deg,#2c1b06 0%,#5e4a17 55%,#f2d89a 150%)",
  "Rice & Bhath": "linear-gradient(135deg,#1f2a0c 0%,#3f5318 55%,#9bbf3f 150%)",
  Snacks: "linear-gradient(135deg,#3a1206 0%,#8a3413 55%,#d6592b 150%)",
  Desserts: "linear-gradient(135deg,#34101a 0%,#7a1f3a 55%,#e6859e 150%)",
  Beverages: "linear-gradient(135deg,#1c1208 0%,#4a2f15 55%,#caa15a 150%)",
};
