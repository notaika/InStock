
import "../../components/Header/Header.scss"
import Image from "../../assets/logo/InStock-Logo.png"
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="header">
            <div className="header__logo">
                <Link to="/">
                <img className="header__logo-size" src={Image} alt="Logo" />
                </Link>
            </div>
            <ul className="header__list">
                <li  className="header__menu"><Link to="/" className="header__decor">Warehouses</Link></li>
                <li  className="header__menu"><Link to="/inventory" className="header__decor">Inventory</Link></li>
            </ul>
       </div> 
    );
}

export default Header;
