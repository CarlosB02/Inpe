import React, { useMemo, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { Headset, ShieldCheck, Truck, Gift, ChevronLeft, ChevronRight, Palette, Leaf, Award, Lightbulb, Users, Heart, Instagram, MessageCircle } from 'lucide-react';
import arrowBlue from '../assets/icons/arrow blue.png';
import arrowYellow from '../assets/icons/arrow yellow.png';
import veraoIcon from '../assets/icons/verao.png';
import invernoIcon from '../assets/icons/inverno.png';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import novaColecaoBg from '../assets/images/products_background.png';
import ModelViewer from '../components/ModelViewer';
import products from '../data/products';


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
    const videoRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        if (videoRef.current) {
            // Force mute and play for mobile compatibility
            videoRef.current.muted = true;
            videoRef.current.play().catch(error => {
                console.log("Video autoplay failed, usually due to battery saver:", error);
            });
        }

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Select random products for existing sections and carousel
    const { bestSellers, newCollection, summerProducts, winterProducts } = useMemo(() => {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        // Use shuffled products for variety and to avoid static broken paths
        const summer = shuffled.filter(p => p.category === 'crianca' || p.category === 'sandalias').slice(0, 3);
        const winter = shuffled.filter(p => p.category === 'homem' || p.category === 'botas').slice(0, 3);

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
                    ref={videoRef}
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
                        zIndex: -2,
                        backgroundColor: '#000' // Fallback color
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
                        fontSize: 'clamp(1.7rem, 9vw, 4.5rem)',
                        lineHeight: 1.05,
                        color: 'white',
                        fontWeight: '900',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}>
                        Deixe os pezinhos <br /> andar livremente
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                        fontWeight: 'bold',
                        color: '#f0f0f0',
                        marginBottom: '3rem',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                    }}>
                        Descubra o conforto natural para toda a família.
                    </p>
                    <div style={{
                        display: 'flex',
                        gap: 'clamp(0.5rem, 2vw, 1rem)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        padding: '0 10px'
                    }}>
                        <Link to="/loja" className="btn-primary" style={{
                            padding: 'clamp(10px, 2vh, 18px) clamp(12px, 4vw, 32px)',
                            fontSize: 'clamp(0.75rem, 2.5vw, 1rem)',
                            textDecoration: 'none',
                            whiteSpace: 'nowrap',
                            flex: '0 1 auto',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            VER COLEÇÃO
                        </Link>
                        <button className="btn-outline" style={{
                            padding: 'clamp(10px, 2vh, 18px) clamp(12px, 4vw, 32px)',
                            fontSize: 'clamp(0.75rem, 2.5vw, 1rem)',
                            color: 'white',
                            borderColor: 'white',
                            whiteSpace: 'nowrap',
                            flex: '0 1 auto',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            PARA A ESCOLA
                        </button>
                    </div>
                </div>
            </section>

            {/* TICKER CAROUSEL */}
            <div style={{
                backgroundColor: '#006D8F',
                color: 'white',
                padding: '12px 0',
                overflow: 'hidden',
                display: 'flex',
                whiteSpace: 'nowrap',
                position: 'relative',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                zIndex: 10
            }}>
                <style>{`
                    @keyframes scroll-ticker {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .ticker-content {
                        display: flex;
                        width: max-content;
                        animation: scroll-ticker 20s linear infinite;
                    }
                    .ticker-item {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        padding: 0 40px;
                        font-weight: 600;
                        font-size: 0.95rem;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    }
                    .ticker-item svg {
                        color: #f7c969;
                    }
                `}</style>
                <div className="ticker-content">
                    {[...Array(6)].map((_, i) => (
                        <React.Fragment key={i}>
                            <div className="ticker-item"><Headset size={20} /> Suporte Gratuito 24/7</div>
                            <div className="ticker-item"><ShieldCheck size={20} /> Garantia de Devolução</div>
                            <div className="ticker-item"><Truck size={20} /> Envios gratuitos</div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

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
                    <section style={{ padding: isMobile ? '0 0 3rem' : '0 8% 4rem' }}>
                        <div style={{ padding: isMobile ? '0 5%' : '0' }}>
                            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '900', color: '#333', textTransform: 'uppercase', marginBottom: '2rem' }}>Mais Vendidos</h2>
                        </div>
                        <div className={isMobile ? "mobile-shelf" : "products-grid"}>
                            {bestSellers.map(product => (
                                <ProductCard
                                    key={product.id}
                                    title={product.name}
                                    price={product.price}
                                    image={product.image}
                                    category={product.subcategory || product.category}
                                    id={product.id}
                                    compact={isMobile}
                                />
                            ))}
                        </div>
                    </section>

                    {/* NEW COLLECTION */}
                    <section style={{ padding: isMobile ? '0 5% 3rem' : '0 8%' }}>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '900', color: '#333', textTransform: 'uppercase', marginBottom: '2rem' }}>Nova Coleção</h2>
                        <div className="products-grid">
                            {newCollection.map(product => (
                                <ProductCard
                                    key={product.id}
                                    title={product.name}
                                    price={product.price}
                                    image={product.image}
                                    category={product.subcategory || product.category}
                                    id={product.id}
                                    compact={isMobile}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            {/* COMFORT SECTION */}
            <section style={{
                backgroundColor: 'var(--color-teal)',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 'clamp(3rem, 10vh, 6rem) 1.5rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: '900', color: '#854931', textTransform: 'uppercase', marginBottom: '3rem' }}>Conforto</h2>

                {/* Central Shoe Image */}
                {/* Central 3D Model */}
                <div style={{
                    margin: '0 auto 2rem',
                    maxWidth: '800px',
                    height: 'clamp(250px, 45vh, 400px)',
                    position: 'relative',
                    width: '100%'
                }}>
                    <ModelViewer modelPath="/shoe.glb" />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to="/loja" className="btn-primary" style={{
                        padding: 'clamp(12px, 2vh, 18px) clamp(24px, 4vw, 40px)',
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                        marginTop: '1rem'
                    }}>
                        VER COLEÇÃO
                    </Link>
                </div>

                {/* Right Decorative Circle */}
                <div style={{
                    position: 'absolute',
                    bottom: isMobile ? '-50px' : '-10%',
                    right: isMobile ? '-50px' : '-5%',
                    width: isMobile ? '150px' : '300px',
                    height: isMobile ? '150px' : '300px',
                    border: `${isMobile ? '10px' : '20px'} solid var(--color-primary)`,
                    borderRadius: '50%',
                    opacity: 0.6,
                    zIndex: 0
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
                    padding: isMobile ? '3rem 1.5rem 3rem' : '2rem 2rem 5rem',
                    position: 'relative',
                    minHeight: isMobile ? '500px' : 'auto',
                    height: '100%'
                }}>
                    <img
                        src={veraoIcon}
                        alt="Verão"
                        style={{
                            height: 'clamp(4rem, 10vw, 6rem)',
                            width: 'auto',
                            marginBottom: '2rem'
                        }}
                    />

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
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '10px' }}
                        >
                            <img src={arrowBlue} alt="right" style={{ width: '40px', height: 'auto', transform: 'rotate(360deg)' }} />
                        </motion.button>

                        <div style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            height: '100%',
                            maxHeight: isMobile ? '350px' : '60%',
                            alignItems: 'center'
                        }}>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={summerIndex}
                                    src={summerProducts[summerIndex]?.image}
                                    alt="Verão"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.2}
                                    onDragEnd={(e, { offset, velocity }) => {
                                        const swipe = offset.x;
                                        if (swipe < -50) {
                                            nextSummer();
                                        } else if (swipe > 50) {
                                            prevSummer();
                                        }
                                    }}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.15))',
                                        cursor: 'grab'
                                    }}
                                    whileTap={{ cursor: 'grabbing' }}
                                />
                            </AnimatePresence>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextSummer}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '10px' }}
                        >
                            <img src={arrowBlue} alt="left" style={{ width: '40px', height: 'auto', transform: 'rotate(180deg)' }} />
                        </motion.button>
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        maxWidth: isMobile ? '300px' : 'none',
                        marginTop: isMobile ? '1rem' : '-1.5rem'
                    }}>
                        <Link to="/loja/verao" style={{ textDecoration: 'none', width: isMobile ? '100%' : 'auto' }}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                style={{
                                    backgroundColor: '#006D8F',
                                    color: 'white',
                                    padding: 'clamp(14px, 2vw, 18px) clamp(32px, 5vw, 48px)',
                                    borderRadius: '99px',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    whiteSpace: 'nowrap',
                                    fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)'
                                }}
                            >
                                VER COLEÇÃO
                            </motion.div>
                        </Link>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={() => handleAddToCart(summerProducts[summerIndex]?.name)}
                            style={{
                                backgroundColor: 'transparent',
                                color: '#006D8F',
                                padding: 'clamp(14px, 2vw, 18px) clamp(32px, 5vw, 48px)',
                                borderRadius: '99px',
                                border: '2px solid #006D8F',
                                fontWeight: 'bold',
                                fontFamily: 'var(--font-main)',
                                cursor: 'pointer',
                                width: isMobile ? '100%' : 'auto',
                                whiteSpace: 'nowrap',
                                fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)'
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
                    padding: isMobile ? '3rem 1.5rem 3rem' : '2rem 2rem 5rem',
                    position: 'relative',
                    minHeight: isMobile ? '500px' : 'auto',
                    height: '100%'
                }}>
                    <img
                        src={invernoIcon}
                        alt="Inverno"
                        style={{
                            height: 'clamp(4rem, 10vw, 6rem)',
                            width: 'auto',
                            marginBottom: '2rem'
                        }}
                    />

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
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '10px' }}
                        >
                            <img src={arrowYellow} alt="Left" style={{ width: '40px', height: 'auto', transform: 'rotate(180deg)' }} />
                        </motion.button>

                        <div style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            height: '100%',
                            maxHeight: isMobile ? '350px' : '60%',
                            alignItems: 'center'
                        }}>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={winterIndex}
                                    src={winterProducts[winterIndex]?.image}
                                    alt="Inverno"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.2}
                                    onDragEnd={(e, { offset, velocity }) => {
                                        const swipe = offset.x;
                                        if (swipe < -50) {
                                            nextWinter();
                                        } else if (swipe > 50) {
                                            prevWinter();
                                        }
                                    }}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.15))',
                                        cursor: 'grab'
                                    }}
                                    whileTap={{ cursor: 'grabbing' }}
                                />
                            </AnimatePresence>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextWinter}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '10px' }}
                        >
                            <img src={arrowYellow} alt="Right" style={{ width: '40px', height: 'auto' }} />
                        </motion.button>
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        maxWidth: isMobile ? '300px' : 'none',
                        marginTop: isMobile ? '1rem' : '-1.5rem'
                    }}>
                        <Link to="/loja/inverno" style={{ textDecoration: 'none', width: isMobile ? '100%' : 'auto' }}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                style={{
                                    backgroundColor: 'var(--color-primary)',
                                    color: 'white',
                                    padding: 'clamp(14px, 2vw, 18px) clamp(32px, 5vw, 48px)',
                                    borderRadius: '99px',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    whiteSpace: 'nowrap',
                                    fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)'
                                }}
                            >
                                VER COLEÇÃO
                            </motion.div>
                        </Link>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={() => handleAddToCart(winterProducts[winterIndex]?.name)}
                            style={{
                                backgroundColor: 'transparent',
                                color: 'var(--color-primary)',
                                padding: 'clamp(14px, 2vw, 18px) clamp(32px, 5vw, 48px)',
                                borderRadius: '99px',
                                border: '2px solid var(--color-primary)',
                                fontWeight: 'bold',
                                fontFamily: 'var(--font-main)',
                                cursor: 'pointer',
                                width: isMobile ? '100%' : 'auto',
                                whiteSpace: 'nowrap',
                                fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)'
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
                                height: auto !important;
                            }
                        }
                        .products-grid {
                            display: grid;
                            grid-template-columns: repeat(2, 1fr);
                            gap: 1rem;
                        }
                        .mobile-shelf {
                            display: flex;
                            overflow-x: auto;
                            scroll-snap-type: x mandatory;
                            gap: 1.5rem;
                            padding: 0 5% 2rem;
                            scroll-behavior: smooth;
                            -webkit-overflow-scrolling: touch;
                        }
                        .mobile-shelf::-webkit-scrollbar {
                            display: none;
                        }
                        .mobile-shelf > * {
                            flex: 0 0 80%;
                            scroll-snap-align: center;
                        }
                        @media (min-width: 768px) {
                            .products-grid {
                                grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                                gap: 2rem;
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
            <section className="what-we-offer-section" style={{
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: '900', color: '#333', marginBottom: '1rem', textTransform: 'uppercase' }}>O Que Oferecemos</h2>
                </div>

                <style>{`
                    .what-we-offer-section {
                        min-height: 100vh;
                        padding: 4rem 10%;
                    }
                    @media (max-width: 768px) {
                        .what-we-offer-section {
                            min-height: auto;
                            padding: 3rem 5%;
                        }
                    }
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
                    @media (max-width: 768px) {
                        .offer-grid {
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
                        .offer-grid::-webkit-scrollbar {
                            height: 8px;
                        }
                        .offer-grid > * {
                            flex: 0 0 85%;
                            scroll-snap-align: center;
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

            {/* NEW SECTION: Instagram Feed */}
            <section style={{
                padding: '6rem 10%',
                backgroundColor: '#fffdf9',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                overflow: 'hidden'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        <Instagram size={32} color="#E1306C" />
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', color: '#1a1a1a', textTransform: 'uppercase', margin: 0 }}>
                            Acompanhe a nossa caminhada
                        </h2>
                    </div>
                    <a href="https://www.instagram.com/inpe_barefoot/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', color: '#006D8F', fontWeight: 'bold', textDecoration: 'none' }}>
                        @inpe_barefoot
                    </a>
                </div>

                {/* Instagram Mock Grid */}
                <div className="instagram-grid" style={{ width: '100%', marginBottom: '3rem' }}>
                    {[...bestSellers, ...newCollection].slice(0, 4).map((prod, i) => (
                        <a key={i} href="https://www.instagram.com/inpe_barefoot/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                            <motion.div
                                whileHover="hover"
                                initial="initial"
                                style={{
                                    position: 'relative',
                                    aspectRatio: '1/1',
                                    backgroundColor: '#fff',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '2rem'
                                }}
                            >
                                <img src={prod.image} alt="Instagram Post" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />

                                {/* Overlay */}
                                <motion.div
                                    variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }}
                                    transition={{ duration: 0.2 }}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundColor: 'rgba(0,0,0,0.4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '2rem',
                                        color: 'white'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                        <Heart size={28} fill="white" /> {Math.floor(Math.random() * 200) + 50}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                        <MessageCircle size={28} fill="white" /> {Math.floor(Math.random() * 20) + 2}
                                    </div>
                                </motion.div>
                            </motion.div>
                        </a>
                    ))}
                </div>

                <a href="https://www.instagram.com/inpe_barefoot/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{
                    padding: 'clamp(14px, 2.5vh, 20px) clamp(30px, 5vw, 50px)',
                    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    backgroundColor: '#E1306C', // Instagram Pink/Red
                    color: 'white',
                    borderRadius: '99px',
                    boxShadow: '0 10px 20px rgba(225, 48, 108, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'transform 0.2s ease',
                    textAlign: 'center'
                }}>
                    <Instagram size={24} /> Siga-nos no Instagram
                </a>

                <style>{`
                    .instagram-grid {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        gap: 2rem;
                    }
                    @media (max-width: 1024px) {
                        .instagram-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }
                    @media (max-width: 768px) {
                        .instagram-grid {
                            display: flex;
                            overflow-x: auto;
                            scroll-snap-type: x mandatory;
                            gap: 1rem;
                            padding-bottom: 1rem;
                            scroll-behavior: smooth;
                            -webkit-overflow-scrolling: touch;
                        }
                        .instagram-grid::-webkit-scrollbar {
                            display: none;
                        }
                        .instagram-grid > * {
                            flex: 0 0 85%;
                            scroll-snap-align: center;
                        }
                    }
                `}</style>
            </section>
        </div>
    );
};

export default Home;
