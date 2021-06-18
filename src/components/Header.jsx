import React from 'react'
import '../assets/styles/components/Header.scss'

const Header = () => (
    <header className="header">
        <img className= "header__img" src="images/logo-platzi-video.png" alt="Logo Platzi logo-platzi-video"/>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src="images/user-icon.png" alt="User icon"/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>
)

export default Header