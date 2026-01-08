import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
import products from '../data/products';

const Collections = () => {
    const { category } = useParams();
    const [filter, setFilter] = useState(category || 'todos');

    // Filter logic
    const filteredProducts = filter === 'todos'
        ? products
        : products.filter(p => p.category === filter);

    const categories = ['todos', 'mulher', 'homem', 'crianca'];

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

            {/* Filter Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
                {categories.map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        style={{
                            padding: '10px 32px',
                            borderRadius: '9999px',
                            border: 'none',
                            backgroundColor: filter === f ? 'var(--color-teal)' : '#f0f0f0',
                            color: filter === f ? 'white' : '#555',
                            cursor: 'pointer',
                            textTransform: 'capitalize',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            boxShadow: filter === f ? '0 4px 15px rgba(28, 169, 169, 0.3)' : 'none',
                            transform: filter === f ? 'scale(1.05)' : 'scale(1)'
                        }}
                    >
                        {f === 'crianca' ? 'Criança' : f}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
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
                        <motion.div
                            key={product.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                            style={{ cursor: 'pointer' }}
                        >
                            <div style={{
                                backgroundColor: 'white',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                transition: 'shadow 0.3s ease',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                {/* Image Container */}
                                <div style={{
                                    height: '280px',
                                    backgroundColor: '#f8f9fa',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    padding: '20px'
                                }}>
                                    {product.isNew && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '15px',
                                            left: '15px',
                                            backgroundColor: 'var(--color-primary)',
                                            color: 'white',
                                            padding: '4px 12px',
                                            borderRadius: '20px',
                                            fontSize: '0.8rem',
                                            fontWeight: 'bold',
                                            zIndex: 2
                                        }}>
                                            Novo
                                        </div>
                                    )}
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                            objectFit: 'contain',
                                            filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.1))',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </div>

                                {/* Content */}
                                <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <span style={{ fontSize: '0.85rem', color: '#999', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                                            {product.subcategory}
                                        </span>
                                        <h3 style={{ fontSize: '1.2rem', color: '#333', marginTop: '5px', marginBottom: '10px' }}>
                                            {product.name}
                                        </h3>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                                        <span style={{ fontSize: '1.3rem', fontWeight: '900', color: 'var(--color-teal)' }}>
                                            €{product.price}
                                        </span>
                                        <button style={{
                                            width: '35px',
                                            height: '35px',
                                            borderRadius: '50%',
                                            backgroundColor: '#f0f0f0',
                                            border: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#333',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s'
                                        }}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                                                e.currentTarget.style.color = 'white';
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.backgroundColor = '#f0f0f0';
                                                e.currentTarget.style.color = '#333';
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Collections;
