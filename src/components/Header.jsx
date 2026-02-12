import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Apenas controla o estado de scroll (ex: sombra)
      setScrolled(currentScrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Based on image: White pill shape, centered links, logo left, cart right.
  // Background is cream, so header bar is white.

  return (
    <header style={{
      position: 'fixed',
      top: '20px',
      left: 0,
      width: '100%',
      zIndex: 100,
      padding: '0 2rem',
      display: 'flex',
      justifyContent: 'center',
      transition: 'transform 0.3s ease-in-out',
      transform: isVisible ? 'translateY(0)' : 'translateY(-200%)',
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '9999px',
        padding: '12px 32px',
        width: '100%',
        maxWidth: '1100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        {/* Logo */}
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <img src={logo} alt="Inpe Logo" style={{ height: '45px', width: 'auto' }} />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '24px', fontWeight: 'bold', fontSize: '0.9rem', color: '#555', textTransform: 'uppercase' }}>
          <Link to="/" className="nav-item">Início</Link>
          <Link to="/loja" className="nav-item">Loja</Link>
          <Link to="#" className="nav-item">Porquê Inpe</Link>
          <Link to="/historia" className="nav-item">Nossa História</Link>
          <Link to="/contactos" className="nav-item">Contactos</Link>
        </nav>

        {/* Cart Icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button style={{
            background: 'var(--color-primary)',
            color: 'white',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}>
            <ShoppingBag size={20} />
          </button>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="mobile-toggle" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer' }}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '80px',
          left: '2rem',
          right: '2rem',
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          textAlign: 'center'
        }}>
          <Link to="/" onClick={() => setIsOpen(false)}>Início</Link>
          <Link to="/loja" onClick={() => setIsOpen(false)}>Loja</Link>
          <Link to="/historia" onClick={() => setIsOpen(false)}>Nossa História</Link>
          <Link to="/contactos" onClick={() => setIsOpen(false)}>Contactos</Link>
        </div>
      )}

      <style>{`
                .nav-item:hover { color: var(--color-primary); }
                @media (max-width: 850px) {
                    .desktop-nav { display: none !important; }
                    .mobile-toggle { display: block !important; }
                }
            `}</style>
    </header>
  );
};

export default Header;
