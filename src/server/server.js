import express from 'express';

const app = express();

app.get('*', (request, response) => {
    response.send({ hello: 'express' });
});

app.listen(3000, (error) => {
    if (error) console.log(error);
    else console.log('Server running on port 3000');
});