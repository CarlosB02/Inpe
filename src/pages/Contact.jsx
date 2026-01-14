import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Facebook, Instagram, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div style={{ backgroundColor: '#FDFBF7', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 'calc(80px + 4rem) 2rem 4rem', marginTop: '-80px' }}>
            <div style={{
                maxWidth: '1200px',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '6rem',
                alignItems: 'start'
            }}>

                {/* Left Side - Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 style={{
                        color: 'var(--color-primary)', // Assuming this is the distinct barefoot yellow/orange
                        fontSize: '2.5rem',
                        marginBottom: '2rem',
                        // fontFamily: 'serif', // Removed to use global Nunito
                        fontWeight: 'normal'
                    }}>
                        Estámos sempre disponíveis!
                    </h1>

                    <p style={{
                        color: '#666',
                        marginBottom: '4rem',
                        lineHeight: 1.8,
                        fontSize: '1.1rem',
                        maxWidth: '450px'
                    }}>
                        Tem dúvidas sobre o tamanho ideal ou sobre os nossos materiais?
                        Estamos aqui para ajudar em cada passo da sua jornada barefoot.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

                        {/* Email */}
                        <div style={infoItemStyle}>
                            <div style={iconContainerStyle}>
                                <Mail size={24} color="var(--color-primary)" />
                            </div>
                            <div>
                                <h3 style={labelStyle}>Email</h3>
                                <a href="mailto:geral@inpe.pt" style={valueStyle}>geral@inpe.pt</a>
                            </div>
                        </div>

                        {/* Address */}
                        <div style={infoItemStyle}>
                            <div style={iconContainerStyle}>
                                <MapPin size={24} color="var(--color-primary)" />
                            </div>
                            <div>
                                <h3 style={labelStyle}>Morada</h3>
                                <p style={valueStyle}>Morada a definir</p>
                            </div>
                        </div>

                        {/* Socials */}
                        <div style={infoItemStyle}>
                            <div style={iconContainerStyle}>
                                <Instagram size={24} color="var(--color-primary)" />
                            </div>
                            <div>
                                <h3 style={labelStyle}>Redes Sociais</h3>
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                                    <a href="#" style={socialLinkStyle} aria-label="Facebook">
                                        <Facebook size={24} />
                                    </a>
                                    <a href="#" style={socialLinkStyle} aria-label="Instagram">
                                        <Instagram size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>

                {/* Right Side - Form */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        backgroundColor: 'white',
                        padding: '3rem',
                        borderRadius: '24px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem'
                    }}
                >
                    <div>
                        <label style={inputLabelStyle}>Nome</label>
                        <input type="text" style={inputStyle} placeholder="Seu nome" />
                    </div>
                    <div>
                        <label style={inputLabelStyle}>Email</label>
                        <input type="email" style={inputStyle} placeholder="seu@email.com" />
                    </div>
                    <div>
                        <label style={inputLabelStyle}>Mensagem</label>
                        <textarea rows="4" style={{ ...inputStyle, resize: 'vertical' }} placeholder="Como podemos ajudar?"></textarea>
                    </div>

                    <button type="button" style={buttonStyle}>
                        <span>Enviar Mensagem</span>
                        <Send size={18} />
                    </button>
                </motion.form>

            </div>

            {/* Map Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    height: '450px',
                    marginTop: '6rem',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
                }}
            >
                <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://maps.google.com/maps?q=Vouzela&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    title="Localização Vouzela"
                ></iframe>
            </motion.div>
        </div>
    );
};

// Styles
const infoItemStyle = {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'flex-start'
};

const iconContainerStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'rgba(235, 175, 108, 0.1)', // Light primary color bg
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
};

const labelStyle = {
    color: '#999',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '0.5rem',
    fontWeight: 600
};

const valueStyle = {
    color: 'var(--color-text)',
    fontSize: '1.1rem',
    textDecoration: 'none',
    fontWeight: 500
};

const socialLinkStyle = {
    color: 'var(--color-text)',
    transition: 'color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const inputLabelStyle = {
    display: 'block',
    marginBottom: '0.8rem',
    color: '#333',
    fontWeight: 500,
    fontSize: '0.95rem'
};

const inputStyle = {
    width: '100%',
    padding: '16px 20px',
    borderRadius: '12px',
    border: '1px solid #eee',
    backgroundColor: '#f9f9f9',
    fontFamily: 'inherit',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none'
};

const buttonStyle = {
    padding: '16px 32px',
    backgroundColor: 'var(--color-primary)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.8rem',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    marginTop: '1rem'
};

export default Contact;
