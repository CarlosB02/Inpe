import React from 'react';
import { motion } from 'framer-motion';

const FilterSidebar = ({ filters, setFilters }) => {

    const handleCategoryChange = (e) => {
        const { value, checked } = e.target;
        const currentCategories = filters.categories || [];
        if (checked) {
            setFilters({ ...filters, categories: [...currentCategories, value] });
        } else {
            setFilters({ ...filters, categories: currentCategories.filter(c => c !== value) });
        }
    };

    const handleSubCategoryChange = (e) => {
        const { value, checked } = e.target;
        const currentSub = filters.subcategories || [];
        if (checked) {
            setFilters({ ...filters, subcategories: [...currentSub, value] });
        } else {
            setFilters({ ...filters, subcategories: currentSub.filter(c => c !== value) });
        }
    };

    const handleSizeChange = (size) => {
        const currentSizes = filters.sizes || [];
        if (currentSizes.includes(size)) {
            setFilters({ ...filters, sizes: currentSizes.filter(s => s !== size) });
        } else {
            setFilters({ ...filters, sizes: [...currentSizes, size] });
        }
    };

    const handleColorChange = (color) => {
        const currentColors = filters.colors || [];
        if (currentColors.includes(color)) {
            setFilters({ ...filters, colors: currentColors.filter(c => c !== color) });
        } else {
            setFilters({ ...filters, colors: [...currentColors, color] });
        }
    };

    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, price: { ...filters.price, [name]: Number(value) } });
    };

    return (
        <div style={{
            width: '100%',
            maxWidth: '300px',
            height: 'fit-content'
        }}>
            <div style={{
                backgroundColor: '#fff',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid #f0f0f0'
            }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontFamily: '"Rounded Mplus 1c", sans-serif', color: '#333', marginTop: 0 }}>Filtros</h3>

                {/* Price Filter */}
                <div style={{ marginBottom: '2.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#555' }}>Preço</h4>
                    <div style={{ position: 'relative', height: '40px', width: '100%' }}>
                        {/* Background Track */}
                        <div style={{
                            position: 'absolute',
                            width: '100%',
                            height: '6px',
                            backgroundColor: '#eee',
                            borderRadius: '99px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            left: 0
                        }}></div>

                        {/* Active Track */}
                        <div style={{
                            position: 'absolute',
                            height: '6px',
                            backgroundColor: 'var(--color-teal)',
                            borderRadius: '99px',
                            left: `${(filters.price.min / 200) * 100}%`,
                            right: `${100 - (filters.price.max / 200) * 100}%`,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 2
                        }}></div>

                        {/* Left Thumb Input */}
                        <input
                            type="range"
                            name="min"
                            min="0"
                            max="200"
                            value={filters.price.min}
                            onChange={(e) => {
                                const val = Math.min(Number(e.target.value), filters.price.max - 1);
                                setFilters({ ...filters, price: { ...filters.price, min: val } });
                            }}
                            className="thumb thumb-left"
                            style={{
                                zIndex: filters.price.min > 180 ? 5 : 3,
                                position: 'absolute',
                                width: '100%',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                margin: 0,
                                left: 0
                            }}
                        />

                        {/* Right Thumb Input */}
                        <input
                            type="range"
                            name="max"
                            min="0"
                            max="200"
                            value={filters.price.max}
                            onChange={(e) => {
                                const val = Math.max(Number(e.target.value), filters.price.min + 1);
                                setFilters({ ...filters, price: { ...filters.price, max: val } });
                            }}
                            className="thumb thumb-right"
                            style={{
                                zIndex: 4,
                                position: 'absolute',
                                width: '100%',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                margin: 0,
                                left: 0
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                        <div style={{
                            border: '1px solid #ddd',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            color: '#666',
                            background: '#f9f9f9'
                        }}>
                            {filters.price.min}€
                        </div>
                        <div style={{
                            border: '1px solid #ddd',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            color: '#666',
                            background: '#f9f9f9'
                        }}>
                            {filters.price.max}€
                        </div>
                    </div>
                </div>

                {/* Gender/Category Filter */}
                <div style={{ marginBottom: '2.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#555' }}>Gênero</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {['homem', 'mulher', 'crianca'].map(cat => (
                            <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', color: '#666', fontSize: '1rem' }}>
                                <input
                                    type="checkbox"
                                    value={cat}
                                    checked={filters.categories?.includes(cat)}
                                    onChange={handleCategoryChange}
                                    style={{ accentColor: 'var(--color-teal)', width: '18px', height: '18px' }}
                                />
                                <span style={{ textTransform: 'capitalize' }}>{cat === 'crianca' ? 'Criança' : cat}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Subcategory/Style Filter */}
                <div style={{ marginBottom: '2.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#555' }}>Estilo</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {['Botas', 'Desportivo', 'Lonas', 'Sandálias'].map(sc => (
                            <label key={sc} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', color: '#666', fontSize: '1rem' }}>
                                <input
                                    type="checkbox"
                                    value={sc}
                                    checked={filters.subcategories?.includes(sc)}
                                    onChange={handleSubCategoryChange}
                                    style={{ accentColor: 'var(--color-teal)', width: '18px', height: '18px' }}
                                />
                                <span>{sc}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Size Filter */}
                <div style={{ marginBottom: '2.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#555' }}>Tamanho</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {['criança', 'adulto'].map(sizeCat => (
                            <label key={sizeCat} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', color: '#666', fontSize: '1rem' }}>
                                <input
                                    type="checkbox"
                                    value={sizeCat}
                                    checked={filters.sizes?.includes(sizeCat)}
                                    onChange={(e) => handleSizeChange(e.target.value)}
                                    style={{ accentColor: 'var(--color-teal)', width: '18px', height: '18px' }}
                                />
                                <span style={{ textTransform: 'capitalize' }}>{sizeCat}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
