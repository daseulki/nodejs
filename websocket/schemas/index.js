const mongoose = require('mongoose');

const { MONGO_ID, MONGO_PASSWORD, NODE_ENV } = process.env;
const MONGO_URL = `mongodb://${MONGO_ID}:${MONGO_PASSWORD}@localhost:27017/admin`;

module.exports = () => {
    const connect = () => {
        mongoose.connect(MONGO_URL, {
            dbName: 'gifchat',

        }, (error) => {
            if(error) {
                console.log('몽고디비 연결 에러', error);
            } else {
                console.log('몽고디비 연결 성공');
            }
        });

    }
    connect();

    mongoose.connection.on('error',(error) => {
        console.error('몽고디비 연결 에러',error);
        
    });
    mongoose.connection.on('disconnected', () => {
        console.error('')
        console.log('연결을 재시도')
        connect();
    })
    
    require('./chat');
    require('./room');
    require('./map');
}