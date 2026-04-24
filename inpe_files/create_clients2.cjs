const fs = require('fs');
const path = require('path');
const BASE = path.join('C:', 'Users', 'Carlos', 'Desktop', '\u20ac\u20ac', 'E-Nimble', 'Clientela', 'Barefoot', 'inpe');

function write(relPath, content) {
    const fullPath = path.join(BASE, relPath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('OK:', relPath);
}

// ─── CollectionsClient.jsx ───
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
        if (filters.sizes.includes('crianca') && product.sizes.some(s => s <= 34)) hasSize = true;
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
          <h1 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem', fontWeight: 900 }}>Nossas Cole\u00e7\u00f5es</h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>Descubra o conforto natural para toda a fam\u00edlia.</p>
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

// ─── ContactClient.jsx ───
write('src/components/ContactClient.jsx', `'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import Layout from './Layout';

const ContactClient = () => (
  <Layout>
    <div style={{ backgroundColor: '#FDFBF7', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 'calc(80px + 4rem) 2rem 4rem', marginTop: '-80px' }}>
      <div style={{ maxWidth: '1200px', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'start' }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 'normal' }}>Estamos sempre dispon\u00edveis!</h1>
          <p style={{ color: '#666', marginBottom: '4rem', lineHeight: 1.8, fontSize: '1.1rem', maxWidth: '450px' }}>Tem d\u00favidas sobre o tamanho ideal ou sobre os nossos materiais? Estamos aqui para ajudar em cada passo da sua jornada barefoot.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(235,175,108,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Mail size={24} color="var(--color-primary)" /></div>
              <div><h3 style={{ color: '#999', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', fontWeight: 600 }}>Email</h3><a href="mailto:geral@inpe.pt" style={{ color: 'var(--color-text)', fontSize: '1.1rem', fontWeight: 500 }}>geral@inpe.pt</a></div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(235,175,108,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><MapPin size={24} color="var(--color-primary)" /></div>
              <div><h3 style={{ color: '#999', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', fontWeight: 600 }}>Morada</h3><p style={{ color: 'var(--color-text)', fontSize: '1.1rem', fontWeight: 500 }}>Morada a definir</p></div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(235,175,108,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Instagram size={24} color="var(--color-primary)" /></div>
              <div>
                <h3 style={{ color: '#999', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', fontWeight: 600 }}>Redes Sociais</h3>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                  <a href="#" style={{ color: 'var(--color-text)', display: 'flex', alignItems: 'center' }} aria-label="Facebook"><Facebook size={24} /></a>
                  <a href="#" style={{ color: 'var(--color-text)', display: 'flex', alignItems: 'center' }} aria-label="Instagram"><Instagram size={24} /></a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div><label style={{ display: 'block', marginBottom: '0.8rem', color: '#333', fontWeight: 500, fontSize: '0.95rem' }}>Nome</label><input type="text" placeholder="Seu nome" style={{ width: '100%', padding: '16px 20px', borderRadius: '12px', border: '1px solid #eee', backgroundColor: '#f9f9f9', fontFamily: 'inherit', fontSize: '1rem', outline: 'none' }} /></div>
          <div><label style={{ display: 'block', marginBottom: '0.8rem', color: '#333', fontWeight: 500, fontSize: '0.95rem' }}>Email</label><input type="email" placeholder="seu@email.com" style={{ width: '100%', padding: '16px 20px', borderRadius: '12px', border: '1px solid #eee', backgroundColor: '#f9f9f9', fontFamily: 'inherit', fontSize: '1rem', outline: 'none' }} /></div>
          <div><label style={{ display: 'block', marginBottom: '0.8rem', color: '#333', fontWeight: 500, fontSize: '0.95rem' }}>Mensagem</label><textarea rows={4} placeholder="Como podemos ajudar?" style={{ width: '100%', padding: '16px 20px', borderRadius: '12px', border: '1px solid #eee', backgroundColor: '#f9f9f9', fontFamily: 'inherit', fontSize: '1rem', outline: 'none', resize: 'vertical' }} /></div>
          <button type="button" style={{ padding: '16px 32px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '12px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginTop: '1rem' }}>
            <span>Enviar Mensagem</span><Send size={18} />
          </button>
        </motion.form>
      </div>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ width: '100%', maxWidth: '1200px', height: '450px', marginTop: '6rem', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
        <iframe width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Vouzela&t=&z=13&ie=UTF8&iwloc=&output=embed" title="Localiza\u00e7\u00e3o Vouzela"></iframe>
      </motion.div>
    </div>
  </Layout>
);
export default ContactClient;
`);

// ─── SizeGuideClient.jsx ───
write('src/components/SizeGuideClient.jsx', `import Layout from './Layout';

const rows = [
  { size: '19', cm: '11.5 - 12.1', age: '9-12 meses' },
  { size: '20', cm: '12.2 - 12.8', age: '12-15 meses' },
  { size: '21', cm: '12.9 - 13.4', age: '15-18 meses' },
  { size: '22', cm: '13.5 - 14.1', age: '18-21 meses' },
  { size: '23', cm: '14.2 - 14.7', age: '21-24 meses' },
  { size: '24', cm: '14.8 - 15.4', age: '2-3 anos' },
  { size: '25', cm: '15.5 - 16.0', age: '3-4 anos' },
];

const SizeGuideClient = () => (
  <Layout>
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '6rem 2rem' }}>
      <h1 style={{ textAlign: 'center', color: 'var(--color-winter-blue)', marginBottom: '2rem' }}>Guia de Tamanhos</h1>
      <p style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--color-secondary)' }}>Para garantir o conforto e o desenvolvimento natural, \u00e9 essencial escolher o tamanho certo. Recomendamos deixar uma folga de 0,8 a 1,2 cm.</p>
      <div style={{ overflowX: 'auto', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-card)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Tamanho (EU)</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Comprimento do P\u00e9 (cm)</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Idade Aproximada</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
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
          <li>Coloque o p\u00e9 da crian\u00e7a sobre uma folha de papel.</li>
          <li>Marque o calcanhar e a ponta do dedo mais longo.</li>
          <li>Me\u00e7a a dist\u00e2ncia entre as marcas.</li>
          <li>Adicione 1cm para a folga ideal.</li>
        </ol>
      </div>
    </div>
  </Layout>
);
export default SizeGuideClient;
`);

console.log('Secondary client components created!');
