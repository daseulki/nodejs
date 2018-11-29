# 데이터베이스 연동하기!! 

## 시퀄라이즈(Sequelize)
- SQL을 SQL문 안쓰고 쉽게 연결하는.. 그런.. 패키지... 
- express를 기반으로.. 뿅 

```shell
express learn-sequelize view=pug

cd learn-sequelize 

npm i 

npm i sequelize mysql2

npm i -g sequelize-cli

sequelize init

```

- 시퀄라이즈에서 왕짱 중요한 파일: models/index.js

- config/config.json에 mysql 설정 입력하고.. (비밀번호나 db이름)

```shell
sequelize db:create 

// 
```

- models에 있는 파일들이 database의 테이블에 1대1 대응하게 됨 ==> 데이터를 미리 저장할 장소를 만드는 것 
> 테이블 이름은 모델이름이 자동으로 복수형으로 바뀐 것  

```javascript
/* user.js */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user',{
    });
};

/* comment.js */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comment',{
    });
};

/* index.js */
db.User = require('./user')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);

```

- models폴더 아래있는 파일들에 테이블 설정.. 
> type: 자료형 (STRING(n), INTEGER, FLOAT, TEXT, DATE, BOOLEAN... )
> allowNull: Null이어도 되는가 
> defaultValue: 기본값
> unique: 고유값 여부 
> comment: 컬럼 설명
> primaryKey: 기본키 여부(id 대체)

- DB끼리 관계 만들기 
```javascript 
/* index.js */

db.User.hasMany(db.Comment,{foreignKey: 'commenter'});
db.Comment.belongsTo(db.User,{foreignKey: 'commenter'});
```

- index랑 app이랑 연결시키기! 

```javascript
/* app.js */

var sequelize = require('./models').sequelize;

//app = express() 아래 싱크시킬것.. 
sequelize.sync();
```

- route 설정하기 
