const mongoose = require('mongoose')
const { Types : {ObjectId}} = mongoose
const express = require('express')
const Post = require('../models/Post') 
const expressAsyncHandler = require('express-async-handler')
const { isAuth } = require('../auth')
const router = express.Router()
const {validateTodoTitle, validateTodoDescription, validateTodoCategory} = require('../../validator')
const { validationResult, oneOf } = require('express-validator')

router.get('/')
router.post('/write', expressAsyncHandler( async(req,res,next)=>{

    const post = new Post({
        author: req.user._id,
        title: req.user.title,
        description: req.user.description,
        isPrivacy: req.user.isPrivacy,
        createdAt: req.user.createdAt,
        memberMax: req.user.memberMax,
        tag: req.user.tag
    })

    const newPost = await post.save()

    if(!newPost){
        res.status(401).json({code:401, message: "게시글 저장에 실패했습니다."})
      }else{
        res.status(201).json({code: 201, message:"게시글 작성이 완료되었습니다.", newTodo // 팝업ㅇ창에 띄우는용 
      })
    } // 201: created(생성됨)
}))

router.put('/:id', isAuth, expressAsyncHandler(async(req,res,next)=>{
    const post = await Post.findOne({
        author: req.user._id,
        _id: req.params.id
    })

    if(!post){
        res.statue(404).json({code:404, message: '404 not found'})
    }else{
        post.title = req.body.title || post.title
        post.description =req.body.description || post.description
        post.isDone = req.body.isDone || post.isDone

    }
}))

router.delete('/')