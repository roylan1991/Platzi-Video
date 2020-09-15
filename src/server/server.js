import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack'

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

app.get('*', (request, response) => {
    console.log('Hola');
    response.send({ hello: 'express' });
});

app.listen(PORT, (error) => {
    if (error) console.log(error);
    else console.log('Server running on port 3000');
});