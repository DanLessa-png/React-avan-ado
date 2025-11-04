import './style.css';

export function FaleConosco(){
    // Prevent crash when submitting: provide a handler
    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder behavior: you can replace this with real submit logic
        alert('Mensagem enviada (simulação) — obrigado pelo contato!');
    }

    return(
        <section className='contato'>
            <h1>Fale Conosco</h1>
            <hr />
            <p>
                Entre em contato conosco para obter mais informações sobre nossos serviços de contabilidade. Nossa equipe está pronta para ajudar você a simplificar a gestão financeira do seu negócio.
            </p>

            <form className='form' onSubmit={handleSubmit}>
                <div className='grid-cols-3'>
                    <label className='field'>
                        <span>Nome</span>
                        <input type="text" name="nome" />
                    </label>

                    <label className='field'>
                        <span>Email</span>
                        <input type="email" name="email" />
                    </label>

                    <label className='field'>
                        <span>Telefone</span>
                        <input type="tel" name="telefone" />
                    </label>
                </div>

                <label className='field'>
                    <span>Mensagem</span>
                    <textarea name="mensagem" rows={5}></textarea>
                </label>

                <button type="submit" className='btn-primary'>Enviar</button>
            </form>

            <ul>
                <li>Email: senai@gmail.com</li>
                <li>Telefone: (71) 92938-3213</li>
                <li>Endereço: Rua A, 123 - Centro - Salvador - Bahia</li>
            </ul>
        </section>
    )
}