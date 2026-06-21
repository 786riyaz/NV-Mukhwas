import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  ShoppingBag, 
  Layers, 
  HelpCircle, 
  Award, 
  ArrowRight, 
  Sparkles, 
  Menu, 
  X,
  Compass,
  FileText
} from 'lucide-react';

// Product type definition
interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  pocketPrice: number;
  familyPrice: number;
  pocketWeight: string;
  familyWeight: string;
  colors: string[];
}

// Global list of premium products
const BRAND_PRODUCTS: Product[] = [
  {
    id: 'dulhan',
    name: 'Premium Dulhan Mukhwas',
    tagline: 'Ceremonial Sweet Blend',
    description: 'A luxurious celebration star. Packed with pure hand-rubbed sweet gulkand petals, shredded almonds, sesame seeds, rich cardamom pods, and candied fennel.',
    pocketPrice: 95,
    familyPrice: 245,
    pocketWeight: '50g',
    familyWeight: '150g',
    colors: ['#BF6B42', '#C5A059', '#E5A93B', '#FDFBF7']
  },
  {
    id: 'royal',
    name: 'Royal Rajputi Mix',
    tagline: 'Traditional Roasted Digestif',
    description: 'An aromatic vintage recipe. Slow-roasted fennel seeds glazed with rich saffron sugar syrup, spiced coriander pulse (dhana dal), menthol, and fine edible oils.',
    pocketPrice: 90,
    familyPrice: 235,
    pocketWeight: '50g',
    familyWeight: '150g',
    colors: ['#C5A059', '#BF6B42', '#8F7138', '#FDFBF7']
  },
  {
    id: 'mint',
    name: 'Minty Shahi Mixture',
    tagline: 'Ultra-Cooling Refreshment',
    description: 'The ultimate cooling mint blast. Blends high-grade cooling menthol crystals, green coriander split pulse, heavy cardamom oil glaze, and crystalline sugar candy.',
    pocketPrice: 85,
    familyPrice: 220,
    pocketWeight: '50g',
    familyWeight: '150g',
    colors: ['#2D4628', '#5D7C56', '#9AB693', '#FDFBF7']
  }
];

// Helper to simulate seed locations inside the glass jars dynamically
interface SeedItem {
  id: number;
  left: string;
  bottom: string;
  color: string;
  delay: string;
  rot: string;
}

function JarSeeds({ colors, count }: { colors: string[]; count: number }) {
  const [seeds, setSeeds] = useState<SeedItem[]>([]);

  useEffect(() => {
    const list: SeedItem[] = [];
    for (let i = 0; i < count; i++) {
      list.push({
        id: i,
        left: (Math.random() * 80 + 10) + '%',
        bottom: (Math.random() * 60 + 5) + '%',
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: (Math.random() * 0.6).toFixed(2) + 's',
        rot: Math.round(Math.random() * 360) + 'deg'
      });
    }
    setSeeds(list);
  }, [count, colors.join(',')]);

  return (
    <div className="jar__seeds absolute inset-0 overflow-hidden">
      {seeds.map((s) => (
        <span
          key={s.id}
          className="seed"
          style={{
            left: s.left,
            bottom: s.bottom,
            backgroundColor: s.color,
            transform: `translateY(0) rotate(${s.rot})`,
            animationDelay: s.delay,
            animationName: 'seedFalling',
            animationDuration: '0.8s',
            animationTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
            animationFillMode: 'forwards'
          }}
        />
      ))}
    </div>
  );
}

