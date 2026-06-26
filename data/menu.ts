export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  popular?: boolean;
  image: string;
};

// All items are 100% vegetarian — no veg/non-veg flag needed.

export const menuItems: MenuItem[] = [
  // ── Dosa ──────────────────────────────────────────────
  {
    id: 1,
    name: "Masala Dosey",
    description: "Crispy golden dosa filled with spiced potato masala, served with coconut chutney and sambar.",
    price: "₹80",
    category: "Dosa",
    popular: true,
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80",
  },
  {
    id: 2,
    name: "Ghee Masala Dosey",
    description: "Our signature masala dosa lavished with ghee — golden, rich and irresistibly crisp.",
    price: "₹90",
    category: "Dosa",
    popular: true,
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80",
  },
  {
    id: 3,
    name: "Mysore Masala Dosey",
    description: "Dosa spread with spicy Mysore chutney, stuffed with potato masala. A Bengaluru classic.",
    price: "₹90",
    category: "Dosa",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80",
  },
  {
    id: 4,
    name: "Cheese Masala Dosey",
    description: "Masala dosa topped with melted cheese — crispy on the outside, indulgent on the inside.",
    price: "₹100",
    category: "Dosa",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80",
  },
  {
    id: 5,
    name: "Rava Masala Dosey",
    description: "Semolina dosa with a porous, lacy texture and potato masala filling. Light and crispy.",
    price: "₹90",
    category: "Dosa",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80",
  },
  {
    id: 6,
    name: "Onion Uttapam",
    description: "Thick, soft rice pancake topped with fresh onions and green chillies. Comfort in a plate.",
    price: "₹80",
    category: "Dosa",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80",
  },
  {
    id: 7,
    name: "Plain Dosey",
    description: "The classic — a thin, crispy fermented rice and lentil crepe. Simple perfection.",
    price: "₹70",
    category: "Dosa",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80",
  },

  // ── Tiffin ────────────────────────────────────────────
  {
    id: 8,
    name: "Idly (2 pcs)",
    description: "Soft, fluffy steamed rice cakes — the soul of South Indian breakfast. Served with chutney & sambar.",
    price: "₹50",
    category: "Tiffin",
    popular: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80",
  },
  {
    id: 9,
    name: "Vade (2 pcs)",
    description: "Crispy, golden lentil doughnuts with a soft centre. A perfect companion to filter coffee.",
    price: "₹50",
    category: "Tiffin",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80",
  },
  {
    id: 10,
    name: "Ghee Pudi Thatte Idly",
    description: "Large, pillowy thatte idly drenched in ghee and dusted with our secret pudi spice blend.",
    price: "₹70",
    category: "Tiffin",
    popular: true,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
  },
  {
    id: 11,
    name: "Khara Bhath (Upma)",
    description: "Savory semolina upma tempered with mustard, curry leaves, cashews and fresh vegetables.",
    price: "₹50",
    category: "Tiffin",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
  },
  {
    id: 12,
    name: "Mangalore Buns",
    description: "Sweet banana-flavored fried buns, fluffy inside and golden outside — a coastal Karnataka specialty.",
    price: "₹80",
    category: "Tiffin",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
  },
  {
    id: 13,
    name: "Poori",
    description: "Deep-fried puffed wheat bread, light and airy, served with spiced potato masala.",
    price: "₹80",
    category: "Tiffin",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
  },

  // ── Rice & Bhath ──────────────────────────────────────
  {
    id: 14,
    name: "Bisi Bele Bhath",
    description: "Karnataka's beloved one-pot dish — rice, lentils and vegetables in a warming spiced broth.",
    price: "₹80",
    category: "Rice & Bhath",
    popular: true,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
  },
  {
    id: 15,
    name: "Chow Chow Bhath",
    description: "The classic Bengaluru duo — khara bhath and kesari bhath side by side on one plate.",
    price: "₹80",
    category: "Rice & Bhath",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
  },
  {
    id: 16,
    name: "Shavige Bhath",
    description: "Vermicelli upma tempered with mustard, peanuts and curry leaves. Light and aromatic.",
    price: "₹60",
    category: "Rice & Bhath",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
  },
  {
    id: 17,
    name: "Lemon Rice",
    description: "Tangy turmeric rice with curry leaves, peanuts and a bright squeeze of lemon.",
    price: "₹60",
    category: "Rice & Bhath",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
  },
  {
    id: 18,
    name: "Curd Rice",
    description: "Chilled rice stirred with fresh curd and tempered with mustard and pomegranate. A cooling classic.",
    price: "₹60",
    category: "Rice & Bhath",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
  },
  {
    id: 19,
    name: "Mushroom Pulav",
    description: "Fragrant basmati rice cooked with mushrooms and aromatic whole spices.",
    price: "₹100",
    category: "Rice & Bhath",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
  },

  // ── Snacks ────────────────────────────────────────────
  {
    id: 20,
    name: "Samosa",
    description: "Flaky pastry filled with spiced potatoes and peas. Crispy, golden and comforting.",
    price: "₹30",
    category: "Snacks",
    popular: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
  },
  {
    id: 21,
    name: "Bajji (4 pcs)",
    description: "Banana, capsicum, aloo and onion fritters — hot, crispy and perfect with chai.",
    price: "₹30",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
  },
  {
    id: 22,
    name: "Masala Vade",
    description: "Spiced lentil fritters with a crisp shell and soft, aromatic interior.",
    price: "₹30",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
  },
  {
    id: 23,
    name: "Dahi Vade",
    description: "Soft lentil fritters soaked in cool yogurt, drizzled with chutneys and spices.",
    price: "₹40",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
  },

  // ── Desserts ──────────────────────────────────────────
  {
    id: 24,
    name: "Kesari Bhath",
    description: "Saffron-hued semolina halwa with ghee, cashews and a hint of cardamom.",
    price: "₹50",
    category: "Desserts",
    popular: true,
    image: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&q=80",
  },
  {
    id: 25,
    name: "Carrot Halwa",
    description: "Slow-cooked carrot pudding with ghee, sugar and nuts. Served warm with vanilla ice cream.",
    price: "₹50",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&q=80",
  },
  {
    id: 26,
    name: "Gulab Jamun",
    description: "Melt-in-the-mouth milk-solid dumplings in rose-cardamom syrup. Also available with ice cream (₹65).",
    price: "₹25",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?w=600&q=80",
  },
  {
    id: 27,
    name: "Holige / Puran Poli",
    description: "Sweet lentil-stuffed flatbread cooked on a griddle with ghee — a festive South Indian classic.",
    price: "₹30",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&q=80",
  },

  // ── Beverages ─────────────────────────────────────────
  {
    id: 28,
    name: "Filter Coffee",
    description: "South India's finest — strong decoction brewed through a metal filter, frothed with fresh milk.",
    price: "₹25",
    category: "Beverages",
    popular: true,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
  },
  {
    id: 29,
    name: "Cold Coffee",
    description: "Chilled coffee blended smooth and drizzled with chocolate sauce. Cool and indulgent.",
    price: "₹100",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
  },
  {
    id: 30,
    name: "Fresh Lime Juice",
    description: "Freshly squeezed lime — sweet, salted, or mixed. The perfect thirst-quencher.",
    price: "₹40",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80",
  },
  {
    id: 31,
    name: "Mango Milkshake",
    description: "Real mango blended into a thick, creamy shake. Seasonal indulgence, perfectly poured.",
    price: "₹100",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80",
  },
  {
    id: 32,
    name: "Masala Tea",
    description: "Ginger-spiced chai brewed strong with cardamom and fresh milk. The morning ritual.",
    price: "₹25",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=600&q=80",
  },
];

export const categories = [
  "All",
  "Dosa",
  "Tiffin",
  "Rice & Bhath",
  "Snacks",
  "Desserts",
  "Beverages",
];
