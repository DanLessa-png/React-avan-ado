import './style.css';

function SobreNosPage() {
    return (
        <div className='sobre-nos'>
            <section className='historia'>
                <h1>Nossa História</h1>
                <hr />
                <p>
                    Desde 1998, a PharmaCare Plus tem sido sinônimo de excelência em cuidados farmacêuticos. 
                    Nossa missão é proporcionar saúde e bem-estar à comunidade, oferecendo produtos de qualidade 
                    e atendimento humanizado 24 horas por dia.
                </p>
            </section>

            <section className='diferenciais'>
                <h2>Por que escolher a PharmaCare Plus?</h2>
                <div className="grid-diferenciais">
                    <div className="diferencial-item">
                        <span className="icon">⚕️</span>
                        <h3>Equipe Especializada</h3>
                        <p>Farmacêuticos altamente qualificados prontos para atendê-lo</p>
                    </div>
                    <div className="diferencial-item">
                        <span className="icon">🏆</span>
                        <h3>Qualidade Garantida</h3>
                        <p>Produtos de marcas reconhecidas e certificadas pela ANVISA</p>
                    </div>
                    <div className="diferencial-item">
                        <span className="icon">⏰</span>
                        <h3>Atendimento 24h</h3>
                        <p>Sempre disponíveis quando você mais precisa</p>
                    </div>
                    <div className="diferencial-item">
                        <span className="icon">🚚</span>
                        <h3>Entrega Rápida</h3>
                        <p>Serviço de entrega em domicílio para sua comodidade</p>
                    </div>
                </div>
            </section>

            <section className='compromisso'>
                <h2>Nosso Compromisso</h2>
                <p>
                    Mantemos o compromisso com a saúde e bem-estar de nossos clientes, oferecendo:
                </p>
                <ul>
                    <li>Amplo estoque de medicamentos genéricos e de marca</li>
                    <li>Atendimento farmacêutico personalizado</li>
                    <li>Preços competitivos e várias formas de pagamento</li>
                    <li>Programa de fidelidade com descontos exclusivos</li>
                    <li>Serviços de atenção farmacêutica</li>
                    <li>Aferição de pressão e glicemia</li>
                </ul>
                <p>
                    Nosso maior objetivo é ser mais que uma farmácia: queremos ser parceiros na sua jornada 
                    de saúde, oferecendo todo o suporte necessário para seu bem-estar e de sua família.
                </p>
            </section>
        </div>
    );
}

export default SobreNosPage;
