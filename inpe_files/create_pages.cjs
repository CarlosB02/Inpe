const fs = require('fs');
const path = require('path');
const BASE = path.join('C:', 'Users', 'Carlos', 'Desktop', '\u20ac\u20ac', 'E-Nimble', 'Clientela', 'Barefoot', 'inpe');

function write(relPath, lines) {
    const fullPath = path.join(BASE, relPath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, Array.isArray(lines) ? lines.join('\n') : lines, 'utf8');
    console.log('OK:', relPath);
}

// ─── app/page.js (home entry) ───
write('src/app/page.js', [
"import HomeClient from '@/components/HomeClient';",
"export const metadata = { title: 'Inpe \u2013 Cal\u00e7ado Barefoot Natural', description: 'Descubra o conforto natural para toda a fam\u00edlia.' };",
"export default function HomePage() { return <HomeClient />; }",
]);

// ─── app/loja/page.js ───
write('src/app/loja/page.js', [
"import CollectionsClient from '@/components/CollectionsClient';",
"export const metadata = { title: 'Loja \u2013 Inpe Barefoot', description: 'Explore todas as nossas cole\u00e7\u00f5es.' };",
"export default function LojaPage() { return <CollectionsClient />; }",
]);

// ─── app/loja/[category]/page.js ───
write('src/app/loja/[category]/page.js', [
"import CollectionsClient from '@/components/CollectionsClient';",
"export default function LojaCategoryPage({ params }) { return <CollectionsClient category={params.category} />; }",
]);

// ─── app/historia/page.js ───
write('src/app/historia/page.js', [
"import HistoryClient from '@/components/HistoryClient';",
"export const metadata = { title: 'A Nossa Hist\u00f3ria \u2013 Inpe Barefoot', description: 'Conhe\u00e7a a hist\u00f3ria da Inpe.' };",
"export default function HistoriaPage() { return <HistoryClient />; }",
]);

// ─── app/contactos/page.js ───
write('src/app/contactos/page.js', [
"import ContactClient from '@/components/ContactClient';",
"export const metadata = { title: 'Contactos \u2013 Inpe Barefoot', description: 'Entre em contacto connosco.' };",
"export default function ContactosPage() { return <ContactClient />; }",
]);

// ─── app/produto/[id]/page.js ───
write('src/app/produto/[id]/page.js', [
"import ProductClient from '@/components/ProductClient';",
"export default function ProdutoPage({ params }) { return <ProductClient id={params.id} />; }",
]);

// ─── app/guia-tamanhos/page.js ───
write('src/app/guia-tamanhos/page.js', [
"import SizeGuideClient from '@/components/SizeGuideClient';",
"export const metadata = { title: 'Guia de Tamanhos \u2013 Inpe Barefoot', description: 'Encontre o tamanho certo.' };",
"export default function GuiaTamanhosPage() { return <SizeGuideClient />; }",
]);

// ─── placeholder pages ───
write('src/app/faq/page.js', [
"import Layout from '@/components/Layout';",
"export const metadata = { title: 'FAQ \u2013 Inpe' };",
"export default function FaqPage() {",
"  return <Layout><div style={{ padding: '4rem', textAlign: 'center', minHeight: '60vh' }}><h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>FAQ</h2><p style={{ color: 'var(--color-secondary)' }}>Esta p\u00e1gina est\u00e1 em constru\u00e7\u00e3o.</p></div></Layout>;",
"}",
]);

write('src/app/privacidade/page.js', [
"import Layout from '@/components/Layout';",
"export const metadata = { title: 'Privacidade \u2013 Inpe' };",
"export default function PrivacidadePage() {",
"  return <Layout><div style={{ padding: '4rem', textAlign: 'center', minHeight: '60vh' }}><h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Pol\u00edtica de Privacidade</h2><p style={{ color: 'var(--color-secondary)' }}>Esta p\u00e1gina est\u00e1 em constru\u00e7\u00e3o.</p></div></Layout>;",
"}",
]);

write('src/app/termos/page.js', [
"import Layout from '@/components/Layout';",
"export const metadata = { title: 'Termos \u2013 Inpe' };",
"export default function TermosPage() {",
"  return <Layout><div style={{ padding: '4rem', textAlign: 'center', minHeight: '60vh' }}><h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Termos & Condi\u00e7\u00f5es</h2><p style={{ color: 'var(--color-secondary)' }}>Esta p\u00e1gina est\u00e1 em constru\u00e7\u00e3o.</p></div></Layout>;",
"}",
]);

console.log('Page routes created!');
