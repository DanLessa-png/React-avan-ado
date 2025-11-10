import './style.css';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-section">
                    <h3>Institucional</h3>
                    <div className="company-info">
                        <strong className="brand-name">PharmaCare Plus</strong>
                        <p>CNPJ: 12.345.678/0001-99</p>
                        <p>Autorização Anvisa: 1.23456.7</p>
                    </div>
                    <div className="farmaceutico">
                        <strong>Responsável Técnico</strong>
                        <p>Dr. João Silva</p>
                        <p>CRF/BA: 12345</p>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Atendimento</h3>
                    <div className="horarios">
                        <div className="regular-hours">
                            <p><strong>Loja Física</strong></p>
                            <p>Segunda a Sábado</p>
                            <p>07:00 às 22:00</p>
                            <p>Domingo e Feriados</p>
                            <p>08:00 às 20:00</p>
                        </div>
                        <p className="destaque">Plantão 24h</p>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Menu Rápido</h3>
                    <nav>
                        <Link to="/medicamentos">💊 Medicamentos</Link>
                        <Link to="/sobre">🏥 Nossa Farmácia</Link>
                        <Link to="/contato">📞 Atendimento</Link>
                    </nav>
                    <div className="services-links">
                        <p><strong>Serviços:</strong></p>
                        <Link to="/medicamentos">Genéricos</Link>
                        <Link to="/contato">Aplicação de Injetáveis</Link>
                        <Link to="/contato">Aferição de Pressão</Link>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Contato</h3>
                    <div className="emergency-contact">
                        <p><strong>Emergência 24h</strong></p>
                        <p className="telefone">📞 (71) 4002-8922</p>
                    </div>
                    <div className="contact-info">
                        <p>💬 WhatsApp</p>
                        <p className="whatsapp">(71) 98765-4321</p>
                        <address>
                            <p><strong>Endereço:</strong></p>
                            Rua A, 123 - Centro<br />
                            Salvador - Bahia<br />
                            CEP: 40000-000
                        </address>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="social-links">
                    <a href="#" aria-label="Facebook">📱</a>
                    <a href="#" aria-label="Instagram">📷</a>
                    <a href="#" aria-label="WhatsApp">💬</a>
                </div>
                <div className="copy">
                    &copy; {new Date().getFullYear()} PharmaCare Plus. Todos os direitos reservados.
                    <br />
                    <small>Medicamentos sujeitos à prescrição - Consulte seu médico ou farmacêutico.</small>
                </div>
            </div>
        </footer>
    );
}

export default Footer ;