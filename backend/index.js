const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes');


const requestLogger = (req, res, next) => {
    console.log('---');
    console.log('METHOD', req.method);
    console.log('URL', req.url);
    console.log('body', req.body);

    next();
}

const config = {
    URL: 'mongodb://localhost:27017/tasks',
    options : {}
};

mongoose
    .connect(config.URL, config.options)
    .then(() => console.log('connected successfully.'))
    .catch(e => console.error(e.message));

const PORT = process.env.PORT || 3001;
const MSG = `running on localhost:${PORT}`;

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.use('/tasks', router);

app.listen(PORT, () => console.log(MSG));