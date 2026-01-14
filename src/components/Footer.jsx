import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-footer-yellow)', padding: '4rem 2rem 1rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '4rem', marginBottom: '4rem' }}>

                {/* Logo & Slogan */}
                <div style={{ flex: '1 1 300px' }}>
                    <img src={logo} alt="Inpe Logo" style={{ height: '60px', width: 'auto', marginBottom: '1rem' }} />
                    <p style={{ fontWeight: 'bold', fontSize: '0.9rem', maxWidth: '300px', lineHeight: 1.6 }}>
                        Criando os calçados mais macios e mágicos para os pequenos aventureiros de amanhã. Éticos, sustentáveis ​​e repletos de alegria.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                        {/* Social Circles */}
                        <a href="#" style={{ width: '40px', height: '40px', background: 'var(--color-teal)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'transform 0.2s' }}>
                            <Facebook size={20} strokeWidth={2.5} />
                        </a>
                        <a href="#" style={{ width: '40px', height: '40px', background: 'var(--color-teal)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'transform 0.2s' }}>
                            <Instagram size={20} strokeWidth={2.5} />
                        </a>
                    </div>
                </div>

                {/* Columns */}
                <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
                    <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '900', marginBottom: '1.5rem', color: '#333' }}>Loja</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                            <li><Link to="#">Mais Vendidos</Link></li>
                            <li><Link to="#">Nova Coleção</Link></li>
                            <li><Link to="#">Crianças</Link></li>
                            <li><Link to="#">Adultos</Link></li>
                            <li><Link to="#">Acessórios</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '900', marginBottom: '1.5rem', color: '#333' }}>Ajuda</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                            <li><Link to="#">Guia de Tamanhos</Link></li>
                            <li><Link to="#">Envios e Devoluções</Link></li>
                            <li><Link to="#">Cuidados de manter a tilha</Link></li>
                            <li><Link to="#">Contactos</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div style={{
                borderTop: '2px solid rgba(0,0,0,0.05)',
                paddingTop: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                color: '#444'
            }}>
                <span>© 2024 Little Steps Footwear. All rights reserved.</span>
                <span>Feito com amor por <span style={{ color: 'var(--color-teal)' }}>E-Nimble</span></span>
            </div>
        </footer>
    );
};

export default Footer;
