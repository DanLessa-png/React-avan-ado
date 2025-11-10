import './style.css';

function MedicamentosPage() {
    const medicamentos = [
        {
            categoria: "Anti-inflamatórios",
            items: [
                { nome: "Ibuprofeno 600mg", descricao: "Anti-inflamatório não esteroidal", preco: "R$ 15,90" },
                { nome: "Nimesulida 100mg", descricao: "Anti-inflamatório e analgésico", preco: "R$ 22,50" },
                { nome: "Diclofenaco 50mg", descricao: "Anti-inflamatório para dores agudas", preco: "R$ 12,80" }
            ]
        },
        {
            categoria: "Analgésicos",
            items: [
                { nome: "Paracetamol 750mg", descricao: "Alívio da dor e febre", preco: "R$ 10,50" },
                { nome: "Dipirona 500mg", descricao: "Analgésico e antitérmico", preco: "R$ 8,90" },
                { nome: "Dorflex", descricao: "Para dores musculares", preco: "R$ 18,70" }
            ]
        },
        {
            categoria: "Antigripais",
            items: [
                { nome: "Resfenol", descricao: "Combate sintomas de gripe e resfriado", preco: "R$ 25,90" },
                { nome: "Cimegripe", descricao: "Alívio dos sintomas da gripe", preco: "R$ 19,90" },
                { nome: "Vick VapoRub", descricao: "Descongestionante tópico", preco: "R$ 28,50" }
            ]
        },
        {
            categoria: "Vitaminas e Suplementos",
            items: [
                { nome: "Vitamina C 1000mg", descricao: "Suporte ao sistema imunológico", preco: "R$ 35,90" },
                { nome: "Complexo B", descricao: "Suplemento vitamínico", preco: "R$ 42,50" },
                { nome: "Ômega 3", descricao: "Saúde cardiovascular", preco: "R$ 65,90" }
            ]
        }
    ];

    return (
        <div className="medicamentos-page">
            <section className="hero">
                <h1>Medicamentos</h1>
                <p>Encontre os medicamentos que você precisa com os melhores preços</p>
            </section>

            <section className="aviso">
                <div className="aviso-content">
                    <span className="icon">⚠️</span>
                    <p>
                        Medicamentos sujeitos à prescrição médica necessitam de receita.
                        Consulte sempre um profissional de saúde antes de utilizar qualquer medicamento.
                    </p>
                </div>
            </section>

            <div className="medicamentos-container">
                {medicamentos.map((categoria, index) => (
                    <section key={index} className="categoria-section">
                        <h2>{categoria.categoria}</h2>
                        <div className="medicamentos-grid">
                            {categoria.items.map((med, medIndex) => (
                                <div key={medIndex} className="medicamento-card">
                                    <div className="medicamento-info">
                                        <h3>{med.nome}</h3>
                                        <p>{med.descricao}</p>
                                        <span className="preco">{med.preco}</span>
                                    </div>
                                    <button className="btn-consultar">
                                        Consultar Disponibilidade
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <section className="contato-farmaceutico">
                <h2>Precisa de Orientação?</h2>
                <p>Nossos farmacêuticos estão disponíveis 24h para tirar suas dúvidas</p>
                <button className="btn-contato">Falar com Farmacêutico</button>
            </section>
        </div>
    );
}

export default MedicamentosPage;