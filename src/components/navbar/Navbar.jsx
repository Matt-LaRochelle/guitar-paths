import React, {useState} from 'react';
import styles from './Navbar.module.css';
import {AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    return (
        <header className={styles.navbar}>
            <Link to="/" ><img className={styles.image} src={Logo} alt="/" /></Link>
            <nav>
                <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                    <li>
                        <Link to="practice" >Practice tips</Link>
                    </li>
                    <li>
                    <Link to="musicianship" >Musicianship</Link>
                    </li>
                    <li>
                        <Link to="skill" >Skills</Link>
                    </li>
                    <li>
                        <Link to="theory" >Theory</Link>
                    </li>
                    <li>
                        <Link to="login" >Log in</Link>
                    </li>
                    <li>
                        <Link to="queries" ><AiOutlineSearch size={25} style={{marginTop: "6px"}} /></Link>
                    </li>
                    <li>
                        <Link to="profile" ><AiOutlineUser size={25} style={{marginTop: "6px"}} /></Link>
                    </li>
                </ul>
            </nav>
            <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}   
            </div>
        </header>
   );
}

export default Navbar;