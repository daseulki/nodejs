const express = require('express');
const router = express.Router();

const mariadb = require('mariadb');
const pool = mariadb.createPool({host: 'localhost', user:'root', connectionLimit: 5, use: 'mariaDB'});



router.get('/', function(req, res, next) {

    pool.getConnection()
    .then(conn => {
    
      conn.query("use mariaDB")
        .then((result) => {
          console.log(result); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
        })

        .catch(err => {
          //handle error
          conn.end();
        })
        
    }).catch(err => {
      //not connected
    });
    res.send('look at the console');


    // mariadb.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     port: 3000,
    //     database: 'mariaDB',
    // })

    // res.send('db connected');
    //     // .then(conn => {
    //     //     return conn.query('SELECT * from user')
    //     //     .then ((result) => {
    //     //         for (row of result){
    //     //             console.log(row);
    //     //         }
    //     //         res.send('look at the console');            
    //     //     })
            
    //     //     .then (conn.destroy())
    //     //     .catch ((err) => {
    //     //         console.error(err);
    //     //     })
    //     // })
    //     // .catch((err) =>{
    //     //     console.error(err);
    //     // })
    

});


module.exports = router;