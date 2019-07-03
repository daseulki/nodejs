### 웹소켓 
## 양방향 실시간 통신

***

# 모듈 필요 모듈 설치.. 
```shell 
npm i connect-flash cookie-parser dotenv express express-session morgan ejs

npm i -D nodemon

npm i ws 
//npm i socket.io 는 나중에 어려워서.. 
```
# view를 그냥 html로 쓰고 싶을때 

```javascript

/*app.js*/

app.set('views', path.join(__dirname , 'views'));
app.engine('html', require('ejs').renderFile)
app.set('view engine','html');

```

***

1. HTTP와 WS 는 포트를 공유해서 따로 포트를 연결할 필요 없음 
2. ws는 실시간 통신이라 res가 따로 없음 
3.  req.headers['x-forwarded-for'] : 프록시 거치기 전의 아이피 ,
 req.connection.remoteAddress : 최종아이피 
4. ws 상태 : ws.OPEN ws.CONNECTING, ws.CLOSING, ws.CLOSED
5. [웹소켓참고링크](https://niceman.tistory.com/109) ==> 클라이언트 구분하기 어렵다 
6. [socket.io]() ==> web socket 기반으로 클라이언트 구분하는 기능까지 구현.. 


***

# Socket.io 사용하기 
 - websocket 기반으로 클라이언트 구분이 가능.. 함 써봐.. 

``` javascript 
/* app.js */


```

``` javascript 
/* socket.js */


```

``` javascript 
/* index.html 내부 script로 작성했음*/


```