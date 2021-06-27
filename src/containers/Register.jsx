import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerRequest } from '../actions'
import Header from '../components/Header'
import '../assets/styles/components/LoginRegister.scss'

const Register = props => {
    const [form, setValues] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.registerRequest(form)
        props.history.push('/')
    }

    return (
        <>
            <Header isRegister />
            <section className="register sesion__main">
                <section className="register__container">
                    <h2>Regístrate</h2>
                    <form className="register__container--form" onSubmit={handleSubmit}>
                        <input
                            className="sesion__input"
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            onChange={handleInput}
                        />
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
                        <button className="button" type="submit" >Registrarme</button>
                    </form>
                    <Link to="/login">
                        Iniciar Sesión
                    </Link>
                </section>
            </section>
        </>
    )
}

const mapDispatchToProps = {
    registerRequest,
}

export default connect(null, mapDispatchToProps)(Register)