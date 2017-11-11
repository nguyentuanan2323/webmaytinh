var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var tipsRouter = require('./routes/tips')
var softRouter = require('./routes/software')
var hardwareRouter = require('./routes/hardware')
var networkRouter = require('./routes/network')
var cors=require('./cors');


var app = express();
//connectDB


var mongoose = require('mongoose');
//các option để kết nối vào
let options = {
    user: "tuanan1",
    pass:"tuanan1"
}
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://tuanan1:tuanan1@ds255715.mlab.com:55715/maytinh',
    { useMongoClient: true }).then(
    () => {
        console.log("Kết nối thành công!");
    },
    err => {
        console.log("Không thể kết nối lỗi : " + err);
    }
);





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../dist')));
// app.use(express.static(path.join(__dirname, '../../dist')));
app.use(cors.permission)

// app.use('/', index);
app.use(index);
// app.use('/users', users);
// app.use('/listtip', tipsRouter);
// app.use('/listsoftware', softRouter);
// app.use('/listnetwork', networkRouter);
// app.use('/listhardware', hardwareRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
