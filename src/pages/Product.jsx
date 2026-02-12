import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import './Product.css';
import { Star, Truck, RotateCcw, Headphones, ChevronDown, ChevronUp, Clock, ShieldCheck, ChevronLeft, ChevronRight, Check } from 'lucide-react';

const Product = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id)) || products[0]; // Fallback to first if not found

    // States
    const [selectedImage, setSelectedImage] = useState(product.image);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const mobileGalleryRef = useRef(null);

    const handleMobileScroll = () => {
        if (mobileGalleryRef.current) {
            const { scrollLeft, offsetWidth } = mobileGalleryRef.current;
            const index = Math.round(scrollLeft / offsetWidth);
            setActiveImageIndex(index);
        }
    };

    useEffect(() => {
        if (product.gallery && product.gallery.length > 0) {
            setSelectedImage(product.gallery[0]);
        } else {
            setSelectedImage(product.image);
        }
        window.scrollTo(0, 0); // Scroll to top on product change
    }, [product, id]); // Added id as dependency to be safe
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('38'); // Default size
    const [isSizeOpen, setIsSizeOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(null); // For sidebar/expandable tabs
    const [bottomTab, setBottomTab] = useState('reviews');

    // Countdown Timer State
    const [timeLeft, setTimeLeft] = useState(2 * 3600 + 14 * 60 + 59); // 02:14:59 in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    // Bundle Logic
    const bundleItems = products.slice(0, 3);
    const [selectedBundleIds, setSelectedBundleIds] = useState(bundleItems.map(p => p.id));
    const [isBundleExpanded, setIsBundleExpanded] = useState(false);

    const toggleBundleItem = (id) => {
        if (selectedBundleIds.includes(id)) {
            setSelectedBundleIds(selectedBundleIds.filter(itemId => itemId !== id));
        } else {
            setSelectedBundleIds([...selectedBundleIds, id]);
        }
    };

    const bundleTotal = bundleItems
        .filter(p => selectedBundleIds.includes(p.id))
        .reduce((acc, p) => acc + parseFloat(p.price), 0);

    // Simulate other images for gallery
    const galleryImages = [
        product.image,
        // Using duplicates for demo since we might not have multiple unique images per product key
        product.image,
        product.image,
        product.image
    ];

    const toggleTab = (index) => {
        setActiveTab(activeTab === index ? null : index);
    };

    const handleSizeSelect = (s) => {
        setSize(s);
        setIsSizeOpen(false);
    };

    return (
        <div className="product-page">
            {/* Main Product Section */}
            <div className="product-main">
                {/* Left: Gallery */}
                <div className="product-gallery">
                    {/* Desktop View */}
                    <div className="desktop-gallery-view">
                        <div className="gallery-thumbnails">
                            {product.gallery.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`Thumbnail ${idx}`}
                                    className={`gallery-thumbnail ${selectedImage === img ? 'active' : ''}`}
                                    onClick={() => setSelectedImage(img)}
                                />
                            ))}
                        </div>
                        <div className="gallery-main-image">
                            <img src={selectedImage} alt={product.name} />
                        </div>
                    </div>

                    {/* Mobile View */}
                    <div className="mobile-gallery-view">
                        <div
                            className="mobile-gallery-scroll"
                            ref={mobileGalleryRef}
                            onScroll={handleMobileScroll}
                        >
                            {product.gallery.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`Product ${idx}`}
                                    className="mobile-gallery-image"
                                />
                            ))}
                        </div>
                        <div className="mobile-gallery-dots">
                            {product.gallery.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`gallery-dot ${idx === activeImageIndex ? 'active' : ''}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Product Info */}
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
                            <button
                                className="size-dropdown-btn"
                                onClick={() => setIsSizeOpen(!isSizeOpen)}
                            >
                                <span>{size}</span>
                                {isSizeOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
                            {isSizeOpen && (
                                <div className="size-dropdown-menu">
                                    {['36', '37', '38', '39', '40', '41', '42'].map((s) => (
                                        <div
                                            key={s}
                                            className="size-option"
                                            onClick={() => handleSizeSelect(s)}
                                        >
                                            {s}
                                        </div>
                                    ))}
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
                        <button className="add-btn">
                            Adicionar ao carrinho
                        </button>
                    </div>

                    <button className="buy-now-btn">Comprar já</button>

                    <div className="urgency-box">
                        <Clock size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                        Rápido antes que o desconto acabe! ({formatTime(timeLeft)})
                    </div>

                    <div className="trust-badge">
                        <Truck className="trust-icon" size={20} />
                        <span>Entrega GRÁTIS em Portugal e Espanha (2–5 dias)</span>
                    </div>
                    <div className="trust-badge">
                        <RotateCcw className="trust-icon" size={20} />
                        <span>Devolução sem problemas</span>
                    </div>

                    <div className="divider"></div>

                    <p className="short-description">
                        Experimente a liberdade de movimentos naturais.
                        Os nossos sapatos barefoot permitem que os seus pés se movam como a natureza planeou,
                        fortalecendo os músculos e melhorando a postura a cada passo. Toepoe box largo para conforto total.
                    </p>

                    <ul className="specs-list">
                        <h3>Especificações:</h3> <br></br>
                        <li>Zero-drop para alinhamento natural</li>
                        <li>Sola ultra-flexível e resistente</li>
                        <li>Materiais respiráveis e leves</li>
                    </ul>

                    {/* Expandable Tabs Section */}
                    <div className="product-tabs-section">
                        {[
                            {
                                title: "Sobre Barefoot", content: (
                                    <div className="tab-content-inner">
                                        <ul className="checkmark-list">
                                            <li><Check size={16} color="#F4C466" strokeWidth={3} /> Caminhar descalço fortalece os pés.</li>
                                            <li><Check size={16} color="#F4C466" strokeWidth={3} /> Melhora o equilíbrio e a postura.</li>
                                            <li><Check size={16} color="#F4C466" strokeWidth={3} /> Estimulação sensorial do solo.</li>
                                            <li><Check size={16} color="#F4C466" strokeWidth={3} /> Redução de impacto nas articulações.</li>
                                            <li><Check size={16} color="#F4C466" strokeWidth={3} /> Feedback natural para o cérebro.</li>
                                            <li><Check size={16} color="#F4C466" strokeWidth={3} /> Maior estabilidade em terrenos irregulares.</li>
                                        </ul>
                                    </div>
                                )
                            },
                            {
                                title: "Descrição", content: (
                                    <div className="tab-content-inner">
                                        <p>Estes sapatos foram desenhados para proporcionar a máxima sensação de liberdade. Com materiais de alta qualidade duráveis, adaptam-se perfeitamente ao seu dia-a-dia, seja na cidade ou na natureza. O design minimalista combina com qualquer estilo.</p>
                                        <div className="desc-grid">
                                            <div className="desc-grid-item"><Check size={16} color="#F4C466" strokeWidth={3} /> Respirável</div>
                                            <div className="desc-grid-item"><Check size={16} color="#F4C466" strokeWidth={3} /> Flexível</div>
                                            <div className="desc-grid-item"><Check size={16} color="#F4C466" strokeWidth={3} /> Leve</div>
                                            <div className="desc-grid-item"><Check size={16} color="#F4C466" strokeWidth={3} /> Lavável</div>
                                        </div>
                                    </div>
                                )
                            },
                            {
                                title: "Detalhes adicionais", content: (
                                    <table className="details-table">
                                        <tbody>
                                            <tr><td>Peso</td><td>180g (Tamanho 40)</td></tr>
                                            <tr><td>Materiais</td><td>Malha respirável, Sola de borracha natural</td></tr>
                                        </tbody>
                                    </table>
                                )
                            },
                            {
                                title: "Certificado de qualidade", content: (
                                    <div style={{ textAlign: 'center', padding: '1rem' }}>
                                        <ShieldCheck size={48} color="#4CAF50" />
                                        <p style={{ marginTop: '1rem' }}>Certificado de Excelência Barefoot 2026</p>
                                    </div>
                                )
                            }

                        ].map((tab, idx) => (
                            <div key={idx} className="tab-item">
                                <div className="tab-header" onClick={() => toggleTab(idx)}>
                                    {tab.title}
                                    <motion.div
                                        animate={{ rotate: activeTab === idx ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown />
                                    </motion.div>
                                </div>
                                <AnimatePresence>
                                    {activeTab === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div className="tab-content">
                                                {tab.content}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            {/* Bundle / Cross-Selling Section */}
            <div className="bundle-section">
                <div className="section-header">
                    <h3 className="section-title">Os clientes também compraram</h3>
                    <p style={{ color: '#666', marginTop: '0.5rem' }}>Com base em produtos que os clientes compraram juntos</p>
                </div>

                {/* ===== MOBILE Bundle (hidden on desktop) ===== */}
                <div className="bundle-section-mobile">
                    <div className="mobile-bundle-summary-wrapper">
                        {/* Collapsed Summary */}
                        <div
                            className={`mobile-bundle-summary ${isBundleExpanded ? 'hidden' : ''}`}
                            onClick={() => setIsBundleExpanded(true)}
                        >
                            <div className="mobile-bundle-images">
                                {bundleItems.map((p, index) => (
                                    <React.Fragment key={p.id}>
                                        <div className="mobile-bundle-img-wrapper">
                                            <img src={p.image} alt={p.name} />
                                        </div>
                                        {index < 2 && <div className="mobile-plus">+</div>}
                                    </React.Fragment>
                                ))}
                            </div>
                            <div className="mobile-bundle-bar">
                                <span className="mobile-bundle-text">Comprar todos os 3: <span className="mobile-bundle-price">{bundleTotal.toFixed(2)} €</span></span>
                                <ChevronDown size={20} />
                            </div>
                        </div>

                        {/* Expanded Content */}
                        {isBundleExpanded && (
                            <div className="mobile-bundle-expanded">
                                <div className="mobile-bundle-grid">
                                    {bundleItems.map((p) => {
                                        const isSelected = selectedBundleIds.includes(p.id);
                                        return (
                                            <div
                                                key={p.id}
                                                className={`bundle-card-wrapper ${!isSelected ? 'deselected' : ''}`}
                                                onClick={() => toggleBundleItem(p.id)}
                                                style={{ cursor: 'pointer', position: 'relative' }}
                                            >
                                                <ProductCard
                                                    title={p.name}
                                                    price={p.price}
                                                    image={p.image}
                                                    category={p.category}
                                                    id={p.id}
                                                    compact={true}
                                                />
                                                <div className={`bundle-checkbox ${isSelected ? 'selected' : ''}`}>
                                                    {isSelected && <Check size={14} color="white" strokeWidth={3} />}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mobile-bundle-actions">
                                    <button
                                        className="add-btn bundle-btn"
                                        disabled={selectedBundleIds.length === 0}
                                        style={{ opacity: selectedBundleIds.length === 0 ? 0.5 : 1 }}
                                    >
                                        Adicionar {selectedBundleIds.length} ao carrinho — {bundleTotal.toFixed(2)} €
                                    </button>
                                    <button
                                        className="buy-now-btn bundle-btn"
                                        disabled={selectedBundleIds.length === 0}
                                        style={{ opacity: selectedBundleIds.length === 0 ? 0.5 : 1 }}
                                    >
                                        Comprar Já
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* ===== DESKTOP Bundle (hidden on mobile) ===== */}
                <div className="bundle-section-desktop">
                    <div className="bundle-container">
                        <div className="bundle-cards">
                            {bundleItems.map((p, index) => {
                                const isSelected = selectedBundleIds.includes(p.id);
                                return (
                                    <React.Fragment key={p.id}>
                                        <div
                                            className={`bundle-card-wrapper ${!isSelected ? 'deselected' : ''}`}
                                            onClick={() => toggleBundleItem(p.id)}
                                            style={{ cursor: 'pointer', position: 'relative' }}
                                        >
                                            <ProductCard
                                                title={p.name}
                                                price={p.price}
                                                image={p.image}
                                                category={p.category}
                                                id={p.id}
                                                compact={true}
                                            />
                                            <div className={`bundle-checkbox ${isSelected ? 'selected' : ''}`}>
                                                {isSelected && <Check size={14} color="white" strokeWidth={3} />}
                                            </div>
                                        </div>
                                        {index < 2 && <div className="plus-sign">+</div>}
                                    </React.Fragment>
                                );
                            })}
                        </div>

                        <div className="bundle-summary">
                            <div className="bundle-total-price">
                                <span className="label">Preço Total:</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                                    <span className="value">
                                        {bundleTotal.toFixed(2)} €
                                    </span>
                                    {selectedBundleIds.length < 3 && selectedBundleIds.length > 0 && (
                                        <span style={{ fontSize: '0.8rem', color: '#888', textDecoration: 'line-through' }}>
                                            {(bundleItems.reduce((acc, p) => acc + parseFloat(p.price), 0)).toFixed(2)} €
                                        </span>
                                    )}
                                </div>
                            </div>
                            <button
                                className="add-btn bundle-btn"
                                disabled={selectedBundleIds.length === 0}
                                style={{ opacity: selectedBundleIds.length === 0 ? 0.5 : 1 }}
                            >
                                Adicionar {selectedBundleIds.length} ao carrinho
                            </button>
                            <button
                                className="buy-now-btn bundle-btn"
                                disabled={selectedBundleIds.length === 0}
                                style={{ opacity: selectedBundleIds.length === 0 ? 0.5 : 1 }}
                            >
                                Comprar Já
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recommendations Carousel */}
            <div className="recommendations-section">
                <div className="section-header" style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                    <div>
                        <div className="section-subtitle">Desconto ocasional</div>
                        <h3 className="section-title">Frequentemente comprados em conjunto</h3>
                    </div>

                </div>

                <div className="carousel-container">
                    <button className="nav-btn desktop-nav prev-btn" onClick={() => document.getElementById('rec-carousel').scrollBy({ left: -300, behavior: 'smooth' })}>
                        <ChevronLeft />
                    </button>

                    <div id="rec-carousel" className="product-carousel">
                        {products.map(p => (
                            <div key={p.id} className="carousel-item">
                                <ProductCard
                                    title={p.name}
                                    price={p.price}
                                    image={p.image}
                                    category={p.category}
                                    id={p.id}
                                />
                            </div>
                        ))}
                    </div>

                    <button className="nav-btn desktop-nav next-btn" onClick={() => document.getElementById('rec-carousel').scrollBy({ left: 300, behavior: 'smooth' })}>
                        <ChevronRight />
                    </button>
                </div>
            </div>

            {/* Bottom Section: Tabs for Reviews & FAQ */}
            <div className="bottom-tabs-container">
                <div className="bottom-tabs-nav">
                    <button
                        className={`bottom-tab-btn ${bottomTab === 'reviews' ? 'active' : ''}`}
                        onClick={() => setBottomTab('reviews')}
                    >
                        Avaliações
                    </button>
                    <button
                        className={`bottom-tab-btn ${bottomTab === 'faq' ? 'active' : ''}`}
                        onClick={() => setBottomTab('faq')}
                    >
                        Perguntas frequentes
                    </button>
                </div>

                {bottomTab === 'reviews' && (
                    <div className="reviews-content">
                        {[
                            {
                                id: 1,
                                name: "Maria Silva",
                                rating: 5,
                                title: "Super confortáveis!",
                                date: "10 de Outubro de 2025",
                                text: "Estou apaixonada por estes sapatos! Nunca pensei que andar 'descalço' fosse tão confortável. O espaço para os dedos é incrível e sinto as minhas pernas mais leves ao final do dia."
                            },
                            {
                                id: 2,
                                name: "João Santos",
                                rating: 5,
                                title: "Excelente qualidade",
                                date: "5 de Novembro de 2025",
                                text: "Materiais de primeira. A entrega foi super rápida e o apoio ao cliente impecável. Recomendo vivamente a quem procura saúde para os pés."
                            },
                            {
                                id: 3,
                                name: "Ana Pereira",
                                rating: 4,
                                title: "Muito bons para o dia a dia",
                                date: "20 de Janeiro de 2026",
                                text: "Uso-os para trabalhar e a diferença nas minhas dores de costas é notável. O design é simples mas elegante."
                            }
                        ].map((review) => (
                            <div key={review.id} className="review-item">
                                <div className="review-name">{review.name}</div>
                                <div className="review-header">
                                    <div className="stars" style={{ display: 'flex', gap: '2px' }}>
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} size={16} fill="#F4C466" color="#F4C466" />
                                        ))}
                                    </div>
                                    <span className="review-title">{review.title}</span>
                                </div>
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
                            {[
                                { q: "Como escolher o tamanho correto?", a: "Recomendamos medir o seu pé em cm e consultar a nossa tabela de tamanhos. Deixe sempre 0.5cm a 1.2cm de folga." },
                                { q: "Posso usar sem meias?", a: "Sim! Os nossos sapatos são feitos com materiais respiráveis ideais para usar com ou sem meias." },
                                { q: "São laváveis na máquina?", a: "Recomendamos lavagem à mão com água fria para preservar a durabilidade dos materiais." },
                                { q: "Quanto tempo demora a entrega?", a: "Para Portugal e Espanha, o envio é expresso e demora entre 2 a 5 dias úteis." },
                                { q: "Têm garantia?", a: "Sim, todos os nossos produtos têm garantia de 2 anos contra defeitos de fabrico." },
                                { q: "Como funciona a devolução?", a: "Tem 30 dias para devolver ou trocar, desde que o produto não tenha sido usado na rua." }
                            ].map((item, i) => (
                                <div key={i} className="faq-item">
                                    <h4>{item.q}</h4>
                                    <p>{item.a}</p>
                                </div>
                            ))}
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
    );
};

export default Product;
