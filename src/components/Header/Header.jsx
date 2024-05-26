
import "../../components/Header/Header.scss"
import Image from "../../assets/logo/InStock-Logo.png"
import { Link, useLocation  } from "react-router-dom";

function Header() {
    const location = useLocation();
    const isActiveInventory = location.pathname.includes('inventory');
    const isActiveWarehouse = location.pathname.includes('warehouse');

    return (
        <div className="header">
            <div className="header__logo">
                <Link to="/">
                    <img className="header__logo-size" src={Image} alt="Logo" />
                </Link>
            </div>
            <ul className="header__list">
                <li className={`header__menu ${isActiveWarehouse ? 'active' : ''}`}>
                    <Link to="/" className="header__decor">Warehouses</Link>
                </li>
                <li className={`header__menu ${isActiveInventory ? 'active' : ''}`}>
                    <Link to="/inventory" className="header__decor">Inventory</Link>
                </li>
            </ul>
        </div>
    );
}


export default Header;
