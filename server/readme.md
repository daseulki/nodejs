### 서버 구동하기..
> favicon은 타이틀 탭앞에 작은 아이콘.. 크롬에서 보내는거.. 신경 쓰지 말것..

## 쿠키와 세션
> 쿠키는 서버에서 클라이언트로 데이터 전달할때..

<hr>

## REST API란
서버에 자원들..(회원정보, 게시글, 댓글 등..)을 주소를 통해 가져올 때, 주소를 어떻게 구조화할 것인가

> 규칙으로 자원은 명사형이어야 한다..! (실무에서도 사실 철저하게 다 지키기는 어려움..)

* GET
* POST
* PUT
* PATCH
* DELETE

<hr>
##http와 https

https가 암호화통신이라 보안적으로 더 좋다!

요즘은 https로 넘어가는 추세(node에서도 지원)

https 사용하려면 인증서 필요  (letsencrypt -무료인증서인데 발급은 알아서 받아서..)

```
const https = require('https');

//무료인증서를 받았다고 치고..
https.createServer({
    cert: fs.readFileSync('도메인 인증서 경로'),
    key: fs.readFileSync('도메인 비밀키 경로'),
    ca: [
      fs.readFileSync('상위 인증서 경로'),
      fs.readFileSync('상위 인증서 경로'),
      fs.readFileSync('상위 인증서 경로'),
      fs.readFileSync('상위 인증서 경로')
    ]
  },(req,res)=>{
    res.end('https server');
    }).listen(443);

```

아주 최신의 http2는 좀 실험적인 사람만 쓸것(node v.10).. creatSecureServer로..

<hr>
## cluster로 멀티 프로세싱하기
node는 싱글쓰레드지만 cpu가 노는건 참을 수 없어!

클러스터로 cpu가 전부 일하게 만들자
