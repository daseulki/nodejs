# EXPRESS 사용하자 

## express-generator
- express 깔고.. express를 명령어로 사용하려면 설치해야 됨. 

```shell
npm i -g express-generator 
```

- 빠르게 앱을 생성하자.. 명령어 입력하면 appname으로 폴더가 생기고 안에 앱있음 

```shell
express appname view=pug 
```

- 가장 먼저 살펴봐야할 파일은 /bin/www : 포트 넘버 등등 기본적인 설정이 들어있음 

## 미들웨어?? (MiddleWare)
- 추가적으로 이용할 수 있는 서비스를 제공하는 것..  
- 다양한 미들웨어가 있다.. 
- 라우터도 미들웨어! 코드가 길면 보기 싫으니까 라우터로 분리 

```javascript 
const indexRouter = require('./routes/index'); 
//route는 이미 만들어져있어서 이렇게만 써도 됨. index 생략 가능 

app.use("/" indexRouter)
//user는 index대신 user 넣으면 됨 
```