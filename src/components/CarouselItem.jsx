import React from 'react';
import { connect } from 'react-redux';
import { addFavorite, delFavorite } from '../actions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import fondo from '../assets/images/fondo-item.jpg';
import playIcon from '../assets/images/play-icon.png';
import plusIcon from '../assets/images/plus-icon.png';
import removeIcon from '../assets/images/remove-icon.png';

import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = (props) => {

    const { id, cover, title, year, contentRating, duration, isList } = props;

    const handleAddFavorite = () => {
        props.addFavorite({ id, cover, title, year, contentRating, duration });
    };

    const handleDelFavorite = (itemId) => {
        props.delFavorite(itemId);
    };

    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title} />
            <div className="carousel-item__details">
                <div>
                    <Link to={`/player/${id}`}>
                        <img className="carousel-item__details--img" src={playIcon} alt="Reproducir" />
                    </Link>
                    {
                        isList ?
                            <img onClick={() => { handleDelFavorite(id) }} className="carousel-item__details--img" src={removeIcon} alt="Eliminar" />
                            : <img onClick={handleAddFavorite} className="carousel-item__details--img" src={plusIcon} alt="Agregar a favoritos" />
                    }
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}min`}</p>
            </div>
        </div>
    )
};

CarouselItem.propTypes = {
    id: PropTypes.number,
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
    addFavorite: PropTypes.func,
    delFavorite: PropTypes.func,
};

const mapDispatchToProps = {
    addFavorite,
    delFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
