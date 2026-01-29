import React from 'react';

const Hero = () => {
    const styles = {
        section: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            paddingTop: '60px', // for navbar
            overflow: 'hidden',
        },
        bgGlow: {
            position: 'absolute',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(5,5,5,0) 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: -1,
            pointerEvents: 'none',
        },
        content: {
            textAlign: 'center',
            maxWidth: '800px',
        },
        badge: {
            display: 'inline-block',
            padding: '0.4rem 1rem',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '20px',
            color: 'var(--primary-color)',
            fontSize: '0.9rem',
            marginBottom: '1.5rem',
            fontWeight: '600',
        }
    };

    return (
        <section style={styles.section}>
            <div style={styles.bgGlow}></div>
            <div className="container" style={styles.content}>
                <span style={styles.badge} className="animate-fade-in">AI-POWERED MENTAL HEALTH</span>
                <h1 className="animate-fade-in" style={{ marginBottom: '1.5rem', animationDelay: '0.1s' }}>
                    Detect Early Signs.<br />
                    Protect Mental Analysis.
                </h1>
                <p className="animate-fade-in" style={{ marginBottom: '2.5rem', animationDelay: '0.2s', fontSize: '1.25rem' }}>
                    Our advanced AI analyzes language patterns to identify potential mental health risks in real-time. Secure, private, and always available.
                </p>
                <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <a href="#analyzer" className="btn btn-primary" style={{ marginRight: '1rem' }}>Try Risk Analyzer</a>
                    <a href="#features" className="btn btn-outline">Learn How It Works</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
