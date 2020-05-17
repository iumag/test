const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const roleRouter = require('./routes/roles');
const productRouter = require('./routes/products');
const producerRouter = require('./routes/producers');
const orderRouter = require('./routes/orders');

const bodyParser = require('body-parser');
let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


app.use('/users', usersRouter);
app.use('/roles', roleRouter);
app.use('/products', productRouter);
app.use('/producers', producerRouter);
//app.use('/orders', orderRouter);

module.exports = app;
