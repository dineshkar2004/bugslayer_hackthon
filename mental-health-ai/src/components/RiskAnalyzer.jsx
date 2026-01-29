import React, { useState } from 'react';

const RiskAnalyzer = () => {
    const [text, setText] = useState('');
    const [analyzing, setAnalyzing] = useState(false);
    const [result, setResult] = useState(null);

    const handleAnalyze = () => {
        if (!text.trim()) return;

        setAnalyzing(true);
        setResult(null);

        // Simulate AI processing
        setTimeout(() => {
            const riskScore = Math.random();
            let riskLevel = 'Low';
            let color = '#10b981';
            let advice = 'Your mental state appears stable. Continue maintaining a healthy lifestyle.';

            if (riskScore > 0.7) {
                riskLevel = 'High';
                color = '#ef4444';
                advice = 'We detected multiple indicators of distress. We strongly recommend speaking with a professional.';
            } else if (riskScore > 0.4) {
                riskLevel = 'Moderate';
                color = '#f59e0b';
                advice = 'You show some signs of stress or anxiety. Consider mindfulness exercises or talking to a friend.';
            }

            setResult({
                level: riskLevel,
                score: Math.floor(riskScore * 100),
                color: color,
                advice: advice
            });
            setAnalyzing(false);
        }, 2000);
    };

    const styles = {
        section: {
            padding: '4rem 0',
            background: 'var(--surface-color)',
        },
        container: {
            maxWidth: '800px',
            margin: '0 auto',
        },
        header: {
            textAlign: 'center',
            marginBottom: '3rem',
        },
        textarea: {
            width: '100%',
            height: '200px',
            background: 'var(--bg-color)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '1.5rem',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            fontFamily: 'inherit',
            resize: 'vertical',
            outline: 'none',
            marginBottom: '1.5rem',
            transition: 'border-color 0.3s',
        },
        resultCard: {
            marginTop: '2rem',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '12px',
            padding: '2rem',
            borderLeft: result ? `4px solid ${result.color}` : 'none',
            animation: 'fadeIn 0.5s ease',
        },
        progressBar: {
            height: '8px',
            background: 'var(--bg-color)',
            borderRadius: '4px',
            marginTop: '1rem',
            overflow: 'hidden',
        },
        progressFill: {
            height: '100%',
            width: `${result ? result.score : 0}%`,
            background: result ? result.color : 'transparent',
            transition: 'width 1s ease',
        }
    };

    return (
        <section id="analyzer" style={styles.section}>
            <div className="container" style={styles.container}>
                <div style={styles.header}>
                    <h2>AI Risk Assessment</h2>
                    <p>Describe how you're feeling lately. Our AI will analyze the text for risk markers.</p>
                </div>

                <div className="glass-panel">
                    <textarea
                        style={styles.textarea}
                        placeholder="I've been feeling..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                    />

                    <button
                        className="btn btn-primary"
                        onClick={handleAnalyze}
                        disabled={analyzing || !text.trim()}
                        style={{ width: '100%', opacity: analyzing ? 0.7 : 1 }}
                    >
                        {analyzing ? 'Analyzing Patterns...' : 'Analyze Risk'}
                    </button>

                    {result && (
                        <div style={styles.resultCard}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h3 style={{ margin: 0 }}>Risk Level: <span style={{ color: result.color }}>{result.level}</span></h3>
                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: result.color }}>{result.score}%</span>
                            </div>
                            <p style={{ color: 'var(--text-primary)' }}>{result.advice}</p>
                            <div style={styles.progressBar}>
                                <div style={styles.progressFill}></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default RiskAnalyzer;
