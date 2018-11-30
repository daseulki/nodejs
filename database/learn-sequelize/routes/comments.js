const express= require('express');
const router = express.Router();

var { User, Comment } = require('../models')

router.get('/:id',(req,res,next)=>{
    Comment.findAll({
        include: {
            model: User,
            where: { id: req.params.id },
        }
    })  
    .then((comments) => {
      res.json(comments);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    })
})

router.patch('/:id',(req,res,next) => {
    Comment.update({
        comment : req.body.comment,
    }, {
        where: { id: req.params.id },
    })
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        })
});

router.delete('/:id',(req,res,next) => {
    Comment.destroy({
        where: { id: req.params.id },
    })
    .then((result) => {
        console.log(result);
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        next(err);
    })
});

router.post('/',(req,res,next) => {
    Comment.create({
        commenter: req.body.id,
        comment: req.body.comment,
    })
    .then((comments) => {
        res.json(comments);
      })
      .catch((err) => {
        console.error(err);
        next(err);
      })
});


module.exports = router;