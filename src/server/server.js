import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serverRoutes from '../frontend/routes/ServerRoutes.js';
import reducer from '../frontend/reducers/reducers.js';
import initialState from '../frontend/utils/initialState.js';

//busca en el proyecto archivos .env
dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === 'development') {
    console.log('Development config');
    const webpackConfig = require('../../webpack.config');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);
    const serverConfig = { port: PORT, hot: true };

    app.use(webpackDevMiddleware(compiler, serverConfig));
    app.use(webpackHotMiddleware(compiler));
}

const setResponse = (html) => {
    return (`
    <!DOCTYPE html>
    <html>
        <head>
            <title>Platzi Video</title>
            <link href="assets/app.css" rel='stylesheet' type="text/css">
        </head>
        <body> 
            <div id="app">${html}</div>
            <script>
	            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
        <script src = "assets/app.js" type = "text/javascript" ></script>
        </body>
    </html> `
    );
};

const renderApp = (request, response) => {
    const store = createStore(reducer, initialState);
    const preloadedState = store.getState();

    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={request.url} context={{}}>
                {renderRoutes(serverRoutes)}
            </StaticRouter>
        </Provider>
    );

    response.send(setResponse(html, preloadedState));
};

app.get('*', renderApp);

app.listen(PORT, (error) => {
    if (error) console.log(error);
    else console.log('Server running on port 3000');
});