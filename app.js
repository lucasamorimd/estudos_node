const express = require('express');

const router = require('./routes/index');

const app = express();
app.use('/', router);
app.use('/posts', router);

module.exports = app;