import './style.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function HomePage(){
    const [stats, setStats] = useState({
        clientes: 0,
        produtos: 0,
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
                    clientes: Math.floor(progress * 5000),
                    produtos: Math.floor(progress * 1500),
                    anos: Math.floor(progress * 25)
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
                        <span className="badge">Farmácia de Confiança</span>
                        <h1>Cuidando da sua saúde com dedicação</h1>
                        <p className="lead">Medicamentos, produtos de saúde e bem-estar com atendimento personalizado 24 horas. Sua saúde em primeiro lugar.</p>

                        <div className="hero-ctas">
                            <Link to="/medicamentos" className="btn-primary">Ver Medicamentos</Link>
                            <a href="#services" className="btn-secondary">Nossos Serviços</a>
                        </div>
                    </div>

                    <div className="hero-aside card">
                        <div className="card-glow"></div>
                        <h3>Entrega em Casa</h3>
                        <p className="muted">Receba seus medicamentos no conforto da sua casa. Entrega rápida e segura para toda a cidade.</p>
                        <Link to="/contato" className="btn-primary">Solicitar Entrega</Link>
                    </div>
                </div>
            </section>

            <section className="stats">
                <div className="stat-item">
                    <span className="stat-number">{stats.clientes}+</span>
                    <span className="stat-label">Clientes Atendidos</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">{stats.produtos}+</span>
                    <span className="stat-label">Produtos Disponíveis</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">{stats.anos}+</span>
                    <span className="stat-label">Anos de Experiência</span>
                </div>
            </section>

            <section id="services" className="features">
                <h2>Nossos Serviços</h2>
                <div className="features-grid">
                    <div className="feature card">
                        <div className="feature-icon">�</div>
                        <h4>Medicamentos</h4>
                        <p className="muted">Ampla variedade de medicamentos genéricos e de marca com os melhores preços.</p>
                    </div>
                    <div className="feature card">
                        <div className="feature-icon">�</div>
                        <h4>Entrega 24h</h4>
                        <p className="muted">Entrega rápida e segura de medicamentos em toda a cidade, 24 horas por dia.</p>
                    </div>
                    <div className="feature card">
                        <div className="feature-icon">👨‍⚕️</div>
                        <h4>Atenção Farmacêutica</h4>
                        <p className="muted">Orientação profissional e acompanhamento farmacêutico personalizado.</p>
                    </div>
                    <div className="feature card">
                        <div className="feature-icon">💉</div>
                        <h4>Aplicação de Injetáveis</h4>
                        <p className="muted">Serviço de aplicação de medicamentos injetáveis por profissionais capacitados.</p>
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <h2>O que nossos clientes dizem</h2>
                <div className="testimonials-grid">
                    <div className="testimonial card">
                        <div className="testimonial-content">
                            <p>"Ótimo atendimento e preços justos. A entrega em casa é muito prática e pontual!"</p>
                        </div>
                        <footer className="testimonial-footer">
                            <strong>Ana Paula</strong>
                            <span className="muted">Cliente desde 2020</span>
                        </footer>
                    </div>
                    <div className="testimonial card">
                        <div className="testimonial-content">
                            <p>"Os farmacêuticos são muito atenciosos e sempre tiram todas as minhas dúvidas."</p>
                        </div>
                        <footer className="testimonial-footer">
                            <strong>Carlos Eduardo</strong>
                            <span className="muted">Cliente desde 2019</span>
                        </footer>
                    </div>
                    <div className="testimonial card">
                        <div className="testimonial-content">
                            <p>"Melhor farmácia da região! Sempre encontro todos os medicamentos que preciso."</p>
                        </div>
                        <footer className="testimonial-footer">
                            <strong>Marina Costa</strong>
                            <span className="muted">Cliente desde 2021</span>
                        </footer>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage;