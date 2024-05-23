
import "../../components/Header/Header.scss"
import Image from "../../assets/logo/InStock-Logo.png"
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="header">
            <div className="header__logo">
                <img className="header__logo-size" src={Image} alt="Logo" />
            </div>
            <ul className="header__list">
                <li  className="header__menu"><Link to="/warehouses">Warehouses</Link></li>
                <li  className="header__menu"><Link to="/inventory">Inventory</Link></li>
            </ul>
       </div> 
    );
}

export default Header;
