var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors")
const db = require('./config/db')
var app = express();

/* --------------------------- import the require --------------------------- */

const orderApi = require('./routers/api')




app.use(cors({origin:"https://temp.shuhaib.host"}))
db.dbConnect()
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/temp/api',orderApi)
 
/* ----------------------------- error catching ----------------------------- */
app.use(function(req, res, next) {
  next(createError(404));
});
 
app.use(function(err, req, res, next) {
 console.log(err)
});

module.exports = app;
