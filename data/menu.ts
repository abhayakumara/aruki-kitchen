export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  popular?: boolean;
  image: string;
};

// All items are 100% vegetarian.
// NOTE: images below are reliable stock placeholders. To use Aruki's real
// photos, drop files into /public/images and replace the image URL with e.g.
// "/images/masala-dosey.jpg".
const U = (id: string) => `https://images.unsplash.com/photo-${id}?w=600&q=80`;

// Reliable stock image pool (loads on Vercel)
const IMG = {
  dosa: U("1574894709920-11b28e7367e3"),
  dosaRed: U("1603894584373-5ac82b2ae398"),
  idly: U("1574071318508-1cdbab80d002"),
  riceCurry: U("1567188040759-fb8a883dc6d8"),
  biryani: U("1589302168068-964664d93dc0"),
  rice: U("1563379091339-03b21ab4a4f8"),
  creamy: U("1585937421612-70a008356fbe"),
  samosa: U("1601050690597-df0568f70950"),
  fritters: U("1603360946369-dc9bb6258143"),
  yogurt: U("1553361371-9b22f78e8b1d"),
  gulab: U("1600850056064-a8b29c82d10a"),
  kulfi: U("1488477181946-6428a0291777"),
  kheer: U("1548365328-8c6db3220e4c"),
  coffee: U("1414235077428-338989a2e8c0"),
  chai: U("1561336313-0bd5e0b27ec8"),
  lassi: U("1555507036-ab1f4038808a"),
  lime: U("1513558161293-cdaf765ed2fd"),
};

