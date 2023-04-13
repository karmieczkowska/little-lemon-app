import { Link, NavLink} from 'react-router-dom';
import Logo from '../assets/Logo.jpg'

const Header = () => (
    <div className = 'nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt="logo" />
        </Link>
        <nav>
            <ul>
                <li>
                    <NavLink
                        to="/" //dodać path
                        className={isActive => "nav-link" + (isActive ? " active" : "inactive")}>
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/" //dodać path
                        className={isActive => "nav-link" + (isActive ? " active" : "inactive")}>
                        ABOUT
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/" //dodać path
                        className={isActive => "nav-link" + (isActive ? " active" : "inactive")}>
                        MENU
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/" //dodać path
                        className={isActive => "nav-link" + (isActive ? " active" : "inactive")}>
                        RESERVATIONS
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/" //dodać path
                        className={isActive => "nav-link" + (isActive ? " active" : "inactive")}>
                        ORDER ONLINE
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/" //dodać path
                        className={isActive => "nav-link" + (isActive ? " active" : "inactive")}>
                        LOGIN
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
)

export default Header