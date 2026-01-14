import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ title, price, image, category, id }) => (
    <motion.div
        whileHover={{ y: -8 }}
        style={{
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '20px',
            position: 'relative',
            boxShadow: 'var(--shadow-card)',
            display: 'flex',
            flexDirection: 'column',
            textDecoration: 'none',
            color: 'inherit',
            height: '100%',
            minHeight: '340px'
        }}
    >
        {/* Product Image */}
        <div style={{
            height: '180px',
            backgroundColor: 'white',
            borderRadius: '16px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <img
                src={image}
                alt={title}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: '8px'
                }}
            />
        </div>

        <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '800',
            color: '#1f2937',
            marginBottom: '4px',
            lineHeight: '1.2'
        }}>
            {title}
        </h3>

        {/* Small Description */}
        <p style={{
            fontSize: '0.85rem',
            color: '#9ca3af',
            marginBottom: '16px',
            lineHeight: '1.4'
        }}>
            Conforto e liberdade para os teus pés
        </p>

        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#854931' // New brown color
            }}>
                €{price}
            </span>
            <button style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: '#f7c969', // Yellow background
                border: 'none',
                color: '#854931', // Brown icon
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.75rem',
                transition: 'transform 0.2s',
            }}>+</button>
        </div>
    </motion.div>
);

export default ProductCard;