// Exact high-fidelity replication of the brand's original logo from official image
function OriginalLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer border & Circle */}
      <circle cx="200" cy="200" r="190" fill="#FFFFFF" stroke="#F16522" strokeWidth="2.5" />
      
      {/* Top arched (SINCE 2005) */}
      <path id="sincePathCurve" d="M 100,118 A 110,110 0 0,1 300,118" fill="none" />
      <text fill="#F16522" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="20" fontWeight="900" letterSpacing="3">
        <textPath href="#sincePathCurve" startOffset="50%" textAnchor="middle">SINCE 2005</textPath>
      </text>

      {/* Central stylized NV Monogram */}
      <path 
        d="M 148,185 C 148,155 148,140 148,140 C 148,128 172,126 198,188 C 200,165 200,158 200,146 C 200,132 216,130 228,162 L 248,144" 
        fill="none" 
        stroke="#F16522" 
        strokeWidth="15" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Floral left (5-petal decoration in teal) */}
      <g transform="translate(155, 131) scale(1.1)">
        <circle cx="0" cy="-6" r="4.5" fill="#0E9F9F" />
        <circle cx="6" cy="-2" r="4.5" fill="#0E9F9F" />
        <circle cx="4" cy="5" r="4.5" fill="#0E9F9F" />
        <circle cx="-4" cy="5" r="4.5" fill="#0E9F9F" />
        <circle cx="-6" cy="-2" r="4.5" fill="#0E9F9F" />
        <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
        <circle cx="0" cy="0" r="2.2" fill="#0E9F9F" />
      </g>

      {/* Floral right (5-petal decoration in teal) */}
      <g transform="translate(245, 134) scale(1.1)">
        <circle cx="0" cy="-6" r="4.5" fill="#0E9F9F" />
        <circle cx="6" cy="-2" r="4.5" fill="#0E9F9F" />
        <circle cx="4" cy="5" r="4.5" fill="#0E9F9F" />
        <circle cx="-4" cy="5" r="4.5" fill="#0E9F9F" />
        <circle cx="-6" cy="-2" r="4.5" fill="#0E9F9F" />
        <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
        <circle cx="0" cy="0" r="2.2" fill="#0E9F9F" />
      </g>

      {/* Upper Leaves/Seeds */}
      <path d="M 183,122 C 183,110 196,105 196,105 C 196,105 201,118 190,124 Z" fill="none" stroke="#0E9F9F" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 217,122 C 217,110 204,105 204,105 C 204,105 199,118 210,124 Z" fill="none" stroke="#0E9F9F" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Side Outer Framed Leaves */}
      <path d="M 120,165 C 120,143 131,133 131,133 C 131,133 137,147 126,169 Z" fill="none" stroke="#0E9F9F" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 280,165 C 280,143 269,133 269,133 C 269,133 263,147 274,169 Z" fill="none" stroke="#0E9F9F" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Flanking dots */}
      <circle cx="132" cy="180" r="4.5" fill="#0E9F9F" />
      <circle cx="268" cy="180" r="4.5" fill="#0E9F9F" />

      {/* Bottom Left Leaf */}
      <path d="M 130,238 C 130,223 143,213 143,213 C 143,213 153,223 143,243 Z" fill="none" stroke="#0E9F9F" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Bottom Center dot */}
      <circle cx="200" cy="245" r="11" fill="#0E9F9F" />

      {/* Bottom Right veined leaf */}
      <g>
        <path d="M 252,243 C 262,223 270,213 270,213 C 270,213 275,228 260,248 Z" fill="none" stroke="#0E9F9F" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 255,238 L 267,222" stroke="#0E9F9F" strokeWidth="3" strokeLinecap="round" />
        <path d="M 259,243 L 269,230" stroke="#0E9F9F" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Bottom curve smile line */}
      <path d="M 160,265 C 180,278 220,278 240,265" fill="none" stroke="#0E9F9F" strokeWidth="6.5" strokeLinecap="round" />

      {/* Bottom Branding Text */}
      <text x="200" y="322" fill="#0E9F9F" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="30" textAnchor="middle" letterSpacing="0.2">NV MUKHWAS</text>
      <text x="200" y="352" fill="#F16522" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="15" textAnchor="middle" letterSpacing="1.8">BY NANDA TRADERS</text>
    </svg>
  );
}

