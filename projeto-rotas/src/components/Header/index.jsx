import './style.css';
import { Link, NavLink } from 'react-router-dom';

export function Header() {
    return (
        <header className="header">
            <div className='header__logo'>
                <Link to='/'>
                    <span className="pharmacy-icon">💊</span>
                    <span className="pharmacy-name">PharmaCare Plus</span>
                </Link>
            </div>
            <nav className='nav'>
                <NavLink to="/">Início</NavLink>
                <NavLink to="/medicamentos">Medicamentos</NavLink>
                <NavLink to="/sobre">Nossa Farmácia</NavLink>
                <NavLink to="/contato">Atendimento</NavLink>
            </nav>
        </header>
    );
}
export default Header;