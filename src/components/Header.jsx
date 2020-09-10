import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { logoutUsuario } from '../actions';
import gravatar from '../utils/gravatar';
import className from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/images/logo-platzi-video-BW2.png';
import userIcon from '../assets/images/user-icon.png';

import '../assets/styles/components/Header.scss';

const Header = (props) => {

    const { user, isLogin, isRegister } = props;

    const existUser = Object.keys(user).length > 0;

    const handleLogout = () => {
        props.logoutUsuario({});
    }

    const headerClass = className('header', {
        isLogin, isRegister
    });

    return (
        <header className={headerClass}>
            <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Video" />
            </Link>

            <div className="header__menu">
                <div className="header__menu--profile">
                    {
                        existUser ?
                            <img src={gravatar(user.email)} />
                            :
                            <img src={userIcon} alt="" />
                    }
                    <p>Perfil</p>
                </div>
                <ul>
                    {
                        existUser ?
                            (
                                <Fragment>
                                    <li><a href="/">{user.name}</a></li>
                                    <li><a href="#logout" onClick={handleLogout}>Cerrar sesión</a></li>
                                </Fragment>
                            )
                            :
                            (
                                <li>
                                    <Link to="/login">
                                        Iniciar sesión
                                </Link>
                                </li>
                            )
                    }
                </ul>
            </div>
        </header>
    )
}

Header.propTypes = {
    user: PropTypes.object,
    isLogin: PropTypes.bool,
    isRegister: PropTypes.bool,
    logoutUsuario: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = {
    logoutUsuario,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
