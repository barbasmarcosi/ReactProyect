import React from 'react';
import './Header.css';
import Logo from '../Logos/logo192.png'    

function Header() {
    
    return (
        <ul className='Header'>
            <li className='LogoLi'><img className='Logo' src={Logo} alt="Logo"/></li>
            <li className='Title'>Municipalidad de Trenque Lauquen</li>
            <li className='About'>Sistema de Gestion de Proyectos</li>
        </ul>
    )
}

export { Header };