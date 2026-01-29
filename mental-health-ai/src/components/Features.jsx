import React from 'react';

const Features = () => {
    const features = [
        {
            title: "Natural Language Processing",
            description: "Advanced NLP models trained on clinical datasets to understand nuances in expression.",
            icon: "🧠"
        },
        {
            title: "Sentiment Analysis",
            description: "Real-time emotional tracking to detect sudden shifts in mood or outlook.",
            icon: "📊"
        },
        {
            title: "Privacy First",
            description: "All analysis is done locally or via encrypted channels. Your data never leaves the secure tunnel.",
            icon: "🔒"
        },
        {
            title: "24/7 Availability",
            description: "Mental health crisis doesn't follow a schedule. Our tool is always ready to listen.",
            icon: "🕒"
        }
    ];

    const styles = {
        section: {
            padding: '6rem 0',
            background: 'var(--bg-color)',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginTop: '3rem',
        },
        card: {
            padding: '2rem',
            background: 'var(--surface-color)',
            borderRadius: '16px',
            border: '1px solid var(--border-color)',
            transition: 'transform 0.3s ease, border-color 0.3s ease',
            cursor: 'default',
        },
        icon: {
            fontSize: '2.5rem',
            marginBottom: '1rem',
            display: 'block',
        },
        cardTitle: {
            fontSize: '1.25rem',
            marginBottom: '0.8rem',
            color: 'var(--text-primary)',
        }
    };

    return (
        <section id="features" style={styles.section}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2>Why Choose MindGuard?</h2>
                    <p>Leveraging cutting-edge AI to provide proactive mental health support.</p>
                </div>

                <div style={styles.grid}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            style={styles.card}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--primary-color)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--border-color)';
                            }}
                        >
                            <span style={styles.icon}>{feature.icon}</span>
                            <h3 style={styles.cardTitle}>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
