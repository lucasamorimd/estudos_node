const express = require('express');

const router = require('./routes/index');

const mustache = require('mustache-express');

const helpers = require('./helpers');

const app = express();

const errorhandler = require('./handlers/errorHandler');

app.use((req, res, next)=>{
    res.locals.h = helpers;
    next();
})
app.use(express.json());
app.use('/', router);
app.use('/posts', router);
app.use(errorhandler.notfound);

app.engine('mst', mustache(__dirname+'/views/partials', '.mst'));
app.set('view engine', 'mst');
app.set('views', __dirname+'/views');

module.exports = app;