export default function App() {
  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Individual product size toggles: { productId: 'pocket' | 'family' }
  const [productSizes, setProductSizes] = useState<Record<string, 'pocket' | 'family'>>({
    dulhan: 'pocket',
    royal: 'pocket',
    mint: 'pocket'
  });

  // Route Order to WhatsApp
  const executeOrder = (productName: string, size: 'pocket' | 'family') => {
    const product = BRAND_PRODUCTS.find(p => p.name === productName);
    if (!product) return;

    const price = size === 'family' ? product.familyPrice : product.pocketPrice;
    const weight = size === 'family' ? product.familyWeight : product.pocketWeight;
    const packName = size.charAt(0).toUpperCase() + size.slice(1);
    
    // Custom formatted message drafting as requested:
    // "I want to my <XYZ Product> <Pocket/Family> Package of XXX rupeed"
    const displayMessage = `Hello! I want to buy my *${productName}* (${packName} Package, ${weight}) of *₹${price}* rupees. Please confirm my order details.`;
    
    const url = `https://wa.me/919909221451?text=${encodeURIComponent(displayMessage)}`;
    window.open(url, '_blank', 'noopener');
  };



  return (
    <div className="min-h-screen relative bg-lux-cream text-teal-charcoal selection:bg-orange-brand selection:text-white font-sans">
      
      {/* TOP DECORATIVE PANEL BAR */}
      <div className="bg-teal-charcoal text-lux-cream text-xs py-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center font-mono">
          <span>🌟 Premium Scented Digestive Tradition · Since 2005</span>
          <span className="hidden md:inline">📞 WhatsApp Helpline Order Depot: +91 99091 21451</span>
        </div>
      </div>

      {/* STICKY HEADER */}
      <nav className="sticky top-0 bg-lux-cream/90 backdrop-blur-xl border-b border-teal-brand/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo & Branding */}
          <a href="#" className="flex items-center gap-3.5 group">
            <OriginalLogo className="w-14 h-14 bg-white rounded-full p-1 shadow-md shadow-teal-brand/10 border border-teal-brand/10 transition-all group-hover:scale-105 duration-300" />
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-wide text-[#0E9F9F] leading-none">NV MUKHWAS</span>
              <span className="font-mono text-[9px] font-extrabold tracking-[0.2em] text-[#F16522] mt-0.5">ESTD. 2005 · NANDA TRADERS</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
            <a href="#catalog" className="text-teal-charcoal hover:text-orange-brand transition-colors">Our Signature Blends</a>
            <a href="#story" className="text-teal-charcoal hover:text-orange-brand transition-colors">Heritage Since 2005</a>
          </div>

          {/* Action Center Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#catalog" className="btn btn--primary text-xs py-2.5 px-6 font-bold flex items-center shadow-md">
              <ShoppingBag className="w-3.5 h-3.5 mr-1.5" /> Explore Catalog Jars
            </a>
          </div>

          {/* Mobile Hamburguer */}
          <div className="flex md:hidden items-center gap-2">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-teal-charcoal hover:text-teal-brand rounded-full hover:bg-teal-brand/5 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE DRAWER NAVIGATION */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-[81px] inset-x-0 bg-lux-cream border-b border-teal-brand/10 shadow-lg z-40 p-6 flex flex-col gap-4 font-semibold"
          >
            <a 
              href="#catalog" 
              onClick={() => setMobileMenuOpen(false)}
              className="pb-2 border-b border-teal-brand/5 hover:text-orange-brand transition-colors flex justify-between"
            >
              <span>Our Signature Blends</span> <ArrowRight className="w-4 h-4 text-orange-brand" />
            </a>
            <a 
              href="#story" 
              onClick={() => setMobileMenuOpen(false)}
              className="pb-2 border-b border-teal-brand/5 hover:text-orange-brand transition-colors flex justify-between"
            >
              <span>Heritage Since 2005</span> <ArrowRight className="w-4 h-4 text-orange-brand" />
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <a 
                href="#catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn--primary py-3 justify-center"
              >
                <ShoppingBag className="w-4 h-4 mr-2" /> Order On WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO HERO SECTION */}
      <header className="relative bg-cream-dark text-teal-charcoal overflow-hidden border-b-[10px] border-teal-brand">
        {/* Subtle radial decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-orange-brand/5 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-teal-brand/5 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-12 gap-12 items-center">
          
          {/* Hero text */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 bg-orange-brand/10 border border-orange-brand/20 text-orange-brand font-mono text-xs font-bold px-3 py-1.5 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5 fill-current animate-pulse" /> AUTHENTIC INDIAN MUKHWAS BRAND
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-teal-charcoal leading-tight mb-6">
              Every meal deserves a <br className="hidden sm:inline" />
              <span className="text-orange-brand italic font-light">traditional dessert ending.</span>
            </h1>
            <p className="text-teal-charcoal/80 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
              Experience the legendary recipe range crafted with ultimate hygienic care by <strong>Nanda Traders</strong>. Perfectly balanced premium fennel seeds, organic gulkand, rich dry-fruits, and refreshing crystals packaged freshly since 2005.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#catalog" className="btn btn--primary px-8 py-4 font-bold tracking-wide shadow-lg">
                Explore Signature Blends
              </a>
              <a href="#story" className="btn btn--ghost px-8 py-4 border-2 font-bold tracking-wide">
                Our Heritage Story
              </a>
            </div>

            {/* Quick value badges */}
            <div className="flex flex-wrap gap-6 text-xs text-teal-charcoal/70 border-t border-teal-brand/15 pt-6 w-full">
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-orange-brand" /> 100% Hand-Mixed</span>
              <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-orange-brand" /> Preservative Free</span>
              <span className="flex items-center gap-1.5"><Compass className="w-4 h-4 text-orange-brand" /> Indian Heritage Since 2005</span>
            </div>
          </div>

          {/* Hero interactive visual showpiece */}
          <div className="md:col-span-5 flex justify-center items-center relative py-10">
            <div className="absolute w-64 h-64 bg-teal-brand/10 rounded-full blur-3xl" />
            <motion.div 
              initial={{ y: 20 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative"
            >
              <div className="jar origin-bottom scale-110 md:scale-125">
                <div className="jar__lid" />
                <div className="jar__neck" />
                <div className="jar__body bg-white/45 border-teal-brand/20 shadow-xl relative">
                  <JarSeeds colors={['#BF6B42', '#2D4628', '#C5A059', '#FDFBF7']} count={50} />
                  <div className="jar__inner-badge">
                    <span>NV</span>
                  </div>
                </div>
                <p className="jar__label text-teal-brand/60 font-mono text-[9px] mt-4 tracking-widest text-center">THE PERFECT TRADITIONAL PINCH</p>
              </div>
            </motion.div>
          </div>

        </div>
      </header>

      {/* QUICK VALUE STRIP */}
      <section className="bg-cream-dark/60 border-b border-teal-brand/5 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border border-teal-brand/5 shadow-sm">
            <span className="font-mono text-orange-brand text-xs font-bold block mb-2">01 / PREMIUM GRADE</span>
            <h3 className="font-display font-semibold text-lg text-teal-charcoal mb-2">Excellent Aromatic Saunf</h3>
            <p className="text-xs text-teal-charcoal/70">Carefully double-filtered sweet fennel seeds sourced directly from the finest crops of Gujarat and Rajasthan agricultural fields.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-teal-brand/5 shadow-sm">
            <span className="font-mono text-orange-brand text-xs font-bold block mb-2">02 / NATURAL INTEGRITY</span>
            <h3 className="font-display font-semibold text-lg text-teal-charcoal mb-2">Artisan Hand Mixing</h3>
            <p className="text-xs text-teal-charcoal/70">No industrial machinery crushing. Every custom packaging order is measured, poured, and stored manually in highly sanitized small-batch steel containers.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-teal-brand/5 shadow-sm">
            <span className="font-mono text-orange-brand text-xs font-bold block mb-2">03 / PREMIUM HOUSING</span>
            <h3 className="font-display font-semibold text-lg text-teal-charcoal mb-2">Airtight Glass Jars</h3>
            <p className="text-xs text-teal-charcoal/70">We pack exclusively in high-durability premium glass jars to protect the rich fragrance and maintain cooling moistness for weeks.</p>
          </div>
        </div>
      </section>

      {/* SIGNATURE CATALOG SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6" id="catalog">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow">LEGACY SELECTIONS</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-teal-charcoal mt-3 mb-4">Our Signature Recipes</h2>
          <p className="text-sm text-teal-charcoal/70">Every master mixture is crafted using standard authentic procedures. Switch package sizes to view real-time weights, pricing, and order coordination.</p>
        </div>

        {/* Product Selection Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {BRAND_PRODUCTS.map((prod) => {
            const currentSize = productSizes[prod.id];
            const displayPrice = currentSize === 'family' ? prod.familyPrice : prod.pocketPrice;
            const displayWeight = currentSize === 'family' ? prod.familyWeight : prod.pocketWeight;
            const seedCount = currentSize === 'family' ? 45 : 24;

            return (
              <div 
                key={prod.id} 
                className="bg-white rounded-2xl border border-teal-brand/10 p-6 flex flex-col shadow-sm hover:shadow-xl hover:border-teal-brand/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                
                {/* Visual Glass Jar Mini Component */}
                <div className="flex justify-center mb-6">
                  <div className="jar">
                    <div className="jar__lid" />
                    <div className="jar__neck" />
                    <div className={`jar__body bg-teal-brand/5 border-teal-brand/10 relative transition-all duration-300 ${currentSize === 'family' ? 'jar__body--family' : ''}`}>
                      <JarSeeds colors={prod.colors} count={seedCount} />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <span className="font-mono text-[10px] font-bold tracking-widest text-orange-brand uppercase block mb-1">{prod.tagline}</span>
                <h3 className="font-display font-bold text-xl text-teal-charcoal mb-3">{prod.name}</h3>
                <p className="text-xs text-teal-charcoal/70 leading-relaxed mb-6 flex-grow">{prod.description}</p>

                {/* Package Size Control Toggle button group */}
                <div className="mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-charcoal/50 block mb-2">Package Size Selection:</span>
                  <div className="flex bg-cream-dark/50 border border-teal-brand/10 p-1 rounded-full gap-1">
                    <button 
                      onClick={() => setProductSizes(prev => ({ ...prev, [prod.id]: 'pocket' }))}
                      className={`flex-1 py-2 px-3 text-xs font-bold rounded-full transition-all duration-300 ${currentSize === 'pocket' ? 'bg-teal-brand text-white shadow-sm' : 'text-teal-charcoal/65 hover:text-teal-brand hover:bg-white/40'}`}
                    >
                      Pocket (50g)
                    </button>
                    <button 
                      onClick={() => setProductSizes(prev => ({ ...prev, [prod.id]: 'family' }))}
                      className={`flex-1 py-2 px-3 text-xs font-bold rounded-full transition-all duration-300 ${currentSize === 'family' ? 'bg-teal-brand text-white shadow-sm' : 'text-teal-charcoal/65 hover:text-teal-brand hover:bg-white/40'}`}
                    >
                      Family (150g)
                    </button>
                  </div>
                </div>

                {/* Price and Action Button Section */}
                <div className="flex items-center justify-between border-t border-teal-brand/5 pt-4 mt-auto mb-4">
                  <div className="flex flex-col">
                    <span className="font-display font-extrabold text-2xl text-teal-charcoal">₹{displayPrice}</span>
                    <span className="font-mono text-[9px] text-teal-charcoal/50 mt-0.5">{displayWeight} Deluxe Glass Jar</span>
                  </div>
                  <span className="text-[10px] font-bold text-teal-brand bg-teal-brand/5 px-2.5 py-1 rounded-md border border-teal-brand/10">In Stock</span>
                </div>

                <button 
                  onClick={() => executeOrder(prod.name, currentSize)}
                  className="btn btn--whatsapp w-full py-3.5 text-xs md:text-sm font-bold justify-center rounded-xl transition-all shadow-md"
                >
                  <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.2-.6.9-.8 1-.2.2-.3.2-.6.1-.9-.4-1.8-1-2.6-1.8-.7-.7-1.3-1.5-1.7-2.4-.1-.2 0-.4.1-.5.2-.2.5-.5.6-.7.1-.2.1-.4 0-.6-.1-.2-.7-1.6-.9-2.1-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.7.7-1.1 1.5-1.1 2.5 0 .2 0 .4.1.6.5 1.8 1.5 3.5 2.9 4.9 1.6 1.5 3.4 2.5 5.4 3 .7.2 1.4.1 2-.1.6-.2 1.7-1 2-1.9.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.2L2 22l4.9-1.5C8.3 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.1 1 1-3-.2-.3C3.7 14.9 3.2 13.5 3.2 12c0-4.9 3.9-8.8 8.8-8.8s8.8 3.9 8.8 8.8-3.9 8.8-8.8 8.8z"/>
                  </svg>
                  Order on WhatsApp
                </button>

              </div>
            );
          })}
        </div>
      </section>



      {/* HERITAGE STORY STAMP SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6" id="story">
        <div className="grid md:grid-cols-2 gap-12 items-center text-left">
          
          <div className="flex justify-center md:justify-start items-center">
            {/* Spinning original vintage stamp replica */}
            <div className="spinning-orbit max-w-sm">
              <OriginalLogo className="w-64 h-64 md:w-80 md:h-80 shadow-2xl rounded-full bg-white border border-[#F16522]/25 p-2.5" />
            </div>
          </div>

          <div className="flex flex-col items-start justify-center">
            <span className="eyebrow">OUR HERITAGE STORY</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-teal-charcoal mt-3 mb-6">Proportioning Gastronomic Traditions Since 2005</h2>
            <p className="text-sm sm:text-base text-teal-charcoal/80 mb-4 leading-relaxed">
              For more than twenty years, <strong>Nanda Traders</strong> has held the true traditional belief that the final bite of an Indian feast is the crowning moment of hospitality. In 2005, we started a small home kitchen project to capture the pure essence of classical Indian digestives and package them cleanly.
            </p>
            <p className="text-sm sm:text-base text-teal-charcoal/80 mb-6 leading-relaxed">
              We gather double-sifted Gujarat fennel seeds, organic sun-dried sweet gulkand leaves, natural whole cardamom husks, and pristine cooling crystals to compose a premium range. Every recipe is meticulously loaded into luxurious airtight glass containers to keep the fragrance intact for your dining tables.
            </p>
            <a href="#catalog" className="btn btn--primary bg-teal-brand hover:bg-teal-brand-dark px-6 py-3">
              View Catalog Jars <ArrowRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-teal-charcoal text-lux-cream py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-white/5 text-left">
            
            {/* Branding details */}
            <div>
              <div className="flex flex-col mb-4">
                <span className="font-display font-extrabold text-2xl text-teal-brand">NV MUKHWAS</span>
                <span className="font-mono text-[9px] font-bold text-orange-brand mt-0.5 tracking-wider">BY NANDA TRADERS — SINCE 2005</span>
              </div>
              <p className="text-xs text-lux-cream/70 leading-relaxed max-w-sm">
                Dedicatedly blending top-tier aromatic mouth fresheners, sweet ceremonial digestives, and custom mixtures under rigorous hygiene standard since 2005.
              </p>
            </div>

            {/* Signature Mix paths */}
            <div>
              <h4 className="font-mono text-xs text-orange-brand font-bold uppercase tracking-wider mb-4">Signature Blends</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-lux-cream/75">
                <li><a href="#catalog" className="hover:text-orange-brand transition-colors">Premium Dulhan Mukhwas</a></li>
                <li><a href="#catalog" className="hover:text-orange-brand transition-colors">Royal Rajputi Mix</a></li>
                <li><a href="#catalog" className="hover:text-orange-brand transition-colors">Minty Shahi Mixture</a></li>
              </ul>
            </div>

            {/* Navigation paths */}
            <div>
              <h4 className="font-mono text-xs text-orange-brand font-bold uppercase tracking-wider mb-4">Navigation</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-lux-cream/75">
                <li><a href="#catalog" className="hover:text-orange-brand transition-colors">Online Catalogue Jars</a></li>
                <li><a href="#story" className="hover:text-orange-brand transition-colors">Legacy Story Since 2005</a></li>
                <li><a href="https://wa.me/919909221451" className="hover:text-orange-brand transition-colors">WhatsApp Order Support</a></li>
              </ul>
            </div>

            {/* Newsletter form */}
            <div>
              <h4 className="font-mono text-xs text-orange-brand font-bold uppercase tracking-wider mb-4">Join Fresh Mail</h4>
              <p className="text-xs text-lux-cream/60 leading-relaxed mb-4">Subscribe to receive notifications when fresh seasonal crop extracts and special customized festive sets are ready.</p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully! Thank you.'); }} className="flex border-b border-lux-cream/20 pb-1.5 items-center">
                <input 
                  type="email" 
                  placeholder="Enter email address" 
                  required 
                  className="bg-transparent border-none outline-none text-xs text-lux-cream flex-grow placeholder:text-lux-cream/40"
                />
                <button type="submit" className="text-xs text-orange-brand font-bold uppercase tracking-wider font-mono hover:text-white">Join →</button>
              </form>
            </div>

          </div>

          <div className="flex flex-wrap items-center justify-between pt-8 text-[10px] text-lux-cream/50 font-mono">
            <span>© 2026 NV MUKHWAS BY NANDA TRADERS. ALL RIGHTS RESERVED. LEGACY SINCE 2005.</span>
            <span>📞 Helpline Hotline Support Desk: +91 99091 21451</span>
          </div>

        </div>
      </footer>

      {/* FLOATING PULSING WHATSAPP WIDGET */}
      <a 
        href="https://wa.me/919909221451?text=Hi!%20I'd%20like%20to%20know%20more%20about%20your%20custom%20mukhwas%20selections." 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float pulse-glow flex items-center justify-center"
        aria-label="Direct WhatsApp Ordering Support"
      >
        <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
          <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.2-.6.9-.8 1-.2.2-.3.2-.6.1-.9-.4-1.8-1-2.6-1.8-.7-.7-1.3-1.5-1.7-2.4-.1-.2 0-.4.1-.5.2-.2.5-.5.6-.7.1-.2.1-.4 0-.6-.1-.2-.7-1.6-.9-2.1-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.7.7-1.1 1.5-1.1 2.5 0 .2 0 .4.1.6.5 1.8 1.5 3.5 2.9 4.9 1.6 1.5 3.4 2.5 5.4 3 .7.2 1.4.1 2-.1.6-.2 1.7-1 2-1.9.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.2L2 22l4.9-1.5C8.3 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.1 1 1-3-.2-.3C3.7 14.9 3.2 13.5 3.2 12c0-4.9 3.9-8.8 8.8-8.8s8.8 3.9 8.8 8.8-3.9 8.8-8.8 8.8z"/>
        </svg>
      </a>



    </div>
  );
}
