import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import products from '../data/products';


const Collections = () => {
    const { category } = useParams();
    const [filters, setFilters] = useState({
        categories: category && category !== 'todos' ? [category] : [],
        subcategories: [], // This maps to 'Estilo'
        sizes: [],
        colors: [],
        price: { min: 0, max: 200 }
    });

    // Update filters when URL param changes
    React.useEffect(() => {
        if (category && category !== 'todos') {
            setFilters(prev => ({ ...prev, categories: [category] }));
        } else {
            setFilters(prev => ({ ...prev, categories: [] }));
        }
    }, [category]);

    // Complex Filter Logic
    const filteredProducts = products.filter(product => {
        // Category (Gender) Filter
        if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
            return false;
        }

        // Subcategory (Style) Filter
        if (filters.subcategories.length > 0 && !filters.subcategories.includes(product.subcategory)) {
            return false;
        }

        // Size Filter
        if (filters.sizes.length > 0) {
            // Check if product has ANY of the selected sizes
            const hasSize = product.sizes && product.sizes.some(s => filters.sizes.includes(s));
            if (!hasSize) return false;
        }

        // Color Filter
        if (filters.colors.length > 0) {
            // Check if product has ANY of the selected colors
            const hasColor = product.colors && product.colors.some(c => filters.colors.includes(c));
            if (!hasColor) return false;
        }

        // Price Filter
        const price = parseFloat(product.price);
        if (price < filters.price.min || price > filters.price.max) {
            return false;
        }

        return true;
    });

    return (
        <div style={{ padding: '8rem 2rem 4rem', maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{
                    fontSize: '3rem',
                    color: 'var(--color-primary)',
                    marginBottom: '1rem',
                    fontFamily: '"Rounded Mplus 1c", sans-serif',
                    fontWeight: 900
                }}>
                    Nossas Coleções
                </h1>
                <p style={{ color: '#666', fontSize: '1.1rem' }}>
                    Descubra o conforto natural para toda a família.
                </p>
            </div>

            <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>
                {/* Left Sidebar */}
                <FilterSidebar filters={filters} setFilters={setFilters} />

                {/* Product Grid */}
                <div style={{ flex: 1 }}>
                    {/* Active Filters Summary (Optional but nice) */}
                    <div style={{ marginBottom: '1rem', color: '#666' }}>
                        Mostrando {filteredProducts.length} produtos
                    </div>

                    <motion.div
                        layout
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '2.5rem'
                        }}
                    >
                        <AnimatePresence>
                            {filteredProducts.map(product => (
                                <div key={product.id} style={{ height: '100%' }}>
                                    <ProductCard
                                        title={product.name}
                                        price={product.price}
                                        image={product.image}
                                        category={product.subcategory || product.category}
                                        id={product.id}
                                    />
                                </div>
                            ))}
                        </AnimatePresence>
                        {filteredProducts.length === 0 && (
                            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem', color: '#888' }}>
                                <p>Nenhum produto encontrado com estes filtros.</p>
                                <button
                                    onClick={() => setFilters({ categories: [], subcategories: [], sizes: [], colors: [], price: { min: 0, max: 200 } })}
                                    style={{ marginTop: '1rem', padding: '10px 20px', background: 'var(--color-teal)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
                                >
                                    Limpar Filtros
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Collections;
