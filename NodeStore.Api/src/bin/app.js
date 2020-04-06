'use strict'

const express = require('express');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res, next) {
    res.status(200).send({
        title: 'Node Store API',
        version: '0.0.1'
    }); 
});

module.exports = app;