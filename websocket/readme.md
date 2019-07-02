### 웹소켓 
##양방향 실시간 통신 

```shell 
npm i connect-flash cookie-parser dotenv express express-session morgan

npm i -D nodemon

npm i ws 
//npm i socket.io 는 나중에 어려워서.. 
```
===

1. HTTP와 WS 는 포트를 공유해서 따로 포트를 연결할 필요 없음 
2. ws는 실시간 통신이라 res가 따로 없음 
3.  req.headers['x-forwarded-for'] : 프록시 거치기 전의 아이피 ,
 req.connection.remoteAddress : 최종아이피 
4. ws 상태 : ws.OPEN ws.CONNECTING, ws.CLOSING, ws.CLOSED
5. [웹소켓참고링크](https://niceman.tistory.com/109)
