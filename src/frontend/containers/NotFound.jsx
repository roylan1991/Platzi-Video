import React, { useEffect, Fragment } from 'react';
import Header from '../components/Header';

import '../assets/styles/components/NotFound.scss';

const NotFound = (props) => {

    useEffect(() => {
        document.title = "NotFound";
    }, []);

    return (
        <Fragment>
            <Header/>

            <section className="error">
                <div className="error_main">
                    <h1 className="animated pulse">Error 404</h1>
                    <label>Página no encontrada</label>
                </div>
            </section>
        </Fragment>
    )
}

export default NotFound;
