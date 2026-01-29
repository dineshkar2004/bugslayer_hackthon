import React from 'react';

const Footer = () => {
    const styles = {
        footer: {
            padding: '3rem 0',
            background: 'var(--surface-color)',
            borderTop: '1px solid var(--border-color)',
            marginTop: 'auto',
        },
        content: {
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
        },
        brand: {
            maxWidth: '300px',
        },
        links: {
            display: 'flex',
            gap: '3rem',
        },
        column: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
        },
        link: {
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontSize: '0.9rem',
        },
        copyright: {
            marginTop: '3rem',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '0.85rem',
            borderTop: '1px solid var(--border-color)',
            paddingTop: '1.5rem',
        }
    };

    return (
        <footer style={styles.footer}>
            <div className="container">
                <div style={styles.content}>
                    <div style={styles.brand}>
                        <h3 style={{ marginBottom: '1rem', background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>MindGuard AI</h3>
                        <p style={{ fontSize: '0.9rem' }}>Empowering mental wellness through artificial intelligence and early detection.</p>
                    </div>

                    <div style={styles.links}>
                        <div style={styles.column}>
                            <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Product</h4>
                            <a href="#" style={styles.link}>Features</a>
                            <a href="#" style={styles.link}>Technology</a>
                            <a href="#" style={styles.link}>Pricing</a>
                        </div>
                        <div style={styles.column}>
                            <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Resources</h4>
                            <a href="#" style={styles.link}>Blog</a>
                            <a href="#" style={styles.link}>Crisis Support</a>
                            <a href="#" style={styles.link}>Documentation</a>
                        </div>
                        <div style={styles.column}>
                            <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Legal</h4>
                            <a href="#" style={styles.link}>Privacy Policy</a>
                            <a href="#" style={styles.link}>Terms of Service</a>
                            <a href="#" style={styles.link}>Cookie Policy</a>
                        </div>
                    </div>
                </div>

                <div style={styles.copyright}>
                    &copy; 2026 MindGuard AI. All rights reserved. Disclaimer: This tool is not a substitute for professional medical advice.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
