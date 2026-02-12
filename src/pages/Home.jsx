import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { Headset, ShieldCheck, Truck, Gift, ChevronLeft, ChevronRight, Palette, Leaf, Award, Lightbulb, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import novaColecaoBg from '../assets/images/products_background.png';
import ModelViewer from '../components/ModelViewer';
import products from '../data/products';
import { useEffect } from 'react';

const AnimatedCounter = ({ from, to, duration }) => {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        const controls = animate(count, to, { duration: duration });
        return controls.stop;
    }, [count, to, duration]);

    return <motion.span>{rounded}</motion.span>;
};



const Home = () => {
    // Select random products for existing sections and carousel
    const { bestSellers, newCollection, summerProducts, winterProducts } = useMemo(() => {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        // Simple filtering relative to categories, fallback to defaults if not enough
        const summer = products.filter(p => p.category === 'crianca' || p.category === 'sandalias').slice(0, 3);
        const winter = products.filter(p => p.category === 'homem' || p.category === 'botas').slice(0, 3);

        // Ensure we have 3 items even if filter is loose
        while (summer.length < 3) summer.push(products[Math.floor(Math.random() * products.length)]);
        while (winter.length < 3) winter.push(products[Math.floor(Math.random() * products.length)]);

        return {
            bestSellers: shuffled.slice(0, 4),
            newCollection: shuffled.slice(4, 8),
            summerProducts: summer,
            winterProducts: winter
        };
    }, []);

    const [summerIndex, setSummerIndex] = useState(0);
    const [winterIndex, setWinterIndex] = useState(0);

    const nextSummer = () => setSummerIndex((prev) => (prev + 1) % summerProducts.length);
    const prevSummer = () => setSummerIndex((prev) => (prev - 1 + summerProducts.length) % summerProducts.length);

    const nextWinter = () => setWinterIndex((prev) => (prev + 1) % winterProducts.length);
    const prevWinter = () => setWinterIndex((prev) => (prev - 1 + winterProducts.length) % winterProducts.length);

    const handleAddToCart = (productName) => {
        alert(`${productName} adicionado ao carrinho!`);
    };

    return (
        <div style={{ paddingTop: '0', paddingBottom: '0', marginTop: '-80px' }}>

            {/* HERO SECTION */}
            <section style={{
                height: '100vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                color: 'white',
                textAlign: 'center'
            }}>
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -2
                    }}
                >
                    <source src="/hero_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay for better text readability */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    zIndex: -1
                }} />

                <div style={{ zIndex: 10, maxWidth: '800px', padding: '0 20px' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(5px)',
                        borderRadius: '20px',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        marginBottom: '24px',
                        border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}>
                        🌱 100% Orgânico & Ajustado para o pé
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                        lineHeight: 1.1,
                        color: 'white',
                        fontWeight: '900',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}>
                        Deixe os pezinhos <br /> andar livremente
                    </h1>
                    <p style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: '#f0f0f0',
                        marginBottom: '3rem',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                    }}>
                        Descubra o conforto natural para toda a família.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/loja" className="btn-primary" style={{ padding: '16px 32px', fontSize: '1rem', textDecoration: 'none' }}>
                            VER COLEÇÃO -&gt;
                        </Link>
                        <button className="btn-outline" style={{ padding: '16px 32px', fontSize: '1rem', color: 'white', borderColor: 'white' }}>
                            SUGESTÕES
                        </button>
                    </div>
                </div>
            </section>

            {/* PRODUCTS SECTIONS WRAPPER */}
            <div style={{ position: 'relative', overflow: 'hidden', padding: '4rem 0' }}>
                {/* Background Image */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    backgroundImage: `url(${novaColecaoBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                    {/* BEST SELLERS */}
                    <section style={{ padding: '0 12% 4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#333', textTransform: 'uppercase', marginBottom: '2rem' }}>Mais Vendidos</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
                            {bestSellers.map(product => (
                                <ProductCard
                                    key={product.id}
                                    title={product.name}
                                    price={product.price}
                                    image={product.image}
                                    category={product.subcategory || product.category}
                                    id={product.id}
                                />
                            ))}
                        </div>
                    </section>

                    {/* NEW COLLECTION */}
                    <section style={{ padding: '0 12%' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#333', textTransform: 'uppercase', marginBottom: '2rem' }}>Nova Coleção</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
                            {newCollection.map(product => (
                                <ProductCard
                                    key={product.id}
                                    title={product.name}
                                    price={product.price}
                                    image={product.image}
                                    category={product.subcategory || product.category}
                                    id={product.id}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            {/* COMFORT SECTION */}
            <section style={{
                backgroundColor: 'var(--color-teal)',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0 2rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#854931', textTransform: 'uppercase', marginBottom: '3rem' }}>Conforto</h2>

                {/* Central Shoe Image */}
                {/* Central 3D Model */}
                <div style={{ margin: '0 auto 3rem', maxWidth: '800px', height: '400px', position: 'relative', width: '100%' }}>
                    <ModelViewer modelPath="/shoe.glb" />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to="/loja" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.2rem', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                        VER COLEÇÃO -&gt;
                    </Link>
                </div>

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
            <section className="seasons-section" style={{ display: 'flex', height: '80vh', width: '100%' }}>
                {/* Summer (Yellow) */}
                <div style={{
                    backgroundColor: 'var(--color-primary)',
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    position: 'relative',
                    height: '100%'
                }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '900', color: '#006D8F', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Verão</h2>

                    <div style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '600px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '2rem',
                        gap: '1rem',
                        flex: 1
                    }}>
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevSummer}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#006D8F', padding: '10px' }}
                        >
                            <ChevronLeft size={48} />
                        </motion.button>

                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', height: '100%', maxHeight: '60%', alignItems: 'center' }}>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={summerIndex}
                                    src={summerProducts[summerIndex]?.image}
                                    alt="Verão"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.15))'
                                    }}
                                />
                            </AnimatePresence>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextSummer}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#006D8F', padding: '10px' }}
                        >
                            <ChevronRight size={48} />
                        </motion.button>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '300px' }}>
                        <Link to="/loja/verao" style={{ textDecoration: 'none', width: '100%' }}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                style={{
                                    backgroundColor: '#006D8F',
                                    color: 'white',
                                    padding: 'clamp(10px, 1.2vw, 16px) clamp(20px, 2vw, 28px)',
                                    borderRadius: '99px',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    boxSizing: 'border-box',
                                    fontSize: 'clamp(0.85rem, 1vw, 1rem)'
                                }}
                            >
                                VER COLEÇÃO -&gt;
                            </motion.div>
                        </Link>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={() => handleAddToCart(summerProducts[summerIndex]?.name)}
                            style={{
                                backgroundColor: 'transparent',
                                color: '#006D8F',
                                padding: 'clamp(10px, 1.2vw, 16px) clamp(20px, 2vw, 28px)',
                                borderRadius: '99px',
                                border: '2px solid #006D8F',
                                fontWeight: 'bold',
                                fontFamily: 'var(--font-main)',
                                cursor: 'pointer',
                                width: '100%',
                                boxSizing: 'border-box',
                                fontSize: 'clamp(0.85rem, 1vw, 1rem)'
                            }}
                        >
                            ADICIONAR AO CARRINHO
                        </motion.button>
                    </div>
                </div>

                {/* Winter (Blue) */}
                <div style={{
                    backgroundColor: 'var(--color-winter-blue)',
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    position: 'relative',
                    height: '100%'
                }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '900', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Inverno</h2>

                    <div style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '600px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '2rem',
                        gap: '1rem',
                        flex: 1
                    }}>
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevWinter}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)', padding: '10px' }}
                        >
                            <ChevronLeft size={48} />
                        </motion.button>

                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', height: '100%', maxHeight: '60%', alignItems: 'center' }}>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={winterIndex}
                                    src={winterProducts[winterIndex]?.image}
                                    alt="Inverno"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.15))'
                                    }}
                                />
                            </AnimatePresence>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextWinter}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)', padding: '10px' }}
                        >
                            <ChevronRight size={48} />
                        </motion.button>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '300px' }}>
                        <Link to="/loja/inverno" style={{ textDecoration: 'none', width: '100%' }}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                style={{
                                    backgroundColor: 'var(--color-primary)',
                                    color: 'white',
                                    padding: 'clamp(10px, 1.2vw, 16px) clamp(20px, 2vw, 28px)',
                                    borderRadius: '99px',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    boxSizing: 'border-box',
                                    fontSize: 'clamp(0.85rem, 1vw, 1rem)'
                                }}
                            >
                                VER COLEÇÃO -&gt;
                            </motion.div>
                        </Link>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={() => handleAddToCart(winterProducts[winterIndex]?.name)}
                            style={{
                                backgroundColor: 'transparent',
                                color: 'var(--color-primary)',
                                padding: 'clamp(10px, 1.2vw, 16px) clamp(20px, 2vw, 28px)',
                                borderRadius: '99px',
                                border: '2px solid var(--color-primary)',
                                fontWeight: 'bold',
                                fontFamily: 'var(--font-main)',
                                cursor: 'pointer',
                                width: '100%',
                                boxSizing: 'border-box',
                                fontSize: 'clamp(0.85rem, 1vw, 1rem)'
                            }}
                        >
                            ADICIONAR AO CARRINHO
                        </motion.button>
                    </div>
                </div>
                <style>{`
                    @media (max-width: 768px) {
                        .seasons-section {
                            flex-direction: column !important;
                        }
                    }
                `}</style>
            </section>

            {/* SERVICE FEATURES */}
            <section style={{
                padding: '4rem 10%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '2rem',
                backgroundColor: '#ffffff'
            }}>
                {[
                    { icon: Headset, title: "Suporte Gratuito 24/7", desc: "Apoio online a qualquer hora" },
                    { icon: ShieldCheck, title: "Garantia de Reembolso", desc: "Pagamento 100% Seguro" },
                    { icon: Truck, title: "Envios Gratuitos", desc: "Em encomendas acima de 49€" },
                    { icon: Gift, title: "Cartões Presente", desc: "A oferta perfeita" }
                ].map((feature, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.5rem',
                        padding: '1.5rem',
                        borderRadius: '8px',
                        border: '1px solid #eee',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'default'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={{
                            backgroundColor: '#f0f9f8', // Light teal background for icon
                            padding: '12px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--color-primary)'
                        }}>
                            <feature.icon size={32} strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 style={{
                                fontSize: '1rem',
                                fontWeight: '800',
                                color: '#333',
                                marginBottom: '0.25rem',
                                textTransform: 'uppercase'
                            }}>{feature.title}</h3>
                            <p style={{
                                fontSize: '0.85rem',
                                color: '#666',
                                margin: 0
                            }}>{feature.desc}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* NEW SECTION: What We Offer */}
            <section style={{
                minHeight: '100vh',
                padding: '4rem 10%',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#333', marginBottom: '1rem', textTransform: 'uppercase' }}>O Que Oferecemos</h2>
                </div>

                <style>{`
                    .offer-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 2rem;
                        width: 100%;
                    }
                    @media (max-width: 1024px) {
                        .offer-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }
                    @media (max-width: 600px) {
                        .offer-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                `}</style>

                <div className="offer-grid">
                    {[
                        { icon: Palette, title: "Design", text: "Estilo moderno e atrativo para todas as ocasiões.", color: "#f7c969", bg: "#fffcf2" },
                        { icon: Leaf, title: "Sustentabilidade", text: "Materiais eco-friendly e produção consciente.", color: "#006D8F", bg: "#e0f2f1" },
                        { icon: Award, title: "Qualidade", text: "Durabilidade e conforto em cada detalhe.", color: "#f7c969", bg: "#fffcf2" },
                        { icon: Lightbulb, title: "Inovação", text: "Tecnologia barefoot de ponta.", color: "#006D8F", bg: "#e0f2f1" },
                        { type: 'image', src: products[26]?.image },
                        { icon: Users, title: "Trabalho de Equipa", text: "Focados na sua satisfação.", color: "#f7c969", bg: "#fffcf2" }
                    ].map((item, idx) => {
                        if (item.type === 'image') {
                            return (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.03 }}
                                    style={{
                                        borderRadius: '24px',
                                        overflow: 'hidden',
                                        height: '100%',
                                        minHeight: '200px',
                                        position: 'relative',
                                        backgroundColor: '#fff',
                                        border: '1px solid #eee',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <img
                                        src={item.src}
                                        alt="Feature"
                                        style={{ width: '80%', height: '80%', objectFit: 'contain' }}
                                    />
                                </motion.div>
                            );
                        }
                        return (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                                style={{
                                    backgroundColor: item.bg,
                                    padding: '2rem',
                                    borderRadius: '24px',
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    transition: 'all 0.3s ease',
                                    border: `1px solid ${item.color}20`
                                }}>
                                <div style={{
                                    backgroundColor: item.color,
                                    color: 'white',
                                    padding: '16px',
                                    borderRadius: '50%',
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: `0 8px 16px ${item.color}40`
                                }}>
                                    <item.icon size={28} />
                                </div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#2c3e50', marginBottom: '0.5rem' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.5' }}>{item.text}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* NEW SECTION: Built for Everyday Needs */}
            <section style={{
                padding: '6rem 10%',
                backgroundColor: '#fffdf9',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center',
                overflow: 'hidden' // Ensure rotation doesn't cause scroll
            }}>
                {/* Left: Circular Rotating Cards */}
                <div style={{ position: 'relative', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Orbit Container */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{
                            position: 'relative',
                            width: '300px', // Orbit diameter
                            height: '300px',
                            borderRadius: '50%',
                            // border: '1px dashed #ccc', // Debug circle
                        }}
                    >
                        {[...bestSellers].slice(0, 3).map((prod, i) => {
                            const angle = (i * 360) / 3; // 0, 120, 240
                            const radius = 150; // Distance from center
                            // Calculate CSS variable-like positions or just use rotation transforms
                            // Easier to transform rotate(angle) translate(radius) rotate(-angle)
                            // But parent rotates 360.
                            // To keep images upright, they need to rotate -360 at same speed.

                            return (
                                <motion.div
                                    key={prod.id}
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        width: '200px',
                                        marginLeft: '-100px',
                                        marginTop: '-120px',
                                        transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                                    }}
                                >
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        style={{
                                            backgroundColor: 'white',
                                            borderRadius: '20px',
                                            padding: '1rem',
                                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                            textAlign: 'center',
                                            border: '1px solid #eee'
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.5rem' }}>
                                            <div style={{ background: '#fafafa', borderRadius: '50%', padding: '4px' }}>
                                                <Heart size={14} fill="#eb5757" color="#eb5757" />
                                            </div>
                                        </div>
                                        <img src={prod.image} alt={prod.name} style={{ width: '100%', height: '120px', objectFit: 'contain', marginBottom: '0.5rem' }} />
                                        <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#333' }}>{prod.name}</div>
                                    </motion.div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>

                {/* Right: Content */}
                <div>
                    <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#1a1a1a', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                        Criado para o seu <br /> Dia a Dia
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6', marginBottom: '3rem' }}>
                        Desenhado para acompanhar o ritmo da sua vida, oferecendo o equilíbrio perfeito entre estilo, conforto e saúde para os seus pés.
                    </p>

                    <div style={{ display: 'flex', gap: '4rem', marginBottom: '3rem', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', padding: '2rem 0' }}>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: '800', color: '#006D8F', display: 'flex', alignItems: 'center' }}>
                                <AnimatedCounter from={0} to={15} duration={2} />+
                            </div>
                            <div style={{ fontSize: '0.9rem', color: '#666', fontWeight: '600', textTransform: 'uppercase' }}>Anos de Inovação</div>
                        </div>
                        <div style={{ width: '1px', backgroundColor: '#ddd' }}></div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: '800', color: '#006D8F', display: 'flex', alignItems: 'center' }}>
                                <AnimatedCounter from={0} to={95} duration={2} />k
                            </div>
                            <div style={{ fontSize: '0.9rem', color: '#666', fontWeight: '600', textTransform: 'uppercase' }}>Pés Felizes</div>
                        </div>
                    </div>

                    <Link to="/loja" className="btn-primary" style={{
                        padding: '18px 40px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        backgroundColor: '#f7c969', // Brand Yellow
                        color: '#1a1a1a',
                        borderRadius: '99px',
                        boxShadow: '0 10px 20px rgba(247, 201, 105, 0.4)',
                        display: 'inline-block',
                        transition: 'transform 0.2s ease'
                    }}>
                        Explorar Categorias
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
