import './style.css';

export function Footer() {
    return (
        <footer className="footer">
            <div>
                <strong>Contabilidade Simples</strong>
                <br/>
                CNPJ - 12345678/0001-99

            </div>
            <div>
                Rua A, 123 - Centro - Salvador - Bahia 
            </div>
            <div className='copy'>
                &copy; {new Date().getFullYear()} Todos os direitos reservados. 
            </div>
        </footer>
    );
}
export default Footer ;