import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const styles = {
        nav: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: '1.2rem 0',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
        },
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: '700',
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textDecoration: 'none',
        },
        links: {
            display: 'flex',
            gap: '2rem',
        },
        link: {
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.3s',
        },
        linkHover: {
            color: 'var(--text-primary)',
        }
    };

    return (
        <nav style={styles.nav}>
            <div className="container" style={styles.container}>
                <a href="#" style={styles.logo}>MindGuard AI</a>
                <div style={styles.links}>
                    <a href="#features" style={styles.link}>Features</a>
                    <a href="#resources" style={styles.link}>Resources</a>
                    <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>Get Help</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
