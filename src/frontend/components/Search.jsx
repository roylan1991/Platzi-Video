import React, { useState } from 'react';
import className from 'classnames';
import { connect } from 'react-redux';
import { buscarVideo } from '../actions';
import PropTypes from 'prop-types';

import '../assets/styles/components/Search.scss';

const Search = (props) => {

    const { isHome } = props;

    const inputStyle = className('input', {
        isHome,
    });

    const textoBusquedaVideo = (e) => {
        if (e.target.value === "") {
            props.buscarVideo("null");
        } else {
            props.buscarVideo(e.target.value);
        }
    }

    return (
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <>
                <input type="text" onChange={textoBusquedaVideo} className={inputStyle} placeholder="Buscar..." />
            </>
        </section>
    )
};

Search.propTypes = {
    isHome: PropTypes.bool,
    buscarVideo: PropTypes.func,
};

const mapDispatchToProps = {
    buscarVideo,
};

export default connect(null, mapDispatchToProps)(Search);