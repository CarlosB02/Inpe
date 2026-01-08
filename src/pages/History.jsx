import React from 'react';
import { motion } from 'framer-motion';
import { Footprints, Heart, TreeDeciduous, Users } from 'lucide-react';

const History = () => {
    return (
        <div style={{ paddingBottom: '6rem', overflowX: 'hidden' }}>

            {/* Hero Section */}
            <section style={{
                padding: '8rem 2rem 6rem',
                textAlign: 'center',
                backgroundColor: 'var(--color-background)',
                backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(244, 196, 102, 0.1) 0%, transparent 20%)',
                position: 'relative'
            }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        display: 'inline-block',
                        marginBottom: '1rem',
                        padding: '0.5rem 1rem',
                        borderRadius: 'full',
                        backgroundColor: 'rgba(255,255,255,0.5)',
                        color: 'var(--color-primary)',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        letterSpacing: '1px'
                    }}
                >
                    EST. 2023
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ color: 'var(--color-primary)', fontSize: '3.5rem', marginBottom: '1.5rem' }}
                >
                    A Nossa Pegada
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--color-secondary)', lineHeight: 1.6 }}
                >
                    Não é apenas sobre sapatos. É sobre dar liberdade a cada passo e deixar as crianças explorarem o mundo como a natureza planeou.
                </motion.p>
            </section>

            {/* Timeline Section */}
            <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem', position: 'relative' }}>
                <h2 style={sectionTitleStyle}>O Nosso Caminho</h2>

                <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '3px solid #eee' }}>
                    {[
                        { year: '2023', title: 'O Início', text: 'Tudo começou na sala de estar, observando os nossos filhos a tentar correr com sapatos rígidos.' },
                        { year: '2023 - Out', title: 'Primeiro Protótipo', text: 'Desenhámos o primeiro modelo "Nuvem", focado 100% na flexibilidade.' },
                        { year: '2024 - Jan', title: 'Lançamento Oficial', text: 'Abertura da loja online e as primeiras 100 encomendas enviadas com carinho.' },
                        { year: 'Hoje', title: 'Crescendo Juntos', text: 'Já calçamos milhares de pezinhos e continuamos a inovar a cada estação.' }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            style={{ marginBottom: '4rem', position: 'relative' }}
                        >
                            <div style={{
                                position: 'absolute',
                                left: '-2.6rem',
                                top: '0',
                                width: '20px',
                                height: '20px',
                                backgroundColor: 'var(--color-primary)',
                                borderRadius: '50%',
                                outline: '4px solid white'
                            }} />
                            <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1.1rem' }}>{item.year}</span>
                            <h3 style={{ color: 'var(--color-deep-blue)', margin: '0.5rem 0' }}>{item.title}</h3>
                            <p style={{ color: 'var(--color-text)', lineHeight: 1.6 }}>{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Philosophy/Values (Updated Visuals) */}
            <section style={{ backgroundColor: '#fff', padding: '6rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={sectionTitleStyle}>A Nossa Essência</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {[
                            { icon: <Footprints size={32} />, title: 'Liberdade', text: 'Respeitamos a anatomia natural do pé.' },
                            { icon: <Heart size={32} />, title: 'Carinho', text: 'Cada par é feito a pensar no conforto absoluto.' },
                            { icon: <TreeDeciduous size={32} />, title: 'Sustentabilidade', text: 'Materiais amigos do ambiente sempre que possível.' }
                        ].map((val, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                style={{
                                    textAlign: 'center',
                                    padding: '3rem',
                                    backgroundColor: 'var(--color-background)',
                                    borderRadius: '24px',
                                    transition: 'box-shadow 0.3s'
                                }}
                            >
                                <div style={{
                                    width: '70px',
                                    height: '70px',
                                    margin: '0 auto 1.5rem',
                                    backgroundColor: 'white',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--color-primary)',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                                }}>
                                    {val.icon}
                                </div>
                                <h3 style={{ color: 'var(--color-deep-blue)', marginBottom: '1rem' }}>{val.title}</h3>
                                <p style={{ color: 'var(--color-secondary)' }}>{val.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-winter-blue)', color: 'white', textAlign: 'center' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
                    {[
                        { num: '5k+', label: 'Pés Felizes' },
                        { num: '12', label: 'Coleções' },
                        { num: '100%', label: 'Amor' }
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ type: 'spring', stiffness: 100, delay: idx * 0.1 }}
                        >
                            <div style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '0.5rem', color: '#fff' }}>{stat.num}</div>
                            <div style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.9 }}>{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Team/Family Section */}
            <section style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={sectionTitleStyle}>Quem Somos</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                    {[
                        { name: 'Ana', role: 'Fundadora & Mãe', initials: 'A' },
                        { name: 'João', role: 'Design de Produto', initials: 'J' }
                    ].map((member, idx) => (
                        <motion.div key={idx} whileHover={{ scale: 1.05 }}>
                            <div style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                backgroundColor: '#ddd', // Placeholder for Image
                                margin: '0 auto 1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '4rem',
                                fontWeight: 'bold',
                                backgroundImage: `linear-gradient(135deg, var(--color-primary), var(--color-accent-brown))`
                            }}>
                                {member.initials}
                            </div>
                            <h3 style={{ color: 'var(--color-deep-blue)' }}>{member.name}</h3>
                            <p style={{ color: 'var(--color-secondary)' }}>{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
};

const sectionTitleStyle = {
    textAlign: 'center',
    color: 'var(--color-primary)',
    fontSize: '2.5rem',
    marginBottom: '4rem'
};

export default History;
