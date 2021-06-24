import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import googleIcon from '../assets/static/icon-google-plus.png'
import twitterIcon from '../assets/static/icon-twitter.png'
import '../assets/styles/components/LoginRegister.scss'

const Login = () => {
    const [form, setValues] = useState({
        email:'',
    })

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        //preventDefault evita el comportamiento por defecto en los imput 
        //como por ejemplo enviar parametros por url al presionar enter
        event.preventDefault()
        console.log(form)
    }

    return (
        <section className="login sesion__main">
            <section className="login__container">
                <h2>Inicia Sesión</h2>
                <form className="login__container--form" onSubmit={handleSubmit}>
                    <input
                        className="sesion__input"
                        type="email"
                        name="email"
                        placeholder="Correo"
                        onChange={handleInput}
                    />
                    <input
                        className="sesion__input"
                        type="password"
                        name="password"
                        placeholder="Contraseña" 
                        onChange={handleInput}
                    />
                    <button className="button">Iniciar Sesión</button>
                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" name="" id="cbox1" />Recuérdame
                        </label>
                        <a href="/">Olvidé mi Contraseña</a>
                    </div>
                </form>
                <section className="login__container--social-media">
                    <div><img src={googleIcon} alt="Google" />Inicia sesión con Google</div>
                    <div><img src={twitterIcon} alt="Twitter" />Inicia sesión con Twitter</div>
                </section>
                <p className="login__container--register">No tienes ninguna cuenta 
                <Link to="/register">
                    Regístrate
                </Link></p>
            </section>
        </section>
    )
}

export default Login