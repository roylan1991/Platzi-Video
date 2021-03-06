import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { getVideo } from '../actions';
import NotFound from './NotFound';
import PropTypes from 'prop-types';
//import { Redirect } from 'react-router-dom';
//<Redirect to="/404/" />

import '../assets/styles/components/Player.scss';

const Player = (props) => {

    const { id } = props.match.params;
    const existPlaying = Object.keys(props.playing).length > 0;

    //Funciona igual que useEffect pero renderiza de forma asíncrona.
    useLayoutEffect(() => {
        document.title = "Reproducción";
        props.getVideo(id);
    }, []);

    return existPlaying ? (
        <div className="Player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4" />
            </video>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()}>Regresar</button>
            </div>
        </div>
    ) : <NotFound />
};

Player.propTypes = {
    id: PropTypes.string,
    getVideo: PropTypes.func,   
    playing: PropTypes.object
};

const mapDispatchToProps = {
    getVideo,   
};

const mapStateToProps = (state) => {
    return {
        playing: state.playing
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
