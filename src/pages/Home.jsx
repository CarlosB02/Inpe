import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';

const ProductCard = ({ title, price, color, tag }) => (
    <motion.div
        whileHover={{ y: -8 }}
        style={{
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '16px',
            position: 'relative',
            boxShadow: 'var(--shadow-card)',
            display: 'flex',
            flexDirection: 'column'
        }}
    >
        {/* Product Image Placeholder */}
        <div style={{
            height: '180px',
            backgroundColor: '#f5f5f5',
            borderRadius: '16px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
        }}>
            {/* Simple Shoe Shape Simulation */}
            <div style={{
                width: '100px',
                height: '60px',
                background: color,
                borderRadius: '30px 40px 10px 10px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }} />
        </div>

        <h3 style={{ fontSize: '1rem', fontWeight: '800', textTransform: 'uppercase', color: '#555', marginBottom: '4px' }}>{title}</h3>
        <p style={{ fontSize: '0.8rem', color: '#999', marginBottom: '12px' }}>Perfeito para caminhadas na rua e onde quiser</p>

        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333' }}>{price} €</span>
            <button style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary)',
                border: 'none',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.5rem'
            }}>+</button>
        </div>
    </motion.div>
);

const Home = () => {
    return (
        <div style={{ paddingTop: '100px', paddingBottom: '0' }}>

            {/* HERO SECTION */}
            <section style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                padding: '0 5%',
                position: 'relative',
                overflow: 'visible'
            }}>
                <div style={{ flex: 1, zIndex: 10 }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        background: '#faebd7',
                        borderRadius: '20px',
                        color: '#8b4513',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        marginBottom: '24px'
                    }}>
                        🌱 100% Organic & Barefoot Friendly
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                        lineHeight: 1.1,
                        color: '#333',
                        fontWeight: '900',
                        marginBottom: '1rem',
                        textTransform: 'uppercase'
                    }}>
                        Deixe os pezinhos <br /> andar livremente
                    </h1>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#555', marginBottom: '3rem' }}>
                        Alguma coisa deve ser escrita aqui
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button className="btn-primary" style={{ padding: '16px 32px', fontSize: '1rem' }}>
                            VER COLEÇÃO -&gt;
                        </button>
                        <button className="btn-outline" style={{ padding: '16px 32px', fontSize: '1rem' }}>
                            SUGESTÕES
                        </button>
                    </div>
                </div>

                {/* Mascot / Right Side */}
                <div style={{ flex: 1, position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Placeholder for Mascot */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        style={{
                            width: '300px',
                            height: '400px',
                            background: 'var(--color-footer-yellow)', // approximation
                            borderRadius: '50% 50% 0 0',
                            position: 'relative'
                        }}
                    >
                        {/* Eyes */}
                        <div style={{ position: 'absolute', top: '40%', left: '25%', width: '20px', height: '30px', background: 'black', borderRadius: '50%' }} />
                        <div style={{ position: 'absolute', top: '40%', right: '25%', width: '20px', height: '30px', background: 'black', borderRadius: '50%' }} />
                        {/* Smile */}
                        <div style={{ position: 'absolute', top: '55%', left: '40%', width: '40px', height: '20px', borderBottom: '4px solid black', borderRadius: '50%' }} />
                    </motion.div>
                </div>
            </section>

            {/* BEST SELLERS */}
            <section style={{ padding: '4rem 5%' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#333', textTransform: 'uppercase', marginBottom: '2rem' }}>Mais Vendidos</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
                    <ProductCard title="Barefoot Azul" price="50" color="#3b82f6" />
                    <ProductCard title="Barefoot Rosa" price="50" color="#f472b6" />
                    <ProductCard title="Barefoot Castanho" price="50" color="#8d6e63" />
                    <ProductCard title="Barefoot Azul" price="50" color="#1e40af" />
                </div>
            </section>

            {/* NEW COLLECTION */}
            <section style={{ padding: '4rem 5%' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#333', textTransform: 'uppercase', marginBottom: '2rem' }}>Nova Coleção</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
                    <ProductCard title="Barefoot Azul" price="50" color="#1e3a8a" />
                    <ProductCard title="Barefoot Rosa" price="50" color="#db2777" />
                    <ProductCard title="Barefoot Castanho" price="50" color="#795548" />
                    <ProductCard title="Barefoot Azul" price="50" color="#2563eb" />
                </div>
            </section>

            {/* COMFORT SECTION */}
            <section style={{
                backgroundColor: 'var(--color-teal)',
                padding: '6rem 2rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#333', textTransform: 'uppercase', marginBottom: '3rem' }}>Conforto</h2>

                {/* Central Shoe Image */}
                <div style={{ margin: '0 auto 3rem', maxWidth: '400px' }}>
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        style={{ width: '300px', height: '200px', background: '#8d6e63', borderRadius: '40px', margin: '0 auto', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                    />
                </div>

                <button className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.2rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    VER COLEÇÃO -&gt;
                </button>

                {/* Left Peek Mascot */}
                <motion.div style={{
                    position: 'absolute',
                    bottom: '-50px',
                    left: '5%',
                    width: '150px',
                    height: '200px',
                    background: '#e4ac9b',
                    borderRadius: '50px 50px 0 0',
                    transform: 'rotate(-20deg)'
                }}>
                    <div style={{ position: 'absolute', top: '30%', left: '30%', width: '15px', height: '20px', background: 'black', borderRadius: '50%' }} />
                    <div style={{ position: 'absolute', top: '30%', right: '30%', width: '15px', height: '20px', background: 'black', borderRadius: '50%' }} />
                    <div style={{ position: 'absolute', top: '50%', left: '40%', width: '20px', height: '10px', borderBottom: '3px solid black', borderRadius: '50%' }} />
                </motion.div>

                {/* Right Decorative Circle */}
                <div style={{
                    position: 'absolute',
                    bottom: '-10%',
                    right: '-5%',
                    width: '300px',
                    height: '300px',
                    border: '20px solid var(--color-primary)',
                    borderRadius: '50%',
                    opacity: 0.6
                }} />
            </section>

            {/* SEASONS SPLIT */}
            <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '500px' }}>
                {/* Summer (Yellow) */}
                <div style={{
                    backgroundColor: 'var(--color-primary)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4rem',
                    position: 'relative'
                }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#006D8F', textTransform: 'uppercase', marginBottom: '2rem' }}>Verão</h2>
                    <div style={{ marginBottom: '3rem', width: '200px', height: '120px', background: 'white', borderRadius: '20px' }} /> {/* Shoe Placeholder */}
                    <button style={{
                        backgroundColor: '#006D8F',
                        color: 'white',
                        padding: '12px 32px',
                        borderRadius: '99px',
                        border: 'none',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}>
                        VER COLEÇÃO -&gt;
                    </button>
                    {/* Arrows */}
                    <div style={{ position: 'absolute', left: '20px', top: '50%', fontSize: '2rem', color: 'white' }}>←</div>
                    <div style={{ position: 'absolute', right: '20px', top: '50%', fontSize: '2rem', color: 'white' }}>→</div>
                </div>

                {/* Winter (Blue) */}
                <div style={{
                    backgroundColor: 'var(--color-winter-blue)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4rem',
                    position: 'relative'
                }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '2rem' }}>Inverno</h2>
                    <div style={{ marginBottom: '3rem', width: '200px', height: '120px', background: '#f8bbd0', borderRadius: '20px' }} /> {/* Shoe Placeholder */}
                    <button style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        padding: '12px 32px',
                        borderRadius: '99px',
                        border: 'none',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}>
                        VER COLEÇÃO -&gt;
                    </button>
                    {/* Arrows */}
                    <div style={{ position: 'absolute', left: '20px', top: '50%', fontSize: '2rem', color: 'white' }}>←</div>
                    <div style={{ position: 'absolute', right: '20px', top: '50%', fontSize: '2rem', color: 'white' }}>→</div>
                </div>
            </section>

        </div>
    );
};

export default Home;
