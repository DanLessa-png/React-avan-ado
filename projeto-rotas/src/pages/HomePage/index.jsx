import './style.css';
import { Link } from 'react-router-dom';

export function HomePage(){
    return (
        <section className="home-hero">
            <div className="hero-inner">
                <div className="hero-content">
                    <h1>Contabilidade que impulsiona seu negócio</h1>
                    <p className="lead">Soluções fiscais, contábeis e consultoria financeira pensadas para pequenas e médias empresas. Simples, confiável e com atendimento dedicado.</p>

                    <div className="hero-ctas">
                        <Link to="/contato" className="btn-primary">Fale Conosco</Link>
                        <a href="#services" className="btn-secondary">Nossos Serviços</a>
                    </div>
                </div>

                <div className="hero-aside card">
                    <h3>Comece agora</h3>
                    <p className="muted">Agende uma avaliação gratuita com nossa equipe e descubra como melhorar seus resultados financeiros.</p>
                    <Link to="/contato" className="btn-primary">Agendar Avaliação</Link>
                </div>
            </div>

            <div id="services" className="features">
                <div className="feature card">
                    <h4>Contabilidade Fiscal</h4>
                    <p className="muted">Rotinas fiscais, apuração de impostos e obrigações acessórias com precisão técnica.</p>
                </div>
                <div className="feature card">
                    <h4>Gestão Financeira</h4>
                    <p className="muted">Relatórios, fluxo de caixa e KPIs para tomada de decisão segura.</p>
                </div>
                <div className="feature card">
                    <h4>Consultoria</h4>
                    <p className="muted">Planejamento tributário e orientação estratégica para crescimento sustentável.</p>
                </div>
            </div>
        </section>
    )
}

export default HomePage;