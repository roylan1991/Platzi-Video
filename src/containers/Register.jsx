import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { registrarUsuario } from '../actions'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import PropTypes from 'prop-types';

import '../assets/styles/components/Register.scss';

const Register = (props) => {

    useEffect(() => {
        document.title = "Registro";
    }, []);

    const [userForm, setUserForm] = useState({
        email: "",
        name: "",
        password: "password",
    });

    const handleInput = (e) => {
        setUserForm({
            ...userForm, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.registrarUsuario(userForm);

        props.history.push("/");

        e.target.reset();
    }

    return (
        <Fragment>
            <Header isRegister />
            <section className="register">
                <section className="register__container">
                    <h2>Regístrate</h2>
                    <form className="register__container--form" onSubmit={handleSubmit}>
                        <input
                            className="input"
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            onChange={handleInput}
                        />
                        <input
                            className="input"
                            type="text"
                            placeholder="Correo"
                            name="email"
                            onChange={handleInput}
                        />
                        <input
                            className="input"
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            onChange={handleInput}
                        />
                        <button className="button">Registrarme</button>
                    </form>
                    <Link to="/login">
                        Iniciar sesión
                </Link>
                </section>
            </section>
        </Fragment>
    )
};

Register.propTypes = {
    registrarUsuario: PropTypes.func
};

const mapDispatchToProps = {
    registrarUsuario,
}

export default connect(null, mapDispatchToProps)(Register);
