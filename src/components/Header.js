import { MenuOutlined,Close } from "@material-ui/icons";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import moon from './assets/moon.png';
import './styles/Header.css'
const Header = () => {
    const [active,setActive] = useState(false)
    const showUl = () =>{
        setActive(!active)
    }
    return ( 
        <div className="header">
            <div className="header__logo">
                <img src={moon} alt=""/>
            </div>


            <div className="menu__icon">
                <MenuOutlined className="menu" onClick={showUl}/>
            </div>


            

            <nav>
                <ul className={active ? 'list__items active': 'list__items'}>

                <div className="close__icon">
                    <Close className='close' onClick={showUl}/>
                </div>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>Designs</Link>
                    </li>
                    <li>
                        <Link to='/'>Works</Link>
                    </li>
                    <li>
                        <Link to='/'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Header;