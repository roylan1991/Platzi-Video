import React, { useEffect, Fragment } from 'react';
import Header from '../components/Header';

import '../assets/styles/components/NotFound.scss';

const NotFound = () => {

  useEffect(() => {
    document.title = 'NotFound';
  }, []);

  return (
    <Fragment>
      <Header />

      <section className='error'>
        <div className='error_main'>
          <h1 className='animated pulse'>Error 404</h1>
          <label htmlFor='first-name'>Página no encontrada</label>
        </div>
      </section>
    </Fragment>
  );
};

export default NotFound;
