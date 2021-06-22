import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/LoginRegister.scss'

const Register = () => (
    <section className="register sesion__main">
        <section className="register__container">
            <h2>Regístrate</h2>
            <form className="register__container--form">
                <input className="sesion__input" type="text" placeholder="Nombre" />
                <input className="sesion__input" type="email" placeholder="Correo"/>
                <input className="sesion__input" type="password" placeholder="Contraseña" />
                <button className="button">Registrarme</button>
            </form>
            <Link to="/login">
                Iniciar Sesión
            </Link>
        </section>
    </section>
)

export default Register