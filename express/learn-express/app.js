//자동 생성된 app페이지는 app2로 백업. 이 페이지는 공부하기 위해 따라 친 코드

const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

const indexRouter = require('./routes/index'); //index 생략가능 
const userRouter = require('./routes/users')

const app = express();

app.use(logger('dev'));
//logger 사용하면 next 안써도 됨..
//무슨 요청이 왔는지 알기 위해 항상 켜두기 위해 상단에 위치하게 함.  

app.use((req,res,next)=>{ 
    //모든 경우에 작동하는 미들웨어  next를 달아줘야 다음 use로 넘어감! 
    next();
})
app.use((req,res)=>{
   //next 하지않고 res도 안해주면 무한 로딩.. (time out될 때까지)
}) 

app.use(express.static(path.join(__dirname, 'public')));
//폴더안에 들어있는 정적 파일 가져옴.. 얘도 next 안함 (pu)

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use(cookieParser());
//어떤 미들 웨어들 간에는 순서가 중요할 때도 있음 

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'secret code',
    cookie:{
        httpOnly: true,
        secure: false
    },
}));
//메모리 세션 활성화.. 옵션 넣을 수 있음 

app.use(flash());
//로그인 실패하거나.. 1회용 팝업메세지 

app.use('/', indexRouter)


module.exports = app;