import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginRequest } from '../actions'
import Header from '../components/Header'
import googleIcon from '../assets/static/icon-google-plus.png'
import twitterIcon from '../assets/static/icon-twitter.png'
import '../assets/styles/components/LoginRegister.scss'

const Login = props => {
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
        // preventDefault evita el comportamiento por defecto en los imput 
        // como por ejemplo enviar parametros por url al presionar enter
        event.preventDefault()
        props.loginRequest(form)
        // histoy se encuentra disponible porque estamos encapsulando nuestra app en
        // el browserRouter y nos permite usar este metodo push para redireccionar la url
        props.history.push('/')
    }

    return (
        <>
            <Header isLogin/>
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
                        <button className="button" type="submit" >Iniciar Sesión</button>
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
        </>
    )
}

const mapDispatchToProps = {
    loginRequest,
}

export default connect(null, mapDispatchToProps)(Login)