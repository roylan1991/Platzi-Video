import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUsuario } from '../actions';
import googleIcon from '../assets/images/google-icon.png';
import twitterIcon from '../assets/images/twitter-icon.png';
import Header from '../components/Header';

import '../assets/styles/components/Login.scss';

const Login = (props) => {

  useEffect(() => {
    document.title = 'Inicia Sesión';
  }, []);

  const [userForm, setUserForm] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    setUserForm({
      ...userForm, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.loginUsuario(userForm);

    //redirigir al home
    props.history.push('/');
  };

  return (
    <Fragment>
      <Header isLogin />
      <section className='login'>
        <section className='login__container'>
          <h2>Inicia sesión</h2>

          <form className='login__container--form' onSubmit={handleSubmit}>
            <input
              className='input'
              type='text'
              placeholder='Correo'
              name='email'
              onChange={handleInput}
            />
            <input
              className='input'
              type='password'
              placeholder='Contraseña'
              name='password'
              onChange={handleInput}
            />
            <button className='button' type='button'>Iniciar sesión</button>
            <div className='login__container--remember-me'>
              <label htmlFor='cbox1'>
                <input type='checkbox' id='cbox1' value='first_checkbox' />
                Recuérdame
              </label>
              <a href='/'>Olvidé mi contraseña</a>
            </div>
          </form>

          <section className='login__container--social-media'>
            <div>
              <img src={googleIcon} alt='Google Icon' />
              {' '}
              Inicia sesión con Google
            </div>
            <div>
              <img src={twitterIcon} alt='Twitter Icon' />
              {' '}
              Inicia sesión con Twitter
            </div>
          </section>
          <p className='login__container--register'>
            No tienes ninguna cuenta?
            {' '}
            {' '}
            <Link to='/register'>
              Regístrate
            </Link>
          </p>
        </section>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  loginUsuario: PropTypes.func,
};

const mapDispatchToProps = {
  loginUsuario,
};

export default connect(null, mapDispatchToProps)(Login);

