import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getVideo } from '../actions';
import NotFound from './NotFound';

import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { match, playing, history } = props;

  const { id } = match.params;
  const existPlaying = Object.keys(playing).length > 0;

  useLayoutEffect(() => {
    document.title = 'Reproducción';
    props.getVideo(id);
  }, []);

  return existPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => history.goBack()}>Regresar</button>
      </div>
    </div>
  ) : <NotFound />;
};

Player.propTypes = {
  id: PropTypes.string,
  getVideo: PropTypes.func,
  playing: PropTypes.object,
};

const mapDispatchToProps = {
  getVideo,
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
