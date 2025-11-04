import './style.css';
import { useState } from 'react';

export function FaleConosco(){
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });
    
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.nome.trim()) {
            newErrors.nome = 'Nome é obrigatório';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email é obrigatório';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Email inválido';
        }
        
        if (!formData.mensagem.trim()) {
            newErrors.mensagem = 'Mensagem é obrigatória';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setSending(true);
        
        // Simular envio
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitted(true);
            setFormData({
                nome: '',
                email: '',
                telefone: '',
                mensagem: ''
            });
        } catch (error) {
            setErrors({ submit: 'Erro ao enviar. Tente novamente.' });
        } finally {
            setSending(false);
        }
    };

    return(
        <section className='contato'>
            <h1>Fale Conosco</h1>
            <hr />
            <p>
                Entre em contato conosco para obter mais informações sobre nossos serviços de contabilidade. Nossa equipe está pronta para ajudar você a simplificar a gestão financeira do seu negócio.
            </p>

            {submitted ? (
                <div className="success-message card">
                    <div className="success-icon">✓</div>
                    <h3>Mensagem Enviada!</h3>
                    <p>Obrigado pelo seu contato. Retornaremos em breve.</p>
                    <button 
                        className="btn-secondary"
                        onClick={() => setSubmitted(false)}
                    >
                        Enviar nova mensagem
                    </button>
                </div>
            ) : (
                <form className='form' onSubmit={handleSubmit}>
                    <div className='grid-cols-3'>
                        <label className='field'>
                            <span>Nome *</span>
                            <input 
                                type="text" 
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                className={errors.nome ? 'error' : ''}
                            />
                            {errors.nome && <span className="error-message">{errors.nome}</span>}
                        </label>

                        <label className='field'>
                            <span>Email *</span>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </label>

                        <label className='field'>
                            <span>Telefone</span>
                            <input 
                                type="tel" 
                                name="telefone"
                                value={formData.telefone}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <label className='field'>
                        <span>Mensagem *</span>
                        <textarea 
                            name="mensagem" 
                            rows={5}
                            value={formData.mensagem}
                            onChange={handleChange}
                            className={errors.mensagem ? 'error' : ''}
                        ></textarea>
                        {errors.mensagem && <span className="error-message">{errors.mensagem}</span>}
                    </label>

                    {errors.submit && <div className="error-message global">{errors.submit}</div>}

                    <button 
                        type="submit" 
                        className='btn-primary'
                        disabled={sending}
                    >
                        {sending ? 'Enviando...' : 'Enviar Mensagem'}
                    </button>
                </form>
            )}

            <ul>
                <li>Email: senai@gmail.com</li>
                <li>Telefone: (71) 92938-3213</li>
                <li>Endereço: Rua A, 123 - Centro - Salvador - Bahia</li>
            </ul>
        </section>
    )
}