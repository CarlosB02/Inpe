const fs = require('fs');
const path = require('path');

const BASE = path.join('C:', 'Users', 'Carlos', 'Desktop', '\u20ac\u20ac', 'E-Nimble', 'Clientela', 'Barefoot', 'inpe');

console.log('Target:', BASE);
console.log('Exists:', fs.existsSync(BASE));

function write(relPath, content) {
    const fullPath = path.join(BASE, relPath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('OK:', relPath);
}

// globals.css
write('src/app/globals.css', [
"@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');",
":root {",
"  --color-background: #FDF6E9;",
"  --color-primary: #F4C466;",
"  --color-secondary: #8097a5;",
"  --color-teal: #9FE2DD;",
"  --color-winter-blue: #007396;",
"  --color-footer-yellow: #F9DA88;",
"  --color-text: #2c3e50;",
"  --color-text-light: #666;",
"  --color-white: #ffffff;",
"  --color-accent-brown: #854931;",
"  --font-main: 'Nunito', sans-serif;",
"  --border-radius: 16px;",
"  --border-radius-lg: 32px;",
"  --border-radius-full: 9999px;",
"  --shadow-card: 0 4px 12px rgba(0, 0, 0, 0.05);",
"  --shadow-float: 0 10px 25px rgba(0, 0, 0, 0.1);",
"}",
"* { box-sizing: border-box; margin: 0; padding: 0; }",
"html, body { font-family: var(--font-main); background-color: var(--color-background); color: var(--color-text); line-height: 1.5; -webkit-font-smoothing: antialiased; overflow-x: hidden; }",
"a { text-decoration: none; color: inherit; }",
"ul { list-style: none; }",
"img { max-width: 100%; display: block; }",
".btn-primary { background-color: var(--color-primary); color: white; padding: 12px 24px; border-radius: var(--border-radius-full); font-weight: bold; border: none; cursor: pointer; box-shadow: 0 2px 8px rgba(244, 196, 102, 0.4); transition: transform 0.2s; display: inline-block; }",
".btn-primary:hover { transform: scale(1.05); }",
".btn-outline { background-color: transparent; color: var(--color-primary); padding: 12px 24px; border-radius: var(--border-radius-full); font-weight: bold; border: 2px solid var(--color-primary); cursor: pointer; transition: background-color 0.2s; }",
".btn-outline:hover { background-color: rgba(244, 196, 102, 0.1); }",
"::-webkit-scrollbar { width: 12px; }",
"::-webkit-scrollbar-track { background: var(--color-background); }",
"::-webkit-scrollbar-thumb { background-color: #f7c969; border-radius: 20px; border: 3px solid var(--color-background); }",
".mobile-carousel { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem; }",
"@media (max-width: 768px) {",
"  .mobile-carousel { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 1.5rem; padding-bottom: 2rem; padding-inline: 1rem; margin-inline: -1rem; scroll-behavior: smooth; -webkit-overflow-scrolling: touch; }",
"  .mobile-carousel::-webkit-scrollbar { height: 8px; }",
"  .mobile-carousel > * { flex: 0 0 85%; scroll-snap-align: center; }",
"}",
".thumb { pointer-events: none; position: absolute; height: 0; width: 100%; outline: none; appearance: none; -webkit-appearance: none; background: transparent; }",
".thumb::-webkit-slider-thumb { pointer-events: auto; -webkit-appearance: none; border: none; height: 20px; width: 20px; border-radius: 50%; background: #fff; border: 2px solid var(--color-teal); cursor: pointer; box-shadow: 0 2px 5px rgba(0,0,0,0.15); transition: transform 0.1s ease; }",
".thumb::-webkit-slider-thumb:hover { transform: scale(1.1); }",
".thumb::-moz-range-thumb { pointer-events: auto; border: none; height: 20px; width: 20px; border-radius: 50%; background: #fff; border: 2px solid var(--color-teal); cursor: pointer; box-shadow: 0 2px 5px rgba(0,0,0,0.15); transition: transform 0.1s ease; }",
".thumb::-moz-range-thumb:hover { transform: scale(1.1); }",
".thumb::-webkit-slider-runnable-track { background: transparent; width: 100%; }",
".thumb::-moz-range-track { background: transparent; width: 100%; }",
".nav-item:hover { color: var(--color-primary); }",
"@media (max-width: 850px) { .desktop-nav { display: none !important; } .mobile-toggle { display: block !important; } }",
".seasons-section { display: flex; height: 80vh; width: 100%; }",
"@media (max-width: 768px) { .seasons-section { flex-direction: column !important; } }",
".what-we-offer-section { min-height: 100vh; padding: 4rem 10%; }",
"@media (max-width: 768px) { .what-we-offer-section { min-height: auto; padding: 3rem 5%; } }",
".offer-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; width: 100%; }",
"@media (max-width: 1024px) { .offer-grid { grid-template-columns: repeat(2, 1fr); } }",
"@media (max-width: 768px) {",
"  .offer-grid { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 1.5rem; padding-bottom: 2rem; padding-inline: 1rem; margin-inline: -1rem; scroll-behavior: smooth; -webkit-overflow-scrolling: touch; }",
"  .offer-grid::-webkit-scrollbar { height: 8px; }",
"  .offer-grid > * { flex: 0 0 85%; scroll-snap-align: center; }",
"}",
".collections-grid { display: grid; grid-template-columns: 280px 1fr; gap: 3rem; align-items: start; }",
"@media (max-width: 900px) { .collections-grid { grid-template-columns: 1fr; gap: 2rem; } }",
].join('\n'));

// layout.js
write('src/app/layout.js', [
"import './globals.css';",
"",
"export const metadata = {",
"  title: 'Inpe \u2013 Barefoot Shoes',",
"  description: 'Descubra o conforto natural para toda a fam\u00edlia.',",
"};",
"",
"export default function RootLayout({ children }) {",
"  return (",
"    <html lang=\"pt\">",
"      <body>{children}</body>",
"    </html>",
"  );",
"}",
].join('\n'));

// next.config.mjs
write('next.config.mjs', [
"/** @type {import('next').NextConfig} */",
"const nextConfig = {",
"  images: { unoptimized: true },",
"};",
"export default nextConfig;",
].join('\n'));

// data/products.js
write('src/data/products.js', [
"const getImg = (index) => {",
"  return '/products/p' + index + '.png';",
"};",
"",
"const getGallery = (id) => {",
"  if (id === 1) {",
"    return [",
"      '/products/p1_1.jpeg',",
"      '/products/p1_2.jpeg',",
"      '/products/p1_3.jpeg',",
"      '/products/p1_4.jpeg',",
"      '/products/p1_5.jpeg',",
"    ];",
"  }",
"  const main = getImg(id);",
"  return [main, main, main, main];",
"};",
"",
"const categories = ['crianca', 'mulher', 'homem'];",
"const subcategories = ['Sapatilhas', 'Botas', 'Sand\u00e1lias'];",
"",
"const products = Array.from({ length: 33 }, (_, i) => {",
"  const id = i + 1;",
"  const category = categories[i % 3];",
"  const availableColors = ['#000000', '#FFFFFF', '#8B4513', '#1C1C1C', '#F5F5DC', '#A52A2A', '#000080'];",
"  const randomColors = [...availableColors].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 1);",
"  let sizes = [];",
"  if (category === 'crianca') {",
"    sizes = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];",
"  } else {",
"    sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];",
"  }",
"  const productSizes = sizes.filter(() => Math.random() > 0.3);",
"  const name = category === 'crianca' ? 'Barefoot Kids ' + id : category === 'mulher' ? 'Barefoot Woman ' + id : 'Barefoot Man ' + id;",
"  return {",
"    id,",
"    name,",
"    category,",
"    subcategory: subcategories[i % 3],",
"    price: (30 + Math.random() * 50).toFixed(2),",
"    image: getImg(id),",
"    gallery: getGallery(id),",
"    isNew: i > 25,",
"    sizes: productSizes.length > 0 ? productSizes : [sizes[0]],",
"    colors: randomColors,",
"  };",
"});",
"",
"export default products;",
].join('\n'));

console.log('Base files done. Creating components...');
