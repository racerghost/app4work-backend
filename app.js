require("dotenv/config"); //para que coja las constiables del fichero de .env
require("./db");            //para que inicialice el fichero de la base de datos
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const companyRouter = require('./routes/company');
const offerRouter = require('./routes/offer');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('trust proxy', 1);
app.use(
  cors({
    origin: ["https://app4work-front.netlify.app"],
  })
);
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);
app.use('/company', companyRouter);
app.use('/offer', offerRouter);
app.use('/auth', authRouter)
  ;

module.exports = app;
