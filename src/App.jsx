import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import History from './pages/History';
import Collections from './pages/Collections';
import SizeGuide from './pages/SizeGuide';
import Product from './pages/Product';
import Contact from './pages/Contact';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll to top on route change
const ScrollToTopWrapper = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Placeholder for legal pages
const Placeholder = ({ title }) => (
  <div style={{ padding: '4rem', textAlign: 'center', minHeight: '60vh' }}>
    <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>{title}</h2>
    <p style={{ color: 'var(--color-secondary)' }}>Esta página está em construção.</p>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTopWrapper />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<History />} />

          <Route path="/loja" element={<Collections />} />
          <Route path="/loja/:category" element={<Collections />} />
          <Route path="/produto/:id" element={<Product />} />

          <Route path="/guia-tamanhos" element={<SizeGuide />} />
          <Route path="/tamanhos-qualidade" element={<SizeGuide />} /> {/* Reused for footer link relevance */}

          <Route path="/contactos" element={<Contact />} />

          {/* Footer links */}
          <Route path="/faq" element={<Placeholder title="FAQ" />} />
          <Route path="/privacidade" element={<Placeholder title="Política de Privacidade" />} />
          <Route path="/termos" element={<Placeholder title="Termos & Condições" />} />
          <Route path="/cookies" element={<Placeholder title="Cookies" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
