import './style.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function HomePage(){
    const [stats, setStats] = useState({
        clientes: 0,
        economia: 0,
        anos: 0
    });

    // Animate numbers on scroll
    useEffect(() => {
        const animateValue = (start, end, duration) => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                setStats(prev => ({
                    clientes: Math.floor(progress * 250),
                    economia: Math.floor(progress * 32),
                    anos: Math.floor(progress * 15)
                }));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateValue(0, 100, 2000);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );

        const statsSection = document.querySelector('.stats');
        if (statsSection) observer.observe(statsSection);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section className="home-hero">
                <div className="hero-inner">
                    <div className="hero-content">
                        <span className="badge">Contabilidade Digital</span>
                        <h1>Contabilidade que impulsiona seu negócio</h1>
                        <p className="lead">Soluções fiscais, contábeis e consultoria financeira pensadas para pequenas e médias empresas. Simples, confiável e com atendimento dedicado.</p>

                        <div className="hero-ctas">
                            <Link to="/contato" className="btn-primary">Fale Conosco</Link>
                            <a href="#services" className="btn-secondary">Nossos Serviços</a>
                        </div>
                    </div>

                    <div className="hero-aside card">
                        <div className="card-glow"></div>
                        <h3>Comece agora</h3>
                        <p className="muted">Agende uma avaliação gratuita com nossa equipe e descubra como melhorar seus resultados financeiros.</p>
                        <Link to="/contato" className="btn-primary">Agendar Avaliação</Link>
                    </div>
                </div>
            </section>

            <section className="stats">
                <div className="stat-item">
                    <span className="stat-number">{stats.clientes}+</span>
                    <span className="stat-label">Clientes Ativos</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">R${stats.economia}M+</span>
                    <span className="stat-label">Economia Gerada</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">{stats.anos}+</span>
                    <span className="stat-label">Anos no Mercado</span>
                </div>
            </section>

            <section id="services" className="features">
                <h2>Nossos Serviços</h2>
                <div className="features-grid">
                    <div className="feature card">
                        <div className="feature-icon">📊</div>
                        <h4>Contabilidade Fiscal</h4>
                        <p className="muted">Rotinas fiscais, apuração de impostos e obrigações acessórias com precisão técnica.</p>
                    </div>
                    <div className="feature card">
                        <div className="feature-icon">💰</div>
                        <h4>Gestão Financeira</h4>
                        <p className="muted">Relatórios, fluxo de caixa e KPIs para tomada de decisão segura.</p>
                    </div>
                    <div className="feature card">
                        <div className="feature-icon">🎯</div>
                        <h4>Consultoria</h4>
                        <p className="muted">Planejamento tributário e orientação estratégica para crescimento sustentável.</p>
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <h2>O que nossos clientes dizem</h2>
                <div className="testimonials-grid">
                    <div className="testimonial card">
                        <div className="testimonial-content">
                            <p>"A equipe é extremamente profissional e nos ajudou a reduzir custos significativamente."</p>
                        </div>
                        <footer className="testimonial-footer">
                            <strong>Maria Silva</strong>
                            <span className="muted">CEO, Tech Solutions</span>
                        </footer>
                    </div>
                    <div className="testimonial card">
                        <div className="testimonial-content">
                            <p>"Excelente suporte técnico e atendimento personalizado. Recomendo fortemente!"</p>
                        </div>
                        <footer className="testimonial-footer">
                            <strong>João Santos</strong>
                            <span className="muted">Diretor, Santos & Cia</span>
                        </footer>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage;