import React from 'react';
import Logo from './assets/Logo.svg';
const Header = () => {
    return(
        <header>
            <img src={Logo} alt='this is the restaurant logo'></img>
        </header>
    )
}

export default Header;