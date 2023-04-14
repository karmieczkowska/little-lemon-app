import Logo from '../../assets/Logo.jpg'

const Header = () => (
    <div className = 'nav-bar'>
        <a className='logo'>
            <img src={Logo} alt="logo" />
        </a>
        <nav>
            <ul>
                <li>
                    <a
                        className={isActive => "nav-link" + (isActive ? " active" : "inactive")}>
                        HOME
                    </a>
                </li>
                <li>
                    <a
                        className={isActive => "nav-link" + (isActive ? " active" : "inactive")}>
                        ABOUT
                    </a>
                </li>
                <li>
                    <a
                        className={isActive => "nav-link" + (isActive ? " active" : "inactive")}>
                        MENU
                    </a>
                </li>
                <li>
                    <a
                        className={isActive => "nav-link" + (isActive ? " active" : "inactive")}>
                        RESERVATIONS
                    </a>
                </li>
                <li>
                    <a
                        className={isActive => "nav-link" + (isActive ? " active" : "inactive")}>
                        ORDER ONLINE
                    </a>
                </li>
                <li>
                    <a
                        className={isActive => "nav-link" + (isActive ? " active" : "inactive")}>
                        LOGIN
                    </a>
                </li>
            </ul>
        </nav>
    </div>
)

export default Header