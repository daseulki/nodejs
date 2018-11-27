# EXPRESS 사용하자 

## express-generator
- express 깔고.. express를 명령어로 사용하려면 설치해야 됨. 

```shell
npm i -g express-generator 
```

- 빠르게 앱을 생성하자.. 명령어 입력하면 appname으로 폴더가 생기고 안에 앱있음 

```shell
express appname view=pug 
//view는 pug말고 다른것도 쓸 수 있음 
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
- 404처리 미들웨어 (얘는 페이지 없는 오류 처리)

```javascript

app.use((req,res,next)=>{
    res.status(404).send('NOT FOUND');
    //express는 writeHead(404) 말고 status(404)
});
```

- 에러 처리 미들웨어 (얘는 모든 에러 처리)

```javascript
/* routes */
//에러 날것 같은 부분은 try catch 해줘야.. 안해주면 서버 망가져벌임 ㅠ 

router.get('/',(req,res,next)=>{
    try {
        throw new Error('서버 고장나랏!! 캬ㅑ컄');
    } catch{
        next(error);
    }
}) 


/* app.js */

app.use((err,req,res)=>{
    console.error(err);
    res.status(500).send('SERVER ERROR');
});
```

- 미들웨어로 네트워크 흐름 제어..(?)
> if문 안에 next 넣으면 서버에 요청에서부터 응답까지 가는 흐름을 조절할 수 있다. 
> res.status(200) 에서 status(200)은 기본값이라서 생략해서 쓸 수 있음.. 다만 express 5버전 부터는 생략이 안될 수 도 있으니 붙여서 쓰는 연습이 필요


## pug 
- html은 변수나 조건문을 못씀.. 한계 극복한 것이 template engine 
- pug는 들여쓰기로 부모자식 태그를 구분.. 들여쓰기는 탭이나 스페이스나 하나로 통일 필요 
- view 폴더에 pug들 있음 멍멍 
- include와 layout 
- [pug 문법](https://pugjs.org/api/getting-strated.html)

## EJS
- html이랑 비슷 
- express 명령어에 view=ejs로 입력 
> 잉.. erb랑 똑같음  
> <%=  var %>
> <% for (i in array) { .. } %>

- ejs보다 nunjucks가 더 좋음 .. 