'use strict'

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const indexRoute = require('../routes/index-route');
const productRoute = require('../routes/product-route');

const app = express();

app.set('port', process.env.PORT || 3000);

mongoose.connect('mongodb+srv://nodestoreapiadmin:Admin123@cluster0-ifhyj.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

app.use(express.json());
app.use(cors());

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;