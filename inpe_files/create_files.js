const fs = require('fs');
const path = require('path');

const BASE = path.join('C:', 'Users', 'Carlos', 'Desktop', '\u20ac\u20ac', 'E-Nimble', 'Clientela', 'Barefoot', 'inpe');

function write(relPath, content) {
    const fullPath = path.join(BASE, relPath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('Created:', relPath);
}

// ============================================================
// globals.css
// ============================================================
write('src/app/globals.css', `@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');

:root {
  --color-background: #FDF6E9;
  --color-primary: #F4C466;
  --color-secondary: #8097a5;
  --color-teal: #9FE2DD;
  --color-winter-blue: #007396;
  --color-footer-yellow: #F9DA88;
  --color-text: #2c3e50;
  --color-text-light: #666;
  --color-white: #ffffff;
  --color-accent-brown: #854931;
  --font-main: 'Nunito', sans-serif;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 32px;
  --spacing-xl: 64px;
  --border-radius: 16px;
  --border-radius-lg: 32px;
  --border-radius-full: 9999px;
  --shadow-card: 0 4px 12px rgba(0, 0, 0, 0.05);
  --shadow-float: 0 10px 25px rgba(0, 0, 0, 0.1);
  --transition-fast: 0.2s ease-out;
  --transition-smooth: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html, body {
  font-family: var(--font-main);
  background-color: var(--color-background);
  color: var(--color-text);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

a { text-decoration: none; color: inherit; }
ul { list-style: none; }
img { max-width: 100%; display: block; }

.btn-primary {
  background-color: var(--color-primary);
  color: white;
  padding: 12px 24px;
  border-radius: var(--border-radius-full);
  font-weight: bold;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(244, 196, 102, 0.4);
  transition: transform 0.2s;
  display: inline-block;
}
.btn-primary:hover { transform: scale(1.05); }

.btn-outline {
  background-color: transparent;
  color: var(--color-primary);
  padding: 12px 24px;
  border-radius: var(--border-radius-full);
  font-weight: bold;
  border: 2px solid var(--color-primary);
  cursor: pointer;
  transition: background-color 0.2s;
}
.btn-outline:hover { background-color: rgba(244, 196, 102, 0.1); }

::-webkit-scrollbar { width: 12px; }
::-webkit-scrollbar-track { background: var(--color-background); }
::-webkit-scrollbar-thumb { background-color: #f7c969; border-radius: 20px; border: 3px solid var(--color-background); }

.mobile-carousel {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}
@media (max-width: 768px) {
  .mobile-carousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 1.5rem;
    padding-bottom: 2rem;
    padding-inline: 1rem;
    margin-inline: -1rem;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }
  .mobile-carousel::-webkit-scrollbar { height: 8px; }
  .mobile-carousel > * { flex: 0 0 85%; scroll-snap-align: center; }
}

.thumb {
  pointer-events: none; position: absolute; height: 0; width: 100%;
  outline: none; appearance: none; -webkit-appearance: none; background: transparent;
}
.thumb::-webkit-slider-thumb {
  pointer-events: auto; -webkit-appearance: none; border: none;
  height: 20px; width: 20px; border-radius: 50%; background: #fff;
  border: 2px solid var(--color-teal); cursor: pointer; margin-top: 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.15); transition: transform 0.1s ease;
}
.thumb::-webkit-slider-thumb:hover { transform: scale(1.1); }
.thumb::-moz-range-thumb {
  pointer-events: auto; border: none; height: 20px; width: 20px; border-radius: 50%;
  background: #fff; border: 2px solid var(--color-teal); cursor: pointer;
  box-shadow: 0 2px 5px rgba(0,0,0,0.15); transition: transform 0.1s ease;
}
.thumb::-moz-range-thumb:hover { transform: scale(1.1); }
.thumb::-webkit-slider-runnable-track { background: transparent; width: 100%; }
.thumb::-moz-range-track { background: transparent; width: 100%; }

.nav-item:hover { color: var(--color-primary); }
@media (max-width: 850px) {
  .desktop-nav { display: none !important; }
  .mobile-toggle { display: block !important; }
}

.seasons-section { display: flex; height: 80vh; width: 100%; }
@media (max-width: 768px) { .seasons-section { flex-direction: column !important; } }

.what-we-offer-section { min-height: 100vh; padding: 4rem 10%; }
@media (max-width: 768px) { .what-we-offer-section { min-height: auto; padding: 3rem 5%; } }

.offer-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; width: 100%; }
@media (max-width: 1024px) { .offer-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px) {
  .offer-grid {
    display: flex; overflow-x: auto; scroll-snap-type: x mandatory;
    gap: 1.5rem; padding-bottom: 2rem; padding-inline: 1rem;
    margin-inline: -1rem; scroll-behavior: smooth; -webkit-overflow-scrolling: touch;
  }
  .offer-grid::-webkit-scrollbar { height: 8px; }
  .offer-grid > * { flex: 0 0 85%; scroll-snap-align: center; }
}

.collections-grid { display: grid; grid-template-columns: 280px 1fr; gap: 3rem; align-items: start; }
@media (max-width: 900px) { .collections-grid { grid-template-columns: 1fr; gap: 2rem; } }
`);

// ============================================================
// layout.js (App Router)
// ============================================================
write('src/app/layout.js', `import './globals.css';

export const metadata = {
  title: 'Inpe – Barefoot Shoes',
  description: 'Descubra o conforto natural para toda a família.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
`);

// ============================================================
// next.config.mjs
// ============================================================
write('next.config.mjs', `/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
`);

// ============================================================
// data/products.js
// ============================================================
write('src/data/products.js', `// In Next.js we serve product images from /public/products/
// Images are referenced as /products/p{id}.{ext}

const getImg = (index) => {
  const exts = ['png', 'jpg', 'jpeg'];
  // We return the path as a URL since Next.js serves from public/
  // We try png first as most are png
  return \`/products/p\${index}.png\`;
};

const getGallery = (id) => {
  // For product 1 we have p1_1 through p1_5
  if (id === 1) {
    return [
      \`/products/p1_1.jpeg\`,
      \`/products/p1_2.jpeg\`,
      \`/products/p1_3.jpeg\`,
      \`/products/p1_4.jpeg\`,
      \`/products/p1_5.jpeg\`,
    ];
  }
  const main = getImg(id);
  return [main, main, main, main];
};

const categories = ['crianca', 'mulher', 'homem'];
const subcategories = ['Sapatilhas', 'Botas', 'Sandálias'];

const products = Array.from({ length: 33 }, (_, i) => {
  const id = i + 1;
  const category = categories[i % 3];
  const availableColors = ['#000000', '#FFFFFF', '#8B4513', '#1C1C1C', '#F5F5DC', '#A52A2A', '#000080'];
  const randomColors = [...availableColors].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 1);

  let sizes = [];
  if (category === 'crianca') {
    sizes = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  } else {
    sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
  }
  const productSizes = sizes.filter(() => Math.random() > 0.3);

  return {
    id,
    name: \`Barefoot \${category === 'crianca' ? 'Kids' : category === 'mulher' ? 'Woman' : 'Man'} \${id}\`,
    category,
    subcategory: subcategories[i % 3],
    price: (30 + Math.random() * 50).toFixed(2),
    image: getImg(id),
    gallery: getGallery(id),
    isNew: i > 25,
    sizes: productSizes.length > 0 ? productSizes : [sizes[0]],
    colors: randomColors,
  };
});

export default products;
`);

// ============================================================
// components/Header.jsx
// ============================================================
write('src/components/Header.jsx', `'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: '20px', left: 0, width: '100%', zIndex: 100,
      padding: '0 2rem', display: 'flex', justifyContent: 'center',
      transition: 'transform 0.3s ease-in-out',
      transform: isVisible ? 'translateY(0)' : 'translateY(-200%)',
    }}>
      <div style={{
        backgroundColor: 'white', borderRadius: '9999px', padding: '12px 32px',
        width: '100%', maxWidth: '1100px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.png" alt="Inpe Logo" width={120} height={45} style={{ height: '45px', width: 'auto' }} unoptimized />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '24px', fontWeight: 'bold', fontSize: '0.9rem', color: '#555', textTransform: 'uppercase' }}>
          <Link href="/" className="nav-item">Início</Link>
          <Link href="/loja" className="nav-item">Loja</Link>
          <Link href="/historia" className="nav-item">Nossa História</Link>
          <Link href="/contactos" className="nav-item">Contactos</Link>
        </nav>

        {/* Action Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            display: 'flex', alignItems: 'center',
            backgroundColor: isSearchOpen ? 'var(--color-background)' : 'transparent',
            borderRadius: '50px', padding: isSearchOpen ? '4px 8px' : '0',
            transition: 'all 0.3s ease',
            border: isSearchOpen ? '1px solid #eee' : '1px solid transparent'
          }}>
            <button onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              if (!isSearchOpen) setTimeout(() => searchInputRef.current?.focus(), 100);
            }} style={{ background: 'none', border: 'none', color: isSearchOpen ? 'var(--color-primary)' : '#555', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '8px', borderRadius: '50%', transition: 'color 0.2s' }}>
              <Search size={20} />
            </button>
            <input ref={searchInputRef} type="text" placeholder="Pesquisar..." value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Escape') setIsSearchOpen(false); }}
              onBlur={() => { if (searchQuery.trim() === '') setIsSearchOpen(false); }}
              style={{ width: isSearchOpen ? '150px' : '0px', opacity: isSearchOpen ? 1 : 0, border: 'none', background: 'transparent', outline: 'none', padding: isSearchOpen ? '0 8px 0 4px' : '0', transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.2s ease, padding 0.3s ease', color: 'var(--color-text)', fontSize: '0.9rem' }}
            />
          </div>

          <button style={{ background: 'var(--color-primary)', color: 'white', width: '40px', height: '40px', borderRadius: '50%', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <ShoppingBag size={20} />
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="mobile-toggle" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer' }}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{ position: 'absolute', top: '80px', left: '2rem', right: '2rem', backgroundColor: 'white', borderRadius: '20px', padding: '2rem', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center' }}>
          <Link href="/" onClick={() => setIsOpen(false)}>Início</Link>
          <Link href="/loja" onClick={() => setIsOpen(false)}>Loja</Link>
          <Link href="/historia" onClick={() => setIsOpen(false)}>Nossa História</Link>
          <Link href="/contactos" onClick={() => setIsOpen(false)}>Contactos</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
`);

// ============================================================
// components/Footer.jsx
// ============================================================
write('src/components/Footer.jsx', `'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-footer-yellow)', padding: '4rem 2rem 1rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '4rem', marginBottom: '4rem' }}>
        <div style={{ flex: '1 1 300px' }}>
          <Image src="/logo.png" alt="Inpe Logo" width={160} height={60} style={{ height: '60px', width: 'auto', marginBottom: '1rem' }} unoptimized />
          <p style={{ fontWeight: 'bold', fontSize: '0.9rem', maxWidth: '300px', lineHeight: 1.6 }}>
            Criando os calçados mais macios e mágicos para os pequenos aventureiros de amanhã. Éticos, sustentáveis e repletos de alegria.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <a href="#" style={{ width: '40px', height: '40px', background: 'var(--color-teal)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <Facebook size={20} strokeWidth={2.5} />
            </a>
            <a href="#" style={{ width: '40px', height: '40px', background: 'var(--color-teal)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <Instagram size={20} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '900', marginBottom: '1.5rem', color: '#333' }}>Loja</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontWeight: 'bold', fontSize: '0.9rem' }}>
              <li><Link href="#">Mais Vendidos</Link></li>
              <li><Link href="#">Nova Coleção</Link></li>
              <li><Link href="#">Crianças</Link></li>
              <li><Link href="#">Adultos</Link></li>
              <li><Link href="#">Acessórios</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '900', marginBottom: '1.5rem', color: '#333' }}>Ajuda</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontWeight: 'bold', fontSize: '0.9rem' }}>
              <li><Link href="#">Guia de Tamanhos</Link></li>
              <li><Link href="#">Envios e Devoluções</Link></li>
              <li><Link href="#">Cuidados de manter a tilha</Link></li>
              <li><Link href="#">Contactos</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '2px solid rgba(0,0,0,0.05)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontSize: '0.8rem', fontWeight: 'bold', color: '#444' }}>
        <span>© 2024 Little Steps Footwear. All rights reserved.</span>
        <span>Feito com amor por <span style={{ color: 'var(--color-teal)' }}>E-Nimble</span></span>
      </div>
    </footer>
  );
};

export default Footer;
`);

// ============================================================
// components/Layout.jsx
// ============================================================
write('src/components/Layout.jsx', `import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, paddingTop: '80px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
`);

// ============================================================
// components/ProductCard.jsx
// ============================================================
write('src/components/ProductCard.jsx', `'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ title, price, image, category, id, compact = false }) => (
  <motion.div
    whileHover={{ y: compact ? -4 : -8 }}
    style={{
      backgroundColor: 'white',
      borderRadius: compact ? '16px' : '24px',
      padding: compact ? '12px' : '20px',
      position: 'relative',
      boxShadow: 'var(--shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      color: 'inherit',
      height: '100%',
      minHeight: compact ? '260px' : '340px'
    }}
  >
    <div style={{ height: compact ? '120px' : '180px', backgroundColor: 'white', borderRadius: compact ? '12px' : '16px', marginBottom: compact ? '10px' : '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '8px' }} />
    </div>

    <h3 style={{ fontSize: compact ? '1rem' : '1.25rem', fontWeight: '800', color: '#1f2937', marginBottom: '4px', lineHeight: '1.2' }}>{title}</h3>

    <p style={{ fontSize: compact ? '0.75rem' : '0.85rem', color: '#9ca3af', marginBottom: compact ? '10px' : '16px', lineHeight: '1.4' }}>
      Conforto e liberdade para os teus pés
    </p>

    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: compact ? '1.2rem' : '1.5rem', fontWeight: 'bold', color: '#854931' }}>
        €{price}
      </span>
      <button style={{ width: compact ? '36px' : '52px', height: compact ? '36px' : '52px', borderRadius: '50%', backgroundColor: '#f7c969', border: 'none', color: '#854931', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: compact ? '1.25rem' : '1.75rem', transition: 'transform 0.2s' }}>+</button>
    </div>
  </motion.div>
);

export default ProductCard;
`);

// ============================================================
// components/ModelViewer.jsx
// ============================================================
write('src/components/ModelViewer.jsx', `'use client';
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url);
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = window.scrollY * 0.005;
    }
  });

  return <primitive ref={ref} object={scene} />;
}

export default function ModelViewer({ modelPath, scale = 1, autoRotate = false }) {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '300px' }}>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Model url={modelPath} />
          </Stage>
        </Suspense>
        <OrbitControls autoRotate={autoRotate} enableZoom={false} />
      </Canvas>
    </div>
  );
}
`);

// ============================================================
// components/FilterSidebar.jsx
// ============================================================
write('src/components/FilterSidebar.jsx', `'use client';
import React from 'react';

const FilterSidebar = ({ filters, setFilters }) => {
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    const cur = filters.categories || [];
    setFilters({ ...filters, categories: checked ? [...cur, value] : cur.filter(c => c !== value) });
  };
  const handleSubCategoryChange = (e) => {
    const { value, checked } = e.target;
    const cur = filters.subcategories || [];
    setFilters({ ...filters, subcategories: checked ? [...cur, value] : cur.filter(c => c !== value) });
  };
  const handleSizeChange = (size) => {
    const cur = filters.sizes || [];
    setFilters({ ...filters, sizes: cur.includes(size) ? cur.filter(s => s !== size) : [...cur, size] });
  };

  return (
    <div style={{ width: '100%', maxWidth: '300px', height: 'fit-content' }}>
      <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#333', marginTop: 0 }}>Filtros</h3>

        {/* Price Filter */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#555' }}>Preço</h4>
          <div style={{ position: 'relative', height: '40px', width: '100%' }}>
            <div style={{ position: 'absolute', width: '100%', height: '6px', backgroundColor: '#eee', borderRadius: '99px', top: '50%', transform: 'translateY(-50%)', left: 0 }}></div>
            <div style={{ position: 'absolute', height: '6px', backgroundColor: 'var(--color-teal)', borderRadius: '99px', left: \`\${(filters.price.min / 200) * 100}%\`, right: \`\${100 - (filters.price.max / 200) * 100}%\`, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}></div>
            <input type="range" name="min" min="0" max="200" value={filters.price.min}
              onChange={(e) => { const val = Math.min(Number(e.target.value), filters.price.max - 1); setFilters({ ...filters, price: { ...filters.price, min: val } }); }}
              className="thumb thumb-left" style={{ zIndex: filters.price.min > 180 ? 5 : 3, position: 'absolute', width: '100%', top: '50%', transform: 'translateY(-50%)', margin: 0, left: 0 }}
            />
            <input type="range" name="max" min="0" max="200" value={filters.price.max}
              onChange={(e) => { const val = Math.max(Number(e.target.value), filters.price.min + 1); setFilters({ ...filters, price: { ...filters.price, max: val } }); }}
              className="thumb thumb-right" style={{ zIndex: 4, position: 'absolute', width: '100%', top: '50%', transform: 'translateY(-50%)', margin: 0, left: 0 }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
            <div style={{ border: '1px solid #ddd', padding: '4px 12px', borderRadius: '20px', fontSize: '0.9rem', color: '#666', background: '#f9f9f9' }}>{filters.price.min}€</div>
            <div style={{ border: '1px solid #ddd', padding: '4px 12px', borderRadius: '20px', fontSize: '0.9rem', color: '#666', background: '#f9f9f9' }}>{filters.price.max}€</div>
          </div>
        </div>

        {/* Gender Filter */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#555' }}>Gênero</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['homem', 'mulher', 'crianca'].map(cat => (
              <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', color: '#666', fontSize: '1rem' }}>
                <input type="checkbox" value={cat} checked={filters.categories?.includes(cat)} onChange={handleCategoryChange} style={{ accentColor: 'var(--color-teal)', width: '18px', height: '18px' }} />
                <span style={{ textTransform: 'capitalize' }}>{cat === 'crianca' ? 'Criança' : cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Style Filter */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#555' }}>Estilo</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Botas', 'Desportivo', 'Lonas', 'Sandálias'].map(sc => (
              <label key={sc} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', color: '#666', fontSize: '1rem' }}>
                <input type="checkbox" value={sc} checked={filters.subcategories?.includes(sc)} onChange={handleSubCategoryChange} style={{ accentColor: 'var(--color-teal)', width: '18px', height: '18px' }} />
                <span>{sc}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Size Filter */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#555' }}>Tamanho</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['criança', 'adulto'].map(sizeCat => (
              <label key={sizeCat} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', color: '#666', fontSize: '1rem' }}>
                <input type="checkbox" value={sizeCat} checked={filters.sizes?.includes(sizeCat)} onChange={(e) => handleSizeChange(e.target.value)} style={{ accentColor: 'var(--color-teal)', width: '18px', height: '18px' }} />
                <span style={{ textTransform: 'capitalize' }}>{sizeCat}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
`);

// ============================================================
// app/page.js (Home)
// ============================================================
write('src/app/page.js', `import HomeClient from '@/components/HomeClient';

export const metadata = {
  title: 'Inpe – Calçado Barefoot Natural',
  description: 'Descubra o conforto natural para toda a família com os sapatos barefoot Inpe.',
};

export default function HomePage() {
  return <HomeClient />;
}
`);

// ============================================================
// components/HomeClient.jsx (client component for Home)
// ============================================================
write('src/components/HomeClient.jsx', `'use client';
import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { Headset, ShieldCheck, Truck, Gift, ChevronLeft, ChevronRight, Palette, Leaf, Award, Lightbulb, Users, Heart } from 'lucide-react';
import Link from 'next/link';
import ProductCard from './ProductCard';
import ModelViewer from './ModelViewer';
import Layout from './Layout';
import products from '@/data/products';

const AnimatedCounter = ({ from, to, duration }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
};

const HomeClient = () => {
  const { bestSellers, newCollection, summerProducts, winterProducts } = useMemo(() => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    const summer = products.filter(p => p.category === 'crianca' || p.category === 'sandalias').slice(0, 3);
    const winter = products.filter(p => p.category === 'homem' || p.category === 'botas').slice(0, 3);
    while (summer.length < 3) summer.push(products[Math.floor(Math.random() * products.length)]);
    while (winter.length < 3) winter.push(products[Math.floor(Math.random() * products.length)]);
    return { bestSellers: shuffled.slice(0, 4), newCollection: shuffled.slice(4, 8), summerProducts: summer, winterProducts: winter };
  }, []);

  const [summerIndex, setSummerIndex] = useState(0);
  const [winterIndex, setWinterIndex] = useState(0);

  const nextSummer = () => setSummerIndex((prev) => (prev + 1) % summerProducts.length);
  const prevSummer = () => setSummerIndex((prev) => (prev - 1 + summerProducts.length) % summerProducts.length);
  const nextWinter = () => setWinterIndex((prev) => (prev + 1) % winterProducts.length);
  const prevWinter = () => setWinterIndex((prev) => (prev - 1 + winterProducts.length) % winterProducts.length);

  const handleAddToCart = (name) => alert(\`\${name} adicionado ao carrinho!\`);

  return (
    <Layout>
      <div style={{ paddingTop: '0', paddingBottom: '0', marginTop: '-80px' }}>

        {/* HERO */}
        <section style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', color: 'white', textAlign: 'center' }}>
          <video autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }}>
            <source src="/hero_video.mp4" type="video/mp4" />
          </video>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)', zIndex: -1 }} />
          <div style={{ zIndex: 10, maxWidth: '800px', padding: '0 20px' }}>
            <div style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(5px)', borderRadius: '20px', color: 'white', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '24px', border: '1px solid rgba(255,255,255,0.3)' }}>
              🌱 100% Orgânico & Ajustado para o pé
            </div>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: 1.1, color: 'white', fontWeight: '900', marginBottom: '1rem', textTransform: 'uppercase', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Deixe os pezinhos <br /> andar livremente
            </h1>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f0f0f0', marginBottom: '3rem', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
              Descubra o conforto natural para toda a família.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/loja" className="btn-primary" style={{ padding: '16px 32px', fontSize: '1rem' }}>VER COLEÇÃO -&gt;</Link>
              <button className="btn-outline" style={{ padding: '16px 32px', fontSize: '1rem', color: 'white', borderColor: 'white' }}>SUGESTÕES</button>
            </div>
          </div>
        </section>

        {/* PRODUCTS WRAPPER */}
        <div style={{ position: 'relative', overflow: 'hidden', padding: '4rem 0' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, backgroundImage: 'url(/images/products_background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <section style={{ padding: '0 12% 4rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#333', textTransform: 'uppercase', marginBottom: '2rem' }}>Mais Vendidos</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
                {bestSellers.map(p => <ProductCard key={p.id} title={p.name} price={p.price} image={p.image} category={p.subcategory || p.category} id={p.id} />)}
              </div>
            </section>
            <section style={{ padding: '0 12%' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#333', textTransform: 'uppercase', marginBottom: '2rem' }}>Nova Coleção</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
                {newCollection.map(p => <ProductCard key={p.id} title={p.name} price={p.price} image={p.image} category={p.subcategory || p.category} id={p.id} />)}
              </div>
            </section>
          </div>
        </div>

        {/* COMFORT SECTION */}
        <section style={{ backgroundColor: 'var(--color-teal)', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#854931', textTransform: 'uppercase', marginBottom: '3rem' }}>Conforto</h2>
          <div style={{ margin: '0 auto 3rem', maxWidth: '800px', height: '400px', position: 'relative', width: '100%' }}>
            <ModelViewer modelPath="/shoe.glb" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/loja" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.2rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>VER COLEÇÃO -&gt;</Link>
          </div>
          <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '300px', height: '300px', border: '20px solid var(--color-primary)', borderRadius: '50%', opacity: 0.6 }} />
        </section>

        {/* SEASONS SPLIT */}
        <section className="seasons-section">
          {/* Summer */}
          <div style={{ backgroundColor: 'var(--color-primary)', display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', position: 'relative', height: '100%' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '900', color: '#006D8F', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Verão</h2>
            <div style={{ position: 'relative', width: '100%', maxWidth: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', gap: '1rem', flex: 1 }}>
              <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} onClick={prevSummer} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#006D8F', padding: '10px' }}><ChevronLeft size={48} /></motion.button>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center', height: '100%', maxHeight: '60%', alignItems: 'center' }}>
                <AnimatePresence mode="wait">
                  <motion.img key={summerIndex} src={summerProducts[summerIndex]?.image} alt="Verão" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.15))' }} />
                </AnimatePresence>
              </div>
              <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} onClick={nextSummer} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#006D8F', padding: '10px' }}><ChevronRight size={48} /></motion.button>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '300px' }}>
              <Link href="/loja/verao" style={{ textDecoration: 'none', width: '100%' }}>
                <motion.div whileHover={{ scale: 1.05 }} style={{ backgroundColor: '#006D8F', color: 'white', padding: 'clamp(10px,1.2vw,16px) clamp(20px,2vw,28px)', borderRadius: '99px', fontWeight: 'bold', textAlign: 'center', boxSizing: 'border-box', fontSize: 'clamp(0.85rem,1vw,1rem)' }}>VER COLEÇÃO -&gt;</motion.div>
              </Link>
              <motion.button whileHover={{ scale: 1.05 }} onClick={() => handleAddToCart(summerProducts[summerIndex]?.name)} style={{ backgroundColor: 'transparent', color: '#006D8F', padding: 'clamp(10px,1.2vw,16px) clamp(20px,2vw,28px)', borderRadius: '99px', border: '2px solid #006D8F', fontWeight: 'bold', fontFamily: 'var(--font-main)', cursor: 'pointer', width: '100%', boxSizing: 'border-box', fontSize: 'clamp(0.85rem,1vw,1rem)' }}>ADICIONAR AO CARRINHO</motion.button>
            </div>
          </div>

          {/* Winter */}
          <div style={{ backgroundColor: 'var(--color-winter-blue)', display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', position: 'relative', height: '100%' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '900', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Inverno</h2>
            <div style={{ position: 'relative', width: '100%', maxWidth: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', gap: '1rem', flex: 1 }}>
              <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} onClick={prevWinter} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)', padding: '10px' }}><ChevronLeft size={48} /></motion.button>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center', height: '100%', maxHeight: '60%', alignItems: 'center' }}>
                <AnimatePresence mode="wait">
                  <motion.img key={winterIndex} src={winterProducts[winterIndex]?.image} alt="Inverno" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.15))' }} />
                </AnimatePresence>
              </div>
              <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} onClick={nextWinter} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)', padding: '10px' }}><ChevronRight size={48} /></motion.button>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '300px' }}>
              <Link href="/loja/inverno" style={{ textDecoration: 'none', width: '100%' }}>
                <motion.div whileHover={{ scale: 1.05 }} style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: 'clamp(10px,1.2vw,16px) clamp(20px,2vw,28px)', borderRadius: '99px', fontWeight: 'bold', textAlign: 'center', boxSizing: 'border-box', fontSize: 'clamp(0.85rem,1vw,1rem)' }}>VER COLEÇÃO -&gt;</motion.div>
              </Link>
              <motion.button whileHover={{ scale: 1.05 }} onClick={() => handleAddToCart(winterProducts[winterIndex]?.name)} style={{ backgroundColor: 'transparent', color: 'var(--color-primary)', padding: 'clamp(10px,1.2vw,16px) clamp(20px,2vw,28px)', borderRadius: '99px', border: '2px solid var(--color-primary)', fontWeight: 'bold', fontFamily: 'var(--font-main)', cursor: 'pointer', width: '100%', boxSizing: 'border-box', fontSize: 'clamp(0.85rem,1vw,1rem)' }}>ADICIONAR AO CARRINHO</motion.button>
            </div>
          </div>
        </section>

        {/* SERVICE FEATURES */}
        <section style={{ padding: '4rem 10%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', backgroundColor: '#ffffff' }}>
          {[
            { icon: Headset, title: 'Suporte Gratuito 24/7', desc: 'Apoio online a qualquer hora' },
            { icon: ShieldCheck, title: 'Garantia de Reembolso', desc: 'Pagamento 100% Seguro' },
            { icon: Truck, title: 'Envios Gratuitos', desc: 'Em encomendas acima de 49€' },
            { icon: Gift, title: 'Cartões Presente', desc: 'A oferta perfeita' }
          ].map((f, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', borderRadius: '8px', border: '1px solid #eee', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'default' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ backgroundColor: '#f0f9f8', padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                <f.icon size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: '800', color: '#333', marginBottom: '0.25rem', textTransform: 'uppercase' }}>{f.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* WHAT WE OFFER */}
        <section className="what-we-offer-section" style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#333', marginBottom: '1rem', textTransform: 'uppercase' }}>O Que Oferecemos</h2>
          </div>
          <div className="offer-grid">
            {[
              { icon: Palette, title: 'Design', text: 'Estilo moderno e atrativo para todas as ocasiões.', color: '#f7c969', bg: '#fffcf2' },
              { icon: Leaf, title: 'Sustentabilidade', text: 'Materiais eco-friendly e produção consciente.', color: '#006D8F', bg: '#e0f2f1' },
              { icon: Award, title: 'Qualidade', text: 'Durabilidade e conforto em cada detalhe.', color: '#f7c969', bg: '#fffcf2' },
              { icon: Lightbulb, title: 'Inovação', text: 'Tecnologia barefoot de ponta.', color: '#006D8F', bg: '#e0f2f1' },
              { type: 'image', src: products[26]?.image },
              { icon: Users, title: 'Trabalho de Equipa', text: 'Focados na sua satisfação.', color: '#f7c969', bg: '#fffcf2' }
            ].map((item, idx) => {
              if (item.type === 'image') return (
                <motion.div key={idx} whileHover={{ scale: 1.03 }} style={{ borderRadius: '24px', overflow: 'hidden', height: '100%', minHeight: '200px', position: 'relative', backgroundColor: '#fff', border: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={item.src} alt="Feature" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                </motion.div>
              );
              return (
                <motion.div key={idx} whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }} style={{ backgroundColor: item.bg, padding: '2rem', borderRadius: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'all 0.3s ease', border: \`1px solid \${item.color}20\` }}>
                  <div style={{ backgroundColor: item.color, color: 'white', padding: '16px', borderRadius: '50%', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: \`0 8px 16px \${item.color}40\` }}>
                    <item.icon size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#2c3e50', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.5' }}>{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* BUILT FOR EVERYDAY */}
        <section style={{ padding: '6rem 10%', backgroundColor: '#fffdf9', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', overflow: 'hidden' }}>
          <div style={{ position: 'relative', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} style={{ position: 'relative', width: '300px', height: '300px', borderRadius: '50%' }}>
              {[...bestSellers].slice(0, 3).map((prod, i) => {
                const angle = (i * 360) / 3;
                const radius = 150;
                return (
                  <motion.div key={prod.id} style={{ position: 'absolute', top: '50%', left: '50%', width: '200px', marginLeft: '-100px', marginTop: '-120px', transform: \`rotate(\${angle}deg) translate(\${radius}px) rotate(-\${angle}deg)\` }}>
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} style={{ backgroundColor: 'white', borderRadius: '20px', padding: '1rem', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', textAlign: 'center', border: '1px solid #eee' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.5rem' }}>
                        <div style={{ background: '#fafafa', borderRadius: '50%', padding: '4px' }}><Heart size={14} fill="#eb5757" color="#eb5757" /></div>
                      </div>
                      <img src={prod.image} alt={prod.name} style={{ width: '100%', height: '120px', objectFit: 'contain', marginBottom: '0.5rem' }} />
                      <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#333' }}>{prod.name}</div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          <div>
            <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#1a1a1a', lineHeight: '1.1', marginBottom: '1.5rem' }}>Criado para o seu <br /> Dia a Dia</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6', marginBottom: '3rem' }}>Desenhado para acompanhar o ritmo da sua vida, oferecendo o equilíbrio perfeito entre estilo, conforto e saúde para os seus pés.</p>
            <div style={{ display: 'flex', gap: '4rem', marginBottom: '3rem', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', padding: '2rem 0' }}>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: '800', color: '#006D8F', display: 'flex', alignItems: 'center' }}><AnimatedCounter from={0} to={15} duration={2} />+</div>
                <div style={{ fontSize: '0.9rem', color: '#666', fontWeight: '600', textTransform: 'uppercase' }}>Anos de Inovação</div>
              </div>
              <div style={{ width: '1px', backgroundColor: '#ddd' }}></div>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: '800', color: '#006D8F', display: 'flex', alignItems: 'center' }}><AnimatedCounter from={0} to={95} duration={2} />k</div>
                <div style={{ fontSize: '0.9rem', color: '#666', fontWeight: '600', textTransform: 'uppercase' }}>Pés Felizes</div>
              </div>
            </div>
            <Link href="/loja" className="btn-primary" style={{ padding: '18px 40px', fontSize: '1rem', fontWeight: 'bold', backgroundColor: '#f7c969', color: '#1a1a1a', borderRadius: '99px', boxShadow: '0 10px 20px rgba(247,201,105,0.4)', display: 'inline-block', transition: 'transform 0.2s ease' }}>Explorar Categorias</Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomeClient;
`);

// ============================================================
// app/loja/page.js
// ============================================================
write('src/app/loja/page.js', `import CollectionsClient from '@/components/CollectionsClient';

export const metadata = {
  title: 'Loja – Inpe Barefoot',
  description: 'Explore todas as nossas coleções de calçado barefoot.',
};

export default function LojaPage() {
  return <CollectionsClient />;
}
`);

// app/loja/[category]/page.js
write('src/app/loja/[category]/page.js', `import CollectionsClient from '@/components/CollectionsClient';

export default function LojaCategoryPage({ params }) {
  return <CollectionsClient category={params.category} />;
}
`);

// components/CollectionsClient.jsx
write('src/components/CollectionsClient.jsx', `'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';
import Layout from './Layout';
import products from '@/data/products';

const CollectionsClient = ({ category }) => {
  const [filters, setFilters] = useState({
    categories: category && category !== 'todos' ? [category] : [],
    subcategories: [],
    sizes: [],
    colors: [],
    price: { min: 0, max: 200 }
  });

  const filteredProducts = products.filter(product => {
    if (filters.categories.length > 0 && !filters.categories.includes(product.category)) return false;
    if (filters.subcategories.length > 0 && !filters.subcategories.includes(product.subcategory)) return false;
    if (filters.sizes.length > 0) {
      let hasSize = false;
      if (product.sizes) {
        if (filters.sizes.includes('criança') && product.sizes.some(s => s <= 34)) hasSize = true;
        if (filters.sizes.includes('adulto') && product.sizes.some(s => s >= 35)) hasSize = true;
      }
      if (!hasSize) return false;
    }
    if (filters.colors.length > 0) {
      const hasColor = product.colors && product.colors.some(c => filters.colors.includes(c));
      if (!hasColor) return false;
    }
    const price = parseFloat(product.price);
    if (price < filters.price.min || price > filters.price.max) return false;
    return true;
  });

  return (
    <Layout>
      <div style={{ padding: '8rem 2rem 4rem', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem', fontWeight: 900 }}>Nossas Coleções</h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>Descubra o conforto natural para toda a família.</p>
        </div>
        <div className="collections-grid">
          <FilterSidebar filters={filters} setFilters={setFilters} />
          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: '1rem', color: '#666' }}>Mostrando {filteredProducts.length} produtos</div>
            <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '3rem' }}>
              <AnimatePresence>
                {filteredProducts.map(product => (
                  <div key={product.id} style={{ height: '100%' }}>
                    <ProductCard title={product.name} price={product.price} image={product.image} category={product.subcategory || product.category} id={product.id} />
                  </div>
                ))}
              </AnimatePresence>
              {filteredProducts.length === 0 && (
                <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem', color: '#888' }}>
                  <p>Nenhum produto encontrado com estes filtros.</p>
                  <button onClick={() => setFilters({ categories: [], subcategories: [], sizes: [], colors: [], price: { min: 0, max: 200 } })} style={{ marginTop: '1rem', padding: '10px 20px', background: 'var(--color-teal)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Limpar Filtros</button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CollectionsClient;
`);

// ============================================================
// app/historia/page.js
// ============================================================
write('src/app/historia/page.js', `import HistoryClient from '@/components/HistoryClient';

export const metadata = {
  title: 'A Nossa História – Inpe Barefoot',
  description: 'Conheça a história da Inpe e os valores que nos guiam.',
};

export default function HistoriaPage() {
  return <HistoryClient />;
}
`);

write('src/components/HistoryClient.jsx', `'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Footprints, Heart, TreeDeciduous, Maximize, Activity, Zap, HeartPlus, Feather, Sprout, ArrowRight } from 'lucide-react';
import Layout from './Layout';

const sectionTitleStyle = { textAlign: 'center', color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '4rem' };

const HistoryClient = () => {
  return (
    <Layout>
      <div style={{ paddingBottom: '6rem', overflowX: 'hidden' }}>

        {/* A Origem */}
        <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <img src="/founders.png" alt="Inês Santos e Inês Oliveira" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h1 style={{ color: 'var(--color-primary)', fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>A Nossa Pegada</h1>
            <div style={{ color: 'var(--color-text)', lineHeight: 1.8, fontSize: '1.1rem' }}>
              <p style={{ marginBottom: '1.5rem' }}>"Não é apenas sobre sapatos. É sobre dar liberdade a cada passo e deixar as crianças explorarem o mundo como a natureza planeou."</p>
              <p style={{ marginBottom: '1.5rem' }}>Inês Santos e Inês Oliveira, são fisioterapeutas e mães de dois casais de crianças entre os 2 e os 6 anos. Foi a fisioterapia que as uniu há mais de 14 anos, mas foi a cumplicidade, a amizade e as aventuras por que passaram juntas que fizeram com que se mantivessem unidas até hoje.</p>
              <p style={{ marginBottom: '1.5rem' }}>A Inês Santos, ou Inês pequenina como carinhosamente a chamam para as diferenciarem, é hoje fisioterapeuta especialista em pediatria olhando as crianças de uma forma completa em simbiose com a natureza.</p>
              <p>A Inês Oliveira, empreendedora nata e uma verdadeira líder, é alguém que inspira com a sua visão e determinação. É sócia gerente da Clínica Fisiátrica de S. Pedro do Sul e tem como compromisso o bem-estar das pessoas e sua capacidade de transformar desafios em oportunidades.</p>
            </div>
          </motion.div>
        </section>

        {/* A Nossa Essência */}
        <section style={{ backgroundColor: '#fff', padding: '6rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={sectionTitleStyle}>A Nossa Essência</h2>
            <div className="mobile-carousel">
              {[
                { icon: <Footprints size={32} />, title: 'Liberdade', text: 'Respeitamos a anatomia natural do pé.', bg: '/history-liberdade.png', ctaText: 'Sinta a liberdade', targetId: 'porque-inpe' },
                { icon: <TreeDeciduous size={32} />, title: 'Sustentabilidade', text: 'Materiais amigos do ambiente sempre que possível.', bg: '/history-sustentabilidade.png', ctaText: 'A nossa responsabilidade' },
                { icon: <Heart size={32} />, title: 'Cuidado', text: 'Cada par é selecionado a pensar no conforto absoluto.', bg: '/history-carinho.png', ctaText: 'Fale com a equipa' }
              ].map((val, idx) => (
                <motion.div key={idx} whileHover={{ y: -5 }} style={{ textAlign: 'center', padding: '3rem', backgroundColor: 'var(--color-background)', backgroundImage: \`linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(\${val.bg})\`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '24px', transition: 'box-shadow 0.3s', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '70px', height: '70px', margin: '0 auto 1.5rem', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', boxShadow: '0 4px 10px #0000000d' }}>{val.icon}</div>
                  <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{val.title}</h3>
                  <p style={{ color: '#854931', marginBottom: '1.5rem' }}>{val.text}</p>
                  <Link href={val.targetId ? \`#\${val.targetId}\` : '/contactos'} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--color-primary)', color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', marginTop: 'auto', padding: '0.8rem 1.5rem', borderRadius: '50px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', transition: 'all 0.3s ease' }}>{val.ctaText} <ArrowRight size={16} /></Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-winter-blue)', color: 'white', textAlign: 'center' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
            {[{ num: '5k+', label: 'Pés Felizes' }, { num: '12', label: 'Coleções' }, { num: '100%', label: 'Amor' }].map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 100, delay: idx * 0.1 }}>
                <div style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '0.5rem', color: '#fff' }}>{stat.num}</div>
                <div style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.9 }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Porquê Inpe */}
        <section id="porque-inpe" style={{ backgroundColor: 'var(--color-background)', padding: '6rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ ...sectionTitleStyle, color: '#F4C466' }}>Porquê Inpe?</h2>
            <div className="mobile-carousel">
              {[
                { icon: <Maximize size={32} color="white" />, title: 'Espaço para os Dedos', text: 'Zona dos dedos alargada para permitir que os dedos se espalhem naturalmente.', color: '#F4C466' },
                { icon: <Activity size={32} color="white" />, title: 'Flexibilidade Total', text: 'Solas que se dobram em todas as direções, acompanhando o pé.', color: '#E8A87C' },
                { icon: <Zap size={32} color="white" />, title: 'Conexão Sensorial', text: 'Sola fina para sentir o terreno e estimular o desenvolvimento motor.', color: '#F4C466' },
                { icon: <HeartPlus size={32} color="white" />, title: 'Fisioterapeuticas', text: 'Desenvolvidos com base em princípios fisioterapêuticos para promover o desenvolvimento saudável do pé.', color: '#E8A87C' },
                { icon: <Feather size={32} color="white" />, title: 'Leveza', text: 'Sapatos tão leves que as crianças esquecem que os têm calçados.', color: '#F4C466' },
                { icon: <Sprout size={32} color="white" />, title: 'Estrutura Natural', text: 'Sem suporte de arco artificial, fortalecendo os músculos do pé.', color: '#E8A87C' }
              ].map((card, idx) => (
                <motion.div key={idx} whileHover={{ y: -5 }} style={{ backgroundColor: 'white', borderRadius: '24px', padding: '2.5rem', textAlign: 'left', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: card.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>{card.icon}</div>
                  <h3 style={{ color: card.color, fontSize: '1.25rem', marginBottom: '0.8rem', fontWeight: 'bold' }}>{card.title}</h3>
                  <p style={{ color: 'var(--color-text)', lineHeight: 1.6, fontSize: '0.95rem' }}>{card.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HistoryClient;
`);

// ============================================================
// app/contactos/page.js
// ============================================================
write('src/app/contactos/page.js', `import ContactClient from '@/components/ContactClient';

export const metadata = {
  title: 'Contactos – Inpe Barefoot',
  description: 'Entre em contacto connosco.',
};

export default function ContactosPage() {
  return <ContactClient />;
}
`);

write('src/components/ContactClient.jsx', `'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import Layout from './Layout';

const ContactClient = () => {
  return (
    <Layout>
      <div style={{ backgroundColor: '#FDFBF7', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 'calc(80px + 4rem) 2rem 4rem', marginTop: '-80px' }}>
        <div style={{ maxWidth: '1200px', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'start' }}>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 'normal' }}>Estamos sempre disponíveis!</h1>
            <p style={{ color: '#666', marginBottom: '4rem', lineHeight: 1.8, fontSize: '1.1rem', maxWidth: '450px' }}>Tem dúvidas sobre o tamanho ideal ou sobre os nossos materiais? Estamos aqui para ajudar em cada passo da sua jornada barefoot.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(235,175,108,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Mail size={24} color="var(--color-primary)" /></div>
                <div>
                  <h3 style={{ color: '#999', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', fontWeight: 600 }}>Email</h3>
                  <a href="mailto:geral@inpe.pt" style={{ color: 'var(--color-text)', fontSize: '1.1rem', textDecoration: 'none', fontWeight: 500 }}>geral@inpe.pt</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(235,175,108,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><MapPin size={24} color="var(--color-primary)" /></div>
                <div>
                  <h3 style={{ color: '#999', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', fontWeight: 600 }}>Morada</h3>
                  <p style={{ color: 'var(--color-text)', fontSize: '1.1rem', fontWeight: 500 }}>Morada a definir</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(235,175,108,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Instagram size={24} color="var(--color-primary)" /></div>
                <div>
                  <h3 style={{ color: '#999', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', fontWeight: 600 }}>Redes Sociais</h3>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                    <a href="#" style={{ color: 'var(--color-text)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Facebook"><Facebook size={24} /></a>
                    <a href="#" style={{ color: 'var(--color-text)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Instagram"><Instagram size={24} /></a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.8rem', color: '#333', fontWeight: 500, fontSize: '0.95rem' }}>Nome</label>
              <input type="text" style={{ width: '100%', padding: '16px 20px', borderRadius: '12px', border: '1px solid #eee', backgroundColor: '#f9f9f9', fontFamily: 'inherit', fontSize: '1rem', outline: 'none' }} placeholder="Seu nome" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.8rem', color: '#333', fontWeight: 500, fontSize: '0.95rem' }}>Email</label>
              <input type="email" style={{ width: '100%', padding: '16px 20px', borderRadius: '12px', border: '1px solid #eee', backgroundColor: '#f9f9f9', fontFamily: 'inherit', fontSize: '1rem', outline: 'none' }} placeholder="seu@email.com" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.8rem', color: '#333', fontWeight: 500, fontSize: '0.95rem' }}>Mensagem</label>
              <textarea rows={4} style={{ width: '100%', padding: '16px 20px', borderRadius: '12px', border: '1px solid #eee', backgroundColor: '#f9f9f9', fontFamily: 'inherit', fontSize: '1rem', outline: 'none', resize: 'vertical' }} placeholder="Como podemos ajudar?" />
            </div>
            <button type="button" style={{ padding: '16px 32px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '12px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginTop: '1rem' }}>
              <span>Enviar Mensagem</span><Send size={18} />
            </button>
          </motion.form>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ width: '100%', maxWidth: '1200px', height: '450px', marginTop: '6rem', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
          <iframe width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Vouzela&t=&z=13&ie=UTF8&iwloc=&output=embed" title="Localização Vouzela"></iframe>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ContactClient;
`);

// ============================================================
// app/produto/[id]/page.js
// ============================================================
write('src/app/produto/[id]/page.js', `import ProductClient from '@/components/ProductClient';

export default function ProdutoPage({ params }) {
  return <ProductClient id={params.id} />;
}
`);

// Product CSS (same as original)
write('src/components/Product.css', \`/* Product Page Container */
.product-page { max-width: 1400px; margin: 0 auto; padding: 4rem 2rem 2rem; padding-top: clamp(2rem, 5vw, 4rem); font-family: var(--font-main); color: #333; }
.product-main { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; margin-bottom: 4rem; }
.product-gallery { position: sticky; top: 120px; height: fit-content; }
.desktop-gallery-view { display: grid; grid-template-columns: 80px 1fr; gap: 1.5rem; }
.mobile-gallery-view { display: none; }
.mobile-gallery-scroll { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; -ms-overflow-style: none; border-radius: 12px; }
.mobile-gallery-scroll::-webkit-scrollbar { display: none; }
.mobile-gallery-image { min-width: 100%; scroll-snap-align: center; object-fit: contain; aspect-ratio: 1; background: #fff; }
.mobile-gallery-dots { display: flex; justify-content: center; gap: 8px; margin-top: 1rem; }
.gallery-dot { width: 10px; height: 10px; border-radius: 50%; background: #e0e0e0; transition: all 0.3s; }
.gallery-dot.active { background: var(--color-primary); transform: scale(1.2); }
.gallery-thumbnails { display: flex; flex-direction: column; gap: 1rem; }
.gallery-thumbnail { width: 100%; aspect-ratio: 1; object-fit: contain; border: 2px solid var(--color-primary); cursor: pointer; border-radius: 12px; background: #fff; padding: 0.25rem; }
.gallery-thumbnail:hover { opacity: 1; transform: scale(1.05); }
.gallery-thumbnail.active { border-color: var(--color-winter-blue); opacity: 1; transform: scale(1.05); }
.gallery-main-image { width: min(100%, 60vh); aspect-ratio: 1; margin: 0 auto; border-radius: 24px; overflow: hidden; background: #f9f9f9; box-shadow: var(--shadow-card); }
.gallery-main-image img { width: 100%; height: 100%; object-fit: contain; display: block; }
.product-info { display: flex; flex-direction: column; gap: 1.5rem; padding-top: 1rem; }
.product-title { font-size: clamp(1.8rem, 5vw, 2.5rem); font-weight: 700; margin: 0; color: var(--color-text); line-height: 1.2; }
.product-price { font-size: clamp(1.5rem, 4vw, 1.8rem); font-weight: 600; color: var(--color-accent-brown); }
.product-rating { display: flex; align-items: center; gap: 0.5rem; }
.review-count { color: var(--color-text-light); font-size: 1rem; }
.divider { height: 1px; background-color: #e5e5e5; margin: 0.5rem 0; width: 100%; }
.size-selector-row { display: flex; align-items: center; gap: 1.5rem; }
.size-selector-label { font-weight: 700; font-size: 1.1rem; color: var(--color-text); }
.size-dropdown-container { position: relative; width: 140px; }
.size-dropdown-btn { width: 100%; padding: 0.5rem 1.5rem; border: 2px solid var(--color-primary); border-radius: 50px; background: #fff; text-align: left; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1rem; font-weight: 600; transition: all 0.2s; }
.size-dropdown-btn:hover { background: #fff9ed; }
.size-dropdown-menu { position: absolute; top: 100%; left: 0; width: 100%; background: #fff; border: 1px solid #ddd; border-radius: 12px; margin-top: 0.5rem; box-shadow: 0 5px 20px rgba(0,0,0,0.1); z-index: 10; overflow: hidden; max-height: 200px; overflow-y: auto; }
.size-option { padding: 0.75rem 1rem; cursor: pointer; transition: background 0.2s; }
.size-option:hover { background: #f0f0f0; }
.add-to-cart-row { display: flex; gap: 1rem; margin-top: 0.5rem; flex-wrap: wrap; width: 63%; min-width: 320px; }
.quantity-selector { display: flex; align-items: center; justify-content: space-between; border: none; border-radius: 50px; padding: 0 0.5rem; height: 54px; background-color: #fff; width: 120px; border: 2px solid var(--color-primary); }
.quantity-selector:hover { background: #fff9ed; }
.qty-btn { background: none; border: none; font-size: 1.5rem; cursor: pointer; padding: 0 0.8rem; color: var(--color-text); display: flex; align-items: center; height: 100%; }
.add-btn { background: var(--color-primary); color: var(--color-text); border: none; border-radius: 50px; font-weight: 700; font-size: 1.1rem; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; height: 54px; flex: 1; min-width: 160px; display: flex; align-items: center; justify-content: center; gap: 0.5rem; }
.add-btn:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(244,196,102,0.4); }
.buy-now-btn { background: var(--color-winter-blue); color: #fff; border: none; border-radius: 50px; font-weight: 700; font-size: 1.1rem; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; height: 54px; width: 63%; min-width: 320px; margin-top: 0; }
.buy-now-btn:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,115,150,0.3); }
.urgency-box { background: #fff0f0; border: 1px solid #ffcccc; padding: 1rem; border-radius: 12px; color: #d32f2f; font-weight: 600; text-align: left; display: flex; align-items: center; justify-content: left; font-variant-numeric: tabular-nums; width: 63%; min-width: 320px; }
.trust-badge { display: flex; align-items: center; gap: 1rem; font-size: 1rem; color: var(--color-text); }
.trust-icon { color: var(--color-winter-blue); }
.short-description { line-height: 1.7; color: var(--color-text-light); font-size: clamp(0.95rem, 2vw, 1.05rem); }
.specs-list { list-style: none; padding: 0; margin: 0; }
.specs-list li { margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative; font-weight: 500; }
.specs-list li::before { content: "✔"; position: absolute; left: 0; color: var(--color-primary); font-weight: bold; }
.product-tabs-section { width: 100%; margin-top: 2rem; }
.tab-item { border-bottom: 1px solid #eee; }
.tab-header { padding: 1.5rem 0; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-weight: 700; font-size: clamp(1rem, 3vw, 1.2rem); color: var(--color-text); transition: color 0.2s; }
.tab-header:hover { color: var(--color-winter-blue); }
.tab-content { padding-bottom: 2rem; color: var(--color-text-light); line-height: 1.8; }
.tab-content-inner { padding: 0.5rem; }
.checkmark-list { list-style: none; padding: 0; margin: 0; }
.checkmark-list li { display: flex; align-items: center; gap: 0.8rem; margin-bottom: 0.8rem; font-size: clamp(0.9rem, 2vw, 1rem); color: var(--color-text); }
.desc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1.5rem; }
.desc-grid-item { display: flex; align-items: center; gap: 0.8rem; font-weight: 600; color: var(--color-text); border-radius: 8px; }
.details-table { width: 100%; border-collapse: collapse; border: 1px solid #eee; }
.details-table td { padding: 1rem; border: 1px solid #eee; }
.details-table td:first-child { font-weight: 600; width: 30%; color: var(--color-text); background: #f9f9f9; }
.bundle-section { margin-bottom: 6rem; }
.bundle-section-mobile { display: none; }
.bundle-section-desktop { display: block; }
.bundle-container { display: flex; gap: 3rem; align-items: flex-start; }
.bundle-cards { display: grid; grid-template-columns: 200px auto 200px auto 200px; gap: 0.5rem; align-items: stretch; justify-content: start; }
.bundle-card-wrapper { min-width: 0; height: 100%; display: flex; flex-direction: column; transition: opacity 0.2s; position: relative; }
.bundle-card-wrapper.deselected { opacity: 0.6; }
.bundle-card-wrapper > * { flex: 1; }
.bundle-checkbox { position: absolute; top: 10px; right: 10px; width: 24px; height: 24px; border-radius: 6px; border: 2px solid #ddd; background: white; z-index: 10; display: flex; align-items: center; justify-content: center; transition: all 0.2s; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
.bundle-checkbox.selected { background: var(--color-primary); border-color: var(--color-primary); }
.plus-sign { font-size: 2rem; font-weight: 300; color: var(--color-text-light); display: flex; align-items: center; justify-content: center; }
.bundle-summary { width: 300px; flex-shrink: 0; background: white; padding: 2rem; border-radius: 20px; box-shadow: var(--shadow-card); display: flex; flex-direction: column; gap: 1rem; position: sticky; top: 120px; border: 1px solid #eee; }
.bundle-total-price { display: flex; flex-direction: column; margin-bottom: 1rem; text-align: center; }
.bundle-total-price .label { font-size: 0.9rem; color: var(--color-text-light); text-transform: uppercase; font-weight: 700; }
.bundle-total-price .value { font-size: 2.5rem; font-weight: 800; color: var(--color-accent-brown); }
.bundle-btn { width: 100% !important; min-width: 0 !important; margin: 0; height: 50px; font-size: 1rem; }
.recommendations-section { margin-bottom: 6rem; }
.section-header { text-align: left; margin-bottom: 2rem; }
.section-subtitle { color: var(--color-accent-brown); font-weight: 700; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px; margin-bottom: 0.5rem; margin-top: 0; }
.section-title { font-size: clamp(1.5rem, 5vw, 2.2rem); margin-top: 0; color: var(--color-text); }
.product-carousel { display: grid; grid-auto-flow: column; grid-auto-columns: 280px; gap: 2rem; overflow-x: auto; scroll-behavior: smooth; padding: 1rem 0.5rem 2rem; -ms-overflow-style: none; scrollbar-width: none; scroll-snap-type: x mandatory; }
.product-carousel::-webkit-scrollbar { display: none; }
.carousel-item { height: 100%; display: flex; flex-direction: column; scroll-snap-align: start; }
.carousel-item > * { flex: 1; }
.carousel-container { position: relative; display: flex; align-items: center; padding: 0 3.5rem; }
.nav-btn.desktop-nav { display: none; position: absolute; background: white; border: none; width: 48px; height: 48px; border-radius: 50%; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10; transition: all 0.2s; }
.nav-btn.desktop-nav:hover { transform: scale(1.1); box-shadow: 0 6px 16px rgba(0,0,0,0.15); }
.prev-btn { left: 0; }
.next-btn { right: 0; }
.bottom-tabs-container { margin-bottom: 4rem; }
.bottom-tabs-nav { display: flex; border-bottom: 2px solid #eee; margin-bottom: 2rem; }
.bottom-tab-btn { padding: 1rem 2rem; background: none; border: none; font-size: 1rem; font-weight: 600; cursor: pointer; color: var(--color-text-light); border-bottom: 3px solid transparent; margin-bottom: -2px; transition: all 0.2s; font-family: var(--font-main); }
.bottom-tab-btn.active { color: var(--color-winter-blue); border-bottom-color: var(--color-winter-blue); }
.bottom-tab-btn:hover { color: var(--color-text); }
.reviews-content { display: flex; flex-direction: column; gap: 2rem; }
.review-item { padding: 1.5rem; border: 1px solid #f0f0f0; border-radius: 16px; background: #fafafa; }
.review-name { font-weight: 800; font-size: 1.1rem; color: var(--color-text); margin-bottom: 0.5rem; }
.review-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem; }
.review-title { font-weight: 700; color: var(--color-text); }
.review-date { font-size: 0.85rem; color: var(--color-text-light); margin-bottom: 0.75rem; }
.review-divider { height: 1px; background: #eee; margin-bottom: 0.75rem; }
.review-text { color: var(--color-text); line-height: 1.6; font-style: italic; }
.faq-container { display: grid; grid-template-columns: 2fr 1fr; gap: 3rem; align-items: start; }
.faq-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
.faq-item { padding: 1.5rem; background: white; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.04); border: 1px solid #f0f0f0; }
.faq-item h4 { font-size: 1rem; font-weight: 700; color: var(--color-text); margin-bottom: 0.75rem; }
.faq-item p { color: var(--color-text-light); line-height: 1.6; font-size: 0.95rem; }
.support-card { background: var(--color-background); border-radius: 24px; padding: 2.5rem; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 1rem; border: 1px solid rgba(244,196,102,0.3); position: sticky; top: 120px; }
.support-icon { color: var(--color-primary); }
.support-card h3 { font-size: 1.3rem; color: var(--color-text); }
.support-card p { color: var(--color-text-light); line-height: 1.5; font-size: 0.95rem; }
.contact-btn { background: var(--color-primary); color: var(--color-text); border: none; border-radius: 50px; padding: 0.8rem 2rem; font-weight: 700; cursor: pointer; font-size: 0.95rem; font-family: var(--font-main); transition: transform 0.2s; }
.contact-btn:hover { transform: scale(1.05); }
@media (max-width: 1024px) { .product-main { grid-template-columns: 1fr; gap: 2rem; } .product-gallery { position: static; } .desktop-gallery-view { display: none; } .mobile-gallery-view { display: block; } .add-to-cart-row, .buy-now-btn, .urgency-box { width: 100%; min-width: unset; } .bundle-section-mobile { display: block; } .bundle-section-desktop { display: none; } .faq-container { grid-template-columns: 1fr; } .support-card { position: static; } }
\`);

// components/ProductClient.jsx
write('src/components/ProductClient.jsx', `'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Truck, RotateCcw, Headphones, ChevronDown, ChevronUp, Clock, ShieldCheck, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import ProductCard from './ProductCard';
import Layout from './Layout';
import products from '@/data/products';
import './Product.css';

const ProductClient = ({ id }) => {
  const product = products.find(p => p.id === parseInt(id)) || products[0];

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const mobileGalleryRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('38');
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [bottomTab, setBottomTab] = useState('reviews');
  const [timeLeft, setTimeLeft] = useState(2 * 3600 + 14 * 60 + 59);
  const bundleItems = products.slice(0, 3);
  const [selectedBundleIds, setSelectedBundleIds] = useState(bundleItems.map(p => p.id));
  const [isBundleExpanded, setIsBundleExpanded] = useState(false);

  const handleMobileScroll = () => {
    if (mobileGalleryRef.current) {
      const { scrollLeft, offsetWidth } = mobileGalleryRef.current;
      setActiveImageIndex(Math.round(scrollLeft / offsetWidth));
    }
  };

  useEffect(() => {
    if (product.gallery && product.gallery.length > 0) setSelectedImage(product.gallery[0]);
    else setSelectedImage(product.image);
  }, [product, id]);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => prev > 0 ? prev - 1 : 0), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return \`\${h.toString().padStart(2,'0')}:\${m.toString().padStart(2,'0')}:\${s.toString().padStart(2,'0')}\`;
  };

  const toggleBundleItem = (itemId) => {
    setSelectedBundleIds(prev => prev.includes(itemId) ? prev.filter(i => i !== itemId) : [...prev, itemId]);
  };

  const bundleTotal = bundleItems.filter(p => selectedBundleIds.includes(p.id)).reduce((acc, p) => acc + parseFloat(p.price), 0);
  const toggleTab = (index) => setActiveTab(activeTab === index ? null : index);
  const handleSizeSelect = (s) => { setSize(s); setIsSizeOpen(false); };

  return (
    <Layout>
      <div className="product-page">
        <div className="product-main">
          <div className="product-gallery">
            <div className="desktop-gallery-view">
              <div className="gallery-thumbnails">
                {product.gallery.map((img, idx) => (
                  <img key={idx} src={img} alt={\`Thumbnail \${idx}\`} className={\`gallery-thumbnail \${selectedImage === img ? 'active' : ''}\`} onClick={() => setSelectedImage(img)} />
                ))}
              </div>
              <div className="gallery-main-image"><img src={selectedImage} alt={product.name} /></div>
            </div>
            <div className="mobile-gallery-view">
              <div className="mobile-gallery-scroll" ref={mobileGalleryRef} onScroll={handleMobileScroll}>
                {product.gallery.map((img, idx) => <img key={idx} src={img} alt={\`Product \${idx}\`} className="mobile-gallery-image" />)}
              </div>
              <div className="mobile-gallery-dots">
                {product.gallery.map((_, idx) => <span key={idx} className={\`gallery-dot \${idx === activeImageIndex ? 'active' : ''}\`} />)}
              </div>
            </div>
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>
            <div className="product-price">{product.price} €</div>
            <div className="product-rating">
              <div className="stars" style={{ display: 'flex', gap: '2px' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#F4C466" color="#F4C466" />)}
              </div>
              <span className="review-count">(128 avaliações)</span>
            </div>
            <div className="divider"></div>
            <div className="size-selector-row">
              <label className="size-selector-label">Tamanho</label>
              <div className="size-dropdown-container">
                <button className="size-dropdown-btn" onClick={() => setIsSizeOpen(!isSizeOpen)}>
                  <span>{size}</span>{isSizeOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {isSizeOpen && (
                  <div className="size-dropdown-menu">
                    {['36','37','38','39','40','41','42'].map(s => <div key={s} className="size-option" onClick={() => handleSizeSelect(s)}>{s}</div>)}
                  </div>
                )}
              </div>
            </div>
            <div className="add-to-cart-row">
              <div className="quantity-selector">
                <button className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="add-btn">Adicionar ao carrinho</button>
            </div>
            <button className="buy-now-btn">Comprar já</button>
            <div className="urgency-box"><Clock size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />Rápido antes que o desconto acabe! ({formatTime(timeLeft)})</div>
            <div className="trust-badge"><Truck className="trust-icon" size={20} /><span>Entrega GRÁTIS em Portugal e Espanha (2–5 dias)</span></div>
            <div className="trust-badge"><RotateCcw className="trust-icon" size={20} /><span>Devolução sem problemas</span></div>
            <div className="divider"></div>
            <p className="short-description">Experimente a liberdade de movimentos naturais. Os nossos sapatos barefoot permitem que os seus pés se movam como a natureza planeou, fortalecendo os músculos e melhorando a postura a cada passo.</p>
            <ul className="specs-list"><h3>Especificações:</h3><br /><li>Zero-drop para alinhamento natural</li><li>Sola ultra-flexível e resistente</li><li>Materiais respiráveis e leves</li></ul>
            <div className="product-tabs-section">
              {[
                { title: 'Sobre Barefoot', content: <div className="tab-content-inner"><ul className="checkmark-list"><li><Check size={16} color="#F4C466" strokeWidth={3} /> Caminhar descalço fortalece os pés.</li><li><Check size={16} color="#F4C466" strokeWidth={3} /> Melhora o equilíbrio e a postura.</li><li><Check size={16} color="#F4C466" strokeWidth={3} /> Estimulação sensorial do solo.</li><li><Check size={16} color="#F4C466" strokeWidth={3} /> Redução de impacto nas articulações.</li></ul></div> },
                { title: 'Descrição', content: <div className="tab-content-inner"><p>Estes sapatos foram desenhados para proporcionar a máxima sensação de liberdade.</p><div className="desc-grid"><div className="desc-grid-item"><Check size={16} color="#F4C466" strokeWidth={3} /> Respirável</div><div className="desc-grid-item"><Check size={16} color="#F4C466" strokeWidth={3} /> Flexível</div><div className="desc-grid-item"><Check size={16} color="#F4C466" strokeWidth={3} /> Leve</div><div className="desc-grid-item"><Check size={16} color="#F4C466" strokeWidth={3} /> Lavável</div></div></div> },
                { title: 'Detalhes adicionais', content: <table className="details-table"><tbody><tr><td>Peso</td><td>180g (Tamanho 40)</td></tr><tr><td>Materiais</td><td>Malha respirável, Sola de borracha natural</td></tr></tbody></table> },
                { title: 'Certificado de qualidade', content: <div style={{ textAlign: 'center', padding: '1rem' }}><ShieldCheck size={48} color="#4CAF50" /><p style={{ marginTop: '1rem' }}>Certificado de Excelência Barefoot 2026</p></div> }
              ].map((tab, idx) => (
                <div key={idx} className="tab-item">
                  <div className="tab-header" onClick={() => toggleTab(idx)}>
                    {tab.title}
                    <motion.div animate={{ rotate: activeTab === idx ? 180 : 0 }} transition={{ duration: 0.3 }}><ChevronDown /></motion.div>
                  </div>
                  <AnimatePresence>
                    {activeTab === idx && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
                        <div className="tab-content">{tab.content}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bundle Section */}
        <div className="bundle-section">
          <div className="section-header"><h3 className="section-title">Os clientes também compraram</h3><p style={{ color: '#666', marginTop: '0.5rem' }}>Com base em produtos que os clientes compraram juntos</p></div>
          <div className="bundle-section-desktop">
            <div className="bundle-container">
              <div className="bundle-cards">
                {bundleItems.map((p, index) => {
                  const isSelected = selectedBundleIds.includes(p.id);
                  return (
                    <React.Fragment key={p.id}>
                      <div className={\`bundle-card-wrapper \${!isSelected ? 'deselected' : ''}\`} onClick={() => toggleBundleItem(p.id)} style={{ cursor: 'pointer', position: 'relative' }}>
                        <ProductCard title={p.name} price={p.price} image={p.image} category={p.category} id={p.id} compact={true} />
                        <div className={\`bundle-checkbox \${isSelected ? 'selected' : ''}\`}>{isSelected && <Check size={14} color="white" strokeWidth={3} />}</div>
                      </div>
                      {index < 2 && <div className="plus-sign">+</div>}
                    </React.Fragment>
                  );
                })}
              </div>
              <div className="bundle-summary">
                <div className="bundle-total-price"><span className="label">Preço Total:</span><div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}><span className="value">{bundleTotal.toFixed(2)} €</span></div></div>
                <button className="add-btn bundle-btn" disabled={selectedBundleIds.length === 0} style={{ opacity: selectedBundleIds.length === 0 ? 0.5 : 1 }}>Adicionar {selectedBundleIds.length} ao carrinho</button>
                <button className="buy-now-btn bundle-btn" disabled={selectedBundleIds.length === 0} style={{ opacity: selectedBundleIds.length === 0 ? 0.5 : 1 }}>Comprar Já</button>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="recommendations-section">
          <div className="section-header" style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
            <div><div className="section-subtitle">Desconto ocasional</div><h3 className="section-title">Frequentemente comprados em conjunto</h3></div>
          </div>
          <div className="carousel-container">
            <button className="nav-btn desktop-nav prev-btn" onClick={() => document.getElementById('rec-carousel')?.scrollBy({ left: -300, behavior: 'smooth' })}><ChevronLeft /></button>
            <div id="rec-carousel" className="product-carousel">
              {products.map(p => <div key={p.id} className="carousel-item"><ProductCard title={p.name} price={p.price} image={p.image} category={p.category} id={p.id} /></div>)}
            </div>
            <button className="nav-btn desktop-nav next-btn" onClick={() => document.getElementById('rec-carousel')?.scrollBy({ left: 300, behavior: 'smooth' })}><ChevronRight /></button>
          </div>
        </div>

        {/* Reviews & FAQ */}
        <div className="bottom-tabs-container">
          <div className="bottom-tabs-nav">
            <button className={\`bottom-tab-btn \${bottomTab === 'reviews' ? 'active' : ''}\`} onClick={() => setBottomTab('reviews')}>Avaliações</button>
            <button className={\`bottom-tab-btn \${bottomTab === 'faq' ? 'active' : ''}\`} onClick={() => setBottomTab('faq')}>Perguntas frequentes</button>
          </div>
          {bottomTab === 'reviews' && (
            <div className="reviews-content">
              {[{ id: 1, name: 'Maria Silva', rating: 5, title: 'Super confortáveis!', date: '10 de Outubro de 2025', text: 'Estou apaixonada por estes sapatos! Nunca pensei que andar "descalço" fosse tão confortável.' },
                { id: 2, name: 'João Santos', rating: 5, title: 'Excelente qualidade', date: '5 de Novembro de 2025', text: 'Materiais de primeira. A entrega foi super rápida e o apoio ao cliente impecável.' },
                { id: 3, name: 'Ana Pereira', rating: 4, title: 'Muito bons para o dia a dia', date: '20 de Janeiro de 2026', text: 'Uso-os para trabalhar e a diferença nas minhas dores de costas é notável.' }
              ].map(review => (
                <div key={review.id} className="review-item">
                  <div className="review-name">{review.name}</div>
                  <div className="review-header"><div className="stars" style={{ display: 'flex', gap: '2px' }}>{[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="#F4C466" color="#F4C466" />)}</div><span className="review-title">{review.title}</span></div>
                  <div className="review-date">avaliado em {review.date}</div>
                  <div className="review-divider"></div>
                  <p className="review-text">"{review.text}"</p>
                </div>
              ))}
            </div>
          )}
          {bottomTab === 'faq' && (
            <div className="faq-container">
              <div className="faq-grid">
                {[{ q: 'Como escolher o tamanho correto?', a: 'Recomendamos medir o seu pé em cm e consultar a nossa tabela de tamanhos.' },
                  { q: 'Posso usar sem meias?', a: 'Sim! Os nossos sapatos são feitos com materiais respiráveis ideais para usar com ou sem meias.' },
                  { q: 'São laváveis na máquina?', a: 'Recomendamos lavagem à mão com água fria para preservar a durabilidade.' },
                  { q: 'Quanto tempo demora a entrega?', a: 'Para Portugal e Espanha, o envio é expresso e demora entre 2 a 5 dias úteis.' },
                  { q: 'Têm garantia?', a: 'Sim, todos os nossos produtos têm garantia de 2 anos contra defeitos de fabrico.' },
                  { q: 'Como funciona a devolução?', a: 'Tem 30 dias para devolver ou trocar, desde que o produto não tenha sido usado na rua.' }
                ].map((item, i) => <div key={i} className="faq-item"><h4>{item.q}</h4><p>{item.a}</p></div>)}
              </div>
              <div className="support-card">
                <Headphones className="support-icon" size={48} />
                <h3>Tem mais alguma questão?</h3>
                <p>A nossa equipa está disponível para ajudar a encontrar o par perfeito.</p>
                <button className="contact-btn">Contacta a equipa de apoio</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductClient;
`);

// ============================================================
// app/guia-tamanhos/page.js
// ============================================================
write('src/app/guia-tamanhos/page.js', `import SizeGuideClient from '@/components/SizeGuideClient';

export const metadata = {
  title: 'Guia de Tamanhos – Inpe Barefoot',
  description: 'Encontre o tamanho certo para o seu pé.',
};

export default function GuiaTamanhosPage() {
  return <SizeGuideClient />;
}
`);

write('src/components/SizeGuideClient.jsx', `import Layout from './Layout';

const SizeGuideClient = () => {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '6rem 2rem' }}>
        <h1 style={{ textAlign: 'center', color: 'var(--color-winter-blue)', marginBottom: '2rem' }}>Guia de Tamanhos</h1>
        <p style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--color-secondary)' }}>Para garantir o conforto e o desenvolvimento natural, é essencial escolher o tamanho certo. Recomendamos deixar uma folga de 0,8 a 1,2 cm.</p>
        <div style={{ overflowX: 'auto', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-card)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Tamanho (EU)</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Comprimento do Pé (cm)</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Idade Aproximada</th>
              </tr>
            </thead>
            <tbody>
              {[
                { size: '19', cm: '11.5 - 12.1', age: '9-12 meses' },
                { size: '20', cm: '12.2 - 12.8', age: '12-15 meses' },
                { size: '21', cm: '12.9 - 13.4', age: '15-18 meses' },
                { size: '22', cm: '13.5 - 14.1', age: '18-21 meses' },
                { size: '23', cm: '14.2 - 14.7', age: '21-24 meses' },
                { size: '24', cm: '14.8 - 15.4', age: '2-3 anos' },
                { size: '25', cm: '15.5 - 16.0', age: '3-4 anos' },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem', color: 'var(--color-text)' }}>{row.size}</td>
                  <td style={{ padding: '1rem', color: 'var(--color-secondary)' }}>{row.cm}</td>
                  <td style={{ padding: '1rem', color: 'var(--color-secondary)' }}>{row.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: '#fff5e6', borderRadius: 'var(--border-radius)' }}>
          <h3 style={{ color: 'var(--color-accent-brown)', marginBottom: '1rem' }}>Como Medir?</h3>
          <ol style={{ marginLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-text)' }}>
            <li>Coloque o pé da criança sobre uma folha de papel.</li>
            <li>Marque o calcanhar e a ponta do dedo mais longo.</li>
            <li>Meça a distância entre as marcas.</li>
            <li>Adicione 1cm para a folga ideal.</li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default SizeGuideClient;
`);

// Also copy logo and history images to public
console.log('All files created successfully!');
console.log('NOTE: You still need to copy these to public:');
console.log('  - logo.png -> inpe/public/logo.png');
console.log('  - founders.png -> inpe/public/founders.png');
console.log('  - history-*.png -> inpe/public/');
console.log('  - images/ folder -> inpe/public/images/');
