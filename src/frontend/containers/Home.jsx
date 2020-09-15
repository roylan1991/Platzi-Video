import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import PropTypes from 'prop-types';

import '../assets/styles/App.scss';

const Home = ({ busqueda, mylist, trends, originals }) => {

    return (
        <Fragment>
            <Header />
            <Search isHome />

            {
                busqueda.length > 0 &&
                (
                    < Categories title="Resultado de la búsqueda">
                        <Carousel>
                            {
                                busqueda.map(item =>
                                    <CarouselItem key={item.id} {...item} isList />
                                )
                            }
                        </Carousel>
                    </Categories>
                )
            }

            {
                mylist.length > 0 &&
                (
                    < Categories title="Favoritos">
                        <Carousel>
                            {
                                mylist.map(item =>
                                    <CarouselItem key={item.id} {...item} isList />
                                )
                            }
                        </Carousel>
                    </Categories>
                )
            }

            {
                trends.length > 0 &&
                (
                    <Categories title="Tendencias">
                        <Carousel>
                            {
                                trends.map(item =>
                                    <CarouselItem key={item.id} {...item} />
                                )
                            }
                        </Carousel>
                    </Categories>
                )
            }

            {
                originals.length > 0 &&
                (
                    <Categories title="Originales de Platzi Video">
                        <Carousel>
                            {
                                originals.map(item =>
                                    <CarouselItem key={item.id} {...item} />
                                )
                            }
                        </Carousel>
                    </Categories>
                )
            }

        </Fragment>
    )
};

Home.propTypes = {
    busqueda: PropTypes.array,
    mylist: PropTypes.array,
    trends: PropTypes.array,
    originals: PropTypes.array
};


const mapStateToProps = (state) => {
    return {
        busqueda: state.busqueda,
        mylist: state.mylist,
        trends: state.trends,
        originals: state.originals,
    };
};

export default connect(mapStateToProps, null)(Home);
