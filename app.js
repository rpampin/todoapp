var path = require('path');
const cors = require('cors');
var logger = require('morgan');
var express = require('express');
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');
var todosRouter = require('./routes/todos');

var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/', indexRouter);
app.use('/todos', todosRouter);
app.use(function(req, res){
  res.send(404);
});

const MONGODB = process.env.MONGODB || 'mongodb://127.0.0.1:27017/todos';
mongoose.connect(MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', function () {
  console.log("MongoDB database connection established successfully");
});

module.exports = app;