export const menuItems: MenuItem[] = [
  // ── Dosa ──
  { id: 1, name: "Masala Dosey", description: "Crispy golden dosa filled with spiced potato masala, served with coconut chutney and sambar.", price: "₹80", category: "Dosa", popular: true, image: IMG.dosa },
  { id: 2, name: "Ghee Masala Dosey", description: "Our signature masala dosa lavished with ghee — golden, rich and irresistibly crisp.", price: "₹90", category: "Dosa", image: IMG.dosa },
  { id: 3, name: "Mysore Masala Dosey", description: "Dosa spread with spicy red Mysore chutney, stuffed with potato masala. A Bengaluru classic.", price: "₹90", category: "Dosa", image: IMG.dosaRed },
  { id: 4, name: "Cheese Masala Dosey", description: "Masala dosa topped with melted cheese — crispy outside, indulgent inside.", price: "₹100", category: "Dosa", image: IMG.dosa },
  { id: 5, name: "Rava Masala Dosey", description: "Semolina dosa with a lacy, porous texture and potato masala filling. Light and crispy.", price: "₹90", category: "Dosa", image: IMG.dosa },
  { id: 6, name: "Onion Uttapam", description: "Thick, soft rice pancake topped with fresh onions and green chillies. Comfort in a plate.", price: "₹80", category: "Dosa", image: IMG.idly },
  { id: 7, name: "Plain Dosey", description: "The classic — a thin, crispy fermented rice and lentil crepe. Simple perfection.", price: "₹70", category: "Dosa", image: IMG.dosa },

  // ── Tiffin ──
  { id: 8, name: "Idly (2 pcs)", description: "Soft, fluffy steamed rice cakes — the soul of South Indian breakfast. With chutney & sambar.", price: "₹50", category: "Tiffin", popular: true, image: IMG.idly },
  { id: 9, name: "Vade (2 pcs)", description: "Crispy, golden lentil doughnuts with a soft centre. Perfect with filter coffee.", price: "₹50", category: "Tiffin", image: IMG.samosa },
  { id: 10, name: "Ghee Pudi Thatte Idly", description: "Large, pillowy thatte idly drenched in ghee and dusted with our secret pudi spice blend.", price: "₹70", category: "Tiffin", image: IMG.idly },
  { id: 11, name: "Khara Bhath (Upma)", description: "Savory semolina upma tempered with mustard, curry leaves, cashews and vegetables.", price: "₹50", category: "Tiffin", image: IMG.riceCurry },
  { id: 12, name: "Mangalore Buns", description: "Sweet banana-flavored fried buns, fluffy inside and golden outside — a coastal specialty.", price: "₹80", category: "Tiffin", image: IMG.gulab },
  { id: 13, name: "Poori", description: "Deep-fried puffed wheat bread, light and airy, served with spiced potato masala.", price: "₹80", category: "Tiffin", image: IMG.dosa },

  // ── Rice & Bhath ──
  { id: 14, name: "Bisi Bele Bhath", description: "Karnataka's beloved one-pot dish — rice, lentils and vegetables in a warming spiced broth.", price: "₹80", category: "Rice & Bhath", popular: true, image: IMG.creamy },
  { id: 15, name: "Chow Chow Bhath", description: "The classic Bengaluru duo — khara bhath and kesari bhath side by side on one plate.", price: "₹80", category: "Rice & Bhath", image: IMG.riceCurry },
  { id: 16, name: "Shavige Bhath", description: "Vermicelli upma tempered with mustard, peanuts and curry leaves. Light and aromatic.", price: "₹60", category: "Rice & Bhath", image: IMG.rice },
  { id: 17, name: "Lemon Rice", description: "Tangy turmeric rice with curry leaves, peanuts and a bright squeeze of lemon.", price: "₹60", category: "Rice & Bhath", image: IMG.rice },
  { id: 18, name: "Curd Rice", description: "Chilled rice stirred with fresh curd, tempered with mustard and pomegranate. Cooling and calm.", price: "₹60", category: "Rice & Bhath", image: IMG.rice },
  { id: 19, name: "Mushroom Pulav", description: "Fragrant basmati rice cooked with mushrooms and aromatic whole spices.", price: "₹100", category: "Rice & Bhath", image: IMG.biryani },

  // ── Snacks ──
  { id: 20, name: "Samosa", description: "Flaky pastry filled with spiced potatoes and peas. Crispy, golden and comforting.", price: "₹30", category: "Snacks", popular: true, image: IMG.samosa },
  { id: 21, name: "Bajji (4 pcs)", description: "Banana, capsicum, aloo and onion fritters — hot, crispy and perfect with chai.", price: "₹30", category: "Snacks", image: IMG.fritters },
  { id: 22, name: "Masala Vade", description: "Spiced lentil fritters with a crisp shell and soft, aromatic interior.", price: "₹30", category: "Snacks", image: IMG.samosa },
  { id: 23, name: "Dahi Vade", description: "Soft lentil fritters soaked in cool yogurt, drizzled with chutneys and spices.", price: "₹40", category: "Snacks", image: IMG.yogurt },

  // ── Desserts ──
  { id: 24, name: "Kesari Bhath", description: "Saffron-hued semolina halwa with ghee, cashews and a hint of cardamom.", price: "₹50", category: "Desserts", popular: true, image: IMG.kheer },
  { id: 25, name: "Carrot Halwa", description: "Slow-cooked carrot pudding with ghee, sugar and nuts. Served warm with vanilla ice cream.", price: "₹50", category: "Desserts", image: IMG.kheer },
  { id: 26, name: "Gulab Jamun", description: "Melt-in-the-mouth milk dumplings in rose-cardamom syrup. With ice cream for ₹65.", price: "₹25", category: "Desserts", image: IMG.gulab },
  { id: 27, name: "Holige / Puran Poli", description: "Sweet lentil-stuffed flatbread griddled with ghee — a festive South Indian classic.", price: "₹30", category: "Desserts", image: IMG.kulfi },

  // ── Beverages ──
  { id: 28, name: "Filter Coffee", description: "South India's finest — strong decoction brewed through a metal filter, frothed with fresh milk.", price: "₹25", category: "Beverages", popular: true, image: IMG.coffee },
  { id: 29, name: "Cold Coffee", description: "Chilled coffee blended smooth and drizzled with chocolate sauce. Cool and indulgent.", price: "₹100", category: "Beverages", image: IMG.coffee },
  { id: 30, name: "Fresh Lime Juice", description: "Freshly squeezed lime — sweet, salted, or mixed. The perfect thirst-quencher.", price: "₹40", category: "Beverages", image: IMG.lime },
  { id: 31, name: "Mango Milkshake", description: "Real mango blended into a thick, creamy shake. Seasonal indulgence, perfectly poured.", price: "₹100", category: "Beverages", popular: true, image: IMG.lassi },
  { id: 32, name: "Masala Tea", description: "Ginger-spiced chai brewed strong with cardamom and fresh milk. The morning ritual.", price: "₹25", category: "Beverages", image: IMG.chai },
];

export const categories = ["All", "Dosa", "Tiffin", "Rice & Bhath", "Snacks", "Desserts", "Beverages"];
