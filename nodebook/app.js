const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
require('dotenv').config();

const indexRouter = require('./routes/index');
// const authRouter = require('./routes/auth');
// const postRouter = require('./routes/post');
// const userRouter = require('./routes/user');
const { sequelize } = require('./models');

const app = express();
sequelize.sync();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 8001);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
  }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session()); //express session보다 아래에 있어야됨 

app.use('/',indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
  });
  
  // error handler
  app.use((err, req, res, next) => {
    // set locals, only pronoviding error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });


app.listen(app.get('port'), () => {
  console.log(process.env.COOKIE_SECRET)
    console.log(`waiting for ${app.get('port')}...`)
})