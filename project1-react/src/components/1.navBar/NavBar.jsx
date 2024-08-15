import Logo from "../1.1.logo/Logo";
import NavButtons from "../1.2. navButtons/NavButtons";
import React from 'react';
import './navBar.css';

const NavBar = () => {
  return (
    <>
    <nav>
    <Logo/>
    <div className="btns">
    <NavButtons className='darkBtn' type='☾ Dark Mode'/>
    <NavButtons className='favBtn' type='♡ Favourite'/>
    </div>
    </nav>
    </>
  )
}

export default NavBar