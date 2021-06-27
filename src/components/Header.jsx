import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import gravatar from '../utils/gravatar'
import { logoutRequest } from '../actions'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video.png'
import userIcon from '../assets/static/user-icon.png'

const Header = props => {
    const { user, isLogin, isRegister } = props
    // como user es un objeto no puedo aplicarle .length directamente, usando 
    // object.key(objeto) puedo saber cuantos elementos tiene un objeto
    const hasUser = Object.keys(user).length > 0

    const handleLogout = event => {
        props.logoutRequest({})
    }
    const headerClass = classNames('header', {
        isLogin,
        isRegister
    })
    return (
        <header className={headerClass}>
            <Link to="/">
                <img className= "header__img" src={logo} alt="Logo Platzi logo-platzi-video"/>
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {hasUser ?
                        <img src={gravatar(user.email)} alt={user.email} /> :
                        <img src={userIcon} alt="User icon"/>
                    }
                    <p>Perfil</p>
                </div>
                <ul>
                    {hasUser ?
                        <li><a href="/">{user.name}</a></li>
                        : null
                    }
                    {hasUser ?
                        <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li>
                        :
                        <li>
                            <Link to="/login">
                                Iniciar Sesión
                            </Link>
                        </li>
                    }
                </ul>
            </div>
        </header>
    )
}

Header.propTypes = {
    user: PropTypes.object.isRequired,
    logoutRequest: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)